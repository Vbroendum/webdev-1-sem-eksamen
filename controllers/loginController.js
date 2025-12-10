const db = require('../models');
const bcrypt = require('bcrypt');

exports.renderLogin = (req, res) => {
    res.render('login', {
        title: 'Login'
    });
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await db.user.findOne({ 
            where: { user_email: email, user_password: password } });

        //Tjekker om bruger findes
        if (!user) {
            return res.status(401).render('login', { 
                title: 'Login', 
                error: 'Ugyldig email eller adgangskode' 
            });
        }

        //Tjekker om adgangskode er korrekt
    //const isPasswordValid = await bcrypt.compare(password, user.user_password);
    // if (!isPasswordValid) {
    //     return res.status(401).render('login', {
    //         title: 'Login',
    //         error: 'Ugyldig email eller adgangskode'
    //     });
    // }

    req.session.user = {
        id: user.id,
        email: user.user_email,
        role_id: user.role_id
    };
    res.redirect('/dashboard');

    } catch (error) {
        console.error('Fejl ved login:', error);
        res.status(500).send('Serverfejl');
    }};






    
    


    
//     const buttons = [
//         { text: 'Admin', link: '/dashboard' },
//         { text: 'RengUser', link: '/serviceplan' },
//     ];
//     res.render('admin/login', { title: 'Login side', buttons });
// };

