// document.querySelector('input[type="text"]')
//   .addEventListener('focus', function () {
//     this.className = "";
//   });
// document.querySelector('input[type="text"]')
//   .addEventListener('blur', function () {
//     if (!this.value) {
//       this.className = "bad";
//     }
//     else {
//       this.className = "good";
//     }
//   });

// document.querySelector('input[type="text"]')
//   .addEventListener('change', function () {
//     // alert('Changed');
//   });

// document.querySelector('input[type="checkbox"]')
//   .addEventListener('change', function () {
//     if (this.checked) {
//       // alert('You are employed');
//     }
//     else {
//       // alert('You are unemployed');
//     }
//   });

// document.querySelector('select')
//   .addEventListener('input', function () {
//     if (this.value == 'Bishkek') {
//       alert('Chui');
//     }
//     else if (this.value == 'Karakol') {
//       alert('Issyk-Kul');
//     }
//     else if (this.value == 'Osh') {
//       alert('Osh');
//     }
//     else if (this.value == 'Jalal-abad') {
//       alert('Jalal-abad');
//     }
//     else if (this.value == 'Naryn') {
//       alert('Naryn');
//     }
//     else if (this.value == 'Talas') {
//       alert('Talas');
//     }
//     else if (this.value == 'Batken') {
//       alert('Batken');
//     }
//   });


// document.querySelector('input[type="text"]')
//   .addEventListener('copy', function () {
//     console.log('copy triggered');
//   });
// document.querySelector('input[type="text"]')
//   .addEventListener('cut', function () {
//     console.log('cut triggered');
//   });
// document.querySelector('input[type="text"]')
//   .addEventListener('paste', function (event) {
//     event.preventDefault();
//     console.log('paste triggered');
//   });


// let radios = document.getElementsByName('gender');

// document.querySelector('form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     alert(`${document.querySelector('input[type="radio"]:checked').nextSibling.textContent} was selected`);
//   });

// radios.forEach(function(radio) {
//   radio.addEventListener('input', function() {
//   });
// });
  

let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function () {
  h1.textContent = this.value;
});

// let input = document.querySelector('#color') 

document.querySelector('#color').addEventListener('input', function () {
  h1.style.color = this.value;
});
document.querySelector('#background').addEventListener('input', function () {
  h1.style.backgroundColor = this.value;
});


// document.querySelector('#font') 
// .addEventListener('select', function() { 
// h1.style.fontFamily = this.value ; 

// switch (this.value) { 
//   case "Arial" : 
//     h1.style.fontFamily = "Arial"; 
//     break; 
//     case "Times" : 
//     h1.style.fontFamily = "Times"; 
//     break; 
//     case "Impact" : 
//     h1.style.fontFamily = "impact"; 
//     break; 
//     case "Verdana" : 
//     h1.style.fontFamily = "Verdana"; 
//     break; 
//   default; 
//     break; 
// } 

// }); 

let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function () {
  h1.textContent = this.value;
});

// let input = document.querySelector('#color') 

document.querySelector('#color').addEventListener('input', function () {
  h1.style.color = this.value;
});
document.querySelector('#background').addEventListener('input', function () {
  h1.style.backgroundColor = this.value;
});


// document.querySelector('#font') 
// .addEventListener('select', function() { 
// h1.style.fontFamily = this.value ; 

// switch (this.value) { 
//   case "Arial" : 
//     h1.style.fontFamily = "Arial"; 
//     break; 
//     case "Times" : 
//     h1.style.fontFamily = "Times"; 
//     break; 
//     case "Impact" : 
//     h1.style.fontFamily = "impact"; 
//     break; 
//     case "Verdana" : 
//     h1.style.fontFamily = "Verdana"; 
//     break; 
//   default; 
//     break; 
// } 

// }); 

document.querySelector('#font-size').addEventListener('input', function () {
  h1.style.fontSize = this.value + "px";
  this.nextSibling.textContent = h1.style.fontSize;
});