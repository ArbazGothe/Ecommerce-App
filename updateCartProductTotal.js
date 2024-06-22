import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCartProductFromLS();

  let initialValue = 0;

  let totalPrice = localCartProducts.reduce((accum, currElem) => {
    let productPrice = parseInt(currElem.price) || 0;

    return accum + productPrice;
  }, initialValue);

  productSubTotal.textContent = `₹${totalPrice}`;
  productFinalTotal.textContent = `₹${totalPrice + 50}`;
};
