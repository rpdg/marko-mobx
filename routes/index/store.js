const { observable } = require('mobx');

const store = observable({
  value: 0
});

store.increment = () => {
  ++store.value;
};
store.decrement = () => {
  --store.value;
};

module.exports = store;
