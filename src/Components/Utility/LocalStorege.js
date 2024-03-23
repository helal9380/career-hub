const getStorege = () => {
    const cart = localStorage.getItem('cart');
    if(cart) {
        return JSON.parse(cart)
    }
    return [];
}

const saveCart = (id) => {
    const cart = getStorege();
    const axist = cart.find(cartId => cartId === id);
    if(!axist) {
        cart.push(id);
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export {getStorege, saveCart}