// Link for the documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration

// Add button code documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#code-to-add-pay-button
 
let user = JSON.parse(localStorage.getItem("currentUser"));
  let email = user.mail;
  let orders = user.bagItem;
  let total = 0;
  orders.forEach((element) => {
    total = total + element.price;
  });
  console.log(total);
document.getElementById("rzp-button1").onclick = function (e) {
  
  var options = {
    key: "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
    amount: Math.round(total * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "MyShop Checkout",
    description: "Orders", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      alert("payment successful with payment id "+ response.razorpay_payment_id);
      alert("Order Placed ")
      clearCart(response.razorpay_payment_id);
    },
    theme: {
      color: "#000",
    },
    image:
      "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
  rzpy1.on('payment.failed', function (response){
    console.log("payment failed");
    alert(response.error.code);
    setTimeout(()=>{
      window.location.href = "../cart/index.html";
    },500);
})
  e.preventDefault();
};

function clearCart(id){
  let customer = JSON.parse(localStorage.getItem(email));
  let orderList=customer.orders;
  let orderItem={
    orderNo : (orderList.length)+1,
    paymentId :id,
    order :user.bagItem,
    amount : `Rs ${total}`
  };
  orderList.push(orderItem);
  localStorage.setItem(email,JSON.stringify(customer));
 //empty cart
 user.bagItem=[];
 localStorage.setItem("currentUser",JSON.stringify(user));
 //redirecting to shop
  setTimeout(()=>{
    window.location.href = "../shop/index.html";
  },500); 
  console.log(id);
}