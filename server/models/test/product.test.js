import Product from '../Product';

test('It accepts all params and implements all methods', () => {
  const raw = {id: '123', name:'foo', price: 254, images: ['1']};
  const product = new Product(raw);
  expect(product.getsId()).toBe(raw.id);
  expect(product.getName()).toBe(raw.name);
  expect(product.getPrice()).toBe(raw.price);
  expect(product.getImages()).toBe(raw.images);
  // expect(product.getData()).toBe(raw);
});