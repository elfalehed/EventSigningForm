
var bcrypt = require('bcryptjs');
const post = require("../models/Post ")
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const TOKEN_SECRET = 'sqldklfqlqs545';

/*Selectionner le type de participant (visiteur OU challenger) ET
affecteur le valeur dans l'attribute type (models/user.js)
*/
exports.selectionner_type_participant = async (req,res)=>{

  checkUserExcite=false;

  User.findOne({cin:req.body.cin}).then(response=>{
    if (response){
      checkUserExcite =true;
    }
    else{
      res.send("Participant not found !")
    }
  }).catch(err=>{
    console.log("Participant not found !",err);
    res.status(500).send("Participant not found !",err);
  });


  if (checkUserExcite && 
    (req.body.type.toLowerCase()== "visiteur" ||
     req.body.type.toLowerCase() =="challenger"))
    {
    User.findOneAndUpdate({cin:req.body.cin},{type:req.body.type}).then(response=>{
      if (response){
        res.status(201).send("Update Participant Type successfully !")
      }
      res.status(400).send("Can not ppdate Participant Type !")
    }).catch(err=>{
      console.log("Error while updating type of participant",err);
      res.status(500).send("Error while updating type of participant",err);
    });
  }

}

exports.inscrit_participant = async (req, res) => {
  const { cin,
    FirstName,
    LastName,
    Phone,
    Gender,
    mail,
    password,
    governorate,
    university,
    psw,
    DateOfBirth,
    pay } = req.body
  try {
    const new_user = new user({
      cin,
      FirstName,
      LastName,
      Phone,
      Gender,
      mail,
      password,
      governorate,
      university,
      DateOfBirth,
      pay,
      role: "Participant",
    })
    const searchUser = await user.findOne({
      mail
    });

    if (searchUser) {
      return res.status(500).send({
        msg: "compte déja existe",
        searchUser
      });
    }


    const salt = 10;
    const gensalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(psw, gensalt);
    new_user.password = hashedPassword;


    let result = await new_user.save();

    res.status(200).send({
      user: result,
      msg: "enregistrer avec succes"
    });



  } catch (error) {
    console.log(error);
    res.status(400).send("vous pouvez pas enregistrer utilisteur");
  }
}

exports.login = async (req, res) => {
  // console.log(req.body)
  let exist = await user.findOne({
    mail: req.body.mail
  })
  // console.log(exist);
  try {
    if (!exist) {
      return res.status(400).json({
        message: {
          error: "Email  is incorrect",
        },
      });
    }


    const validPass = await bcrypt.compare(req.body.password, exist.password);

    if (!validPass) {
      return res.status(400).json({
        message: {
          error: "Password is incorrect",
        },
      });
    }
    const payload = {
      _id: exist._id,
      type: exist.role
    };

    const token = jwt.sign(payload, TOKEN_SECRET);

    delete exist.password;
    // fil exist mathamach chomp ismou token 
    exist.token = token;
    console.log(exist.password);
    res.status(200).send({
      user: exist,
      token: token
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      status: false,
      error
    })
  }
}
//ajouter financier
exports.ajouter_financier = async (req, res) => {
  const { cin,
    FirstName,
    LastName,
    Phone,
    Gender,
    mail,
    psw,

  } = req.body
  try {
    const financier = new user({
      cin,
      FirstName,
      LastName,
      Phone,
      Gender,
      mail,
      governorate: null,
      university: null,
      DateOfBirth: null,
      pay: null,
      role: "Financier",

    })
    const searchUser = await user.findOne({
      mail
    });
    if (searchUser) {
      return res.status(500).send({
        msg: "compte déja existe"
      });
    }





    const salt = 10;
    const gensalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(psw, gensalt);
    financier.password = hashedPassword;


    let result = await financier.save();

    res.status(200).send({
      user: result,
      msg: " financier enregistrer avec succes"
    });



  } catch (error) {
    console.log(error);
    res.status(400).send("vous pouvez pas enregistrer financier");
  }
}
exports.ajouter_Ambassadeur = async (req, res) => {
  const { cin,
    FirstName,
    LastName,
    Phone,
    Gender,
    mail,
    psw,
    governorate,
    university,
    DateOfBirth
  } = req.body
  try {
    const financier = new user({
      cin,
      FirstName,
      LastName,
      Phone,
      Gender,
      mail,
      governorate,
      university,
      DateOfBirth,
      pay: null,
      role: "Ambassadeur",

    })
    const searchUser = await user.findOne({
      mail
    });
    if (searchUser) {
      return res.status(500).send({
        msg: "compte déja existe"
      });
    }





    const salt = 10;
    const gensalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(psw, gensalt);
    financier.password = hashedPassword;
    console.log(req.body)
    console.log(financier)
    let result = await financier.save();

    res.status(200).send({
      user: result,
      msg: " ambassadeur enregistrer avec succes"
    });



  } catch (error) {
    console.log(error);
    res.status(400).send("vous pouvez pas enregistrer ambassadeur");
  }
}


exports.affiche_toususers = async (req, res) => {
  let users = await user.find({
    role: "Financier", role: "Ambassadeur", role: "Participant"
  });
  try {
    return res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }
}


