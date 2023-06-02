const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const CnfPassword = document.getElementById("CnfPassword");
const signUpBtn = document.getElementById("signUpBtn");
const displayMsg = document.getElementById("displayMessage");

signUpBtn.addEventListener("click", (e) => {
  let Fname = FirstName.value.trim();
  let Lname = LastName.value.trim();
  let mail = Email.value.trim();
  let pass = Password.value.trim();
  let cnfPass = CnfPassword.value.trim();

  if (pass == cnfPass) {
    if (localStorage.getItem(mail) == null) {
      let profile = {};
      profile.name = `${Fname} ${Lname}`;
      profile.password = pass;
      profile.token = getAccessToken();
      profile.orders = [];
      console.log(profile);
      localStorage.setItem(mail,JSON.stringify(profile));
      displayMsg.innerText =
        "Registered Successfully redirecting to login page !";
      displayMsg.className = "success";
      setTimeout(() => {
        window.location.href = "../login/index.html";
      }, 2000);
    } else {
      displayMsg.innerText = "Email is already registered please login !";
      displayMsg.className = "error";
    }
  } else {
    displayMsg.innerText = "Passwords doesn't matches please verify !";
    displayMsg.className = "error";
  }
});

function getAccessToken() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  while (result.length < 16) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
