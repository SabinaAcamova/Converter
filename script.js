let leftMoneybuttons = document.querySelectorAll(".buttons-left button");
let rightMoneybuttons = document.querySelectorAll(".buttons-right button");
let leftInput = document.querySelector("#left-input");
let rightInput = document.querySelector("#right-input");
let base;
let convertTo;


function convertLeft() {
  let str;
  let leftvalue = leftInput.value;
  leftMoneybuttons.forEach((e) => {
    var style = window
      .getComputedStyle(e, "")
      .getPropertyValue("background-color");
    if (e.classList.contains("selected")) {
      
      base = e.innerHTML;
      console.log(base, leftvalue);
    }
  });

  rightMoneybuttons.forEach((e) => {
    var style = window
      .getComputedStyle(e, "")
      .getPropertyValue("background-color");
    // if (style == "rgb(131, 58, 224)") {
     
    //   convertTo = e.innerHTML;
    //   console.log(convertTo, leftvalue);
    // }

	if(e.classList.contains("selected")) {
		// console.log(e.innerHTML);
		convertTo = e.innerHTML;
	}
  });

  fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${convertTo}`)
        .then((res) => res.json())
        .then((data) => {
          rightInput?.setAttribute("value", Object.values(data.rates)[0] * leftvalue);
        });
}

function convertRight(){
  let str;
  let rightvalue = rightInput.value;

  rightMoneybuttons.forEach((e) => {
    var style = window
      .getComputedStyle(e, "")
      .getPropertyValue("background-color");
    if (e.classList.contains("selected")) {
 
      base = e.innerHTML;
      console.log(base, rightvalue);
    }
  });

  leftMoneybuttons.forEach((e) => {
    var style = window
      .getComputedStyle(e, "")
      .getPropertyValue("background-color");
    if (e.classList.contains("selected")) {
    
      convertTo = e.innerHTML;
      console.log(base, rightvalue);
    }
  });

 

  fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${convertTo}`)
        .then((res) => res.json())
        .then((data) => {
		  // burda left idi
          rightInput?.setAttribute("value", Object.values(data.rates)[0] * rightvalue);
        });
}

// yeni
function select(current) {
	const parentNode = current.parentNode;
	const allButtons = document.querySelectorAll(`.${parentNode.className} button`)

	allButtons.forEach(function resetButton(button) {
		button.classList.remove("selected");
	})
	current.classList.add("selected");

}

// function changeColorleft(str) {
// 	leftMoneybuttons.forEach(function resetButton(button) {
// 		button.style.backgroundColor = "white";
// 		button.style.color = "black";
// 	})
	
// 	str.style.backgroundColor = "#833ae0";
// 	str.style.color = "white";

//   let b1 = document.querySelector(".button1-left");
//   let b2 = document.querySelector(".button2-left");
//   let b3 = document.querySelector(".button3-left");
//   let b4 = document.querySelector(".button4-left");

//   if (str == "one") {
//     b1.style.backgroundColor = "#833ae0";
//     b2.style.backgroundColor = "white";
//     b3.style.backgroundColor = "white";
//     b4.style.backgroundColor = "white";
//     b1.style.color = "white";
//     b2.style.color = "black";
//     b3.style.color = "black";
//     b4.style.color = "black";
//   } else if (str == "two") {
//     b2.style.backgroundColor = "#833ae0";
//     b1.style.backgroundColor = "white";
//     b3.style.backgroundColor = "white";
//     b4.style.backgroundColor = "white";
//     b2.style.color = "white";
//     b1.style.color = "black";
//     b3.style.color = "black";
//     b4.style.color = "black";
//   } else if (str == "three") {
//     b3.style.backgroundColor = "#833ae0";
//     b1.style.backgroundColor = "white";
//     b2.style.backgroundColor = "white";
//     b4.style.backgroundColor = "white";
//     b1.style.color = "black";
//     b3.style.color = "white";
//     b2.style.color = "black";
//     b4.style.color = "black";
//   } else if (str == "four") {
//     b4.style.backgroundColor = "#833ae0";
//     b1.style.backgroundColor = "white";
//     b2.style.backgroundColor = "white";
//     b3.style.backgroundColor = "white";
//     b1.style.color = "black";
//     b4.style.color = "white";
//     b2.style.color = "black";
//     b3.style.color = "black";
//   }
// }
// function changeColorright(str) {
//   let b1 = document.querySelector(".button1-right");
//   let b2 = document.querySelector(".button2-right");
//   let b3 = document.querySelector(".button3-right");
//   let b4 = document.querySelector(".button4-right");

//   if (str == "one") {
//     b1.style.backgroundColor = "#833ae0";
//     b2.style.backgroundColor = "white";
//     b3.style.backgroundColor = "white";
//     b4.style.backgroundColor = "white";
//     b1.style.color = "white";
//     b2.style.color = "black";
//     b3.style.color = "black";
//     b4.style.color = "black";
//   } else if (str == "two") {
//     b2.style.backgroundColor = "#833ae0";
//     b1.style.backgroundColor = "white";
//     b3.style.backgroundColor = "white";
//     b4.style.backgroundColor = "white";
//     b2.style.color = "white";
//     b1.style.color = "black";
//     b3.style.color = "black";
//     b4.style.color = "black";
//   } else if (str == "three") {
//     b3.style.backgroundColor = "#833ae0";
//     b1.style.backgroundColor = "white";
//     b2.style.backgroundColor = "white";
//     b4.style.backgroundColor = "white";
//     b1.style.color = "black";
//     b3.style.color = "white";
//     b2.style.color = "black";
//     b4.style.color = "black";
//   } else if (str == "four") {
//     b4.style.backgroundColor = "#833ae0";
//     b1.style.backgroundColor = "white";
//     b2.style.backgroundColor = "white";
//     b3.style.backgroundColor = "white";
//     b1.style.color = "black";
//     b4.style.color = "white";
//     b2.style.color = "black";
//     b3.style.color = "black";
//   }
// }