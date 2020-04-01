export const Utils = {
    setUTCDate : function(date) {
        var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(date);
        const dateObj = new Date(d);
        const monthIndex = dateObj.getMonth();
        const dayIndex = dateObj.getDay();
        return this.days[dayIndex] + ", " + this.months[monthIndex] + " " + dateObj.getDate() + "," + dateObj.getFullYear();

    },
     months :[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    days: [
        'Sunday',
        'Monday',
        'Tueday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
}
