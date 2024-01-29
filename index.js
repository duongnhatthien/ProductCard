let selectedSize = null;
let flag = false;
function heart_click() {
    if(flag)
    {
        document.getElementById("heart-nor").style.display = "inline-block";
        document.getElementById('heart-active').style.display = "none";
        flag = !flag;
    }
    else{
        document.getElementById("heart-nor").style.display = "none";
        document.getElementById('heart-active').style.display = "inline-block";
        flag = !flag;
    }
}

const card = document.querySelectorAll(".card");
const card_img = document.querySelector(".card__img");
const buttons = document.querySelectorAll(".card__action button");
const changeColor = document.querySelectorAll(".change-color");
const container = document.querySelector(".container");
const sizes = document.querySelectorAll(".card__size.change-color span");

function setColor(color, backgroundColor, imageUrl,gradientsBack) {
  changeColor.forEach((element) => {
    element.style.color = color;
  });
  buttons.forEach((element) => {
    element.style.backgroundColor = color;
  });
  card.forEach(e => {
    e.style.backgroundColor = backgroundColor;
  })
  card_img.style.backgroundImage = `url(${imageUrl})`;
  container.style.background = gradientsBack;
//   
    selectedSize.style.backgroundColor = color;
    selectedSize.style.color = "white";
}

const colorMappings = {
  "card__color--green": {
    color: "var(--primary-color)",
    backgroundColor: "#00250f",
    imageUrl: "./img/green.png",
    gradientsBack:"linear-gradient(to right, #11998e, #1ce669)"
  },
  "card__color--blue": {
    color: "#2175f5",
    backgroundColor: "#26336dc4",
    imageUrl: "./img/blue.png",
    gradientsBack:"linear-gradient(to right, #0136af, #22abfa)"
  },
  "card__color--red": {
    color: "#f84848",
    backgroundColor: "#540000",
    imageUrl: "./img/red.png",
    gradientsBack:"linear-gradient(to right, #d62926, #ee625f)"
  },
  "card__color--orange": {
    color: "#ff5521",
    backgroundColor: "#902200",
    imageUrl: "./img/orange.png",
    gradientsBack:"linear-gradient(to right, #fc4a1a, #f7b733)"
  },
  "card__color--black": {
    color: "#444",
    backgroundColor: "#9b9b9b",
    imageUrl: "./img/black.png",
    gradientsBack:"linear-gradient(to right, #111, #666)"
  },
};

function checkedBorder(event)
{
    const previousActiveElements = document.querySelectorAll('.card__color--border');
    previousActiveElements.forEach(element => {
      element.classList.remove('card__color--border');
    });
    event.target.classList.add('card__color--border');
}
function handleColorClick(event) {
  
  const color = colorMappings[event.target.className].color;
  const backgroundColor = colorMappings[event.target.className].backgroundColor;
  const imageUrl = colorMappings[event.target.className].imageUrl;
  const gradientsBack = colorMappings[event.target.className].gradientsBack;
  setColor(color, backgroundColor, imageUrl,gradientsBack);
  checkedBorder(event);
}

document.querySelectorAll('[class^="card__color--"]').forEach(element => {
    element.addEventListener("click",handleColorClick);
    
});


function handleSizeClick(event) {
  const titleColor = getComputedStyle(document.querySelector(".card__title")).color;
  
  // Xóa màu của phần tử con trước đó (nếu có)
  if (selectedSize) {
    selectedSize.style.color = ""; 
    selectedSize.style.backgroundColor = "";// Hoặc gán màu mặc định CSS của phần tử con trước đó
  }

  // Gán màu mới cho phần tử con hiện tại
  event.target.style.backgroundColor = titleColor;
  event.target.style.color = "white";
  
  // Lưu phần tử con hiện tại vào biến selectedSize
  selectedSize = event.target;
}

 

sizes.forEach(element => {
  element.addEventListener("click", handleSizeClick);
});





