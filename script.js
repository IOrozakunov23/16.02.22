document.querySelector('input[type="text"]')
 .addEventListener('focus',function () {
  this.value = "Hello";
 });
 document.querySelector('input[type="text"]')
    .addEventListener('blur', function () {
      this.value = "Bye";
    });

    
