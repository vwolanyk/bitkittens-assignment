document.addEventListener("DOMContentLoaded", function(){

var hereKittyKitty = document.querySelector(".summon-cats")

hereKittyKitty.addEventListener('click', function(){
console.log("Here Kitty Kitty....");
var number = "number"
var amount = 5
$.ajax({
  url: 'http://bitkittens.herokuapp.com/cats.json',
  method: 'GET',
  data: {number: amount},
  dataType: 'JSON'

}).done(function(responsedata){
  console.log(responsedata);
  var cats = responsedata["cats"];
  var boxes = document.querySelectorAll(".cat-box")
  cats.forEach(function(cat,index){
    var catPic = document.createElement("img");
    catPic.src = cat.photo;
    catPic.alt = cat.name;
    boxes[index].innerHTML = "";
    boxes[index].append(catPic);


  })

})

})

  //End of DOM LIstener
})
