var  typed = new Typed(".multiple-text",{
     strings:["Full Stack Developer", "Creater", "Youtuber"],
     typeSpeed:100,
     backSpeed:100,
     backDelay:1000,
     loop:true

})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          console.log('Target ID:', targetId); // Debug log
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
               console.log('Target Element:', targetElement); // Debug log
               targetElement.scrollIntoView({
                    behavior: 'smooth'
               });
          } else {
               console.error('Element not found for ID:', targetId); // Error log
          }
     });
});