
//Get the favorites box - where we list our colors when we click them

let favbox = document.querySelector(".favbox");

let redbtn = document.createElement("button");
    redbtn.innerHTML = "Red";
    redbtn.setAttribute("class", "red");
    redbtn.classList.add("color");
    let redobtn = document.querySelector(".red");
let selectRed = () => {

    //hide the clicked button, then add it to the fav section;
    redobtn.classList.add("hide");

    //create a button, with name red, and classes red and color, and and onclick removeRed attribute, 

    redbtn.setAttribute("onclick", "removeRed()");
    favbox.appendChild(redbtn);

}

let removeRed = () => {

    favbox.removeChild(redbtn);
    redobtn.classList.remove("hide");


}

//-----------------------------------------------------


let bluebtn = document.createElement("button");
    bluebtn.innerHTML = "Blue";
    bluebtn.setAttribute("class", "blue");
    bluebtn.classList.add("color");

let blueobtn = document.querySelector(".blue");
let selectBlue = () => {

    
    //hide the clicked button, then add it to the fav section;
    blueobtn.classList.add("hide");
    
    //create a button, with name blue, and classes red and color, and and onclick removeRed attribute, 
    
    bluebtn.setAttribute("onclick", "removeBlue()");
    favbox.appendChild(bluebtn);

}


let removeBlue = () => {
    favbox.removeChild(bluebtn);   
    
    //add the blue button in the all colors section
    blueobtn.classList.remove("hide");
    
}


//------------------------------------

let yellowbtn = document.createElement("button");
yellowbtn.innerHTML = "Yellow";
yellowbtn.setAttribute("class", "color");
yellowbtn.classList.add("yellow");

let yellowobtn = document.querySelector(".yellow");

let selectYellow = () => {
    yellowbtn.setAttribute("onclick", "removeYBtn()");
    favbox.appendChild(yellowbtn);    
    
    //hide the yellow button from all colors when clicked
    yellowobtn.classList.add("hide");
}

let removeYBtn = () => {
    favbox.removeChild(yellowbtn);

    //add the blue button back to all colors section
    yellowobtn.classList.remove("hide");
}   



//------------------------------------CYAN

let cyanbtn = document.createElement("button");
cyanbtn.innerHTML = "Cyan";
cyanbtn.setAttribute("class", "color");
cyanbtn.classList.add("cyan");

let cyanobtn = document.querySelector(".cyan");

let selectCyan = () => {
    cyanbtn.setAttribute("onclick", "removeCBtn()");
    favbox.appendChild(cyanbtn);    
    
    //hide the cyan button from all colors when clicked
    cyanobtn.classList.add("hide");
}

let removeCBtn = () => {
    favbox.removeChild(cyanbtn);

    //add the cyan button back to all colors section
    cyanobtn.classList.remove("hide");
}



//------------------------------------LIGHTBLUE

let lightbbtn = document.createElement("button");
lightbbtn.innerHTML = "LightBlue";
lightbbtn.setAttribute("class", "color");
lightbbtn.classList.add("lightblue");

let lightbobtn = document.querySelector(".lightblue");

let selectLBlue = () => {
    lightbbtn.setAttribute("onclick", "removeLBBtn()");
    favbox.appendChild(lightbbtn);    
    
    //hide the lightblue button from all colors when clicked
    lightbobtn.classList.add("hide");
}

let removeLBBtn = () => {
    favbox.removeChild(lightbbtn);

    //add the lightblue button back to all colors section
    lightbobtn.classList.remove("hide");
}




//------------------------------------SKYBLUE

let skybbtn = document.createElement("button");
skybbtn.innerHTML = "SkyBlue";
skybbtn.setAttribute("class", "color");
skybbtn.classList.add("skyblue");

let skybobtn = document.querySelector(".skyblue");

let selectSBlue = () => {
    skybbtn.setAttribute("onclick", "removeSBBtn()");
    favbox.appendChild(skybbtn);    
    
    //hide the skyblue button from all colors when clicked
    skybobtn.classList.add("hide");
}

let removeSBBtn = () => {
    favbox.removeChild(skybbtn);

    //add the blue button back to all colors section
    skybobtn.classList.remove("hide");
}


//------------------------------------NAVY

let navybtn = document.createElement("button");
navybtn.innerHTML = "Navy";
navybtn.setAttribute("class", "color");
navybtn.classList.add("navy");

let navyobtn = document.querySelector(".navy");

