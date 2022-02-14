const mongoose =require("mongoose");
const schema =mongoose.Schema


const Post=new schema({
  
    title:{
     type:String,
    
    },
    feaure_image:{
        type:String,
       
    },
   
    content:{
        type:String,
        unique:true
        
    },
    link:{
        type:String,
       
    },
},
{
    timestamps: true,
  }
  ); 


  module.exports=mongoose.model("post",Post);

