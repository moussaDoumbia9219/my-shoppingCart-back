import UserModel from '../models/User';

const user1 = new UserModel({
  id: 'id1',
  username: 'jondoe',
  email: 'jondoe@gmail.com',
  role: 'admin'
});

const user2 = new UserModel({
  id: 'id322',
  username: 'jandoe',
  email: 'jandoe@gmail.com',
  role: 'customer'
});

const users = [user1.getData(), user2.getData()];

export default users;