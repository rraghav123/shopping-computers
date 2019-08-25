import Storage from '../Storage';

class HeaderUI {
    renderCartCount() {
        const classCartVisible = "header-icons--count-value--visbile";
        const cartCountDOM = document.querySelector("#cart-count");
        const cart = Storage.getCart();
        if(cart.length) {
            if(!cartCountDOM.classList.contains(classCartVisible)) {
                cartCountDOM.classList.add(classCartVisible);
            }
            cartCountDOM.innerHTML = cart.length;
        } else {
            if(cartCountDOM.classList.contains(classCartVisible)) {
                cartCountDOM.classList.remove(classCartVisible);
            }
        }
    }
    renderWishListCount() {
        const wishListCountDOM = document.querySelector("#wishlist-count");
        const classCartVisible = "header-icons--count-value--visbile";
        const cart = Storage.getWishList();
        if(cart.length) {
            if(!wishListCountDOM.classList.contains(classCartVisible)) {
                wishListCountDOM.classList.add(classCartVisible);
            }
            wishListCountDOM.innerHTML = cart.length;
        } else {
            if(wishListCountDOM.classList.contains(classCartVisible)) {
                wishListCountDOM.classList.remove(classCartVisible);
            }
        }
    }
}

export default HeaderUI;
