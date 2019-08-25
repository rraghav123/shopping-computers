import "../styles/main.scss";
import FetchData from "./Services";
import Storage from "./Storage";

import Sidebar from "./UI/Sidebar";
import Navbar from "./UI/Navbar";
import Items from "./UI/Items";
import Carousel from './UI/Carouse';
import Search from './UI/Search';
import Header from "./UI/Header";

document.addEventListener("DOMContentLoaded", () => {
    // getData from MockData
    const data = FetchData.getData();

    // save data to localStorage
    Storage.setData(data);

    // UI Compoents initialisation
    const sidebarUI = new Sidebar();
    const navbarUI = new Navbar();
    const itemsUI = new Items();
    const carouselUI = new Carousel();
    const SearchUI = new Search();
    const HeaderUI = new Header();

    //render-set defaultValues
    sidebarUI.renderSidebar(data.sidebar);
    navbarUI.renderNavBar(data.navbar);
    SearchUI.initSearchUI(data.sidebar);
    navbarUI.setActiveNavBarItem(data.navbar[0].id);
    sidebarUI.setActiveItem(data.sidebar[0].id);
    itemsUI.renderItems(data.data.find(items => items.type === data.sidebar[0].id).list);
    HeaderUI.renderCartCount();
    HeaderUI.renderWishListCount();
    carouselUI.initCarousel();
});
