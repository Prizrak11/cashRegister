let inputProduct = document.getElementById(`inputItem`)
let quantityProduct = document.getElementById(`numItem`)
let cart = document.getElementById(`cart`)
document.addEventListener(`keydown`, (e) => {
    switch (e.key) {
        case `Enter`:
            if (inputProduct.value == ``) error(`#003`)
            else { addProduct(inputProduct.value, quantityProduct.value) }
            break
        case `z`:
            if (e.ctrlKey) {
                if (productsCart != 0) {
                    productsCart--
                    cart.removeChild(cart.lastChild)
                    clear()
                }
            }
            break
        case `ArrowUp`:
            quantityProduct.value++
            break
        case `ArrowDown`:
            if (quantityProduct.value > 0) quantityProduct.value--
            break
    }
})
let productsCart = 0
let addProduct = (name, cant) => {
    let exist = false
    if (cant == undefined || cant == 0) {
        return error(`#002`)
    }
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].id == name || productList[i].name == name.toUpperCase().trim()) {
            exist = true
            productsCart++
            let product = document.createElement(`tr`)
            product.id = `element${productsCart}`
            let productName = document.createElement(`td`)
            productName.textContent = capitalizer(productList[i].name.trim().toLocaleLowerCase())
            let productPrice = document.createElement(`td`)
            productPrice.textContent = `$ ${productList[i].price}`
            let productCant = document.createElement(`td`)
            productCant.textContent = cant
            let productTotal = document.createElement(`td`)
            productTotal.textContent = `$ ${productList[i].price * cant}`
            product.appendChild(productName)
            product.appendChild(productPrice)
            product.appendChild(productCant)
            product.appendChild(productTotal)
            cart.appendChild(product)
            clear()
        }
    }
    if (!exist) error(`#001`)
}
let clear = () => {
    inputProduct.value = ``
    quantityProduct.value = 0
}
//*! Error  */
let error = (type) => {
    let quan = document.getElementById(`numItem`)
    switch (type) {
        case `#001`:
            inputProduct.style.backgroundColor = `rgb(161, 48, 71)`
            setTimeout(() => { inputProduct.style.backgroundColor = `rgb(77, 75, 75)` }, 500)
            console.error(`#001: The product doesn´t exist`)
            break
        case `#002`:
            quan.style.backgroundColor = `rgb(161, 48, 71)`
            setTimeout(() => { quan.style.backgroundColor = `rgb(77, 75, 75)` }, 500)
            console.error(`#002: Need to specify the quantity`)
            break
        case `#003`:
            inputProduct.style.backgroundColor = `rgb(161, 48, 71)`
            setTimeout(() => { inputProduct.style.backgroundColor = `rgb(77, 75, 75)` }, 500)
            console.error(`#003: Please enter a product`)
            break
    }
}

//*! Miscellany */
function capitalizer(word) {
    return word[0].toUpperCase() + word.slice(1);
}