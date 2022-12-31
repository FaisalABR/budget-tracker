window.addEventListener("load", () => {
  //Get the element
  const inputAmount = document.querySelector(".amount");
  const inputDate = document.getElementById("date-time");
  const balance = document.getElementById("balance");
  const form = document.getElementById("form");
  const trackerList = document.querySelector('section[class="tracker-list"]');
  console.log(balance.innerText);
  let total = 0;
  console.log(inputAmount);
  //Give event when we submit "Add Transaction"
  form.addEventListener("submit", (e) => {
    const budgetType = document.querySelector('input[type="radio"]:checked');
    e.preventDefault();

    let amount = parseInt(inputAmount?.value || 0);
    let type = budgetType?.value || "";
    let date = inputDate.value;
    console.log(`Ini nilai default amount: ${amount}`);
    console.log(`Ini nilai default type: ${type}`);
    console.log(`Ini nilai default date: ${date}`);
    let trackerItem = document.createElement("div");
    trackerItem.classList.add("tracker-item");

    if (amount === 0) {
      alert("Masukkan data terlebih dahulu");
    } else if (type === "") {
      alert("Masukkan type budget");
    } else if (date === "") {
      alert("Masukkan tanggal");
    } else {
      // For div income value
      let incomeValue = document.createElement("div");
      incomeValue.classList.add("income-value");
      incomeValue.innerText = `Rp.${amount}`;

      // For div income status
      let incomeStatus = document.createElement("div");
      incomeStatus.classList.add("income-status");

      let dateTracker = document.createElement("p");
      dateTracker.innerHTML = date;

      let typeBudgTracker = document.createElement("p");
      typeBudgTracker.innerText = type;

      if (type === "income") {
        typeBudgTracker.style.color = "#0bda51";
        total += amount;
      } else if (type === "invesment") {
        typeBudgTracker.style.color = "#ffaa33";
        total -= amount;
      } else if (type === "expense") {
        typeBudgTracker.style.color = "#eb5353";
        total -= amount; //for totaling the balance
      }

      incomeStatus.appendChild(dateTracker);
      incomeStatus.appendChild(typeBudgTracker);

      //Insert all element that we make to div tracker itm
      trackerItem.appendChild(incomeValue);
      trackerItem.appendChild(incomeStatus);

      //Insert tracker item to tracker list
      trackerList.appendChild(trackerItem);

      //Insert the total to the current balance
      if (total < 0) {
        total = 0;
        alert("You are in sufficient balance");
      }
      balance.innerText = total;
      inputAmount.value = "";
    }
    // // For div income value
    // let incomeValue = document.createElement("div");
    // incomeValue.classList.add("income-value");
    // incomeValue.innerText = `Rp.${amount}`;

    // // For div income status
    // let incomeStatus = document.createElement("div");
    // incomeStatus.classList.add("income-status");

    // let dateTracker = document.createElement("p");
    // dateTracker.innerHTML = date;

    // let typeBudgTracker = document.createElement("p");
    // typeBudgTracker.innerText = type;

    // if (type === "income") {
    //   typeBudgTracker.style.color = "#0bda51";
    //   total += amount;
    // } else if (type === "invesment") {
    //   typeBudgTracker.style.color = "#ffaa33";
    //   total -= amount;
    // } else if (type === "expense") {
    //   typeBudgTracker.style.color = "#eb5353";
    //   total -= amount; //for totaling the balance
    // }

    // incomeStatus.appendChild(dateTracker);
    // incomeStatus.appendChild(typeBudgTracker);

    // //Insert all element that we make to div tracker itm
    // trackerItem.appendChild(incomeValue);
    // trackerItem.appendChild(incomeStatus);

    // //Insert tracker item to tracker list
    // trackerList.appendChild(trackerItem);

    // //Insert the total to the current balance
    // if (total < 0) {
    //   total = 0;
    //   alert("You are in sufficient balance");
    // }
    // balance.innerText = total;
    // inputAmount.value = "";
  });
});
