const db = require('../models');
const bcrypt = require('bcrypt');

exports.renderLogin = (req, res) => {
    const buttons = [
        { text: 'Admin', link: '/dashboard' },
        { text: 'RengUser', link: '/serviceplan' },
    ];
    res.render('admin/login', { title: 'Login side', buttons });
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await db.user.findOne({ 
            where: { user_email: email } });

        //Tjekker om bruger findes
        if (!user) {
            return res.status(401).render('admin/login', { 
                title: 'Login', 
                error: 'Ugyldig email eller adgangskode' 
            });
        }

        //Tjekker om adgangskode er korrekt
    const isPasswordValid = await bcrypt.compare(password, user.user_password);
        if (!isPasswordValid) {
             return res.status(401).render('admin/login', {
                 title: 'Login',
                 error: 'Ugyldig email eller adgangskode'
            });
        }
        
        req.session.user = {
            id: user.id,
            email: user.user_email,
            role_id: user.role_id
        };

         req.session.save((err) => {
            if (err) {
                console.error('Session save error:', err);
                return res.status(500).send('Serverfejl');
            }
            
            console.log('Session after save:', req.session);

            if (user.role_id === 1) {
                return res.redirect('/dashboard');
            } else {
                return res.redirect('/serviceplan');
            }
        });

    } catch (error) {
        console.error('Fejl ved login:', error);
        res.status(500).send('Serverfejl');
    }};