const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
// Mobail 
const sensitivity = 20;

let touchStart = null; //Точка начала касания
let touchPosition = null; //Текущая позиция
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1)*100}vh`;

upBtn.addEventListener('click', () => {
   changeSlide('up')
});

downBtn.addEventListener('click', () => {
   changeSlide('down')
});

function changeSlide(direction) {
   if(direction === 'up') {
      activeSlideIndex++;
      if(activeSlideIndex === slidesCount) {
         activeSlideIndex = 0;
      }
   } else if (direction === 'down') {
      activeSlideIndex--;
      if(activeSlideIndex < 0) {
         activeSlideIndex = slidesCount - 1;
      }
   }
   const height = container.clientHeight;
   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
   sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
//AutoChange
setInterval(() => changeSlide('up'), 5000);

// Mobail swipe

//Перехватываем события
mainSlide.addEventListener("touchstart", function (e) { TouchStart(e); }); 
mainSlide.addEventListener("touchmove", function (e) { TouchMove(e); }); 
mainSlide.addEventListener("touchend", function (e) { TouchEnd(e); });

sidebar.addEventListener("touchstart", function (e) { TouchStart(e); }); 
sidebar.addEventListener("touchmove", function (e) { TouchMove(e); }); 
sidebar.addEventListener("touchend", function (e) { TouchEnd(e); });

function TouchStart(e)
{
    //Получаем текущую позицию касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    touchPosition = { x: touchStart.x, y: touchStart.y };
}

function TouchMove(e)
{
    //Получаем новую позицию
    touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };

}

function TouchEnd(e)
{

    CheckAction(); //Определяем, какой жест совершил пользователь
    //Очищаем позиции
    touchStart = null;
    touchPosition = null;
}

function CheckAction()
{
    var d = //Получаем расстояния от начальной до конечной точек по обеим осям
    {
   	 x: touchStart.x - touchPosition.x,
   	 y: touchStart.y - touchPosition.y
    };

    

    if(Math.abs(d.x) > Math.abs(d.y)) //Проверяем, движение по какой оси было длиннее
    {
   	 if(Math.abs(d.x) > sensitivity) //Проверяем, было ли движение достаточно длинным
   	 {
   		 if(d.x > 0) //Если значение больше нуля, значит пользователь двигал пальцем справа налево
   		 {
   			console.log("Swipe Left");
   		 }
   		 else //Иначе он двигал им слева направо
   		 {
            console.log("Swipe Right");
   		 }
   	 }
    }
    else //Аналогичные проверки для вертикальной оси
    {
   	 if(Math.abs(d.y) > sensitivity)
   	 {
   		 if(d.y > 0) //Свайп вверх
   		 {
            changeSlide('up')
   			
   		 }
   		 else //Свайп вниз
   		 {
            changeSlide('down')
            
   		 }
   	 }
    }

}
