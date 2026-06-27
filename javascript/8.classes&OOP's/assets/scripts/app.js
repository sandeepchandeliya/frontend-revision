class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // price;
  // description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

const productList = {
  products: [
    new Product(
      'a pillow',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRk-4nQIXQkXQDJTW9ZS2F9l7rv7FLrRM1Q&s',
      19.99,
      'a soft pillow',
    ),
    new Product(
      'a carpet',
      'https://www.shutterstock.com/image-illustration/persian-folk-style-traditional-printed-260nw-2762044209.jpg',
      39.71,
      'a carpet you might like or not.',
    ),
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
      <img src="${prod.imageUrl}" alt="${prod.title}"/>
      <div class="product-item__content">
      <h2>${prod.title}</h2>
      <h3>\$${prod.price}</h3>
      <p>${prod.description}</p>
      <button>Add to Cart</button>
      </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
