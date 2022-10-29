document.getElementById("prvdefault").addEventListener("click", function(event){
  event.preventDefault()
  document.querySelector(".navbr").style.display = document.querySelector(".navbr").style.display ==="block"? "none": "block";
});


const menuLists = document.querySelectorAll(".mega-menu .menu-list ul li");
let oldElement;
menuLists.forEach((element) =>
  element.addEventListener("mouseover", (e) => {
    const thisElement = e.target;
    const attrName = thisElement.getAttribute("data-target");
    const categorys = document.querySelectorAll(".category");
    categorys.forEach((element) => element.classList.remove("active"));
    categorys.forEach((element) =>
      element.classList.contains(attrName)
        ? element.classList.add("active")
        : null
    );
    thisElement.classList.add("active");
    oldElement ? oldElement.classList.remove("active") : null;
    oldElement = thisElement;
  })
);

