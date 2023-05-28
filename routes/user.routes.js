const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
//////////////////////

const mongoose = require("mongoose");
const formidable = require("formidable");

const imageSchema = new mongoose.Schema({
    userId: String,
    path: String,
  });

  const ImageModel = mongoose.model("Image", imageSchema);

router.post("/upload", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(400).send("Error uploading image");
    } else {
        console.log(files);
      const userId = fields.userId;
      const file = files.file;
      //const fileName = file.originalFilename;
      //const fileType = file.type;
      //const filePath = file.path;

      // Vérification que le fichier est une image
      if (!fileType.startsWith("image/")) {
        res.status(400).send("Invalid file type. Only images are allowed.");
      } else {
        // Déplacer le fichier téléchargé vers un dossier spécifique
        const targetPath = __dirname + "/../client/public/uploads/profil/" + fileName;
        fs.rename(filePath, targetPath, (err) => {
          if (err) {
            res.status(400).send("Error uploading image");
          } else {
            const image = new ImageModel({ userId, path: targetPath });
            image.save((err) => {
              if (err) {
                res.status(400).send("Error uploading image");
              } else {
                res.status(200).send("Image uploaded successfully");
              }
            });
          }
        });
      }
    }
  });
});
  
//////////////////////
router.post("/register", authController.signUp); //pour ajouter un utilisateur
router.post("/registerAdmin", authController.signUp);
router.post("/login",authController.signIn);
router.get("/logout",authController.logout);



router.get('/', userController.getAllUsers); //donner tous les utilisateurs
router.get('/:id', userController.userInfo); //donner les information d'un utilisateur a partir de son id
router.put('/:id', userController.updateUser); //mettre a jour un utilisateur
router.delete('/:id', userController.deleteUser); //supprimer un utilisateur

//router.post('/upload', uploadController.uploadProfil);


module.exports=router; 