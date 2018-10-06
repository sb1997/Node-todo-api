var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
  text:{
    type:String
  },
  completed:{
    type:Boolean
  },
  completedAt:{
    type:Number
  }
});

module.exports={Todo};

// var newTodo=new Todo({
//    text:'hello me'
// });
//
// newTodo.save().then({
//   function(doc){
//     console.log('saved todo',doc);
//   }
// },function(e){
//   console.log('unable to save');
// });
//
