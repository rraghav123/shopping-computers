import Items from './Items';
import Storage from '../Storage';

const categoryDOM = document.querySelector(".header__search-dropdown");
const dropDownDOM = document.querySelector(".header__categories");
const activeCategoryDOM = document.querySelector(".header__active-category");
const searchBtnDOM = document.querySelector(".header__search-button");
const inputDOM = document.querySelector(".header__search-input");

let activeCategory;

class SearchUI {
    initialEventHandlers() {
        const ItemsUI = new Items();
        // toggle cateogories-dropdown
        categoryDOM.addEventListener("click", () => {
            if(dropDownDOM.classList.contains("header__categories--show")) {
                dropDownDOM.classList.remove("header__categories--show");
            } else {
                dropDownDOM.classList.add("header__categories--show");
            }
        })
        // on clicking searchbnt
        searchBtnDOM.addEventListener("click", (e) => {
            const inputText = inputDOM.value;
            const itemsForActiveCategory = Storage.getData().data.find(items => items.type === activeCategory).list;
            if(inputText) {
                const filteredItems = itemsForActiveCategory.filter(listItem => {
                    return listItem.name.toLowerCase().includes(inputText.toLowerCase().trim())
                });
                ItemsUI.renderItems(filteredItems);
            } else {
                ItemsUI.renderItems(itemsForActiveCategory);
            }
        })
    }

    renderDropDown(data) {
        activeCategory = data[0].id
        dropDownDOM.innerHTML = data.reduce((str, item) => `
            ${str}
            <div class="header__categories__category" data-id=${item.id}>${item.name}</div>
        `, "")
        activeCategoryDOM.innerHTML = `<span id="activeCategory" data-id=${activeCategory}>${data[0].name}</span>`
        this.eventListnerDropDown(data);
    }

    eventListnerDropDown(data) {
        const elements = document.querySelectorAll(".header__categories__category");
        elements.forEach(ele => {
            ele.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = ele.dataset.id;
                activeCategory = id;
                document.querySelector("#activeCategory").innerHTML = data.find(obj => obj.id === id).name;
                dropDownDOM.classList.remove("header__categories--show")
            })
        })
    }

    initSearchUI(items) {
        this.renderDropDown(items)
        this.initialEventHandlers();
    }
}

export default SearchUI;
