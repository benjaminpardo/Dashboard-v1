const { Schema, model, Mongoose } = require('mongoose');
// const User = Mongoose.model('User'),

const Tarea = new Schema({
    // id_usuario: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User', 
    //     required: true
    // },
    id_usuario: { type: String, required: true},
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    
})

module.exports = model('Tarea', Tarea);