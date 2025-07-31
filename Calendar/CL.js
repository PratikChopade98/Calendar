//  const monthNames = {
//             0: 'January',
//             1: 'February',
//             2: 'March',
//             3: 'April',
//             4: 'May',
//             5: 'June',
//             6: 'July',
//             7: 'August',
//             8: 'September',
//             9: 'October',
//             10: 'November',
//             11: 'December'
//         };

//         document.addEventListener("DOMContentLoaded", function () {
//             document.title = new Date().toLocaleDateString('en-GB', {
//     weekday: 'long',
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric'
// }).replace(',', '');

//             const datescontainer = document.getElementById('strdata');          

//             function generatecalendar()
//             {
//                 const currentdate = new Date();
//                 const daysInMonth = new Date(currentdate.getFullYear(), currentdate.getMonth() + 1, 0).getDate();
//                 const firstday = new Date(currentdate.getFullYear(), currentdate.getMonth(), 1).getDay();
//                 datescontainer.innerHTML = '';
//                 var Mntname = monthNames[currentdate.getMonth()];
//                 var FYear = currentdate.getFullYear();
//                 document.getElementById("todaydt").innerHTML = Mntname + " " + FYear;
//                 for (let i = 0; i < firstday; i++)
//                 {                    
//                     datescontainer.innerHTML += `<div><span></span></div>`;
//                 }
//                 for (let j = 1; j <= daysInMonth; j++)
//                 {
//                     if (j === currentdate.getDate())
//                     {
//                         datescontainer.innerHTML += `<div class='tday'><span>${j}</span></div>`;
//                     }
//                     else {
//                         datescontainer.innerHTML += `<div><span>${j}</span></div>`;
//                     }
//                 }
//             }
//             generatecalendar();

//         });

//         function NxtMNTcalendar()
//         {
//             const datescontainer = document.getElementById('strdata');
//             let tddate = "";
//             if (document.getElementById('HDNNxtDATE').value == "")
//             {
//                 tddate = new Date();
//                 tddate.setDate(tddate.getDate() + 1);// Move to next Day
//                 tddate.setMonth(tddate.getMonth() + 1); // Move to next month
//                 document.getElementById('HDNNxtDATE').value = tddate;
//             }
//             else {
//                 tddate = document.getElementById('HDNNxtDATE').value;
//                 tddate = new Date(tddate);
//                 tddate.setDate(tddate.getDate() + 1);// Move to next Day
//                 tddate.setMonth(tddate.getMonth() + 1); // Move to next month
//                 document.getElementById('HDNNxtDATE').value = tddate;
//             }
//             const currentdate = new Date(tddate);
//             const daysInMonth = new Date(currentdate.getFullYear(), currentdate.getMonth() + 1, 0).getDate();
//             const firstday = new Date(currentdate.getFullYear(), currentdate.getMonth(), 1).getDay();
//             datescontainer.innerHTML = '';
//             var Mntname = monthNames[currentdate.getMonth()];
//             var FYear = currentdate.getFullYear();
//             if (document.getElementById("todaydt") != null) {
//                 document.getElementById("todaydt").innerHTML = Mntname + " " + FYear;
//             }
//             for (let i = 0; i < firstday; i++)
//             {
//                 datescontainer.innerHTML += `<div><span></span></div>`;
//             }
//             for (let j = 1; j <= daysInMonth; j++) {
//                 datescontainer.innerHTML += `<div><span>${j}</span></div>`;
//             }
//         }

//         function PrevMNTcalendar() {
//             const datescontainer = document.getElementById('strdata');
//             let tddate = "";
//             if (document.getElementById('HDNNxtDATE').value == "") {
//                 tddate = new Date();
//                 tddate.setDate(tddate.getDate() - 1);// Move to Back Day
//                 tddate.setMonth(tddate.getMonth() - 1); // Move to Back month
//                 document.getElementById('HDNNxtDATE').value = tddate;
//             }
//             else {
//                 tddate = document.getElementById('HDNNxtDATE').value;
//                 tddate = new Date(tddate);
//                 tddate.setDate(tddate.getDate() - 1);// Move to Back Day
//                 tddate.setMonth(tddate.getMonth() - 1); // Move to Back month
//                 document.getElementById('HDNNxtDATE').value = tddate;
//             }
//             const currentdate = new Date(tddate);
//             const daysInMonth = new Date(currentdate.getFullYear(), currentdate.getMonth() + 1, 0).getDate();
//             const firstday = new Date(currentdate.getFullYear(), currentdate.getMonth(), 1).getDay();
//             datescontainer.innerHTML = '';
//             var Mntname = monthNames[currentdate.getMonth()];
//             var FYear = currentdate.getFullYear();
//             if (document.getElementById("todaydt") != null)
//             {
//                 document.getElementById("todaydt").innerHTML = Mntname + " " + FYear;
//             }
//             for (let i = 0; i < firstday; i++) {
//                 datescontainer.innerHTML += `<div><span></span></div>`;
//             }
//             for (let j = 1; j <= daysInMonth; j++) {
//                 datescontainer.innerHTML += `<div><span>${j}</span></div>`;
//             }
//         }


        

const monthNames = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};

let selectedDate = new Date();

document.addEventListener("DOMContentLoaded", function () {
    document.title = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).replace(',', '');

    generateCalendar(selectedDate);
});

function generateCalendar(date) {
    const datescontainer = document.getElementById('strdata');
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    datescontainer.innerHTML = '';

    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();
    document.getElementById("todaydt").innerHTML = `${monthName} ${year}`;

    // Padding for first row
    for (let i = 0; i < firstDay; i++) {
        datescontainer.innerHTML += `<div><span></span></div>`;
    }

    // Generate each day
    for (let j = 1; j <= daysInMonth; j++) {
        const tempDate = new Date(date.getFullYear(), date.getMonth(), j);
        const dayOfWeek = tempDate.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        const isToday = (
            j === new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()
        );

        const classList = [
            isToday ? 'tday' : '',
            isWeekend ? 'weekend' : ''
        ].join(' ').trim();

        datescontainer.innerHTML += `<div class="${classList}"><span>${j}</span></div>`;
    }

    // Store current month for next/prev navigation
    document.getElementById('HDNNxtDATE').value = date.toISOString();
    highlightWeekRowOfToday();
}

function NxtMNTcalendar() {
    let tddate = document.getElementById('HDNNxtDATE').value;
    selectedDate = tddate ? new Date(tddate) : new Date();
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    generateCalendar(selectedDate);
    highlightWeekRowOfToday();
}

function PrevMNTcalendar() {
    let tddate = document.getElementById('HDNNxtDATE').value;
    selectedDate = tddate ? new Date(tddate) : new Date();
    selectedDate.setMonth(selectedDate.getMonth() - 1);
    generateCalendar(selectedDate);
    highlightWeekRowOfToday();
}

function highlightWeekRowOfToday() {
    const cells = document.querySelectorAll('#strdata > div');
    let tdayIndex = -1;

    cells.forEach((cell, index) => {
        if (cell.classList.contains('tday')) {
            tdayIndex = index;
        }
    });

    if (tdayIndex >= 0) {
        const start = tdayIndex - (tdayIndex % 7); // beginning of the row
        const end = start + 7;

        for (let i = start; i < end; i++) {
            cells[i].classList.add('highlight-row');
        }
    }
}
