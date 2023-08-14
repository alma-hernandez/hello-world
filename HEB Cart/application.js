function calculateTotal(input) {
    const row = input.closest('.row');
    const price = parseFloat(row.querySelector('.price').textContent.slice(1));
    const quantity = parseInt(input.value);
    const totalInput = row.querySelector('.total');

    if (!isNaN(quantity)) {
        const total = price * quantity;
        totalInput.value = total.toFixed(2);
    } else {
        totalInput.value = '';
    }

    updateCartTotal();
}

function removeRow(button) {
    const row = button.closest('.row');
    row.remove();
    updateCartTotal();
}

function addItem() {
    const inputItem = document.querySelector('.input-item');
    const inputPrice = document.querySelector('.input-price');

    var newRow = document.createElement('div');
    newRow.className = 'row';

    newRow.innerHTML = `
        <div class="col-2 item">${inputItem.value}</div>
        <div class="col-2 price">$${inputPrice.value}</div>
        <div class="col-2">
            <label>Qty</label>
            <input type="number" class="quantity" onchange="calculateTotal(this)">
        </div>
        <div class="col-2">
            <button onclick="removeRow(this)">REMOVE</button>
        </div>
        <div class="col-2">
            <label>TOTAL $</label>
            <input type="number" class="total" readonly>
        </div>
    `;

    var container = document.querySelector('.shopping_list');
    var lastRow = container.querySelector('.row:last-child');
    container.insertBefore(newRow, lastRow.nextSibling);
    inputItem.value = "";
    inputPrice.value = "";
    updateCartTotal();
}

function updateCartTotal() {
    const totalInputs = document.querySelectorAll('.total');
    let cartSum = 0;

    totalInputs.forEach(input => {
        if (input.value !== '') {
            cartSum += parseFloat(input.value);
        }
    });

    const cartSumInput = document.querySelector('.cartSum');
    cartSumInput.value = cartSum.toFixed(2);
}