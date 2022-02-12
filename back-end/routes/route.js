const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
const validator = require("../midalwares/validator")
const multer = require("multer");
const { userMidalware, adminMidalware } = require("../midalwares/jwt_validate");

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





router.post("/login", controllers.login);
router.post("/inscrit_participant", controllers.inscrit_participant);
router.post("/ajouter_financier", adminMidalware, controllers.ajouter_financier);
router.post("/ajouter_Ambassadeur", adminMidalware, controllers.ajouter_Ambassadeur);
router.post("/ajout_post", adminMidalware, upload.any('image'), controllers.ajout_post);

router.put("/modifier_user/:id", adminMidalware, controllers.modifier_user);
router.put("/modifier_post", adminMidalware, upload.any('image'), controllers.update_post);

router.get("/afficher_users", adminMidalware, controllers.affiche_toususers);
router.get("/afficher_participant", controllers.affiche_touparticipant);
router.get("/afficher_ambassadeur", controllers.affiche_ambassadeur);
router.get("/afficher_financier", controllers.affiche_financier);
router.get("/afficher_touspost", controllers.affiche_post);
router.get("/afficher_uneposte/:id", controllers.affiche_unepost);
router.get("/afficher_seuluser/:id", controllers.afficher_user);
router.get("/afficher_seulpost/:link", controllers.affiche_postlink);

router.post("/delete_user/:id", adminMidalware, controllers.deletuser);
router.post("/delete_post", adminMidalware, controllers.deletepost);
router.post("/register", userMidalware, controllers.register);



module.exports = router; 