const mongoose = require("mongoose");
const miEsquema = mongoose.Schema;

const esquemaCarro = new miEsquema({
    modelo: {
        type: String,
        required: [true, "Por favor registra el nombre del servicio"],
        trim: true,
        maxLength: [120, "El nombre del servicio no debe exceder de 120 caracteres"]
    },
    referencia: {
        type: String,
        required: [true, "Por favor escriba la descripcion del servicio"],
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});
const modeloCarro = mongoose.model('carro', esquemaCarro);
module.exports = modeloCarro;