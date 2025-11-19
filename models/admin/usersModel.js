db = require('../../config/database'); 

exports.getAllUsers = async () => {
    try {
        const [users] = await db.query('CALL GetAllUsers()');
        
        const userData = users[0];
        // Combine first_name and last_name, and map role_id to role name
        userData.forEach(user => {
            user.name = `${user.first_name} ${user.last_name}`;
            if (user.role_id === 1) {
                user.role = 'Admin';
            } else {
                user.role = 'Rengøringspersonale';
            }
        });
        console.log(userData);
        
        return userData;
    } catch (error) {
        console.error('Fejl ved hentning af brugere:', error);
        throw error;
    }
};

exports.deleteUserById //Sletning af bruger