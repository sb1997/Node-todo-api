var mongoose=require('mongoose');

var User=mongoose.model('User',{
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
});

module.exports={User};

// var user = new User({
//   email:'sb@g.com'
// });
//
// user.save().then(function(doc){
//   console.log(doc);
// },function(e){
//   console.log('unable to save',e);
// });
