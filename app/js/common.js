$(function () {
  // Custom JS
  $(".slick_slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    prevArrow: $(".prev-slick__btn"),
    nextArrow: $(".next-slick__btn"),
    //fade: true,
    //asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // $(".slider_item_wrapper").hover(
  //   function () {
  //     $(".check-service_wrap").hide();
  //   },
  //   function () {
  //     $(".check-service_wrap").show();
  //   }
	// );
	



});

// const lightbox = document.createElement('div') //создание дива и присвоение дива к lightbox
// lightbox.id = 'lightbox' //добовляем к диву ид-шку #lightbox
// document.body.appendChild(lightbox)

const lightbox = document.getElementById("lightbox");
const images = document.getElementsByClassName("slider_item"); //пихаем все теги img в images (NodeList)Объект NodeList — это коллекция узлов, возвращаемая такими методами, как Node.childNodes и document.querySelectorAll.
console.log(images);
for (const child of images) {
  child.addEventListener("click", (e) => {
    const img = document.createElement("img");
    img.src = child.src;
    img.classList.add("righ-lightbox-img");
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
}
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    //	lightbox.classList.add('active')// //добавляет класс active
    console.log(image.src);
    const img = document.createElement("img"); //создает <img> и хранит в переменной img
    img.src = image.src;
    while (lightbox.firstChild) {
      // при просмотре разных img первый не удаляется
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});
