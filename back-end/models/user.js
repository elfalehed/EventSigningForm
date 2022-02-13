const mongoose =require("mongoose");
const schema =mongoose.Schema


const User=new schema({
    governorate:{
        type:String,
        default:null
    },
    university:{
        type:String,
        default:null
    },
    DateOfBirth :{
        type:String,
        default:null
    },
    pay: {
        type:Boolean,
        default:null
    },
    cin:{
         type:String,
      
        },
    FirstName:{
        type:String,
       
    },
    LastName:{
        type:String,
      
    },
    Phone:{
     type:String,
    
    },
    Gender:{
        type:String,
       
    },
   
    mail:{
        type:String,
        unique:true
        
    },
    password:{
        type:String,
    },
    type:{
        type:String,
        enum:["visiteur","challenger"]
    },
    role:{
     type:String,
     enum:["admin","Financier","Ambassadeur","Participant"]
    },
  
}
  ); 


module.exports=mongoose.model("user",User);

