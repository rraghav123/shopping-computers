import Storage from '../Storage';
import Items from './Items';

// Variables
const sidebarDOM = document.querySelector(".sidebar__conatiner");



class SidebarUI {
    renderSidebar(data) {
        sidebarDOM.innerHTML = data.reduce((str, sidebarItem) => (
            `${str}
            <span class="sidebar__items" data-id=${sidebarItem.id}>
                <i class="fas fa-tv"></i>
                <span>${sidebarItem.name}</span>
                <i class="fas fa-chevron-right"></i>
            </span>
            `
            ), "")
        this.addEventHandlers()
    };

    addEventHandlers() {
        const ItemsUI = new Items();
        const sideBarItems = document.querySelectorAll(".sidebar__items");
        sideBarItems.forEach(ele => ele.addEventListener("click", () => {
            const id = ele.dataset.id;
            this.setActiveItem(id);
            const itemsToRender = Storage.getData().data.find(itemsList => itemsList.type === id);
            ItemsUI.renderItems(itemsToRender && itemsToRender.list);
        }))
    }

    setActiveItem(activeItem) {
        const sideBarItems = document.querySelectorAll(".sidebar__items");
        sideBarItems.forEach(ele => {
            const className = "sidebar__item--active";
            if(ele.dataset.id !== activeItem && ele.classList.contains(className)) {
                ele.classList.remove(className);
            } else if(ele.dataset.id === activeItem && !ele.classList.contains(className)) {
                ele.classList.add(className);
            }
        })
    }
}

export default SidebarUI;
