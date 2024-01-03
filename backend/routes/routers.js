const express=require('express')
const router = express.Router();

const rutaServicio=require('./route_service');
router.use("/services",rutaServicio);

const rutaUsuario=require('./route_auth');
router.use("/user",rutaUsuario);

const rutaPreinscripcion=require('./route_preinscription');
router.use("/preinscription",rutaPreinscripcion);

const rutaReview=require('./route_reviews');
router.use("/review", rutaReview)

module.exports=router;