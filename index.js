const articles = [
    {
        id: 1,
        denomination: " G Pro Wireless Gaming Mouse",
        marque:"Logitech", 
        price:119.99,
        img:"./img/Souris Logitech.jpg"
    },
    {
        id: 2,
        denomination: " G G910 Orion Spectrum RGB",
        marque: "Logitech",   
        price: 139.96,
        img:"./img/Clavier Logitech.jpg"
    },
    {
        id: 3,
        denomination: " G Pro X Wireless Lightspeed Gaming",
        marque: "Logitech",   
        price: 219.95,
        img:"./img/Casque Logitech.jpg"
    },
    {
        id: 4,
        denomination: " DeathHadder v2",
        marque:"Razer",   
        price: 54.95,
        img:"./img/Souris Razer.jpg"
    },
    {
        id: 5,
        denomination: " BlackWidow v3 pro",
        marque:"Razer",      
        price: 189.65,
        img:"./img/Clavier Razer.jpg"
    },
    {
        id: 6,
        denomination:"BlackShark v2Pro", 
        marque:"Razer",      
        price: 179.95,
        img:"./img/Casque Razer.jpg"
    },
    {
        id: 7,
        denomination:"Kain 200 AIMO",
        marque:"ROCCAT",
        price:79.96,
        img:"./img/Souris Roccat.jpg"
    },
    {
        id: 8,
        denomination:"Vulcan 121 AIMO",
        marque:"ROCCAT",      
        price: 159.95,
        img:"./img/Clavier Roccat.jpg"
    },
    {
        id: 9,
        denomination:"Elo 7.1 Air",
        marque:"ROCCAT",  
        price: 99.95,
        img:"./img/Casque Roccat.jpg"
    },
    {
        id: 10,
        denomination:"Sensei Ten",
        marque: "SteelSeries" ,     
        price:59.95,
        img:"./img/Souris SteelSeries.jpg"
    },
    {
        id: 11,
        denomination:"Apex Pro",
        marque: " SteelSeries" ,  
        price: 259.94,
        img:"./img/Clavier SteelSeries.jpg"
    },
    {
        id: 12,
        denomination:"Arctis 9",
        marque: "SteelSeries",    
        price: 239.95,
        img:"./img/Casque SteelSeries.jpg"
    },
]

function openNav() {
    document.getElementById("myNav").style.width = "100%";
   }

function closeNav() {
     document.getElementById("myNav").style.width = "0%";
   }

const articlesContainer = document.querySelector('.articles-container');
const displayArticle = () => {
    const articlesNode = articles.map(article => {
        return createArticle(article)
    });
    articlesContainer.append(...articlesNode)
}

let tab=[]


const createArticle = (article) => {
    console.log();
    const div1 = document.createElement('div')
    div1.classList.add('article')
    
   



    const image = document.createElement('img')
    image.src = article.img
    image.alt = article.denomination
    
    const h2 = document.createElement('h2')
    h2.innerText = article.denomination
   
    const paragrapheStock = document.createElement('p')
    paragrapheStock.innerText ="EnStock"
   
    const div2 = document.createElement('div')
    div2.classList.add('article-action')
   
    const prix = document.createElement('p')
    prix.innerText =article.price +"€ "
    
    const button = document.createElement('button')
    button.innerText = "Ajouter au panier"
    
        button.addEventListener('click',()=>{
        tab.push(article)
        button.innerText="Supprimer du panier"
         button.style.background='red'
           console.log(tab)
        })    

    

    articlesContainer.appendChild(div1)
    div2.append(prix, button)
    div1.append(image, h2, paragrapheStock, div2)

    return div1
}

var slide = document.getElementsByClassName("slide");
var indicator = document.getElementById("indicator");
var dots = document.getElementsByClassName("dots");
var autoplay = document
  .getElementsByClassName("container")[0]
  .getAttribute("data-autoplay");
var l = slide.length;
var interval = 5000;
var set;

window.onload = function () {
  initialize();
  slide[0].style.opacity = "1";
  for (var j = 0; j < l; j++) {
    indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
  }

  dots[0].style.background = "#696969";
};

function initialize() {
  if (autoplay === "true")
    set = setInterval(function () {
      next();
    }, interval);
}

function change(index) {
  clearInterval(set);
  count = index;
  for (var j = 0; j < l; j++) {
      slide[j].style.opacity = "0";
      dots[j].style.background = "#bdbdbd";
  }
  slide[count].style.opacity = "1";
  dots[count].style.background = "#696969";
}

var count = 0;
function next() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  count++;
  for (var j = 0; j < l; j++) {
      dots[j].style.background = "#bdbdbd";
    }

  if (count == l) {
    count = 0;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  } else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }
  initialize();
}

function prev() {
    clearInterval(set);
    slide[count].style.opacity = "0";
    for (var j = 0; j < l; j++) {
        dots[j].style.background = "#bdbdbd";
    }
    count--;

    if (count == -1) {
        count = l - 1;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
} else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }
  initialize();
}

displayArticle()