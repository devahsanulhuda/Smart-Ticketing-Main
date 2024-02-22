// const ticket = document.getElementsByClassName('ticket');
// for (const seat of ticket ) {

//     seat.addEventListener('click', function (e) {



//         // seat limits
//         const firstSeatDownCount = getConvertedValue('seat-downCount');
//         if (firstSeatDownCount - 1 < 0) {
//             alert('limit are finished');
//             return;
//         }

//         // update seats
//         const seatCount = getConvertedValue('seat-count');
//         const seats = seatCount + 1 ;
//         document.getElementById('seat-count').innerText = seats;



//         // update seat downCount 
//         const seatDownCount = getConvertedValue('seat-downCount');
//         const seatDown = seatDownCount - 1;
//         document.getElementById('seat-downCount').innerText = seatDown;


//         // same ticket can buy once and background color
//         e.target.setAttribute('disabled', false);
//         e.target.style.backgroundColor = '#1DD100';


//         // append child's for add cart seats-ticket

//         const seatTitle = e.target.innerText;
//         const price = 550;

//         const selectedSeat = document.getElementById('selected-seat');

//         const li = document.createElement('li');
//         li.style.display = "flex"
//         li.style.justifyContent = "space-between"

//         const p = document.createElement('p');
//         p.innerText = seatTitle;
//         const p1 = document.createElement('p');
//         p1.innerText = 'Economy';
//         const p2 = document.createElement('p');
//         p2.innerText = price;

//         li.appendChild(p);
//         li.appendChild(p1);
//         li.appendChild(p2);
//         selectedSeat.appendChild(li);

//         const selected = selectedSeat.appendChild(li);

//         // calling function of total and grand-total cost
//         updatedTotalCost(price);
//         updatedGrandTotalCost();



//     })
// }


// // form


// const inputs = document.getElementsByClassName('input');
// const nam = document.getElementById('name');
// const number = document.getElementById('number');
// const totalCostId = getConvertedValue('total-cost');
// console.log(number);
// const submitButton = document.getElementById('submit');
// for (const input of inputs) {
//     input.addEventListener('keyup', function () {
//         const seatCount = getConvertedValue('seat-count');
//         const submit = submitButton.disabled = false ;


        
//             if (nam.value === "" || number.value === "") {
//                 submitButton.disabled = true;

//             }


//             if (nam.value.length < 5 || number.value.length < 11) {
//                 submitButton.disabled = true;

//             }

//             else {
//                 if(submit === true) {
//                     next();
                  
                
//                 }

//             }
//     });

// }


const tickets = document.querySelectorAll(".ticket");

let totalSeat = 39;
let seatCount = 1;

let totalPrice = 0;


for (let index = 0; index < tickets.length; index++) {
  const ticket = tickets[index];

  ticket.addEventListener("click", function () {
 

   
    ticket.style.background = "#1DD100";
    ticket.style.color = "#FFFFFF";
    const ticketClass = ticket.innerText;



   

    const titleContainer = document.getElementById("title-container");
    // console.log(titleContainer);

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";

    const p1 = document.createElement("p");
    p1.innerText = ticketClass;

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






