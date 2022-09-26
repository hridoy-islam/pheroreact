// fake storage data

const addTolocalStorage = id => {

    let cart = {};

    const storeddata = localStorage.getItem('cart')
    if (storeddata) {
        cart = JSON.parse(storeddata)
    }

    let count = cart[id];
    if (count) {
        cart[id] = count + 1;
    }
    else {
        cart[id] = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart))

}

const removeCartData = id => {
    const storeddata = localStorage.getItem('cart')
    if (storeddata) {
        const allData = JSON.parse(storeddata)
        if (id in allData) {
            delete allData[id]
            localStorage.setItem('cart', JSON.stringify(allData))
        }

    }

}

const deleteAll = () => {
    localStorage.removeItem('cart');
}


// const numbers = [1, 2, 3, 4];
// const sum = (prev, current) => prev + current
// const total = numbers.reduce(sum, 0)

// const item = [
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
//     {id: 1, name: 'SOme', price: 100},
// ]

// const itemReducer =  item.reduce((prev, current) => prev + current.price, 0)

const getTotal = products => {
    const myreducer = (prev, current) => prev + current.price;
    const total = products.reduce(myreducer, 0);
    return total;
}

export { addTolocalStorage, removeCartData, deleteAll, getTotal as ProductTotal }