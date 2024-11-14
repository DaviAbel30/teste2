const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i ");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;


let isDragging = false, startX, startSrollLeft;

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () =>{
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging"); 
  startX = e.pageX;
  startSrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragging) return;
  carousel.scrollLeft = startSrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");

}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
