import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();
export const addToCart = (event, id, stock) => {
  const currProdElem = document.querySelector(`#card${id}`);

  let arrLocalStorageProduct = getCartProductFromLS();

  //   console.log(currProdElem);

  let quantity = currProdElem.querySelector(".productQuantity").innerText;
  let price = currProdElem.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");

  let existingProduct = arrLocalStorageProduct.find(
    (currProd) => currProd.id === id
  );

  if (existingProduct && quantity > 1) {
    quantity = Number(existingProduct.quantity) + Number(quantity);
    price = Number(price * quantity);

    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    showToast("add", id);
  }

  if (existingProduct) {
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);
  //   console.log(quantity, price);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //   update the cart value
  updateCartValue(arrLocalStorageProduct);

  showToast("add", id);
};
