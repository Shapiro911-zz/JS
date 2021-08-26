const add = (cart, req) => {
  cart.contents.push(req.body);
  return { name: req.body.title, newCart: JSON.stringify(cart, null, 4) };
};

const change = (cart, req) => {
  const find = cart.contents.find(el => el.id === +req.params.id);
  find.quantity += req.body.quantity;
  return { name: find.title, newCart: JSON.stringify(cart, null, 4) };
};

const del = (cart, req) => {
  const find = cart.contents.find(el => el.id === +req.params.id);
  cart.contents.splice(cart.contents.indexOf(find), 1)
  return { name: find.title, newCart: JSON.stringify(cart, null, 4) };
};

module.exports = {
  add,
  change,
  del,
};
