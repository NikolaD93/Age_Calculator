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

const dayErrorMsg = document.querySelector(".day-error-message");
const monthErrorMsg = document.querySelector(".month-error-message");
const yearErrorMsg = document.querySelector(".year-error-message");
const dateErrorMsg = document.querySelector(".date-error-message");

const calculateAge = (e) => {
  e.preventDefault();

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  if (day && month && year) {
    if (day < 1 || day > 31) {
      dayWrapper.classList.add("error");
      dayErrorMsg.textContent = "Must be a valid day";
    } else {
      dayWrapper.classList.remove("error");
    }

    if (month < 1 || month > 12) {
      monthWrapper.classList.add("error");
      monthErrorMsg.textContent = "Must be a valid month";
    } else {
      monthWrapper.classList.remove("error");
    }

    if (year > new Date().getFullYear()) {
      yearWrapper.classList.add("error");
      yearErrorMsg.textContent = "Must be in the past";
    } else {
      yearWrapper.classList.remove("error");
    }

    if (!yearWrapper.classList.contains("error")) {
      const age = getAge(day, month, year);
      if (age) {
        dayDisplay.textContent = age.days;
        monthDisplay.textContent = age.months;
        yearDisplay.textContent = age.years;

        dayDisplay.classList.add("animate");
        monthDisplay.classList.add("animate");
        yearDisplay.classList.add("animate");
      } else {
        dayWrapper.classList.add("error");
        monthWrapper.classList.add("error");
        yearWrapper.classList.add("error");
        dayErrorMsg.textContent = "";
        monthErrorMsg.textContent = "";
        yearErrorMsg.textContent = "";
        // create element
        dateErrorMsg.textContent = "Must be a valid date";
      }
    }
  } else {
    dayWrapper.classList.toggle("error", !day);
    monthWrapper.classList.toggle("error", !month);
    yearWrapper.classList.toggle("error", !year);
  }
};

const getAge = (day, month, year) => {
  const inputDate = new Date(year, month - 1, day);
  if (
    inputDate.getDate() === parseInt(day) &&
    inputDate.getMonth() === parseInt(month) - 1 &&
    inputDate.getFullYear() === parseInt(year)
  ) {
    const diffInMs = Date.now() - inputDate.getTime();
    const ageDate = new Date(diffInMs);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    return { years, months, days };
  } else {
    return null;
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
