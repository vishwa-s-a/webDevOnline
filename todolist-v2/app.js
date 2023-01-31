//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const _=require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true});//extra true thing is for removing deprecation warning
//creating a new schema
const itemsSchema={
  name:String
};

//creating a model(in db language creating a collection)
const Item= mongoose.model("Item",itemsSchema);

//creating mongoose document
const item1=new Item({
  name:"Welcome to your todoList."
});

const item2=new Item({
  name:"Hit the + button to add a new item."
})

const item3=new Item({
  name:"<--Hit this to delete an item."
})
const defaultItems=[item1,item2,item3];

//creating new schema now
const listSchema={
  name:String,
  items:[itemsSchema]// here it represents the array of itemsSchema object

};

const List=mongoose.model("List",listSchema);

app.get("/", function(req, res) {
  Item.find({}, function(err,foundItems){
    if(foundItems.length===0)
    {
      Item.insertMany(defaultItems,function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("Successfully added the items");
      }
      });
      res.redirect("/");//so that it comes back again here and runs the else condition
      // if it is not there then we cannot run else loop and get output in terminal
    }
    else{
      res.render("list", {listTitle:"Today", newListItems: foundItems});
    }
  });

});
//custom routing solution
app.get("/:customListName",function(req,res){
  const customListName=_.capitalize(req.params.customListName);
  List.findOne({name:customListName},function(err,foundList){
    if(!err){
      if(!foundList){
        // here we will create a new list
        const list=new List({
          name:customListName,
          items:defaultItems
        });
      
        list.save();
        // if this below line is not added then we will not render the saved data of new list
        res.redirect("/"+customListName);
      }
      else{
        //Show an existing list
        //console.log("Exists!");
        res.render("list",{listTitle:foundList.name, newListItems:foundList.items});
      }
    }
  });

})

app.post("/", function(req, res){
  // now we will save the items in db
  const itemName = req.body.newItem;
  const listName=req.body.list; 

  const item=new Item({
    name:itemName
  });

  if(listName==="Today"){
    item.save();
    res.redirect("/");//so we again render the page and display the contents of db
  }
  else{
    // now we will find which object has this name and found means we will add the item
    List.findOne({name:listName},function(err,foundList){
      foundList.items.push(item);// here we are just adding the item to array of items present in List collection
      foundList.save();
      res.redirect("/"+listName);
    })
  }
  
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/delete",function(req,res){
  //console.log(req.body.checkbox);
  const checkedItemId=req.body.checkbox;
  const listName=req.body.listName;// this is obtained from the hidden input tag
  // and indicates the list name where we doing delete operation

  if(listName==="Today")
  {
    // now to remove that object using mongoose's findByIdAndRemove() method
    Item.findByIdAndRemove(checkedItemId,function(err){
    if(err)
    {
      console.log(err);
    }
    else{
      console.log("Successfully removed "+checkedItemId);
    }
    });
    res.redirect("/");
  }
  else{
    List.findOneAndUpdate({name:listName},{$pull:{items:{_id:checkedItemId}}},function(err,foundList){
      if(!err){
        res.redirect("/"+listName);
      }
    })
  }
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
