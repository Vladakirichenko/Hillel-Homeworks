
// Task 5

const year = prompt('Your year of birth?') 
const city = prompt('Your city?') 
const favSport = prompt('Your favorite sport?')
let currentYear = new Date().getFullYear()
let age;
let sport;

if (isNaN(year) || year === '') {
    age = 'Why did not you input year?'
} else if (year == null) {
    age = 'Why did not you input year?'
} else {
    age = currentYear - year
}

switch(favSport) {
    case 'Football' :
        sport = 'Cool! Want to be like Ronaldo?'
        break;
    case 'Tennis' :
        sport = 'Cool! Want to be like Serena Williams?'
        break;
    case 'Basketball' :
        sport = 'Cool! Want to be like Jordan?'
        break;
    case '' :
        sport = 'Why did not you input sport?'
        break;
    case null :
        sport = 'Why did not you input sport?'
        break;
    default :
        sport = 'Cool! It`s interesting sport!'
}   

switch(city) {
    case 'Kiev' :
        alert(`Your age : ${age}\nYou living in capital ${city}\n${sport}`)
        break;
    case 'London' :
        alert(`Your age : ${age}\nYou living in capital ${city}\n${sport}`)
        break;
    case 'Washington' :
        alert(`Your age :${age}\nYou living in capital ${city}\n${sport}`)
        break;
    case '' :
        alert(`Your age : ${age}\nWhy you did not input city?\n${sport}`)
        break;
    case null :
        alert(`Your age : ${age}\nWhy you did not input city?\n${sport}`)
        break;
    default :
        alert(`Your age : ${age}\nYou living in city ${city}\n${sport}`)
}
