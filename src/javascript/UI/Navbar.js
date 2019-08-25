//variables
const navBarDOM = document.querySelector(".items__navbar");

class NavbarUI {
    renderNavBar(navBarData) {
        navBarDOM.innerHTML = navBarData.reduce((str, navItem) =>`
            ${str}
            <span class="navbar__item" data-id=${navItem.id}>${navItem.name}</span>
        `,"")
        this.addEventHandlers();
    }
    addEventHandlers() {
        const navBarItems = document.querySelectorAll(".navbar__item");
        navBarItems.forEach(ele => {
            ele.addEventListener("click", () => {
                const id = ele.dataset.id;
                this.setActiveNavBarItem(id);
            })
        })
    }
    setActiveNavBarItem(activeItem) {
        const navBarItems = document.querySelectorAll(".navbar__item");
        const className= "navbar__item--active"
        navBarItems.forEach(ele => {
            if(ele.dataset.id !== activeItem && ele.classList.contains(className)) {
                ele.classList.remove(className);
            } else if(ele.dataset.id === activeItem && !ele.classList.contains(className)) {
                ele.classList.add(className);
            }
        })
    }
}

export default NavbarUI;
