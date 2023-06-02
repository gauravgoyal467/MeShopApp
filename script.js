// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
const log=document.getElementById("loginBtn");
const sign=document.getElementById("signUpBtn");
const shop=document.getElementById("shop");
log.addEventListener("click",(e)=>{
    setTimeout(() => {
        window.location.href = "./login/index.html";
      }, 1000);
});
sign.addEventListener("click",(e)=>{
    setTimeout(() => {
        window.location.href = "./signUp/index.html";
      }, 1000);
});
shop.addEventListener("click",(e)=>{
  setTimeout(() => {
      window.location.href = "./shop/index.html";
    }, 1000);
});