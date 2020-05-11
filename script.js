
//Global Constants
const gridContainer = document.querySelector(".gridContainer");
const newGridButton = document.querySelector("#newGrid");
const pixelSizeButton = document.querySelector("#pixelSize");
const rainbowModeButton = document.querySelector('#rainbowMode');
const blackModeButton = document.querySelector("#blackMode")
let columnsArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let colorsArray = ['#9400D3','#4B0082', '#0000FF', '#00FF00', '#FFFF00','#FF7F00', '#FF0000'];



//Declare functions
let createBox = function  (boxItem, boxArrayIndex, boxArray) {
   
    boxArray[boxArrayIndex] = document.createElement("div");
    boxArray[boxArrayIndex].classList.add("box");
    gridContainer.appendChild(boxArray[boxArrayIndex])
    boxArray[boxArrayIndex].style.cssText = `margin: 0; border:1px solid rgb(0,0,0,0.10);`;
   
    
}

let createRows = function  (columnItem,columnArrayIndex,columnArray) {

    columnArray[columnArrayIndex] = []
    for (i = 0; i < columnArray.length  ; i++) {
        columnArray[columnArrayIndex].push(i);
    }
    columnArray[columnArrayIndex].forEach(createBox);
   
    
}



function blackChange () {
    boxes.forEach((div) => {
        div.classList.add("white");
        console.log("ok1");
    });
    
    boxes.forEach((div) => {
        div.addEventListener("mouseover",(e) => {
            div.classList.add("black");
            div.classList.remove("white");
            div.classList.remove("rainbow");
            });
    });
    
}

function rainbowModeChange () {
    let rainbowMode ; 
        boxes.forEach((div) => {
            div.classList.add("rainbow");
            rainbowMode = document.querySelectorAll(".rainbow"); 
            let randomColor = colorsArray[Math.floor(Math.random()*7)];
            div.style.cssText = `background-color: ${randomColor};`;
            div.classList.add("white");
    });
    
    
    rainbowMode.forEach((div) =>   {    
        div.addEventListener("mouseover", (e) => {
            div.classList.remove("white");
            div.classList.remove("black");
            
            console.log("ok");
        });
        
    });
    
}

function newGridChange() {
    boxes.forEach((div) => {
        div.classList.remove("black");
        div.classList.remove("rainbow");       
        div.classList.remove("shadow");
        div.classList.add("white");
    });

}

let deleteGridChilds = function (){ 
    for( i = 0; i <= (columnsArray.length)*(columnsArray.length); i++){
        if (gridContainer.firstChild === null) {break;} else {
            gridContainer.firstChild.remove();
        }
    }    
}   

let makeGridColumns = function () {
    let gridColumnsString = "auto ";
    for (i = 1; i < columnsArray.length ; i++) {
         gridColumnsString += "auto ";
    }
    gridContainer.style.cssText = `grid-template-columns: ${gridColumnsString}; `;
}


function setPixelSize () {
    let pixelSize = prompt("Set Pixel Size", "16"); 
 deleteGridChilds ();

        if (pixelSize === null || Number(pixelSize) === NaN || pixelSize === "") {
             alert("Canceled");
         } else if (Number(pixelSize) < columnsArray.length) {
         
             columnsArray.splice(0,(columnsArray.length) - Number(pixelSize));
         } else if (Number(pixelSize) > columnsArray.length) {
             for (i = 0; i < Number(pixelSize) - columnsArray.length+i; i++){
 
                 columnsArray.push(i);
         } 
     }
 
    makeGridColumns (); 
     columnsArray.forEach(createRows);
     boxes = document.querySelectorAll(".box");
     
     
     blackChange();
 }

//Create default grid options
columnsArray.forEach(createRows);
let boxes = document.querySelectorAll(".box");
makeGridColumns();
blackChange();



//Adding functions to buttons
 pixelSizeButton.addEventListener("click",() => setPixelSize());
 newGridButton.addEventListener('click', () => newGridChange());
 rainbowModeButton.addEventListener('click', () => rainbowModeChange());
 blackModeButton.addEventListener('click', () => blackChange());