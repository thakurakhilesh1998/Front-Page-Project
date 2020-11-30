var buyer = [
    "Save time and forget about going back and forth to the bank, you can do everything online from home.",
    "Negotiate the amount until the last moment - The transaction amount is changeable unlike the bank check.",
    "Reassure your seller who can make sure that you are a verified user and that you have the amount for your purchase.",
    "Pay your seller in 1 click, it's instant!",
    "The service is free for the buyer, you pay nothing regardless of the outcome of your appointment with the seller.",
];
var seller = [
    "Make sure the buyer is a verified user and has the funds to buy your vehicle.",
    "A simple click ensures that you have the necessary funds in your buyer's account.",
    "On D-Day, the transaction is instantaneous. Make sure you get paid before you give the keys.",
    "Once the buyer has transferred the funds to you, you see your account credited instantly.",
    "You can send these funds to your bank account with one click from your smartphone.",
    "A one-time seller's rate of 29 euros.",
];
let sbtn=document.getElementById('seller');
let buybtn=document.getElementById('buyer');
function buyOption(e) {
    sbtn.style.color="#23cf5f";
    sbtn.style.backgroundColor="#f8f9fd";
    buybtn.style.color="white";
    buybtn.style.backgroundColor="#23cf5f";
    let list_why = document.getElementById("list-why");
    let heading=document.getElementById("ans-heading");
    heading.innerHTML="";
    heading.innerHTML="Buy without constraints";
    while (list_why.hasChildNodes()) {
      list_why.removeChild(list_why.firstChild);
    }
    for (let i = 0; i < buyer.length; i++) {
      let listitem = document.createElement("li");
      listitem.innerHTML = buyer[i];
      list_why.appendChild(listitem);
    }
  }
  
  function sellOption(e) {
    sbtn.style.color="white";
    sbtn.style.backgroundColor="#23cf5f";
    buybtn.style.color="#23cf5f";
    buybtn.style.backgroundColor="#f8f9fd";
    let list_why = document.getElementById("list-why");
    let heading=document.getElementById("ans-heading");
    heading.innerHTML="";
    heading.innerHTML="Sell safely"
    while (list_why.hasChildNodes()) {
      list_why.removeChild(list_why.firstChild);
    }
    for (let i = 0; i < seller.length; i++) {
      let listitem = document.createElement("li");
      listitem.innerHTML = seller[i];
      list_why.appendChild(listitem);
    }
  }
  
  let list_why=document.getElementById("list-why");
  console.log(list_why);
  for(let i=0;i<buyer.length;i++)
  {
      let list=document.createElement("li");
      list.innerHTML=buyer[i];
      list_why.appendChild(list);
  }
  