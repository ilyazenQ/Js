const board = document.querySelector('#board');
const colors = [
   '#FFE4C4','#5F9EA0','#E9967A','#FF8C00','#8FBC8F','#F0E68C'
];
const el_type = ['square','circle'];
const EL_NUMBER = 250;
let clientWidth = document.documentElement.clientWidth;
//mobail var
const sensitivity = 20;
let touchStart = null; //Точка начала касания
let touchEnd = null; //Точка начала касания
let touchPosition = null; //Текущая позиция
let currentMobailEl = null;

for (let i = 0; i < EL_NUMBER; i++) {

   const el = document.createElement('div');
   el.classList.add(el_type[0]);
   el.classList.add(`el-${i}`);

   if (clientWidth <= 767) {
      drawTheWordMobail(i,el,colors);
   } else {
      drawTheWordPC(i,el,colors)
   }
   el.addEventListener('mouseover', () => setColor(el,colors));
   el.addEventListener('mouseleave', () => removeColor(el));
 
   el.addEventListener("touchstart", (e) =>  TouchStart(e,colors,board)); //TouchStart(e)
   el.addEventListener("touchmove", (e) =>  TouchMove(e,colors,board) ); //TouchMove(e)
   el.addEventListener("touchend", (e) =>  TouchEnd(e) ); //TouchEnd(e)
   el.addEventListener("touchcancel", (e) =>  TouchEnd(e));

   board.append(el);
}


function setColor(el,colors) {
   const color = getRandomColor(colors);
   el.style.backgroundColor = `${color}`;
   el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function setBorderColor(el,colors) {
   const color = getRandomColor(colors);
   el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
   el.style.backgroundColor = "#1d1d1d";
  // el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(colors) {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index]
}

function setOrRemoveColorMobail(elem) {
   if (elem.classList.contains(el_type[0])) {
      setColor(elem,colors);
      if(elem.classList.contains('active')) {
         removeColor(elem);
         elem.classList.remove('active');
      } else { 
         elem.classList.add('active');
      }
     
    }
}
function TouchStart(e,colors,board)
{
    //Получаем текущую позицию касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    touchPosition = { x: touchStart.x, y: touchStart.y };
    //console.log(touchPosition.x, touchPosition.y);
    //let rectBoardCollection = e.target.getClientRects();
    currentMobailEl = document.elementFromPoint(touchPosition.x, touchPosition.y);
    setOrRemoveColorMobail(currentMobailEl);
}

function TouchMove(e,colors,board)
{
    //Получаем новую позицию
    touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    currentMobailEl= document.elementFromPoint(touchPosition.x, touchPosition.y);
    setOrRemoveColorMobail(currentMobailEl);
}

function TouchEnd(e)
{
    touchStart = null;
    touchPosition = null;
}

//word PC
function drawTheWordPC(i,el,colors){
   switch (i) {
      case 30:
         setBorderColor(el,colors)
        break;
      case 55:
         setBorderColor(el,colors)
        break;
      case 80:
         setBorderColor(el,colors)
        break;
        case 106:
         setBorderColor(el,colors)
        break;
      case 82:
         setBorderColor(el,colors)
        break;
      case 108:
         setBorderColor(el,colors)
        break;
        case 84:
         setBorderColor(el,colors)
        break;
      case 59:
         setBorderColor(el,colors)
        break;
      case 34:
         setBorderColor(el,colors)
        break;
        case 111:
         setColor(el,colors)
        break;
      case 86:
         setColor(el,colors)
        break;
      case 61:
         setColor(el,colors)
        break;
        case 36:
         setColor(el,colors)
        break;
      case 37:
         setColor(el,colors)
        break;
      case 87:
         setColor(el,colors)
        break;
        case 40:
         setColor(el,colors)
        break;
      case 90:
         setColor(el,colors)
        break;
      case 115:
         setColor(el,colors)
        break;
        case 117:
         setBorderColor(el,colors)
        break;
        case 92:
         setBorderColor(el,colors)
        break;
      case 67:
         setBorderColor(el,colors)
        break;
      case 42:
         setBorderColor(el,colors)
        break;
        case 68:
         setBorderColor(el,colors)
        break;
      case 94:
         setBorderColor(el,colors)
        break;
      case 45:
         setBorderColor(el,colors)
        break;
        case 70:
         setBorderColor(el,colors)
        break;
        case 95:
         setBorderColor(el,colors)
        break;
        case 120:
         setBorderColor(el,colors)
      
    }
}

//word mobail 
function drawTheWordMobail(i,el,colors){
   switch (i) {
      case 87:
         setBorderColor(el,colors)
        break;
      case 70:
         setBorderColor(el,colors)
        break;
      case 53:
         setBorderColor(el,colors)
        break;
        case 37:
         setBorderColor(el,colors)
        break;
      case 55:
         setBorderColor(el,colors)
        break;
      case 39:
         setBorderColor(el,colors)
        break;
        case 57:
         setBorderColor(el,colors)
        break;
      case 74:
         setBorderColor(el,colors)
        break;
      case 91:
         setBorderColor(el,colors)
        break;
        case 94:
         setColor(el,colors)
        break;
      case 93:
         setColor(el,colors)
        break;
      case 76:
         setColor(el,colors)
        break;
        case 59:
         setColor(el,colors)
        break;
      case 60:
         setColor(el,colors)
        break;
      case 42:
         setColor(el,colors)
        break;
        case 189:
         setColor(el,colors)
        break;
      case 155:
         setColor(el,colors)
        break;
      case 138:
         setColor(el,colors)
        break;
        case 140:
         setBorderColor(el,colors)
        break;
        case 157:
         setBorderColor(el,colors)
        break;
      case 174:
         setBorderColor(el,colors)
        break;
      case 191:
         setBorderColor(el,colors)
        break;
        case 175:
         setBorderColor(el,colors)
        break;
      case 159:
         setBorderColor(el,colors)
        break;
      case 143:
         setBorderColor(el,colors)
        break;
        case 160:
         setBorderColor(el,colors)
        break;
        case 177:
         setBorderColor(el,colors)
        break;
        case 194:
         setBorderColor(el,colors)
      
    }
}
