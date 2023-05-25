const mongoose = require('mongoose');
const { isEmail } = require('validator'); //c'est une fonction qui renvoie true ou false .
const bcrypt = require('bcrypt');

//////////////////////////////////////////////////////


//////////////////////////////////////////////////////

const userSchema = new mongoose.Schema(
    {
        
        //////////////////////////////////////
        nom /*name*/: {
            type: String,

            minlength: 3,
            maxlength: 55,
            trim: true
        },
        prenom: {
            type: String,
            //required: true,
            minlength: 3,
            maxlength: 55,
            trim: true
        },
        email: {
            type: String,
            validate: [isEmail],
            lowercase: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            max: 1024,
            minlength: 6
        },
        dateNaissance /*dob */: {
            type: String,
            trim: true
        },
        genre /**gender */: {
            type: String,
            default: ''
        },
        contact: {
            type: String,
            minlength: 8,
            maxlength: 14,
            trim: true
        },

      
        adresse: {
            type: String,
            max: 1024
        },
      
      
        picture: {
            type: String,
            default: './uploads/profil/random-user.jpg' //photo par defaut
        },
        status:{
            type: String,
            max:1024
        }
      

    },
    {
        timestamps: true
    }
);

//fonction avant de sauvegarder dans la bd il faut crypter le password (avec bcrypt)
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(); //permet de generer une serie de caractere pour salé de password
    this.password = await bcrypt.hash(this.password, salt);
    next(); // ce qui veut dire de passer a la suite.
});

//fonction qui permet de désaler le mot de passe pour que quand l'utilisateur va mettre son mot de passe il soit reconnu

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        //permet de comparer le password entrer et le password crypter de la bd
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            //si le mot de passe est vrai on retourne l'utilisateur
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};



const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;