const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const joi = require('@hapi/joi');
const User = require('../models/User');
const Tarea = require('../models/Tarea');
const Role = require('../helpers/role');

const schemaRegister = joi.object({
    firstName: joi.string().min(2).max(255).required(),
    lastName: joi.string().min(2).max(255).required(),
    email: joi.string().min(6).max(255).required().email(),
    password: joi.string().min(6).max(1024).required()
})

const schemaTarea = joi.object({
 id_usuario: joi.string().min(2).max(255).required(),
 titulo: joi.string().min(2).max(255).required(),
 descripcion: joi.string().min(2).max(255).required()
})




async function register(req, res) {

    // Validamos que los datos cumplen con la estructura del UserSchema
    const { error } = schemaRegister.validate(req.body)

    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }

    // Validamos que el email no se encuentra en nuestra base de datos
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({ error: 'Email ya registrado' })
    }

    // Encriptamos la contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: password
    })

    // El primer usuario que se registre tendra el rol de Admin
    const isFirstAccount = (await User.countDocuments({})) === 0;
    newUser.role = isFirstAccount ? Role.Admin : Role.User;

    User.create(newUser).then(() => {
        res.status(201).send('Registro exitoso');
    }).catch(error => {
        res.status(400).send({ error });
    })

}






async function nuevaTarea(req, res){

    // Validamos que los datos cumplen con la estructura del TareaSchema
    const { error } = schemaTarea.validate(req.body)

     if (error) {
         return res.status(400).json({ error: error.details[0].message })
     }

    const newTarea = new Tarea({
        id_usuario: req.body.id_usuario,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion
    })

    Tarea.create(newTarea).then(() => {
        res.status(201).send('Tarea registrada con exito');
    }).catch(error => {
        res.status(400).send( 'Error controlador' );
    })
}

async function getTaskById(req, res) {
    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) return res.status(404).send({ error: 'Usuario no encontrado' })
    return res.send(basicDetails(user));
}

 async function getAllTask(req, res) {
     const tareas = await Tarea.find();
     return res.send(tareas.map(tarea => basicDetailsTarea(tarea)));
 }

 async function deleteTarea(req, res) {
    Tarea.findByIdAndDelete(req.params.id)
        .then(() => res.sendStatus(204))
        .catch(error => res.status(400).send({ error }));
}

function basicDetailsTarea(tarea) {
    const { id, id_usuario, titulo, descripcion } = tarea;
    return { id, id_usuario, titulo, descripcion };
}

















const schemaLogin = joi.object({
    email: joi.string().min(6).max(255).required().email(),
    password: joi.string().min(6).max(1024).required()
})

async function login(req, res) {
    // Validamos los datos
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    // Buscamos el usuario en la base de datos
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Contraseña incorrecta' });

    // Se crea el token
    const token = jwt.sign({
        id: user._id
    }, process.env.TOKEN_SECRET);



    res.json({ user, token });
}

module.exports = {
    register,
    login,
    nuevaTarea,
    getAllTask,
    deleteTarea
};