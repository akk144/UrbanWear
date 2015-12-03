var express = require('express');
var router = express.Router();
var adminController = require('../app/controllers/admin');
var userController = require('../app/controllers/user');
var security = require('../app/middleware');

router.get('/', security.adminAccess, adminController.index);
router.get('/populateSku', security.adminAccess, adminController.populateSku);
router.get('/addSku', security.adminAccess, adminController.addSkuFrm);
router.post('/addSku', security.adminAccess, adminController.addSku);
router.get('/editSkus', security.adminAccess, adminController.editSkuFrm);
router.get('/listSkus', security.adminAccess, adminController.listSkus);
router.get('/list_users', security.adminAccess, userController.listUsers);

module.exports = router;
