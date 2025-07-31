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

        document.addEventListener("DOMContentLoaded", function () {
            document.title = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
}).replace(',', '');

            const datescontainer = document.getElementById('strdata');          

            function generatecalendar()
            {
                const currentdate = new Date();
                const daysInMonth = new Date(currentdate.getFullYear(), currentdate.getMonth() + 1, 0).getDate();
                const firstday = new Date(currentdate.getFullYear(), currentdate.getMonth(), 1).getDay();
                datescontainer.innerHTML = '';
                var Mntname = monthNames[currentdate.getMonth()];
                var FYear = currentdate.getFullYear();
                document.getElementById("todaydt").innerHTML = Mntname + " " + FYear;
                for (let i = 0; i < firstday; i++)
                {                    
                    datescontainer.innerHTML += `<div><span></span></div>`;
                }
                for (let j = 1; j <= daysInMonth; j++)
                {
                    if (j === currentdate.getDate())
                    {
                        datescontainer.innerHTML += `<div class='tday'><span>${j}</span></div>`;
                    }
                    else {
                        datescontainer.innerHTML += `<div><span>${j}</span></div>`;
                    }
                }
            }
            generatecalendar();

        });

        function NxtMNTcalendar()
        {
            const datescontainer = document.getElementById('strdata');
            let tddate = "";
            if (document.getElementById('HDNNxtDATE').value == "")
            {
                tddate = new Date();
                tddate.setDate(tddate.getDate() + 1);// Move to next Day
                tddate.setMonth(tddate.getMonth() + 1); // Move to next month
                document.getElementById('HDNNxtDATE').value = tddate;
            }
            else {
                tddate = document.getElementById('HDNNxtDATE').value;
                tddate = new Date(tddate);
                tddate.setDate(tddate.getDate() + 1);// Move to next Day
                tddate.setMonth(tddate.getMonth() + 1); // Move to next month
                document.getElementById('HDNNxtDATE').value = tddate;
            }
            const currentdate = new Date(tddate);
            const daysInMonth = new Date(currentdate.getFullYear(), currentdate.getMonth() + 1, 0).getDate();
            const firstday = new Date(currentdate.getFullYear(), currentdate.getMonth(), 1).getDay();
            datescontainer.innerHTML = '';
            var Mntname = monthNames[currentdate.getMonth()];
            var FYear = currentdate.getFullYear();
            if (document.getElementById("todaydt") != null) {
                document.getElementById("todaydt").innerHTML = Mntname + " " + FYear;
            }
            for (let i = 0; i < firstday; i++)
            {
                datescontainer.innerHTML += `<div><span></span></div>`;
            }
            for (let j = 1; j <= daysInMonth; j++) {
                datescontainer.innerHTML += `<div><span>${j}</span></div>`;
            }
        }

        function PrevMNTcalendar() {
            const datescontainer = document.getElementById('strdata');
            let tddate = "";
            if (document.getElementById('HDNNxtDATE').value == "") {
                tddate = new Date();
                tddate.setDate(tddate.getDate() - 1);// Move to Back Day
                tddate.setMonth(tddate.getMonth() - 1); // Move to Back month
                document.getElementById('HDNNxtDATE').value = tddate;
            }
            else {
                tddate = document.getElementById('HDNNxtDATE').value;
                tddate = new Date(tddate);
                tddate.setDate(tddate.getDate() - 1);// Move to Back Day
                tddate.setMonth(tddate.getMonth() - 1); // Move to Back month
                document.getElementById('HDNNxtDATE').value = tddate;
            }
            const currentdate = new Date(tddate);
            const daysInMonth = new Date(currentdate.getFullYear(), currentdate.getMonth() + 1, 0).getDate();
            const firstday = new Date(currentdate.getFullYear(), currentdate.getMonth(), 1).getDay();
            datescontainer.innerHTML = '';
            var Mntname = monthNames[currentdate.getMonth()];
            var FYear = currentdate.getFullYear();
            if (document.getElementById("todaydt") != null)
            {
                document.getElementById("todaydt").innerHTML = Mntname + " " + FYear;
            }
            for (let i = 0; i < firstday; i++) {
                datescontainer.innerHTML += `<div><span></span></div>`;
            }
            for (let j = 1; j <= daysInMonth; j++) {
                datescontainer.innerHTML += `<div><span>${j}</span></div>`;
            }
        }