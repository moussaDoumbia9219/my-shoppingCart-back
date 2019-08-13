import { OrderModle } from "../../models/Order";

export default (app) => {

    app.get('/v1/orders', async (req, res) => {
        if(!req.user.data._id){
            res.status(401).end();
        } 
        const orders = await OrderModle.find({customer: req.user.data._id}) || [] ;
        res.send(orders);
      });

    app.post('/v1/orders', async (req, res) => {
        if(req.body === undefined) {
            req.status(400).end();
        } else if(req.user === undefined){
            req.status(401).end();
        } else {
            const orderData = {
                ...req.body,
                timestamp: Date.now(),
                customer: req.user.data._id,
            }
            const order = await OrderModle.create(orderData);
            if(order) {
                res.send(order).end();
            } else {
                res.status(500).end();
            }
        }
    })
}