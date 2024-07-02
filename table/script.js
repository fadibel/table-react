
document.querySelectorAll("tr").forEach((row, index) => {
    if (index > 0) {
      row.querySelectorAll(".quantity, .unitprice").forEach(input => {
        input.onblur = function() {
          var quantity = row.querySelector(".quantity");
          var unitprice = row.querySelector(".unitprice");
          var total = row.querySelector(".total");


          var quantityValue = Number(quantity.value);
          var unitpriceValue = Number(unitprice.value);
          total.value = quantityValue * unitpriceValue;
        };
      });
    };
});
