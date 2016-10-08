function calendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);

    let numberOfDaysPrevMonth = new Date(year, month - 1, 0).getDate();
    let fullCalendarCells = 6 * 7;
    let daysToDisplayOfPrevMonth = new Date(year, month - 1, 1).getDay();
    let daysToDisplayOfCurrentMonth = new Date(year, month, 0).getDate();
    let daysToDisplayOfNextMonth = fullCalendarCells - (daysToDisplayOfCurrentMonth + daysToDisplayOfPrevMonth);
    let currentDay = 1;
    let currentDayOfNextMonth = 1;

    let html = '<table>\n';
    html += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    for (let i = 0; i < 6; i++) {
        if (currentDay > daysToDisplayOfCurrentMonth) {
            break;
        }

        html += '  <tr>';
        for (let j = 0; j < 7; j++) {
            if (daysToDisplayOfPrevMonth > 0) {
                html += `<td class="prev-month">${numberOfDaysPrevMonth - daysToDisplayOfPrevMonth + 1}</td>`;
                daysToDisplayOfPrevMonth--;
            } else if (currentDay <= daysToDisplayOfCurrentMonth) {
                if (currentDay == day) {
                    html += `<td class="today">${currentDay}</td>`;
                } else {
                    html += `<td>${currentDay}</td>`;
                }
                currentDay++;
            } else {
                html += `<td class="next-month">${currentDayOfNextMonth}</td>`;
                currentDayOfNextMonth++;
            }
        }

        html += '</tr>\n';
    }

    html += '</table>';

    return html;
}


console.log(calendar(['4', '9', '2016']));