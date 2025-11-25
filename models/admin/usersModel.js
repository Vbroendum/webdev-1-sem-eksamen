const db = require('../../config/database');
const bcrypt = require('bcrypt');

exports.getAllUsers = async () => {
    try {
        const query = `
            SELECT 
                user_id,
                first_name,
                last_name,
                user_email,
                role_id
            FROM users
        `;
        
        const [users] = await db.query(query);
        
        return users.map(user => ({
            ...user,
            name: `${user.first_name} ${user.last_name}`,
            role: user.role_id === 1 ? 'Admin' : 'Rengøringspersonale'
        }));
    } catch (error) {
        console.error('Fejl ved hentning af brugere:', error);
        throw error;
    }
};

exports.CreateUser = async (userData) => {
    try {
        console.log('Opretter bruger med data i model:', userData);
        const hashedPassword = await bcrypt.hash(userData.user_password, 10);

        const query = `
            INSERT INTO users (first_name, last_name, user_email, user_password, role_id)
            VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.query(query, [
            userData.first_name,
            userData.last_name,
            userData.user_email,
            hashedPassword,
            userData.role_id
        ]);

        return {
            user_id: result.insertId,
            first_name: userData.first_name,
            last_name: userData.last_name,
            user_email: userData.user_email,
            role_id: userData.role_id
        };
    } catch (error) {
        console.error('Fejl ved oprettelse af bruger:', error);
        throw error;
    }
};