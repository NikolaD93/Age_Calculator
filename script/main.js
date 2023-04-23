const dayInput = document.querySelector('input[name="day"]');
const monthInput = document.querySelector('input[name="month"]');
const yearInput = document.querySelector('input[name="year"]');

const dayDisplay = document.getElementById("dayDisplay");
const monthDisplay = document.getElementById("monthDisplay");
const yearDisplay = document.getElementById("yearDisplay");

const dayWrapper = document.querySelector(".day-wrapper");
const monthWrapper = document.querySelector(".month-wrapper");
const yearWrapper = document.querySelector(".year-wrapper");

const form = document.querySelector("form");

const calculateAge = (e) => {
  e.preventDefault();

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  const inputDate = new Date(year, month - 1, day);

  const diffInMs = Date.now() - inputDate.getTime();

  const ageDate = new Date(diffInMs);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  if (day && month && year) {
    dayDisplay.textContent = days;
    monthDisplay.textContent = months;
    yearDisplay.textContent = years;
  } else {
    dayWrapper.classList.toggle("error", !day);
    monthWrapper.classList.toggle("error", !month);
    yearWrapper.classList.toggle("error", !year);
  }
};

dayInput.addEventListener("input", () => {
  dayWrapper.classList.remove("error");
});

monthInput.addEventListener("input", () => {
  monthWrapper.classList.remove("error");
});

yearInput.addEventListener("input", () => {
  yearWrapper.classList.remove("error");
});

form.addEventListener("submit", calculateAge);
