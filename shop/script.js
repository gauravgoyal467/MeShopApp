//localStorage.removeItem("products");
(async function loadDefaultData() {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  const data = await response.json();
  modifyArray(data);
})();

function modifyArray(data) {
  data = data.map((item) => {
    item.color = randomColor();
    item.size = randomSize();
    return item;
  });
  if (localStorage.getItem("products") == null) {
    localStorage.setItem("products", JSON.stringify(data));
    //console.log(localStorage.getItem("products"));
  }
  renderOnDom();
}
function randomColor() {
  let arr = ["red", "blue", "black"];
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomSize() {
  let arr = ["X", "M", "L", "XL"];
  return arr[Math.floor(Math.random() * arr.length)];
}
function renderOnDom() {
  let arr = JSON.parse(localStorage.getItem("products"));
  console.log(arr);
  arr.forEach((element) => {
    let category = element.category;
    if (category == "men's clothing") {
      renderOnMensClothing(element);
    } else if (category == "jewelery") {
      renderOnJewelery(element);
    } else if (category == "electronics") {
      renderOnElectronics(element);
    } else if (category == "women's clothing") {
      renderOnWomenClothing(element);
    }
  });
}

const parentSec = document.getElementById("innerSec");
const mensSection = document.getElementById("Mens");
const womensSection = document.getElementById("Womens");
const jewellery = document.getElementById("Jewellery");
const electronics = document.getElementById("Electronics");
const menItems = document.getElementById("menItems");
const womenItems = document.getElementById("womenItems");
const jewelleryItems = document.getElementById("jewelleryItems");
const electronicItems = document.getElementById("electronicItems");

function renderOnMensClothing(arr) {
  let div1 = document.createElement("div");
  div1.className = "item";

  let image = document.createElement("img");
  image.src = arr.image;
  image.alt = "item";
  div1.appendChild(image);

  let div2 = document.createElement("div");
  div2.className = "info";
  let div21 = document.createElement("div");
  div21.className = "row";
  let div211 = document.createElement("div");
  div211.className = "price";
  div211.innerText = `$${arr.price}`;
  div21.appendChild(div211);
  let div212 = document.createElement("div");
  div212.className = "sized";
  div212.innerText = arr.size;
  div21.appendChild(div212);
  div2.appendChild(div21);

  let div22 = document.createElement("div");
  div22.className = "colors";
  div22.innerText = "Color :";
  let div221 = document.createElement("div");
  div221.className = "row";
  let div2211 = document.createElement("div");
  div2211.className = "circle";
  div2211.style.backgroundColor = arr.color;
  div221.appendChild(div2211);
  div22.appendChild(div221);
  div2.appendChild(div22);

  let div23 = document.createElement("div");
  div23.className = "row";
  div23.innerText = `Rating : ${arr.rating.rate}`;
  div2.appendChild(div23);

  div1.appendChild(div2);

  let button = document.createElement("button");
  button.className = "button";
  button.innerText = "Add to Cart";
  button.addEventListener("click", function () {
    addCart(arr);
  });

  div1.appendChild(button);

  menItems.appendChild(div1);
}
function renderOnWomenClothing(arr) {
  let div1 = document.createElement("div");
  div1.className = "item";

  let image = document.createElement("img");
  image.src = arr.image;
  image.alt = "item";
  div1.appendChild(image);

  let div2 = document.createElement("div");
  div2.className = "info";
  let div21 = document.createElement("div");
  div21.className = "row";
  let div211 = document.createElement("div");
  div211.className = "price";
  div211.innerText = `$${arr.price}`;
  div21.appendChild(div211);
  let div212 = document.createElement("div");
  div212.className = "sized";
  div212.innerText = arr.size;
  div21.appendChild(div212);
  div2.appendChild(div21);

  let div22 = document.createElement("div");
  div22.className = "colors";
  div22.innerText = "Color :";
  let div221 = document.createElement("div");
  div221.className = "row";
  let div2211 = document.createElement("div");
  div2211.className = "circle";
  div2211.style.backgroundColor = arr.color;
  div221.appendChild(div2211);
  div22.appendChild(div221);
  div2.appendChild(div22);

  let div23 = document.createElement("div");
  div23.className = "row";
  div23.innerText = `Rating : ${arr.rating.rate}`;
  div2.appendChild(div23);

  div1.appendChild(div2);

  let button = document.createElement("button");
  button.className = "button";
  button.innerText = "Add to Cart";
  button.addEventListener("click", function () {
    addCart(arr);
  });

  div1.appendChild(button);

  womenItems.appendChild(div1);
}
function renderOnElectronics(arr) {
  let div1 = document.createElement("div");
  div1.className = "item";

  let image = document.createElement("img");
  image.src = arr.image;
  image.alt = "item";
  div1.appendChild(image);

  let div2 = document.createElement("div");
  div2.className = "info";
  let div21 = document.createElement("div");
  div21.className = "row";
  let div211 = document.createElement("div");
  div211.className = "price";
  div211.innerText = `$${arr.price}`;
  div21.appendChild(div211);
  let div212 = document.createElement("div");
  div212.className = "sized";
  div212.innerText = arr.size;
  div21.appendChild(div212);
  div2.appendChild(div21);

  let div22 = document.createElement("div");
  div22.className = "colors";
  div22.innerText = "Color :";
  let div221 = document.createElement("div");
  div221.className = "row";
  let div2211 = document.createElement("div");
  div2211.className = "circle";
  div2211.style.backgroundColor = arr.color;
  div221.appendChild(div2211);
  div22.appendChild(div221);
  div2.appendChild(div22);

  let div23 = document.createElement("div");
  div23.className = "row";
  div23.innerText = `Rating : ${arr.rating.rate}`;
  div2.appendChild(div23);

  div1.appendChild(div2);

  let button = document.createElement("button");
  button.className = "button";
  button.innerText = "Add to Cart";

  button.addEventListener("click", function () {
    addCart(arr);
  });

  div1.appendChild(button);

  electronicItems.appendChild(div1);
}
function renderOnJewelery(arr) {
  let div1 = document.createElement("div");
  div1.className = "item";

  let image = document.createElement("img");
  image.src = arr.image;
  image.alt = "item";
  div1.appendChild(image);

  let div2 = document.createElement("div");
  div2.className = "info";
  let div21 = document.createElement("div");
  div21.className = "row";
  let div211 = document.createElement("div");
  div211.className = "price";
  div211.innerText = `$${arr.price}`;
  div21.appendChild(div211);
  let div212 = document.createElement("div");
  div212.className = "sized";
  div212.innerText = arr.size;
  div21.appendChild(div212);
  div2.appendChild(div21);

  let div22 = document.createElement("div");
  div22.className = "colors";
  div22.innerText = "Color :";
  let div221 = document.createElement("div");
  div221.className = "row";
  let div2211 = document.createElement("div");
  div2211.className = "circle";
  div2211.style.backgroundColor = arr.color;
  div221.appendChild(div2211);
  div22.appendChild(div221);
  div2.appendChild(div22);

  let div23 = document.createElement("div");
  div23.className = "row";
  div23.innerText = `Rating : ${arr.rating.rate}`;
  div2.appendChild(div23);

  div1.appendChild(div2);

  let button = document.createElement("button");
  button.className = "button";
  button.innerText = "Add to Cart";

  button.addEventListener("click", function () {
    addCart(arr);
  });

  div1.appendChild(button);

  jewelleryItems.appendChild(div1);
}

const filterAllPro = document.getElementById("filterAllPro");
const filterMan = document.getElementById("filterMan");
const filterWomen = document.getElementById("filterWomen");
const filterJewellery = document.getElementById("filterJewellery");
const filterElectronic = document.getElementById("filterElectronic");

filterAllPro.addEventListener("click", (e) => {
  filterAllPro.classList.add("active");
  filterMan.className = "filter";
  filterWomen.className = "filter";
  filterJewellery.className = "filter";
  filterElectronic.className = "filter";

  mensSection.style.display = "block";
  womensSection.style.display = "block";
  jewellery.style.display = "block";
  electronics.style.display = "block";
});
filterMan.addEventListener("click", (e) => {
  console.log(1);
  filterAllPro.className = "filter";
  filterMan.classList.add("active");
  filterWomen.className = "filter";
  filterJewellery.className = "filter";
  filterElectronic.className = "filter";

  mensSection.style.display = "block";
  womensSection.style.display = "none";
  jewellery.style.display = "none";
  electronics.style.display = "none";
});
filterWomen.addEventListener("click", (e) => {
  filterAllPro.className = "filter";
  filterMan.className = "filter";
  filterWomen.classList.add("active");
  filterJewellery.className = "filter";
  filterElectronic.className = "filter";

  mensSection.style.display = "none";
  womensSection.style.display = "block";
  jewellery.style.display = "none";
  electronics.style.display = "none";
});
filterJewellery.addEventListener("click", (e) => {
  filterAllPro.className = "filter";
  filterMan.className = "filter";
  filterWomen.className = "filter";
  filterJewellery.classList.add("active");
  filterElectronic.className = "filter";

  mensSection.style.display = "none";
  womensSection.style.display = "none";
  jewellery.style.display = "block";
  electronics.style.display = "none";
});
filterElectronic.addEventListener("click", (e) => {
  filterAllPro.className = "filter";
  filterMan.className = "filter";
  filterWomen.className = "filter";
  filterJewellery.className = "filter";
  filterElectronic.classList.add("active");

  mensSection.style.display = "none";
  womensSection.style.display = "none";
  jewellery.style.display = "none";
  electronics.style.display = "block";
});

const applyBtn = document.getElementById("applyButton");
var clicked = {};
applyBtn.addEventListener("click", (e) => {
  clicked.color = [];
  clicked.size = [];
  clicked.rating = [];
  clicked.priceRange = [];
  var markedColor = document.getElementsByName("color");
  markedColor.forEach((element) => {
    if (element.checked) {
      clicked.color.push(element.value);
    }
  });
  var markedSize = document.getElementsByName("size");
  markedSize.forEach((element) => {
    if (element.checked) {
      clicked.size.push(element.value);
    }
  });
  const slider = document.getElementById("range");
  clicked.rating.push(slider.value);

  var priceRange = document.getElementsByName("prange");
  priceRange.forEach((element) => {
    if (element.checked) {
      clicked.priceRange.push(element.value);
    }
  });
  console.log(clicked);
  renderDomWithFilter(clicked);
});

function renderDomWithFilter(clicked) {
  let col = clicked.color;
  let price = clicked.priceRange;
  let rat = clicked.rating;
  let siz = clicked.size;

  menItems.innerHTML = "";
  womenItems.innerHTML = "";
  jewelleryItems.innerHTML = "";
  electronicItems.innerHTML = "";
  if (col.length == 0 && price.length == 0 && rat == 0 && siz.length == 0) {
    renderOnDom();
  }

  let arr = JSON.parse(localStorage.getItem("products"));
  arr.forEach((element) => {
    let c = element.color;
    let s = element.size;
    let r = element.rating.rate;
    let p = element.price;
    let category = element.category;

    if (col.includes(c) || (r >= rat[0] && rat[0] > 0) || siz.includes(s)) {
      if (category == "men's clothing") {
        renderOnMensClothing(element);
      } else if (category == "jewelery") {
        renderOnJewelery(element);
      } else if (category == "electronics") {
        renderOnElectronics(element);
      } else if (category == "women's clothing") {
        renderOnWomenClothing(element);
      }
    } else if (price.length > 0) {
      for (let i = 0; i < price.length; i++) {
        let curr = price[i].split(/[-,+]+/);
        if (curr.length > 1) {
          startPrice = curr[0];
          endPrice = curr[1];
        } else if (curr.length == 1) {
          startPrice = curr[0];
          endPrice = Number.MAX_VALUE;
        }
        if (p >= startPrice && p <= endPrice) {
          if (category == "men's clothing") {
            renderOnMensClothing(element);
          } else if (category == "jewelery") {
            renderOnJewelery(element);
          } else if (category == "electronics") {
            renderOnElectronics(element);
          } else if (category == "women's clothing") {
            renderOnWomenClothing(element);
          }
        }
      }
    }
  });
}

const input = document.getElementById("inputSec");
input.addEventListener("keyup", (e) => {
  menItems.innerHTML = "";
  womenItems.innerHTML = "";
  jewelleryItems.innerHTML = "";
  electronicItems.innerHTML = "";

  let name = e.target.value.toLowerCase();
  let arr = JSON.parse(localStorage.getItem("products"));
  arr.forEach((element) => {
    let title = element.title.toLowerCase();
    let category = element.category;
    let desc = element.description.toLowerCase();
    if (title.includes(name || desc.includes(name))) {
      if (category == "men's clothing") {
        renderOnMensClothing(element);
      } else if (category == "jewelery") {
        renderOnJewelery(element);
      } else if (category == "electronics") {
        renderOnElectronics(element);
      } else if (category == "women's clothing") {
        renderOnWomenClothing(element);
      }
    }
  });
  if (name == "") {
    renderOnDom();
  }
});

const disp = document.getElementById("disp");
function addCart(item) {
  console.log(item);
  let curr = JSON.parse(localStorage.getItem("currentUser"));
  if (curr != null) {
    curr.bagItem.push(item);
    localStorage.setItem("currentUser", JSON.stringify(curr));
    console.log("added Successfully");
  } else {
    let cart = JSON.parse(localStorage.getItem("currCart"));
    if (cart == null) {
      let orders = [];
      orders.push(item);
      localStorage.setItem("currCart", JSON.stringify(orders));
      console.log("added Successfully");
    } else {
      cart.push(item);
      localStorage.setItem("currCart", JSON.stringify(cart));
      console.log("added Successfully");
    }
  }
  disp.style.display = "block";
  setTimeout(() => {
    disp.style.display = "none";
  }, 1000);
}
