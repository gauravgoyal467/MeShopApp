const Gmail=document.getElementById("Gmail");
const Pass=document.getElementById("Pass");
const loginBtn=document.getElementById("loginBtn");
const displayOut=document.getElementById("displayOut");

loginBtn.addEventListener("click",(e)=>{
    let m=Gmail.value.trim();
    let p=Pass.value.trim();
    if(localStorage.getItem(m)==null){
        console.log("user not registered");
        displayOut.innerText="Please enter the correct email Id or please SignUp !"
        displayOut.className="error";
    }else{
        let user=JSON.parse(localStorage.getItem(m));
        let objPass=user.password;
        let userName=user.name;
        let val={
            mail:m,
            bagItem:[]
        }
        let preCart=JSON.parse(localStorage.getItem("currCart"));
        if(preCart !=null && preCart.length>0){
            preCart.forEach(element => {
                val.bagItem.push(element);    
            });
            preCart=[];
            localStorage.setItem("currCart",JSON.stringify(preCart));
        }
        if(objPass==p){
            localStorage.setItem("currentUser",JSON.stringify(val));
            displayOut.innerText=`Welcome ${userName} ! redirecting you to the shop`;
            displayOut.className="success";
            setTimeout(() => {
                window.location.href = "../shop/index.html";
              }, 2000);
        }else{
            displayOut.innerText=`You have Entered the wrong password`;
            displayOut.className="error";
        }
    }
});

