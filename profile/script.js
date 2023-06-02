// Write your script here
const cart = document.getElementById("cart");
const pName = document.getElementById("name");
const pEmail = document.getElementById("email");
const pToken = document.getElementById("token");
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const saveInfo = document.getElementById("saveInfo");
const oldPassword = document.getElementById("oldPassword");
const newPassword = document.getElementById("newPassword");
const cnfNewPassword = document.getElementById("cnfNewPassword");
const changePass = document.getElementById("changePass");
const logout = document.getElementById("logout");
const display = document.getElementById("display");

let curr = JSON.parse(localStorage.getItem("currentUser"));
console.log(curr);
let userTags = JSON.parse(localStorage.getItem(curr.mail));
console.log(userTags);
if (curr == null) {
  display.innerText = `Please login to see your profile`;
  display.className = "error";
} else {
  pName.innerText = `Name :  ${userTags.name}`;
  pEmail.innerText = `Email : ${curr.mail}`;
  pToken.innerText = `Token : ${userTags.token}`;

  saveInfo.addEventListener("click", (e) => {
    let n = FirstName.value.trim();
    let l = LastName.value.trim();
    if (n != "" && l != "") {
      userTags.name = `${n} ${l}`;
      localStorage.setItem(curr.mail, JSON.stringify(userTags));
      display.innerText = `Name changed successfully !`;
      display.className ="success";
      setTimeout(()=>{
        window.location.href = "./index.html";
      },1000); 
    } else {
      display.innerText = `Please enter both first and last name !`;
      display.className = "error";
    }
  });

  changePass.addEventListener("click", (e) => {
    let o = oldPassword.value.trim();
    let n = newPassword.value.trim();
    let cnf=cnfNewPassword.value.trim();

    if (o==userTags.password && n==cnf) {
      userTags.password = `${n}`;
      localStorage.setItem(curr.mail, JSON.stringify(userTags));
      display.innerText = `password changed successfully !`;
      display.className = "success";
      setTimeout(()=>{
        window.location.href = "./index.html";
      },1000);      
    } else if(o!=userTags.password ) {
      display.innerText = `old password doesn't matches ! `;
      display.className = "error";
    }else{
      display.innerText = `entered new passwords doesn't matches !`;
      display.className = "error";
    }
  });

  logout.addEventListener("click",(e)=>{
    localStorage.removeItem("currentUser");
    display.innerText = `logout successful !`;
    display.className = "success";
    setTimeout(()=>{
        window.location.href = "../login/index.html";
    },2000); 
  });
}
