function echo(msg = "Hello World") {
  return msg;
}

console.log(echo(undefined));
console.log(echo());
console.log(echo(null)); //if parameter is null, defult parameter = null

const x = ([...n1], [,n2]) => {
  return n1 + n2;
};

const nums = [1, 3, 5, 7];
const values = ['apple', 'mango']
console.log(x(nums, values));

const getId = ({id:{categoryId, productId}}) => {
    return categoryId+productId
}

const get = ({price, id:{categoryId, productId}}) => {
  return price+categoryId+productId
}
console.log(getId({id: {categoryId: 'cat01', productId:1001},price:50}));
console.log(get({id: {categoryId: 'cat01', productId:1001},price:50}));
// console.log(getPrice({id: 1150, price: 1000000}));
// console.log(getPrice({id: 1150, productPrice: 1000000})); //undefined


