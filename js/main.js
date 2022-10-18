const swiper = new Swiper('.swiper', {

    centeredSlides: true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: -150,
      grabCursor: true,
      slidesPerView: "3",
      initialSlide: 1,
    //   autoplay : {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    //   loop: true,
      breakpoints: {
        1000: {
          slidesPerView: 3,
          
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
    
    });


    function disp(myid){
            document.getElementById('r1').style.display = "none";
            document.getElementById('r2').style.display = "none";
            document.getElementById('r3').style.display = "none";
            document.getElementById('r4').style.display = "none";
            document.getElementById('r5').style.display = "none";
            document.getElementById(myid).style.display = "flex";
        };
        
       