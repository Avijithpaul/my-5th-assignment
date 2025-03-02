
document.getElementById("discover-box").addEventListener('click', function () {
    window.location.href = "question.html"
})

const date = new Date();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const day = date.getDate().toString().padStart(2, '0');
const month = monthsOfYear[date.getMonth()];
const year = date.getFullYear();
const weekday = daysOfWeek[date.getDay()];

const formatDate = `${day} ${month}, ${year}`;

document.getElementById("calender").innerText = formatDate;
document.getElementById("week").innerText = weekday;

clickCompletedBtn("card-1-btn", "card-name-1");
clickCompletedBtn("card-2-btn", "card-name-2");
clickCompletedBtn("card-3-btn", "card-name-3");
clickCompletedBtn("card-4-btn", "card-name-4");
clickCompletedBtn("card-5-btn", "card-name-5");
clickCompletedBtn("card-6-btn", "card-name-6");


document.getElementById("history-btn").addEventListener("click", function () {
    document.getElementById("history-container").innerHTML = ``
})


const colors = ["#EFEBE3", "#F9EAC7", "#95D6A4", "#F2E8FF", "#DEF5FF"];
let i = 0;
document.getElementById("bg-color").addEventListener("click", function () {
    document.getElementById("body").style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
})