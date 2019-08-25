import Storage from '../Storage';
import Utils from '../Utils';
import Header from './Header';

const itemsDOM = document.querySelector(".items__container");

class Items {
    renderItems(items) {
        if(items && items.length) {
            itemsDOM.innerHTML = items.reduce((str, item) => `
                ${str}
                <div class="card__container">
                    <div class="card__info">
                        <span>Sale ${item.discount}</span>
                        <i class="far fa-heart card__wishlist" data-id=${item.id}></i>
                    </div>
                    <figure class="card__image">
                        <img src=${item.imageURL} />
                    </figure>
                    <div class="card__description">
                        <p class="card__description__name">${item.name}</p>
                        <span class="card__description__cost">
                            <span>${item.price}</span>
                            <i class="fas fa-shopping-cart card__cart" data-id=${item.id}></i>
                        </span>
                    </div>
                </div>
            `, "");
            this.addEventListeners();
        } else {
            itemsDOM.innerHTML = `<span class="card__no-item">No item found in this category</span>`
        }
    }
    addEventListeners() {
        const HeaderUI = new Header();

        const wishListBtn = document.querySelectorAll(".card__wishlist");
        const cartBtn = document.querySelectorAll(".card__cart");

        const intialWishList = Storage.getWishList();
        const initialCartList = Storage.getCart();

        const whishListClassName = "card__wishlist--added";
        const addedIntoCartClassName = "card__cart--added";

        wishListBtn.forEach(btn => {
            const id = btn.dataset.id;
            //add classToBtn if already in whishList
            if(Utils.itemExistInArray(intialWishList, id)) {
                btn.classList.add(whishListClassName);
            }
            // add ClickEvent for whishList
            btn.addEventListener("click", () => {
                Storage.setWishlist(id);
                const wishList = Storage.getWishList();
                if(Utils.itemExistInArray(wishList, id)) {
                    btn.classList.add(whishListClassName);
                } else {
                    btn.classList.remove(whishListClassName);
                }
                HeaderUI.renderWishListCount();
            })
        });
        cartBtn.forEach(btn => {
            const id = btn.dataset.id;
            //add classToBtn if already in whishList
            if(Utils.itemExistInArray(initialCartList, id)) {
                btn.classList.add(addedIntoCartClassName);
            }
            // add ClickEvent for cart
            btn.addEventListener("click", () => {
                Storage.setCart(id);
                const cartList = Storage.getCart();
                if(Utils.itemExistInArray(cartList, id)) {
                    btn.classList.add(addedIntoCartClassName);
                } else {
                    btn.classList.remove(addedIntoCartClassName);
                }
                HeaderUI.renderCartCount();
            })
        })
    }
}

export default Items;
