var messages = ["Secure", "Simplicity", "Adapted"];
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
var rank = 0;
var element = document.getElementById("type-msg");
function show() {
  element.innerHTML = messages[rank];
  rank == messages.length - 1 ? (rank = 0) : rank++;
  setTimeout(show, 1000);
}

function text(j) {
  var j = 0;
  if (j < messages.length) {
    element.innerHTML = messages[rank].charAt(j);
    j++;
    setTimeout((text) => j, 500);
  }
}

function buyOption(e) {
  let list_why = document.getElementById("list-why");
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
  let list_why = document.getElementById("list-why");
  while (list_why.hasChildNodes()) {
    list_why.removeChild(list_why.firstChild);
  }
  for (let i = 0; i < seller.length; i++) {
    let listitem = document.createElement("li");
    listitem.innerHTML = seller[i];
    list_why.appendChild(listitem);
  }
}

