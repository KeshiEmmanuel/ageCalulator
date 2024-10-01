const currentYear = new Date().getFullYear();
const userInputs = document.querySelectorAll(".block");
const userInputDay = document.querySelector(".dob-day");
const userInputMonth = document.querySelector(".dob-month");
const userInputYear = document.querySelector(".dob-year");
const invaildDay = document.querySelector(".invaild1");
const invaildMonth = document.querySelector(".invaild2");
const invaildYear = document.querySelector(".invaild3");
const displayUserAgeinYears = document.querySelector(".user-age-in-years");
const displayUserAgeinMonth = document.querySelector(".user-age-in-months");
const displayUserAgeinDays = document.querySelector(".user-age-in-days");
userInputs.forEach((userInput) =>
    userInput.addEventListener("input", (e) => {
        if (e.target.className.includes("dob-day")) {
            const userAgeDay = Math.abs(todaysDateDay - parseInt(userInputDay.value));

            displayUserAgeinDays.textContent = userAgeDay;
            if (e.target.value > 30) {
                invaildDay.classList.add("invaild-day");
            } else {
                invaildDay.classList.remove("invaild-day");
            }
        }
        if (e.target.className.includes("dob-month")) {
            const userAgeMonth = Math.abs(todaysDateMonth - parseInt(userInputMonth.value));
            displayUserAgeinMonth.textContent = userAgeMonth;
            console.log("Month");
            if (e.target.value > 12) {
                invaildMonth.classList.add("invaild-month");
            } else {
                invaildMonth.classList.remove("invaild-month");
            }
        }
        if (e.target.className.includes("dob-year")) {
            const userAgeYears = Math.abs(todaysDateYear - parseInt(userInputYear.value));
            displayUserAgeinYears.textContent = userAgeYears;
            console.log(e.target.value);
            if (e.target.value > currentYear) {
                invaildYear.classList.add("invaild-year");
            } else {
                invaildYear.classList.remove("invaild-year");
            }
        }
    })
);

const todaysDateMonth = new Date().getMonth();
const todaysDateDay = new Date().getDay();
const todaysDateYear = new Date().getFullYear();
