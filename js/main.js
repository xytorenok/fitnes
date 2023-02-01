$(document).ready(function () {

  $('.mobile-menu').click(function () {
    $('.header__wrapper').toggleClass('active');
    $('.mobile-menu span').toggleClass('active');
    $('body').toggleClass('overlay');
    $('.main-menu').toggleClass('active');
  });

  $('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev btn slider-btn '><img src='img/arrow-prev.svg'></button>",
    nextArrow: "<button type='button' class='slick-next btn slider-btn slider-active '><img src='img/arrow-next.svg'></button>",
    // autoplay: true,
    // autoplaySpeed: 2000,
    asNavFor: '.header__bottom-slider',
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: false,
        arrows: false,
        dots: true
      }
    }]
  });

  $('.header__bottom-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    asNavFor: '.header__slider',
    responsive: [{
      breakpoint: 591,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: false,
        arrows: false,
        dots: false
      }
    }]
  });

  $('.slider-btn').click(function () {
    $('.slider-btn').removeClass('slider-active');
    $(this).addClass('slider-active');
  });

  $(window).scroll(function () {
    let scrlTop = $(this).scrollTop(); // находим координаты отступа от верхнего края браузера. 
    // console.log(scrollTop);
    if (scrlTop > 93) { // Если высота больше нашего хедера__топ мы добавляем класс
      $('.header__top').addClass('fixed');
    } else {
      $('.header__top').removeClass('fixed'); // Если высота меньше нашего хедера__топ мы убираем класс
    }
  });

  $('.benefits-block-button').click(function () {
    $('.benefits-block-button-2').removeClass('close');
    $('.benefits-block-button').removeClass('active');
    $('.benefits-block-text').removeClass('active');
    $(this).addClass('active');
    $(this).prev().addClass('active');
    $(this).next().addClass('close');
  });

  $('.benefits-block-button-2').click(function () {
    console.log('black');
    $(this).toggleClass('close');
    $(this).prev().removeClass('active');
    $(this).prev().prev().removeClass('active');
  });

  $('.photos__sliders').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<button type='button' class='slick-prev btn slider-btn '><img src='img/arrow-prev.svg'></button>",
    nextArrow: "<button type='button' class='slick-next btn slider-btn slider-active '><img src='img/arrow-next.svg'></button>",
    asNavFor: '.mini-sliders'
  });

  $('.mini-sliders').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.photos__sliders'
  });

  $('.static__data').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1051,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          dots: false,
          arrows: true,
          prevArrow: "<button type='button' class='slick-prev btn slider-btn '><img src='img/arrow-prev.svg'></button>",
          nextArrow: "<button type='button' class='slick-next btn slider-btn slider-active '><img src='img/arrow-next.svg'></button>"
        }
      },
      {
        breakpoint: 579,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          dots: false,
          arrows: true,
          prevArrow: "<button type='button' class='slick-prev btn slider-btn '><img src='img/arrow-prev.svg'></button>",
          nextArrow: "<button type='button' class='slick-next btn slider-btn slider-active '><img src='img/arrow-next.svg'></button>"
        }
      }
    ]
  });

  $('.trainers__sliders').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev btn slider-btn '><img src='img/arrow-prev.svg'></button>",
    nextArrow: "<button type='button' class='slick-next btn slider-btn slider-active '><img src='img/arrow-next.svg'></button>",
    responsive: [{
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          arrows: true,
          dots: false
        }
      }

    ]
  });

  $('.done-ticket__wrapper-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<button type='button' class='slick-prev btn slider-btn '><img src='img/arrow-prev.svg'></button>",
    nextArrow: "<button type='button' class='slick-next btn slider-btn slider-active '><img src='img/arrow-next.svg'></button>",
    responsive: [{
        breakpoint: 800,
        settings: {
          focusOnSelect: true,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true
        }
      }
    ]
  });

  $('.ticket__quize-btn').click(function (event) {
    event.preventDefault();
    $('.ticket__quize-btn').removeClass('btn-red');
    $(this).addClass('btn-red');
  });

  $('.ticket__quize-right').click(function () {
    $('.ticket__quize-wrapper').removeClass('active');
    $(this).closest('.ticket__quize-wrapper').next().addClass('active');
    $('.ticket__quize-wrapper').next().find('.ticket__quize-right').addClass('btn-red');

  });

  $('.ticket__quize-right-last').click(function () {
    $('.ticket__label').addClass('disable');
    $('.ticket__quize').addClass('unsize');
    $('.ticket-wrapper').addClass('unpadding');
  });

  $('.ticket__quize-wrapper-sale-block-form-btn').click(function (event) {
    event.preventDefault();
    $('.ticket__quize-wrapper-sale-block-form-btn').closest('.ticket__quize ').find('.ticket__quize-wrapper').eq(5).removeClass('active');
    $('.ticket__quize-wrapper-sale-block-form-btn').closest('.ticket__quize ').find('.ticket__quize-wrapper').eq(0).addClass('active');
    $('.ticket__label').removeClass('disable');
    $('.ticket__quize').removeClass('unsize');
    $('.ticket-wrapper').removeClass('unpadding');
    $('.ticket__quize-wrapper').find('.ticket__quize-right').eq(0).addClass('btn-red');
    console.log($('.ticket__quize-wrapper').find('.ticket__quize-right').eq(0));
  });

  $('.ticket__quize-left').click(function () {
    $('.ticket__quize-wrapper').removeClass('active');
    $(this).closest('.ticket__quize-wrapper').prev().addClass('active');
    $('.ticket__quize-wrapper').prev().find('.ticket__quize-left').addClass('btn-red');
  });

  $('.ticket__quize-form-input').click(function () {
    $(this).closest('.ticket__quize-form').find('.ticket__quize-form-block').removeClass('red-brd');
    $(this).parent().addClass('red-brd');
  });

  $('.ticket__quize-form-input-checkbox').click(function () {
    $(this).parent().toggleClass('red-brd');
  });

  $('.reviews__left-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev btn slider-btn '><img src='img/arrow-prev.svg'></button>",
    nextArrow: "<button type='button' class='slick-next btn slider-btn slider-active '><img src='img/arrow-next.svg'></button>",
    responsive: [{
      breakpoint: 1101,
      settings: {
        dots: false,
        arrows: true
      }
    }]
  });

  $('.timetable__calendar').slick({
    infinite: false,
    slidesToShow: 15,
    slidesToScroll: 4,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 12
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 9
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 4
      }
    }]
  });

  // -------direction-block

  if($('.directions-inner').length !== 0){
    
    $('.directions-lists li').click(function(event){
      
      let dataClass = $(event.target).attr("data-kind");
      $('.directions-inner').removeClass('visible');
      console.log(dataClass);

      if($('.directions-inner').hasClass(dataClass)){
        // $(this).parent().next().children().hasClass(dataClass).addClass('visible');
        console.log($(this).parent().next().children().hasClass(dataClass));
      }
      
    })
  } 

  // ---------------pop-up--------------
  $('.benefits__bottom-wrapper-btn').click(function () {
    $('.guesttour').show(1000)
  });

  $('.btn-guestour-closed').click(function () {
    $('.guesttour').hide(1000)
  });

});




