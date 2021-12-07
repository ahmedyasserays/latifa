let highlight = document.getElementById("hl");
let highlightHover = document.getElementById("open-box");

console.log(highlight)
let hoverEffect = ()=>{
    highlight.classList.remove("highlight");
    highlight.classList.add("highlight-open");
    // highlightHover.style.opacity = "0"
    highlightHover.classList.add("move-hover-icon")
    highlightHover.removeEventListener('mouseover', hoverEffect)
    setTimeout(setRemoveEffect, 0)
  
    // highlight.focus();
}

let setRemoveEffect = ()=>{
    highlight.addEventListener("mouseleave",  removeEffect)
}

let removeEffect = ()=>{
    highlight.classList.add("highlight");
    highlight.classList.remove("highlight-open");
    highlightHover.classList.remove("move-hover-icon")

    // highlightHover.style.opacity = ""

    highlight.removeEventListener('mouseleave', removeEffect)
    setTimeout(setHoverEffect, 0)
}

let setHoverEffect = ()=>{
    highlightHover.addEventListener("mouseover", hoverEffect)

}

highlightHover.addEventListener("mouseover", hoverEffect)











// console.log(highlightHover)

// let doHover = ()=>{
//     highlight.classList.remove("highlight");
//     highlight.classList.add("highlight-open");
//     highlightHover.removeEventListener("mouseenter", doHover)
// }

// highlightHover.addEventListener("mouseenter" , doHover)

// highlight.addEventListener('mouseover', ()=>{console.log('hskdhfdkls')})

// highlight.addEventListener("mouseout" , ()=>{

//     highlight.classList.add("highlight");
//     highlight.classList.remove("highlight-open");
//     // highlightHover.style.display = 'block'
//     // highlightHover.addEventListener("mouseenter" , doHover)


// })