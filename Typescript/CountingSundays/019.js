function countFirstOfMonthSundays() {
    var count = 0;
    var dayOfWeek = 1; // January 1, 1901 was a Tuesday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    for (var year = 1901; year <= 2000; year++) {
        for (var month = 1; month <= 12; month++) {
            // Check if it's a Sunday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
            if (dayOfWeek === 0) {
                count++;
            }
            // Get the number of days in the current month
            var daysInMonth = getDaysInMonth(month, year);
            // Update the day of the week for the next month
            dayOfWeek = (dayOfWeek + daysInMonth) % 7;
        }
    }
    return count;
}
function getDaysInMonth(month, year) {
    if (month === 2) {
        // February
        return isLeapYear(year) ? 29 : 28;
    }
    else if ([4, 6, 9, 11].includes(month)) {
        // April, June, September, November
        return 30;
    }
    else {
        // All other months
        return 31;
    }
}
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
var count = countFirstOfMonthSundays();
console.log("Number of Sundays that fell on the first of the month during the twentieth century: ".concat(count));
// run tsc 019.ts to get the nodejs file
