
const actions = {
};

const getters = {
  cartTotalItems: (state) => {
    let total = 0;
    for (let i = 0; i < state.items.length; i += 1) {
      const item = state.items[i];
      total += item.quantity;
    }
    return total;
  },
};

const mutations = {
  addToCart(state, product) {
    const cartItem = state.items.find(item => item.product.id === product.id);
    if (!cartItem) {
      state.items.push({
        quantity: 1,
        product,
      });
    } else {
      cartItem.quantity += 1;
    }
  },
  removeFromCart(state, product) {
    const cartItem = state.items.find(item => item.product.id === product.id);
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      state.items = state.items.filter(item => item.product.id !== product.id);
    }
  },
};

const state = {
  items: [],
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