let selectNavy = () => {
    navybtn.setAttribute("onclick", "removeNBtn()");
    favbox.appendChild(navybtn);    
    
    //hide the Navy button from all colors when clicked
    navyobtn.classList.add("hide");
}

let removeNBtn = () => {
    favbox.removeChild(navybtn);

    //add the Navy button back to all colors section
    navyobtn.classList.remove("hide");
}


//------------------------------------PURPLE

let purplebtn = document.createElement("button");
purplebtn.innerHTML = "Purple";
purplebtn.setAttribute("class", "color");
purplebtn.classList.add("purple");

let purpleobtn = document.querySelector(".purple");

let selectPurple = () => {
    purplebtn.setAttribute("onclick", "removePBtn()");
    favbox.appendChild(purplebtn);    
    
    //hide the purple button from all colors when clicked
    purpleobtn.classList.add("hide");
}

let removePBtn = () => {
    favbox.removeChild(purplebtn);

    //add the purple button back to all colors section
    purpleobtn.classList.remove("hide");
}



//------------------------------------GREEN

let greenbtn = document.createElement("button");
greenbtn.innerHTML = "Green";
greenbtn.setAttribute("class", "color");
greenbtn.classList.add("green");

let greenobtn = document.querySelector(".green");

let selectGreen = () => {
    greenbtn.setAttribute("onclick", "removeGBtn()");
    favbox.appendChild(greenbtn);    
    
    //hide the Green button from all colors when clicked
    greenobtn.classList.add("hide");
}

let removeGBtn = () => {
    favbox.removeChild(greenbtn);

    //add the Green button back to all colors section
    greenobtn.classList.remove("hide");
}



//------------------------------------DARK BLUE

let dbbtn = document.createElement("button");
dbbtn.innerHTML = "Dark Blue";
dbbtn.setAttribute("class", "color");
dbbtn.classList.add("darkblue");

let dbobtn = document.querySelector(".darkblue");

let selectDBlue = () => {
    dbbtn.setAttribute("onclick", "removeDBBtn()");
    favbox.appendChild(dbbtn);    
    
    //hide the dark blue button from all colors when clicked
    dbobtn.classList.add("hide");
}

let removeDBBtn = () => {
    favbox.removeChild(dbbtn);

    //add the dblue button back to all colors section
    dbobtn.classList.remove("hide");
}



//------------------------------------DARK RED

let drbtn = document.createElement("button");
drbtn.innerHTML = "Dark Red";
drbtn.setAttribute("class", "color");
drbtn.classList.add("darkred");

let drobtn = document.querySelector(".darkred");

let selectDRed = () => {
    drbtn.setAttribute("onclick", "removeDRBtn()");
    favbox.appendChild(drbtn);    
    
    //hide the dark blue button from all colors when clicked
    drobtn.classList.add("hide");
}

let removeDRBtn = () => {
    favbox.removeChild(drbtn);

    //add the dblue button back to all colors section
    drobtn.classList.remove("hide");
}



//------------------------------------GOLD

let goldbtn = document.createElement("button");
goldbtn.innerHTML = "Gold";
goldbtn.setAttribute("class", "color");
goldbtn.classList.add("gold");

let goldobtn = document.querySelector(".gold");

let selectGold = () => {
    goldbtn.setAttribute("onclick", "removeGoldBtn()");
    favbox.appendChild(goldbtn);    
    
    //hide the dark blue button from all colors when clicked
    goldobtn.classList.add("hide");
}

let removeGoldBtn = () => {
    favbox.removeChild(goldbtn);

    //add the dblue button back to all colors section
    goldobtn.classList.remove("hide");
}






//------------------------------------GOLDEN ROD

let grbtn = document.createElement("button");
grbtn.innerHTML = "Golden Rod";
grbtn.setAttribute("class", "color");
grbtn.classList.add("goldenrod");

let grobtn = document.querySelector(".goldenrod");

let selectGRod = () => {
    grbtn.setAttribute("onclick", "removeGRBtn()");
    favbox.appendChild(grbtn);    
    
    //hide the dark blue button from all colors when clicked
    grobtn.classList.add("hide");
}

let removeGRBtn = () => {
    favbox.removeChild(grbtn);

    //add the dblue button back to all colors section
    grobtn.classList.remove("hide");
}




//------------------------------------Turquoise

let trbtn = document.createElement("button");
trbtn.innerHTML = "Turquiose";
trbtn.setAttribute("class", "color");
trbtn.classList.add("turquoise");

