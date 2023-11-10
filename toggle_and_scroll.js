//BEGIN ALWAYS LOAD AT TOP OF PAGE

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
//END ALWAYS LOAD AT TOP OF PAGE
function toggle(button) {

    let selectionID = button.id;
    let selectionName = button.name;
    console.log(selectionID,selectionName);
    let allElements = document.querySelectorAll(`.${selectionID},.${selectionName}`);
    console.log(allElements);

    for (let el of allElements) {
        if(el.classList.contains("hide")) {
                el.classList.remove("hide");
                button.classList.remove("line-through");
        } else {
                el.classList.add("hide");
                button.classList.add("line-through");
        }
    }
}

//BEGIN SCROLL TO SUBSECTION BASED ON ID

function scrollToSection(section) {
    let id = section.id;
    let destination = document.querySelector(`#${id}-section`);
    destination.scrollIntoView({behavior: 'smooth'})
}

//END SCROLL TO SUBSECTION BASED ON ID
//BEGIN SCROLL & RESIZE EVENT LISTENER FUNCTIONS 

window.addEventListener(
    "scroll",
    () => {
        // slideLeft();
        // setTopMargin();
        slideContents();
    },
    false
);

// window.addEventListener("resize", 
// () => {
//     setTopMargin();
// });


//END SCROLL & RESIZE EVENT LISTENER FUNCTIONS 
//BEGIN FUNCTION TO SLIDE TOC DIVS TO THE SIDE

function slideContents() {
    document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
}
//END FUNCTION TO SLIDE TOC DIVS TO THE SIDE
//BEGIN FUNCTION TO EMULATE FIXED POSITION WITH TEXT WRAP 

// function setTopMargin() {
//     let windowHeight = window.innerHeight;
//     let position = window.pageYOffset;
//     let topMargin = position - (windowHeight*1.5);
//     let blockObject = document.querySelectorAll(".margin-block");

//     function setHeight(e) {
//         let root = parseInt(getComputedStyle(document.documentElement).fontSize);
//         let contentsSection = document.getElementById(e);
//         let contentsSectionHeight = contentsSection.clientHeight;
//         let contentsSectionHeightAdjusted = contentsSectionHeight;
//         console.log(e,contentsSectionHeightAdjusted);

//         return contentsSectionHeightAdjusted;
//     }

//     for(let i = 0; i < blockObject.length; i++) {
//         if(blockObject[i].id === "contents-spacer-margin") {
//             blockObject[i].style.marginTop = topMargin + "px";
//         } else if(blockObject[i].id === "contents-conclusions-block") {
//             let height = setHeight("contents-conclusions");
//             blockObject[i].style.height = (height / 16) + "rem";
//             console.log(blockObject[i].id, height);
//         } else if(blockObject[i].id === "contents-part-3-block") {
//             let height = setHeight("contents-part-3");
//             blockObject[i].style.height = (height / 16) + "rem";
//             console.log(blockObject[i].id, height);
//         } else if(blockObject[i].id === "contents-part-2-block") {
//             let height = setHeight("contents-part-2");
//             blockObject[i].style.height = (height / 16) + "rem";
//             console.log(blockObject[i].id, height);
//         } else if (blockObject[i].id === "contents-part-1-block"){
//             let height = setHeight("contents-part-1");
//             blockObject[i].style.height = (height / 16) + "rem";
//             console.log("else: " + blockObject[i].id, height);
//         } else {
//             let height = setHeight("contents-introduction");
//             blockObject[i].style.height = (height / 16) + "rem";
//             console.log("else: " + blockObject[i].id, height);
//         }
//     }
// };
//END FUNCTION TO EMULATE FIXED POSITION WITH TEXT WRAP

// function slideLeft() {
//     let windowHeight = window.innerHeight;
//     let position = window.pageYOffset;
//     let contentsWrapper = document.getElementById("table-of-contents-wrapper");

//     if(position >= windowHeight*2) {

//             contentsWrapper.classList.add("slide-right");
//             contentsWrapper.addEventListener("mouseover", (event) => {expandMargin()});
//             contentsWrapper.addEventListener("mouseout", (event) => {collapseMargin()});

//     } else {
//             contentsWrapper.classList.remove("slide-right");
//             contentsWrapper.removeEventListener("mouseover", (event) => {expandMargin()});
//             contentsWrapper.removeEventListener("mouseout", (event) => {collapseMargin()});
            
//     }                 
// };


// function expandMargin() {
//     let blockObject = document.querySelectorAll(".margin-block");
//     console.log("yepepepe");
//     for(let block of blockObject) {
//             block.classList.add("margin-expanded");
//             block.classList.remove("margin-contracted");
//     } 
// }

// function collapseMargin() {
//     let blockObject = document.querySelectorAll(".margin-block");
//     console.log("yepepepe");
//     for(let block of blockObject) {
//             block.classList.remove("margin-expanded");
//             block.classList.add("margin-contracted");
//     } 
// }






