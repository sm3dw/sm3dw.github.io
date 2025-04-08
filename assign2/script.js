// Date() tutorial sourced from https://www.w3schools.com/js/js_date_methods.asp
let date = new Date();
let month = date.getMonth(); // grabs the current month as a number
console.log(document.getElementById("monthName"));
// JS HTML DOM tutorial sourced from https://www.w3schools.com/js/js_htmldom_html.asp
let header = document.getElementById("monthName");
let text = document.getElementById("monthDesc");

// switch tutorial sourced from https://www.w3schools.com/js/js_switch.asp
// this selects the correct text for the current month and then swaps it with the placeholder text
switch (month) {
    case 0: // 0 is January, 1 is Feburary, so on and so forth...
        header.innerHTML = "The current month is January";
        text.innerHTML = "January is the first month of the year in the Julian and Gregorian calendars. Its length is 31 days. The first day of the month is known as New Year's Day. It is, on average, the coldest month of the year within most of the Northern Hemisphere (where it is the second month of winter) and the warmest month of the year within most of the Southern Hemisphere (where it is the second month of summer). In the Southern hemisphere, January is the seasonal equivalent of July in the Northern hemisphere and vice versa.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/January'>Wikipedia</a>.";
        break;
    case 1:
        header.innerHTML = "The current month is February";
        text.innerHTML = "February is the second month of the year in the Julian and Gregorian calendars. The month has 28 days in common years and 29 in leap years, with the 29th day being called the leap day. February is the third and last month of meteorological winter in the Northern Hemisphere. In the Southern Hemisphere, February is the third and last month of meteorological summer, being the seasonal equivalent of August in the Northern Hemisphere. \nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/February'>Wikipedia</a>.";
        break;
    case 2:
        header.innerHTML = "The current month is March";
        text.innerHTML = "March is the third month of the year in both the Julian and Gregorian calendars. Its length is 31 days. In the Northern Hemisphere, the meteorological beginning of spring occurs on the first day of March. The March equinox on the 20 or 21 marks the astronomical beginning of spring in the Northern Hemisphere and the beginning of autumn in the Southern Hemisphere, where September is the seasonal equivalent of the Northern Hemisphere's March.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/March'>Wikipedia</a>.";
        break;
    case 3:
        header.innerHTML = "The current month is April";
        text.innerHTML = "April is the fourth month of the year in the Gregorian and Julian calendars. Its length is 30 days. April is commonly associated with the season of spring in the Northern Hemisphere, and autumn in the Southern Hemisphere, where it is the seasonal equivalent to October in the Northern Hemisphere and vice versa.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/April'>Wikipedia</a>.";
        break;
    case 4:
        header.innerHTML = "The current month is May";
        text.innerHTML = "May is the fifth month of the year in the Julian and Gregorian calendars. Its length is 31 days. May is a month of spring in the Northern Hemisphere, and autumn in the Southern Hemisphere. Therefore, May in the Southern Hemisphere is the seasonal equivalent of November in the Northern Hemisphere and vice versa. Late May typically marks the start of the summer vacation season in the United States (Memorial Day) and Canada (Victoria Day) that ends on Labor Day, the first Monday of September.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/May'>Wikipedia</a>.";
        break;
    case 5:
        header.innerHTML = "The current month is June";
        text.innerHTML = "June—abbreviated Jun—is the sixth month of the year in the Julian and Gregorian calendars—the latter the most widely used calendar in the world. Its length is 30 days. June succeeds May and precedes July. This month marks the start of summer in the Northern Hemisphere and contains the summer solstice, which is the day with the most daylight hours. In the Southern Hemisphere, June is the start of winter and contains the winter solstice, the day with the fewest hours of daylight out of the year.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/June'>Wikipedia</a>.";
        break;
    case 6:
        header.innerHTML = "The current month is July";
        text.innerHTML = "July is the seventh month of the year in the Julian and Gregorian calendars. Its length is 31 days. It was named by the Roman Senate in honour of Roman general Julius Caesar in 44 B.C., being the month of his birth. Before then it was called Quintilis, being the fifth month of the calendar that started with March. It is on average the warmest month in most of the Northern Hemisphere, where it is the second month of summer, and the coldest month in much of the Southern Hemisphere, where it is the second month of winter. The second half of the year commences in July. In the Southern Hemisphere, July is the seasonal equivalent of January in the Northern hemisphere. \"Dog days\" are considered to begin in early July in the Northern Hemisphere, when the hot sultry weather of summer usually starts. Spring lambs born in late winter or early spring are usually sold before 1 July.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/July'>Wikipedia</a>.";
        break;
    case 7:
        header.innerHTML = "The current month is August";
        text.innerHTML = "August is the eighth month of the year in the Julian and Gregorian calendars. Its length is 31 days. In the Southern Hemisphere, August is the seasonal equivalent of February in the Northern Hemisphere. In the Northern Hemisphere, August falls in summer. In the Southern Hemisphere, the month falls during winter. In many European countries, August is the holiday month for most workers. Numerous religious holidays occurred during August in ancient Rome. Certain meteor showers take place in August. The Kappa Cygnids occur in August, with yearly dates varying. The Alpha Capricornids meteor shower occurs as early as July 10 and ends around August 10. The Southern Delta Aquariids occur from mid-July to mid-August, with the peak usually around July 28–29. The Perseids, a major meteor shower, typically takes place between July 17 and August 24, with the peak days varying yearly. The star cluster of Messier 30 is best observed around August.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/August'>Wikipedia</a>.";
        break;
    case 8:
        header.innerHTML = "The current month is September";
        text.innerHTML = "September is the ninth month of the year in the Julian and Gregorian calendars. Its length is 30 days. September in the Northern Hemisphere and March in the Southern Hemisphere are seasonally equivalent. In the Northern hemisphere, the beginning of the meteorological autumn is on 1 September. In the Southern hemisphere, the beginning of the meteorological spring is on 1 September. September marks the beginning of the ecclesiastical year in the Eastern Orthodox Church. It is the start of the academic year in many countries of the northern hemisphere, in which children go back to school after the summer break, sometimes on the first day of the month. Some Libras and Virgos are born in September, with Virgos being born on September 1st through September 22nd and Libras September 23rd through September 30.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/September'>Wikipedia</a>.";
        break;
    case 9:
        header.innerHTML = "The current month is October";
        text.innerHTML = "October is the tenth month of the year in the Julian and Gregorian calendars. Its length is 31 days. The eighth month in the old calendar of Romulus c. 750 BC, October retained its name (from Latin and Greek ôctō meaning 'eight') after January and February were inserted into the calendar that had originally been created by the Romans. In Ancient Rome, one of three Mundus patet would take place on October 5, Meditrinalia October 11, Augustalia on October 12, October Horse on October 15, and Armilustrium on October 19. These dates do not correspond to the modern Gregorian calendar. Among the Anglo-Saxons, it was known as Winterfylleth (Ƿinterfylleþ), because at this full moon, winter was supposed to begin.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/October'>Wikipedia</a>.";
        break;
    case 10:
        header.innerHTML = "The current month is November";
        text.innerHTML = "November is the eleventh and penultimate month of the year in the Julian and Gregorian calendars. Its length is 30 days. November was the ninth month of the calendar of Romulus c. 750 BC. November retained its name (from the Latin novem meaning 'nine') when January and February were added to the Roman calendar. November is a month of late spring in the Southern Hemisphere and late autumn in the Northern Hemisphere. Therefore, November in the Southern Hemisphere is the seasonal equivalent of May in the Northern Hemisphere and vice versa. In Ancient Rome, Ludi Plebeii was held from November 4–17, Epulum Jovis was held on November 13 and Brumalia celebrations began on November 24. These dates do not correspond to the modern Gregorian calendar.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/November'>Wikipedia</a>.";
        break;
    case 11:
        header.innerHTML = "The current month is December";
        text.innerHTML = "December is the twelfth and final month of the year in the Julian and Gregorian calendars. Its length is 31 days. December's name derives from the Latin word decem (meaning ten) because it was originally the tenth month of the year in the calendar of Romulus c. 750 BC, which began in March. The winter days following December were not included as part of any month. Later, the months of January and February were created out of the monthless period and added to the beginning of the calendar, but December retained its name.\nInfo quoted directly from <a href='https://en.wikipedia.org/wiki/December'>Wikipedia</a>.";
        break;
}