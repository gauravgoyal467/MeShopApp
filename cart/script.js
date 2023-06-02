const bagItem = document.getElementById("bagItem");
const checkOut = document.getElementById("checkOut");
const disp = document.getElementById("disp");


(function loadItems() {
  bagItem.innerHTML = "";
  checkOut.innerHTML = "";
  let item = JSON.parse(localStorage.getItem("currentUser"));
  console.log(item);
  if (item == null) {
    let localCart = JSON.parse(localStorage.getItem("currCart"));
    renderOnCart(localCart);
  } else {
    renderOnCart(item.bagItem);
  }
})();

function renderOnCart(items) {
  console.log(items);
  if(items.length==0){
    disp.style.display="block";
    disp.innerText="Cart is Empty Please do some shopping";
    disp.className="success";
  }

  items.forEach((element) => {
    let div = document.createElement("div");
    div.className = "pro";

    let div1 = document.createElement("div");
    div1.className = "image";
    let img = document.createElement("img");
    img.src = element.image;
    div1.appendChild(img);
    div.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className = "tag";
    let span1 = document.createElement("span");
    span1.className = "title";
    span1.innerText = `Title : ${element.title}`;
    div2.appendChild(span1);
    let span2 = document.createElement("span");
    span2.className = "price";
    span2.innerText = `Price : ${element.price}`;
    div2.appendChild(span2);
    div.appendChild(div2);

    let button = document.createElement("button");
    button.className = "btn";
    button.innerText = `Remove From Cart`;
    button.addEventListener("click", function () {
      RemoveCart(element);
    });
    div.appendChild(button);

    bagItem.appendChild(div);
  });


  let span3 = document.createElement("span");
  span3.innerText = "Checkout List";
  checkOut.appendChild(span3);

  let itemsDiv = document.createElement("div");
  itemsDiv.className = "items";
  let count = 0;let total=0;
  items.forEach((el) => {
    count++; 
    total=total+el.price;
    let purDiv1 = document.createElement("div");
    purDiv1.className = "purchasedItem";
    let itemDiv = document.createElement("div");
    itemDiv.className = "item";
    let sp1 = document.createElement("span");
    sp1.innerText = `${count}.`;
    itemDiv.appendChild(sp1);
    let sp2 = document.createElement("span");
    sp2.innerText = `${el.title}`;
    itemDiv.appendChild(sp2);    
    purDiv1.appendChild(itemDiv);

    let p = document.createElement("p");
    p.innerText = `$${el.price}`;
    purDiv1.appendChild(p);

    itemsDiv.appendChild(purDiv1);
  });
  checkOut.appendChild(itemsDiv);
  let line1 = document.createElement("div");
  line1.className = "line";
  checkOut.appendChild(line1);

  let divTotal = document.createElement("div");
  divTotal.className = "total";
  let s = document.createElement("span");
  s.innerText = `Total`;
  divTotal.appendChild(s);
  let p1 = document.createElement("p");
  p1.innerText = `${total}`;
  divTotal.appendChild(p1);
  checkOut.appendChild(divTotal);

  let line2 = document.createElement("div");
  line2.className = "line";
  checkOut.appendChild(line2);

  let button = document.createElement("button");
  button.className = "btn";
  button.setAttribute("id","checkOutBtn");
  button.innerText = "Click To Checkout";
  checkOut.appendChild(button);
}

function RemoveCart(element){
  let item = JSON.parse(localStorage.getItem("currentUser"));
  if (item == null) {
    let localCart = JSON.parse(localStorage.getItem("currCart"));
    console.log(localCart);
    for (let j = 0; j < localCart.length; j++) {
      if(localCart[j].id==element.id){
       localCart.splice(j,1);
      }
     }
     console.log(localCart);
     localStorage.setItem("currCart",JSON.stringify(localCart));
     setTimeout(()=>{
       window.location.href = "./index.html";
     },500); 
  } else {
    let array=item.bagItem;
    for (let i = 0; i < array.length; i++) {
     if(array[i].id==element.id){
      array.splice(i,1);
     }
    }
    console.log(array);
    item.bagItem=array;
    localStorage.setItem("currentUser",JSON.stringify(item));
    setTimeout(()=>{
      window.location.href = "./index.html";
    },500); 
  }
}

const checkOutBtn=document.getElementById("checkOutBtn");
checkOutBtn.addEventListener("click",(e)=>{
  if(localStorage.getItem("currentUser")==null){
    alert("You are not logged in please login to complete the order !")
    setTimeout(()=>{
      window.location.href = "../login/index.html";
    },500); 
  }else{
  setTimeout(()=>{
    window.location.href = "../razorpay/index.html";
  },500); 
}
})

