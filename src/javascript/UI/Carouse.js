// variables
const items = document.querySelectorAll(".carousel__item");
const indicatorContainer = document.querySelector(".carousel__indicators");
const indicatorClassActive = "carousel__indicators--indicator--active";

const totalItems = items.length;
let slide = 0;
let moving = true;
let indicatorsDOM;

class Carousel {
    setInitialClasses() {
        items[totalItems - 1].classList.add("carousel--prev");
        items[0].classList.add("carousel--active");
        items[1].classList.add("carouse--next");
        let res = "";
        for(let i = 0; i < totalItems; i++){
          res = res + `<span class="carousel__indicators--indicator ${i===slide ? indicatorClassActive : ""}" data-id=${i}></span>`
        }
        // render carousel indicators
        indicatorContainer.innerHTML = res;
        indicatorsDOM = document.querySelectorAll(".carousel__indicators--indicator");
    }
    setEventListeners() {
        const btnRt = document.querySelector(".carousel__controls--right");
        const btnLt = document.querySelector(".carousel__controls--left");
        btnRt.addEventListener("click", moveNext.bind(this));
        btnLt.addEventListener("click", movePrev.bind(this));
        function moveNext() {
            if (!moving) {
              if (slide !== (totalItems - 1)) {
                slide++;
                this.moveCarouselTo(slide);
              }
            }
          }
          function movePrev() {
            if (!moving) {
              if (slide !== 0) {
                slide--;
                this.moveCarouselTo(slide);
              }
        }
    }
  }

    disableInteraction() {
        moving = true;
        setTimeout(function(){
            moving = false
        }, 500);
    }

    moveCarouselTo(slide) {
        if(!moving) {
            // add-remove indicatorClassActive for carousel indicator
            document.querySelector(`.${indicatorClassActive}`).classList.remove(indicatorClassActive);
            indicatorsDOM[slide].classList.add(indicatorClassActive);

            this.disableInteraction();
            let newPrevious = slide - 1,
            newNext = slide + 1;
            const itemClassName = "carousel__item";
            if ((totalItems - 1) > 3) {
                // check if carousel contains more then 4 items
                let oldPrevious,oldNext;
                // Checks and updates if the new slides are out of bounds
                if(slide > 2) {
                    oldPrevious = slide - 2;
                    items[oldPrevious].className = itemClassName;
                }
                if(slide + 2 < totalItems) {
                    oldNext = slide + 2;
                    items[oldNext].className = itemClassName;
                }
              }
              // Checks and updates if the new slides are out of bounds
              // Add new classes
              if(items[newPrevious]) {
                items[newPrevious].className = itemClassName + " carousel--prev";
              }
              items[slide].className = itemClassName + " carousel--active";
              if(items[newNext]) {
                items[newNext].className = itemClassName + " carousel--next";
              }
        }
    }

    initCarousel() {
        this.setInitialClasses();
        this.setEventListeners();
        moving = false;
    }
}

export default Carousel;