exports.affiche_financier = async (req, res) => {
  let users = await user.find({
    role: "Financier"
  });
  try {

    return res.status(200).send(users)

  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }
}


exports.affiche_ambassadeur = async (req, res) => {
  let users = await user.find(
    {
      role: "Ambassadeur"
    });
  try {
    console.log(users)

    return res.status(200).send(users)

  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }


}
exports.affiche_touparticipant = async (req, res) => {
  let users = await user.find({
    role: "Participant"
  });
  try {

    users = users.map(user => ({
      "_id": user._id,
      "governorate": user.governorate,
      "university": user.university,
      // "DateOfBirth":user.DateOfBirth,
      "pay": user.pay,
      // "cin":user.cin,
      "FirstName": user.FirstName,
      "LastName": user.LastName,
      "Phone": user.Phone,
      "Gender": user.Gender,
      "mail": user.mail
    }));

    return res.status(200).send(users)

  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }


}
exports.afficher_user = async (req, res) => {
  let id = req.params.id;
  try {

    let User = await user.findById(id)
    res.status(200).send(User);

  } catch (error) {
    console.log(error)
    res.status(400).send("erreur de trouver user");

  }
};
//ajouter Post
exports.ajout_post = async (req, res) => {


  try {
    const newPost = new post({
      title: req.body.title,
      content: req.body.content,
      link: req.body.link,



    });

    if (req.files.length > 0) {
      req.files.map(file => {

        newPost.feaure_image = "http://127.0.0.1:3000/" + file.path
      })
    } else {
      newPost.feaure_image = 'upload/deafault.jpg'
    }



    const response = await newPost.save();

    await res.status(200).send({
      response: response,
      msg: "post is saved"
    });
    console.log(response)
  } catch (error) {
    res.status(400).send("can not save the post");
    console.log(error)

  }

};
exports.modifier_user = async (req, res) => {

  const {
    id
  } = req.params;

  const users = {
    // cin:req.body.cin,
    // FirstName:req.body.FirstName,
    // LastName:req.body.LastName,
    // Phone:req.body.Phone,
    // Gender:req.body.Gender,
    // mail:req.body.mail,
    // password:req.body.password,
    // governorate:req.body.governorate,
    // university:req.body.university,
    // DateOfBirth:req.body.DateOfBirth,
    pay: req.body.pay,
    //role:req.body.role,

  };


  try {

    const userupdate = await user.findByIdAndUpdate({
      _id: id
    }, {
      ...users
    }, {
      new: true
    });
    return res.status(200).json({
      status: true,
      data: userupdate,
      msg: 'success modification  user '
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      error: "errror de modifier  user"
    });
  }

}
exports.affiche_post = async (req, res) => {
  let Post = await post.find({});
  try {

    return res.status(200).send(Post)

  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }


}

exports.affiche_unepost = async (req, res) => {
  let id = req.params.id;
  let Post = await post.findById(id);
  try {

    return res.status(200).send(Post)

  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }


}

exports.affiche_postlink = async (req, res) => {
  let link = req.params.link;
  let Post = await post.find(link);
  try {

    return res.status(200).send(Post)

  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }


}

exports.update_post = async (req, res, next) => {

  try {
    const id = req.params.id;
    console.log(id)
    const updatepost = {
      title: req.body.title,
      content: req.body.content,
      link: req.body.link,



    }

    if (req.files.length > 0) {
      req.files.map(file => {

        updatepost.feaure_image = "http://127.0.0.1:3000/" + file.path
      })
    }

    const result = await post.findByIdAndUpdate({
      _id: id
    }, {
      ...updatepost
    });

    res.status(200).send({
      user: result,
      msg: "succes"
    })
  } catch (error) {
    res.status(400).send("erreur de l'update");
    console.log(error)
  }
}

exports.deletuser = async (req, res) => {
  try {
    let id = req.params.id
    if (!id) {
      res.status(401).send("user not found")
    }
    await user.findByIdAndDelete({
      _id: id
    })
    res.status(200).send("user succes delete")
  } catch (error) {
    console.log(error)
    res.status(400).send("user de delete")
  }
}
exports.deletepost = async (req, res) => {
  try {
    let id = req.params.id
    if (!id) {
      res.status(401).send("post not found")
    }
    await post.findByIdAndDelete({
      _id: id
    })
    res.status(200).send("post succes delete")
  } catch (error) {
    console.log(error)
    res.status(400).send("post de delete")
  }
}

//Singup controller:
/*
{
  CIN
}
*/



exports.register = async (req, res) => {
  const { type, cin1, cin2, titre } = req.body;
  switch (`${type}`.trim().toLowerCase()) {
    case 'visteur':

      break;
    case 'challenger':
      let result = {
        cin1: true,
        cin2: true
      };
      let isValid = true;
      let userOfCIN1 = await user.findOne({ cin: cin1 });
      if (!userOfCIN1) {
        isValid = false;
        result.cin1 = false;
      }

      if (cin2) {
        let userOfCIN2 = await user.findOne({ cin: cin2 });
        if (!userOfCIN2) {
          isValid = false;
          result.cin2 = false;
        }
      }
      
      if (isValid) {

        


      }

      res.json(result);
      break;

  }
  
}