let totalPrice = 0;
document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
let discount = 0;
document.getElementById("discount").innerText = discount.toFixed(2);
let total = 0;
document.getElementById("total").innerText = total.toFixed(2);

let products = document.querySelectorAll(".product-card");
for (const product of products) {
  product.addEventListener("click", (e) => {
    let productPrice = parseFloat(
      e.target.childNodes[7].childNodes[1].innerText
    );
    let productName = e.target.childNodes[5].innerText;
    let itemsContainer = document.getElementById("cartProductsContainer");
    let count = itemsContainer.childElementCount + 1 + ".";
    let item = document.createElement("li");
    item.classList.add("mb-2");
    item.innerText = count + " " + productName;
    itemsContainer.appendChild(item);
    totalPrice += productPrice;
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    if (totalPrice > 0) {
      document.getElementById("makePurchase").removeAttribute("disabled");
    }
    if (totalPrice < 200) {
      document.getElementById("total").innerText = totalPrice.toFixed(2);
    }
    if (totalPrice >= 200) {
      document.getElementById("total").innerText = totalPrice.toFixed(2);
      let applyBtn = document.getElementById("applyBtn");
      applyBtn.removeAttribute("disabled");
      applyBtn.addEventListener("click", function () {
        if (document.getElementById("couponField").value == "SELL200") {
          discount = totalPrice * 0.2;
          document.getElementById("discount").innerText = discount.toFixed(2);
          total = totalPrice - discount;
          document.getElementById("total").innerText = total.toFixed(2);
        } else {
          discount = 0;
          document.getElementById("discount").innerText = discount.toFixed(2);
          total = totalPrice;
          document.getElementById("total").innerText = total.toFixed(2);
        }
      });
    }
  });
}
document.getElementById("makePurchase").addEventListener("click", function () {
  document.getElementById("successModal").classList.remove("hidden");
});
document.getElementById("goHome").addEventListener("click", function () {
  window.location.reload();
});
