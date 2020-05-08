const gridContainer = document.querySelector(".gridContainer");
const newGridButton = document.querySelector("#newGrid");
const pixelSizeButton = document.querySelector("#pixelSize");
    

let columnsArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];




function createBox (boxItem, boxArrayIndex, boxArray) {
   
    boxArray[boxArrayIndex] = document.createElement("div");
    boxArray[boxArrayIndex].classList.add("box");
    gridContainer.appendChild(boxArray[boxArrayIndex])
    boxArray[boxArrayIndex].style.cssText = `margin: 0; border:1px solid rgb(0,0,0,0.10);`;
   
    
}

function createRows (columnItem,columnArrayIndex,columnArray) {

    columnArray[columnArrayIndex] = []
    for (i = 0; i < columnArray.length  ; i++) {
        columnArray[columnArrayIndex].push(i);
    }
    columnArray[columnArrayIndex].forEach(createBox);
   
    
}
   
let gridColumnsString = "auto ";
for (i = 1; i < columnsArray.length ; i++) {
    gridColumnsString += "auto "
}

columnsArray.forEach(createRows);
gridContainer.style.cssText = `grid-template-columns: ${gridColumnsString}; `;



let boxes = document.querySelectorAll(".box");



function blackChange () {
    boxes.forEach((div) => {
        div.addEventListener("mouseover",(e) => {
            div.classList.add("black");
            });
    });
}

blackChange();

function newGridChange() {
    boxes.forEach((div) => {
        div.classList.remove("black")       
    });

}


function setPixelSize () {
    let pixelSize = prompt("Set Pixel Size", "16"); 
    for( i = 0; i <= (columnsArray.length)*(columnsArray.length); i++){
        if (gridContainer.firstChild === null) {break;} else {
            gridContainer.firstChild.remove();
        }
    }    
         if (pixelSize === null || Number(pixelSize) === NaN || pixelSize === "") {
             alert("Canceled");
         } else if (Number(pixelSize) < columnsArray.length) {
         
             columnsArray.splice(0,(columnsArray.length) - Number(pixelSize));
         } else if (Number(pixelSize) > columnsArray.length) {
             for (i = 0; i < Number(pixelSize) - columnsArray.length+i; i++){
 
                 columnsArray.push(i);
         } 
     }
 
     let gridColumnsString = "auto ";
     for (i = 1; i < columnsArray.length ; i++) {
         gridColumnsString += "auto ";
     }
     columnsArray.forEach(createRows);
     gridContainer.style.cssText = `grid-template-columns: ${gridColumnsString}; `;
     
     boxes = document.querySelectorAll(".box");
     blackChange();
 }
 pixelSizeButton.addEventListener("click",() => setPixelSize());
 
newGridButton.addEventListener('click', () => newGridChange());