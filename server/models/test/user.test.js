import UserModel from '../User';

test('It accepts all params and implements all methods', ()=> {
  const raw = {id: 'id1', username: 'jondoe', email: 'jondoe@gmail.com', role: 'admin'}
  const user = new UserModel(raw);
  expect(user.getsId()).toBe(raw.id);
  expect(user.getUsername()).toBe(raw.username);
  expect(user.getEmail()).toBe(raw.email);
  expect(user.getRole()).toBe(raw.role);
  
})