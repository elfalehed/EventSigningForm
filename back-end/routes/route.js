const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
const validator = require("../midalwares/validator")
const multer = require("multer");
const { userMidalware, adminMidalware,participantMidalware } = require("../midalwares/jwt_validate");

const storage = multer.diskStorage({

    destination: function (req, file, callback) {
        callback(null, './uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,

})



//Auth Routes :
router.post("/register", userMidalware, controllers.register);
router.post("/login", controllers.login);

//Post Routes :
router.post("/inscrit_participant", controllers.inscrit_participant);
router.post("/selectionner_type_participant",participantMidalware,controllers.selectionner_type_participant)
router.post("/ajouter_financier", adminMidalware, controllers.ajouter_financier);
router.post("/ajouter_Ambassadeur", adminMidalware, controllers.ajouter_Ambassadeur);
router.post("/ajout_post", adminMidalware, upload.any('image'), controllers.ajout_post);

//Update Routes :
router.put("/modifier_user/:id", adminMidalware, controllers.modifier_user);
router.put("/modifier_post", adminMidalware, upload.any('image'), controllers.update_post);

//Get/Display Routes :
router.get("/afficher_users", adminMidalware, controllers.affiche_toususers);
router.get("/afficher_participant", controllers.affiche_touparticipant);
router.get("/afficher_ambassadeur", controllers.affiche_ambassadeur);
router.get("/afficher_financier", controllers.affiche_financier);
router.get("/afficher_touspost", controllers.affiche_post);
router.get("/afficher_uneposte/:id", controllers.affiche_unepost);
router.get("/afficher_seuluser/:id", controllers.afficher_user);
router.get("/afficher_seulpost/:link", controllers.affiche_postlink);

//Delete Routes :
router.delete("/delete_user/:id", adminMidalware, controllers.deletuser);
router.delete("/delete_post", adminMidalware, controllers.deletepost);

module.exports = router; 