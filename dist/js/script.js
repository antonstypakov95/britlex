// const started = document.querySelector('#started'),
//       open = document.querySelector('.open');
      

// started.addEventListener('click', () => {
//     open.classList.add('active');
// });

let started = document.querySelector('#started'),
    menuItem = document.querySelectorAll('.menu__item'),
    open = document.querySelector('.open');

started.onclick = function(e) {
	let open = document.querySelector(".open");
  if(open.classList.contains("active")) {
  	open.classList.remove("active");
  } else {
  	open.classList.add("active");
  }
};
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        open.classList.add('active');
    })
});


$(document).ready(function(){
    $('#form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: 'Enter your E-mail',
                email: 'Invalid E-mail'
            }
        }
    });

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            let hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
});

