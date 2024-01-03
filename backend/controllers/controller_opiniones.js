const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Opiniones = require('../models/opiniones')
const ErrorHandler = require("../utils/error_handler");

//crear o modificar una review
exports.newReview = catchAsyncErrors(async (req, res, next) => {
    const Reviews = await Opiniones.find();
    const {comentario } = req.body;

    let isReviewed = false;
    let idReview;

    Reviews.forEach(item => {
        if (item.nombreCliente === req.user.nombre) {
            idReview = item._id
            isReviewed = true
        }
    })

    if (isReviewed == true) {
        let reviewObj = await Opiniones.findById(idReview)

        reviewObj.comentario = comentario,
            reviewObj.numCalificaciones = Reviews.length,
            reviewObj.avatar.public_id = req.user.avatar.public_id,
            reviewObj.avatar.url = req.user.avatar.url
            reviewObj.fechaCreacion = new Date();
        await reviewObj.save({ validateBeforeSave: false });
        res.status(200).json({
            succes: true,
            message: "review actualizado correctamente",
            reviewObj
        })

    } else {
        const review = await Opiniones.create({

            nombreCliente: req.user.nombre,
            avatar: {
                public_id: req.user.avatar.public_id,
                url: req.user.avatar.url
            },
            comentario,
        })
        res.status(201).json({
            succes: true,
            message: "Hemos opinado correctamente",
            review
        })
    }

})
//VER TODAS LAS REVIWS
exports.getReviews = catchAsyncErrors(async (req, res, next) => {
    const reviews = await Opiniones.find();
    if (!reviews) {
        return next(new ErrorHandler("Servicio No encontrado", 404))
    }
    res.status(200).json({
        succes: true,
        cantidad: reviews.length,
        reviews
    })
})
//ELIMINAR REVIEWS
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    try {
        const review = await Opiniones.findById(req.params.id);
        if (!review) {
            return res.status(404).json({
                success: false,
                message: "Esa review no está registrada"
            });
        }
        await review.remove();
        res.status(200).json({
            success: true,
            message: "Review eliminada correctamente"
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
})