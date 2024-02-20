





const tickets = document.querySelectorAll(".ticket");

let totalSeat = 39;
let seatCount = 1;


for (let index = 0; index  < tickets.length; index++) {
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
    price.innerText = 550;

    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(price);
    titleContainer.appendChild(li);

// count
    
    document.getElementById("Total-Seat").innerText = totalSeat;
    totalSeat = totalSeat - 1;
    
    document.getElementById("seat-count").innerText = seatCount;
    seatCount = seatCount + 1;

  });

}