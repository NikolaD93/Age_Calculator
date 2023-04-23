let dayInput = document.querySelector('input[name="day"]');
let monthInput = document.querySelector('input[name="month"]');
let yearInput = document.querySelector('input[name="year"]');

let dayDisplay = document.getElementById("dayDisplay");
let monthDisplay = document.getElementById("monthDisplay");
let yearDisplay = document.getElementById("yearDisplay");

let form = document.querySelector("form");

let day = "";
let month = "";
let year = "";


const handleFormSubmit = (e) => {
  e.preventDefault();

  day = dayInput.value;
  month = monthInput.value;
  year = yearInput.value;

  let inputDate = new Date(year, month - 1, day);
  
  let diffInMs = Date.now() - inputDate.getTime();

  let ageDate = new Date(diffInMs)
  let years = ageDate.getUTCFullYear() - 1970;
  let months = ageDate.getUTCMonth();
  let days = ageDate.getUTCDate() - 1;

  yearDisplay.textContent = years;
  monthDisplay.textContent = months;
  dayDisplay.textContent = days;

  dayInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
  dayInput.focus();
};

form.addEventListener("submit", handleFormSubmit);
