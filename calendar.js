document.addEventListener("DOMContentLoaded", function () {
    const prevMonthButton = document.querySelector(".prev-month");
    const nextMonthButton = document.querySelector(".next-month");
    const currentMonthHeader = document.getElementById("current-month");
    const calendarBody = document.getElementById("calendar-body");

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    function displayCalendar() {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        currentMonthHeader.textContent = `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(firstDay)} ${currentYear}`;

        let html = "";
        let day = 1;

        for (let i = 0; i < 6; i++) {
            html += "<tr>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startingDay) {
                    html += "<td></td>";
                } else if (day <= daysInMonth) {
                    const cellId = `cell-${day}`;
                    let classes = "";
                    if (day === currentDay && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
                        classes = "highlight";
                    }
                    if (day < 10) {
                        classes += " single-digit";
                    }
                    html += `<td id="${cellId}" class="${classes}">${day}</td>`;
                    day++;
                }
            }
            html += "</tr>";
        }

        calendarBody.innerHTML = html;
    }

    prevMonthButton.addEventListener("click", () => {
        if (currentMonth === 0) {
            currentYear--;
            currentMonth = 11;
        } else {
            currentMonth--;
        }
        displayCalendar();
    });

    nextMonthButton.addEventListener("click", () => {
        if (currentMonth === 11) {
            currentYear++;
            currentMonth = 0;
        } else {
            currentMonth++;
        }
        displayCalendar();
    });

    displayCalendar();
});
