// UserController.js
const db = require('../../models');
const bcrypt = require('bcrypt');

// READ - Viser alle brugere
exports.renderUsers = async (req, res) => {
    try {
        const users = await db.user.findAll({
            attributes: ['id', 'first_name', 'last_name', 'user_email', 'role_id']
        });

        users.forEach(user => {
            user.role_id = user.role_id === 1 ? 'Admin' : 'Rengøringspersonale';
          });

        res.render('admin/users/users', {
            title: 'Brugeroversigt',
            items: users,
            fields: ['first_name', 'user_email', 'role_id'],
            editUrl: '/users/edit-user',
            deleteUrl: '/users'
        });

        } catch (error) {
            console.error('Fejl ved hentning af brugere:', error);
            res.status(500).send('Databasefejl');
        }
};
// RENDER - Viser formular til oprettelse af ny bruger
exports.renderCreateUserForm = async (req, res) => {
    try {
        const stations = await db.station.findAll({
            attributes: ['id', 'station_name', 'station_address']
        });
    res.render('admin/users/new-user', {
        title: 'Opret ny bruger',
        stations
    });
    } catch (error) {
        console.error('Fejl ved hentning af stationer:', error);
        res.status(500).send('Databasefejl');
    }
};

// CREATE - Opretter en ny bruger
exports.createUser = async (req, res) => {
    try {
        const { first_name, last_name, user_email, user_password, role_id, station_ids } = req.body;
        const hashedPassword = await bcrypt.hash(user_password, 10);

        const newUser = await db.user.create({
            first_name,
            last_name,
            user_email,
            user_password: hashedPassword,
            role_id
        });

        if (station_ids && station_ids.length > 0) {
            const stationAssignments = Array.isArray(station_ids) 
                ? station_ids 
                : [station_ids];
            
            for (const stationId of stationAssignments) {
                await db.user_station.create({
                    user_id: newUser.id,
                    station_id: stationId
                });
            }
        }

        res.redirect('/users');
    } catch (error) {
        console.error('Fejl ved oprettelse af bruger:', error);
        res.status(500).send('Databasefejl');
    }
};


// RENDER - Viser formular til redigering af en bruger
exports.renderEditUser = async (req, res) => {
    try {
        const user = await db.user.findByPk(req.params.id, {
            attributes: ['id', 'first_name', 'last_name', 'user_password', 'user_email', 'role_id']
        });

        if (!user) {
            return res.status(404).send('Bruger ikke fundet');
        }

       const stations = await db.station.findAll({
            attributes: ['id', 'station_name', 'station_address']
        });

         const userStations = await db.user_station.findAll({
            where: { user_id: req.params.id },
            attributes: ['station_id']
        });

        const assignedStationIds = userStations.map(us => us.station_id);

        res.render('admin/users/edit-user', {
            title: 'Rediger bruger',
            user,
            stations,
            assignedStationIds
        });
        } catch (error) {
        console.error('Fejl ved hentning af bruger:', error);
        res.status(500).send('Databasefejl');
    }
};

// UPDATE - Opdaterer en eksisterende bruger
exports.editUser = async (req, res) => {
    try {
        const { first_name, last_name, user_email, user_password, role_id, station_ids } = req.body;
        const updateData = { first_name, last_name, user_email, role_id, station_ids };
        
        // Kun hash og opdater password hvis et nyt password er givet
        if (user_password && user_password.trim() !== '') {
            updateData.user_password = await bcrypt.hash(user_password, 10);
        }

        await db.user.update(
            updateData,
            { where: { id: req.params.id } }
        );

        if (station_ids !== undefined) {
            const currentStations = await db.user_station.findAll({
                where: { user_id: req.params.id },
                attributes: ['station_id']
            });

            const currentStationIds = currentStations.map(s => s.station_id.toString());
            const newStationIds = station_ids ? (Array.isArray(station_ids) ? station_ids : [station_ids]) : [];

            const toRemove = currentStationIds.filter(id => !newStationIds.includes(id));
            if (toRemove.length > 0) {
                await db.user_station.destroy({
                    where: { 
                        user_id: req.params.id,
                        station_id: toRemove
                    }
                });
            }

            const toAdd = newStationIds.filter(id => !currentStationIds.includes(id));
            for (const stationId of toAdd) {
                await db.user_station.create({
                    user_id: req.params.id,
                    station_id: stationId
                });
            }

            console.log('Station assignment created:', {
                user_id: req.params.id,
                station_id: station_ids
            });
        }

        res.redirect('/users');

    } catch (error) {
        console.error('Fejl ved opdatering af bruger:', error);
        res.status(500).send('Databasefejl');
    }
};

// DELETE - Sletter en bruger
exports.deleteUser = async (req, res) => {
    try {
       const user = await db.user.findByPk(req.params.id, {
            attributes: ['id', 'first_name', 'last_name', 'user_password', 'user_email', 'role_id']
        });

        if (!user) {
            return res.status(404).send('Bruger ikke fundet');
        }
        
        await db.user.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/users');
    } catch (error) {
        console.error('Fejl ved sletning af bruger:', error);
        res.status(500).send('Databasefejl');
    }
};