
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
  cartTotalPrice: (state) => {
    let total = 0;
    for (let i = 0; i < state.items.length; i += 1) {
      const item = state.items[i];
      total += item.quantity * item.product.price;
    }
    return total;
  },
  recipientsPrice: (state) => {
    let total = 0;
    for (let i = 0; i < state.items.length; i += 1) {
      const item = state.items[i];
      if (item.product.container) {
        total += item.product.container * item.quantity * 60;
      }
    }
    return total;
  },
  cartIds: (state) => {
    const cart = [];
    for (let i = 0; i < state.items.length; i += 1) {
      const item = state.items[i];
      cart.push({
        product_id: item.product.id,
        quantity: item.quantity,
      });
    }
    return cart;
  },
  foodItems: state => state.items.filter(item => item.product.type === 'FOOD'),
  marketItems: state => state.items.filter(item => item.product.type === 'MARKET'),
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
  removeAllFromCart(state, product) {
    const cartItem = state.items.find(item => item.product.id === product.id);
    if (cartItem) {
      state.items = state.items.filter(item => item.product.id !== product.id);
    }
  },
  setDeliveryFee(state, fee) {
    state.deliveryFee = fee;
  },
};

const state = {
  items: [],
  deliveryFee: null,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
