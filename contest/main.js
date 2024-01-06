import data from './main.json' assert{type: 'json'}
let profile = document.querySelector(".profile")
let userName = document.querySelector(".userName")
let userAge = document.querySelector(".userAge")

for(let i =0; i++; i++){
    profile.innerHTML = data[i];
}