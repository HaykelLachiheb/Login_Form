var Input_Text = document.getElementById('Input_Text');
var Btn_Validation = document.getElementById('Btn_Validation');
var Input_Adress = document.getElementById('Input_Adress');



var Warning1 = document.getElementById('Warning1');
var Warning2 = document.getElementById('Warning2');
var Warning3 = document.getElementById('Warning3');
var Warning4 = document.getElementById('Warning4');
var Warning5 = document.getElementById('Warning5');
var Warning6 = document.getElementById('Warning6');


var Show_Psw = document.getElementById('Show_Psw');

var Texxxxxt = document.getElementById('Texxxxxt');


Btn_Validation.onclick = function() {


  var Parggggg = document.getElementById('Parggggg');
  var Parggggg2 = document.getElementById('Parggggg2');
  let arrayAdress = Input_Adress.value.split("@");
  let arrayLast = Parggggg.innerText.split('.');
  

 if (Input_Text.value.length < 8 ) {
    Warning1.style.backgroundColor = "red";
 } 
  

 if ( /\d/.test(Input_Text.value) == false ) {

   
  Warning2.style.backgroundColor = "red";
 } 


 if  (/(?=.*?[a-z]).*/.test(Input_Text.value) == false ) {

   
  Warning3.style.backgroundColor = "red";
 }


 if  (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Input_Text.value) == false ) {

   
  Warning4.style.backgroundColor = "red";
 }



 if  (/(?=.*?[A-Z]).*/.test(Input_Text.value) == false ) {

   
  Warning5.style.backgroundColor = "red";
 }



 if  (/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(Input_Adress.value) == false ) {

   
  Warning6.style.backgroundColor = "red";

  

  

 }

 

 Parggggg.innerText = arrayAdress[1];
 
 

 Parggggg2.innerText = arrayLast[1];

 if(arrayLast[1].type === undefined) {
  
  Warning6.style.backgroundColor = "red";
  

 }

 
 

}




Show_Psw.onclick = function () {
   var x = document.getElementById("Input_Text");
   if (x.type === "password") {
     x.type = "text";
   } else {
     x.type = "password";
   }
 }