if($('button').hasClass('callback-block-form-btn')){
  const btnCallBack = document.getElementsByClassName('btnCall');
  const btnClosed = document.getElementsByClassName('btn-close');
  let popUpCallBack = document.querySelector('.callback-block');
  let popUpCallBack2 = document.querySelector('.callback-block-2')
  let backToSite = document.querySelector('.callback-block-2-form-btn');

  document.querySelector('.callback-block-form-btn').addEventListener('click', function (event) {
    event.preventDefault();
    popUpCallBack.classList.add('closed');
    popUpCallBack2.classList.add('open');
    return;
  });

  btnClosed[0].addEventListener('click', function (e) {
    e.preventDefault();
    // popUpCallBack.classList.add('closed');
    // document.querySelector('.callback-block-2').classList.remove('open');
    document.querySelector('.callback').classList.remove('open');
  });
  
  btnClosed[1].addEventListener('click', function (e) {
    e.preventDefault();
    popUpCallBack.classList.remove('closed');
    popUpCallBack2.classList.remove('open');
    document.querySelector('.callback').classList.remove('open');
  });
  
  backToSite.addEventListener('click', function (e) {
    e.preventDefault();
    popUpCallBack.classList.remove('closed');
    popUpCallBack2.classList.remove('open');
    document.querySelector('.callback').classList.remove('open');
  });
  
  
  for (const btn of btnCallBack) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('.callback').classList.add('open');
    })
  }
}

let counter = 1;
let counterShow = document.querySelector('.guesttour-number');

document.querySelector('.guesttour-btn-plus').addEventListener('click', (event) => {
  event.preventDefault();
counter++;
counterShow.innerHTML = counter + ' чел'
console.log(counter);
})

document.querySelector('.guesttour-btn-minus').addEventListener('click', (event) => {
  event.preventDefault();
counter--;
if(counter < 1){
  counter = 1
}
counterShow.innerHTML = counter + ' чел'

})




// document.querySelector('.contact-map').addEventListener('mouseenter', e => {
//   console.log('hello');
//   e.target.classList.remove('contact-map');
// })
















// const quizeBlock = document.querySelectorAll('.ticket__quize-wrapper');
// const btnLeft = document.querySelector('.ticket__quize-left');
// const btnRight = document.querySelector('.ticket__quize-right');

// btnRight.addEventListener('click', function(){
//   quizeBlock.forEach((indx, elm) => {
//     elm.classList.remove('active');
//     this.elm.classList.add('active');
//   })
// // console.log(quizeBlock);
// });

// const blocks = document.querySelectorAll('.header__bottom-slider-block')

// for (const block of blocks) {
//   block.onclick = function () {
//     document.querySelector('.active').classList.remove('active');
//      this.classList.add('active');
//     // console.log(this);
//   }
// }