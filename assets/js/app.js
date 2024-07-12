$("#productForm").on("submit", function (evt) {
  evt.preventDefault();

  saveProduct();
  deleteProduct();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function saveProduct() {
  var productName = $("#productName").val();
  var uniqueId = getRandomInt(1, 1000);
  localStorage.setItem(uniqueId, productName);
  $("#productName").val("");
  return showProductInList(productName, uniqueId);
}

function showProductInList(productName, uniqueId) {
  const productListItem = `<li id="${uniqueId}" class="product list-group-item d-flex w-50 mx-auto">
    <div class="col-6">${productName}</div>
    <div class="col-6 d-flex justify-content-end">
      <button id="deleteProduct" type="button" class="btn-danger mx-auto">Delete</button>
    </div>
  </li>`;

  return $("#listOfProducts").append(productListItem);
}

function deleteProduct() {
  $("#listOfProducts").on("click", "#deleteProduct", function () {
    var itemIdToRemove = $(this).parent().parent().attr("id");
    $(this).parent().parent().remove();
    localStorage.removeItem(itemIdToRemove);
  });
}
