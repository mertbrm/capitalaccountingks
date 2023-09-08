const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcon = document.querySelectorAll(".calendar-icons span");

let currYear = new Date().getFullYear();
let currMonth = new Date().getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    const date = new Date(currYear, currMonth, 1);
    let firstDayofMonth = date.getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        let isTwentieth = i % 20 === 0 ? "twentieth" : "";
        liTag += `<li class="${isToday} ${isTwentieth}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "calendar-prev") {
            currMonth--;
            if (currMonth < 0) {
                currMonth = 11;
                currYear--;
            }
        } else {
            currMonth++;
            if (currMonth > 11) {
                currMonth = 0;
                currYear++;
            }
        }

        renderCalendar();
    });
});



