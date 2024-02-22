

const tickets = document.querySelectorAll(".ticket");

let totalSeat = 39;
let seatCount = 1;

let totalPrice = 0;


for (let index = 0; index < tickets.length; index++) {
  const ticket = tickets[index];

  ticket.addEventListener("click", function (e) {
 
  if(seatCount > 4){
    alert('limit are finished');
    return;
  }
    ticket.style.background = "#1DD100";
    ticket.style.color = "#FFFFFF";
    const ticketSerialNumber = ticket.innerText;

    const titleContainer = document.getElementById("title-container");
    // console.log(titleContainer);

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";

    const p1 = document.createElement("p");
    p1.innerText = ticketSerialNumber;

    const p2 = document.createElement("p");
    p2.innerText = "Economy";

    const price = document.createElement("p");
    const ticketPrice = parseFloat("550");
    price.innerText = ticketPrice;


    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(price);
    titleContainer.appendChild(li);

    totalPrice += ticketPrice;
    document.getElementById('totalPrice').innerText = totalPrice;

    // count

    document.getElementById("Total-Seat").innerText = totalSeat;
    totalSeat = totalSeat - 1;

    document.getElementById("seat-count").innerText = seatCount;
    seatCount = seatCount + 1;

  });

}

// Coupon code

const applyBtn = document.getElementById("apply");
// console.log(applyBtn);
applyBtn.addEventListener("click", function () {
  const couponElement = document.getElementById("input").value;
  const couponCode = couponElement.split(" ").join(" ").toUpperCase();
  const discountElement = document.getElementById("grand-total");
  

  if (couponCode === "NEW15") {
    const discountAmount = totalPrice * 15/100;
    discountElement.innerText = totalPrice - discountAmount;
    document.getElementById("input").value = "";
  } else if (couponCode === "COUPLE20") {
    const discountAmount = totalPrice * 20/100;
    discountElement.innerText = totalPrice - discountAmount;
    document.getElementById("input").value = " ";
  } else {
    alert("Please Enter The Valid Coupon Code");
  }
});

// from

const inputs = document.getElementsByClassName('input');
const passengerName = document.getElementById('name');
const number = document.getElementById('number');
const submitButton = document.getElementById('submit');
for (const input of inputs) {
    input.addEventListener('keyup', function () {
        const submit = submitButton.disabled = false;
        
            if (passengerName.value === "" || number.value === "") {
                submitButton.disabled = true;
            }

            if (passengerName.value.length < 5 || number.value.length < 11) {
                submitButton.disabled = true;
            }

            else {
                if(submit === true) {
                    my_modal_5.showModal();               
                }
            }
    });

}






