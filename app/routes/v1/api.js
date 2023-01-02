const express = require('express');
const weatherController = require('../../controllers/weather');  

const router = new express.Router();

router.get('/weathers', weatherController.index);
router.get('/weathers/:city', weatherController.show);

router.delete('/weathers/:city', weatherController.delete);
router.put('/weathers/:city', weatherController.update);
router.post('/weathers', weatherController.store);





module.exports = router;