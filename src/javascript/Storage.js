import Utils from "./Utils";

class Storage {
    static setData(data) {
        localStorage.setItem("data", JSON.stringify(data));
    }
    static getData() {
        return JSON.parse(localStorage.getItem("data")) || [];
    }
    static setCart(id) {
        const cartValue = this.getCart();
        localStorage.setItem("cart", JSON.stringify(Utils.cartWishlistAddLogic(cartValue, id)));
    }
    static getCart() {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }
    static setWishlist(id) {
        const wishListValue = this.getWishList();
        localStorage.setItem("wishList", JSON.stringify(Utils.cartWishlistAddLogic(wishListValue, id)));
    }
    static getWishList() {
        return JSON.parse(localStorage.getItem("wishList")) || [];
    }
}

export default Storage;
