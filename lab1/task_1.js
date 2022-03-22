const rndHex = () => `${Math.floor(Math.random() * (16**6-1)).toString(16).toUpperCase()}`;
console.log(rndHex());