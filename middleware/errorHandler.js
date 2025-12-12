module.exports = {
  notFound: (req, res) => {
    res.status(404).render('404', { title: 'Siden blev ikke fundet' });
  },

  internalError: (err, req, res, next) => {
    console.error('Unhandled error:', err);

    // Skjuller detaljer i produktion
    const safeMessage = process.env.NODE_ENV === 'production' ? 'Der opstod en serverfejl' : err.message;
    res.status(500).render('500', { title: 'Serverfejl', error: safeMessage });
  }
};