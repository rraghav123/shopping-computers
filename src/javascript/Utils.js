class Utils {
    static cartWishlistAddLogic(arr, itemID) {
        const itemsArr = [...arr];
        const itemIndex = itemsArr.indexOf(itemID);
        if(this.itemExistInArray(itemsArr, itemID)) {
            itemsArr.splice(itemIndex, 1);
        } else {
            itemsArr.push(itemID);
        }
        return itemsArr;
    }
    static itemExistInArray(arr, item = "") {
        return arr.indexOf(item) > -1;
    }
}

export default Utils;
