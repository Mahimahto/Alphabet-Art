import data from './main.json' assert{type: 'json'}
//user-profile picture
let profile1 = document.querySelector("#profile-1")
let profile2 = document.querySelector("#profile-2")
let profile3 = document.querySelector("#profile-3")
let profile4 = document.querySelector("#profile-4")

profile1.setAttribute("src",data[0].src)
profile2.setAttribute("src",data[1].src)
profile3.setAttribute("src",data[2].src)
profile4.setAttribute("src",data[3].src)

//user-name
let userName1 = document.querySelector("#userName-1")
let userName2 = document.querySelector("#userName-2")
let userName3 = document.querySelector("#userName-3")
let userName4 = document.querySelector("#userName-4")

userName1.innerText = data[0].name
userName2.innerText = data[1].name
userName3.innerText = data[2].name
userName4.innerText = data[3].name

//user-Age
let userAge1 = document.querySelector("#userAge-1")
let userAge2 = document.querySelector("#userAge-2")
let userAge3 = document.querySelector("#userAge-3")
let userAge4 = document.querySelector("#userAge-4")

userAge1.innerText = data[0].age
userAge2.innerText = data[1].age
userAge3.innerText = data[2].age
userAge4.innerText = data[3].age