let trobtn = document.querySelector(".turquise");

let selectTurq = () => {
    trbtn.setAttribute("onclick", "removeTRBtn()");
    favbox.appendChild(trbtn);    
    
    //hide the dark blue button from all colors when clicked
    trobtn.classList.add("hide");
}

let removeTRBtn = () => {
    favbox.removeChild(trbtn);

    //add the dblue button back to all colors section
    trobtn.classList.remove("hide");
}





//------------------------------------GREEN YELLOW

let gybtn = document.createElement("button");
gybtn.innerHTML = "Green Yellow";
gybtn.setAttribute("class", "color");
gybtn.classList.add("greenyellow");

let gyobtn = document.querySelector(".greenyellow");

let selectGYellow = () => {
    gybtn.setAttribute("onclick", "removeGYBtn()");
    favbox.appendChild(gybtn);    
    
    //hide the dark blue button from all colors when clicked
    gyobtn.classList.add("hide");
}

let removeGYBtn = () => {
    favbox.removeChild(gybtn);

    //add the dblue button back to all colors section
    gyobtn.classList.remove("hide");
}




//------------------------------------GRAY

let graybtn = document.createElement("button");
graybtn.innerHTML = "Gray";
graybtn.setAttribute("class", "color");
graybtn.classList.add("gray");

let grayobtn = document.querySelector(".gray");

let selectGray = () => {
    graybtn.setAttribute("onclick", "removeGrayBtn()");
    favbox.appendChild(graybtn);    
    
    //hide the dark blue button from all colors when clicked
    grayobtn.classList.add("hide");
}

let removeGrayBtn = () => {
    favbox.removeChild(graybtn);

    //add the dblue button back to all colors section
    grayobtn.classList.remove("hide");
}





//------------------------------------LIGHT GRAY

let lgbtn = document.createElement("button");
lgbtn.innerHTML = "Light Gray";
lgbtn.setAttribute("class", "color");
lgbtn.classList.add("lightgray");

let lgobtn = document.querySelector(".lightgray");

let selectLGray = () => {
    lgbtn.setAttribute("onclick", "removeLGBtn()");
    favbox.appendChild(lgbtn);    
    
    //hide the dark blue button from all colors when clicked
    lgobtn.classList.add("hide");
}

let removeLGBtn = () => {
    favbox.removeChild(lgbtn);

    //add the dblue button back to all colors section
    lgobtn.classList.remove("hide");
}





//------------------------------------BLACK

let blbtn = document.createElement("button");
blbtn.innerHTML = "Black";
blbtn.setAttribute("class", "color");
blbtn.classList.add("black");

let blobtn = document.querySelector(".black");

let selectBlack = () => {
    blbtn.setAttribute("onclick", "removeBLBtn()");
    favbox.appendChild(blbtn);    
    
    //hide the dark blue button from all colors when clicked
    blobtn.classList.add("hide");
}

let removeBLBtn = () => {
    favbox.removeChild(blbtn);

    //add the dblue button back to all colors section
    blobtn.classList.remove("hide");
}




//------------------------------------MAROON

let mrbtn = document.createElement("button");
mrbtn.innerHTML = "Maroon";
mrbtn.setAttribute("class", "color");
mrbtn.classList.add("maroon");

let mrobtn = document.querySelector(".maroon");

let selectMaroon = () => {
    mrbtn.setAttribute("onclick", "removeMRBtn()");
    favbox.appendChild(mrbtn);    
    
    //hide the dark blue button from all colors when clicked
    mrobtn.classList.add("hide");
}

let removeMRBtn = () => {
    favbox.removeChild(mrbtn);

    //add the dblue button back to all colors section
    mrobtn.classList.remove("hide");
}



//------------------------------------LIGHT GREEN

let ligbtn = document.createElement("button");
ligbtn.innerHTML = "Light Green";
ligbtn.setAttribute("class", "color");
ligbtn.classList.add("lightgreen");

let ligobtn = document.querySelector(".lightgreen");

let selectLGreen = () => {
    ligbtn.setAttribute("onclick", "removeLIGBtn()");
    favbox.appendChild(ligbtn);    
    
    //hide the dark blue button from all colors when clicked
    ligobtn.classList.add("hide");
}

let removeLIGBtn = () => {
    favbox.removeChild(ligbtn);

    //add the dblue button back to all colors section
    ligobtn.classList.remove("hide");
}