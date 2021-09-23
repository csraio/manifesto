


document.addEventListener("keydown", function(e){
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});

//this is preventing the user from right-clicking on the page. when you right-click, nothing happens. 
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);

function fn1() {
    var the_input = document.getElementById("line").value;

    if(the_input == "3733" || the_input=="3,733" || the_input=="3.733") {
        alert("you got it correct!");
    }
}


/*var req = new XMLHttpRequest(); 
var counter_list = [];
    req.onload = function() {

    if(this.readyState === 4 && this.status === 200) {
      counter_list = this.responseText;
    }
 };
req.open("GET", "data.php", true); 
req.send();*/





/*
  var fs = require('fs');
  var csv = require('fast-csv');
  var list = [];
  var counterlist = [];
  //let myData ;
  var read = fs.createReadStream('countdown.txt')
  .pipe(csv())
  .on('data',function(data){  // this function executes once the data has been retrieved
      console.log(data);  // see, data is already an array
      list = data; // so you might not need to do this
  
      for(let i = 0; i < list.length; i++){
         console.log(list[i]);
         counter_list[i] = list[i]
      }
  })
  .on('end', function(data){
      console.log('Read finished');
      
  })
  
  console.log("test");
*/

  

import { readFile } from 'fs';
var counter_list = [];
readFile('countdown.txt', (err, data) => {
    counter_list = data;
  });



//var counter_list = [99,99999,99999];
      var str_counter_0 = counter_list[0];
      var str_counter_1 = counter_list[2];
      var str_counter_2 = counter_list[3];
      var display_str = "";
      var display_div = document.getElementById("display_div_id");
    
      function incrementCount(current_count){
        setInterval(function(){
          // clear count
          while (display_div.hasChildNodes()) {
              display_div.removeChild(display_div.lastChild);
          }
          str_counter_0--;
          if (str_counter_0 < 1) {
            str_counter_0 = 9; // reset count
            str_counter_1--;    // increase next count
          }
          if(str_counter_1 < 00001){
            str_counter_2--;
          }
          display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
          for (var i = 0; i < display_str.length; i++) {
            var new_span = document.createElement('span');
            new_span.className = 'num_tiles';
            new_span.innerText = display_str[i];
            display_div.appendChild(new_span);
          }
        },100);



      }


      
      