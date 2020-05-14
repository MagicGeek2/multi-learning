let myImage = document.querySelector("img")

myImage.onclick = function(){
	let mySrc = myImage.getAttribute("src") ; 
	if(mySrc === "./images/firefox.jpg"){
		myImage.setAttribute("src", "./images/firefox2.jpg") ; 
	}
	else {
		myImage.setAttribute("src", "./images/firefox.jpg") ; 
	}
}

let myHeading = document.querySelector("h1") ; 
let myButton = document.querySelector("button") ; 

function setUserName() {
	let myName = prompt("please input your name: ") ;
	if(!myName || myName === null){
		setUserName() ; 
	} 
	else {
		localStorage.setItem('name', myName) ; 
		myHeading.innerHTML = "Welcome to my own world! "+ myName ; 
	}
	
}

if(localStorage.getItem('name')){
	let storedName = localStorage.getItem('name') ; 
	myHeading.textContent = "Welcome to my own world! "+ storedName ; 
}

myButton.onclick = function(){
	setUserName() ; 
}