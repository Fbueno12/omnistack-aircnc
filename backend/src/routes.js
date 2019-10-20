const express = require('express');
const multer  = require('multer');
const uploadConfig = require('./config/upload');

const sessionController   = require('./controllers/SessionController');
const spotController      = require('./controllers/SpotController');
const dashboardController = require('./controllers/DashboardController');
const bookingController = require('./controllers/BookingController');
const approvalController = require('./controllers/ApprovalController');
const rejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', sessionController.store);

routes.post('/spots', upload.single('thumbnail'), spotController.store);
routes.get('/spots', spotController.index);

routes.get('/dashboards', dashboardController.show);

routes.post('/spots/:spot_id/bookings', bookingController.store);

routes.post('/bookings/:booking_id/approvals', approvalController.store);
routes.post('/bookings/:booking_id/rejections', rejectionController.store);

module.exports = routes;

// req.query  = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body   = Acessar corpo da requisição (para criação, edição)