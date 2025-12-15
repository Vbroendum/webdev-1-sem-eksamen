// routes/verifyRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/serviceplan/verify/:uuid', async (req, res) => {
  const { uuid } = req.params;

  // Find link
  const link = await db.onetime_link.findOne({ where: { uuid } });
  if (!link) return res.status(400).send("Ugyldigt link");
  if (link.is_used) return res.status(400).send("Linket er allerede brugt");
  if (link.expiresAt < new Date()) return res.status(400).send("Linket er udløbet");

  // Marker link som brugt
  link.is_used = true;
  await link.save();

  // Hent serviceplan inkl. billeder
  const plan = await db.serviceplan.findByPk(link.serviceplan_id, {
    include: [
      { model: db.image, as: 'images', attributes: ['filepath', 'is_after'] }
    ]
  });

  if (!plan) return res.status(404).send("Serviceplan ikke fundet");

  // Render view
  res.render('users/serviceplan_view', {
    title: `Serviceplan #${plan.id}`,
    images: plan.images
  });
});

module.exports = router;