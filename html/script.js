
//Toggle bar------------------------
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

//Product filter--------------------
let products = {
  data: [
    {
      productName: "Softshell Rain Jackets",
      category: "Women",
      price :"179",
      image: "/images/RainyDays_Jacket1.jpg",
    },

    {
      productName: "Ponchos",
      category: "Women",
      price :"119",
      image: "/images/RainyDays_Jacket2.jpg",
    },

    {
      productName: "Packable Rain Jacket",
      category: "Women",
      price :"139",
      image: "/images/RainyDays_Jacket3.jpg",
    },

    {
      productName: "Hardshell Rain Jackets",
      category: "Men",
      price :"219",
      image: "/images/RainyDays_Jacket5.jpg",
    },

    {
      productName: "Urban Rain Jackets",
      category: "Men",
      price :"149",
      image: "/images/RainyDays_Jacket6.jpg",
    },

    {
      productName: "Insulated Rain Jackets",
      category: "Men",
      price :"199",
      image: "/images/RainyDays_Jacket4.jpg",
    },
  ],
};

for (let i of products.data) {

 
  let card = document.createElement("div");

  
  card.classList.add("card", i.category, "hide");

 
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");


  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

 
let container = document.createElement("div");
container.classList.add("container");
 
let name = document.createElement("h5");
name.classList.add("product-name");
name.innerText = i.productName.toString();
container.appendChild(name);


let price = document.createElement("h6");
price.innerText = "$" + i.price;
container.appendChild(price);

card.appendChild(container);
document.getElementById("products").appendChild(card);
}


function filterProduct(value){

  
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {

   
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    }
    else{
      button.classList.remove("active");
    }
  });

 
  let elements = document.querySelectorAll(".card");

 
  elements.forEach((element) => {

   
    if (value == "All") {
      element.classList.remove("hide");
    }
    else{
     
      if(element.classList.contains(value)) {
       
        element.classList.remove("hide");
      }
      else{
       
        element.classList.add("hide");
      }
    }
  });
}


document.getElementById("search").addEventListener("click", () => {

 
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

 
  elements.forEach((element, index) =>  {

  
    if (element.innerText.includes(searchInput.toUpperCase())) {

     
      cards[index].classList.remove("hide");
    } 
    else {
      
     
      cards[index].classList.add("hide");
    }
  });
});


window.onload = () => {
  filterProduct("All");
};



//-------------------------------------------------------------
//Singpe product details

const proImgs = document.querySelectorAll('.img-select a');
const proImgBtns = [...proImgs];
let proImgId = 1;

proImgBtns.forEach((imgItem) => {
  imgItem.addEventListener('click', (event) => {
    event.preventDefault();
    proImgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage(){
  const displayWidth = document.querySelector('.show-img img:first-child').clientWidth;

  document.querySelector('.show-img').style.transform = 'translateX(${-(proImgId - 1) * displayWidth}px)';
}











