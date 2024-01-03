const mongoose = require("mongoose");
const miEsquema = mongoose.Schema;

const esquemaOpiniones = new miEsquema({
    nombreCliente:{
        type:String,
        required:true
    },
    avatar: {
        public_id: 
        {
            type: String,
            require: true
        },
        url: 
        {
            type: String,
            require: true
        }
    },
    comentario:{
        type:String,
        required:true,
        maxLength: [170, "El comentario tiene un limite de 170 caracteres"]
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Opiniones", esquemaOpiniones)