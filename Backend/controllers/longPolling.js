const { Notification } = require('../models/Notification');

const subscribers = {};

const createNotification = async (req, res) => {
    const notification = new Notification({
        title: req.body.title,
    });
    await notification.save().catch((err)=>{
          res.status(500).json({message: 'Error creating notification'});
      });
    Object.keys(subscribers).forEach(id => {
        subscribers[id].json(notification);
        delete subscribers[id];
    })
    res.status(201).json(notification);
};

const getAllNotification = async (req, res) => {
    const id = Math.ceil(Math.random() * 100000);
    subscribers[id] = res;
    req.on('close', () => {
        delete subscribers[id]
    });
    
}


module.exports= {
    createNotification,
    getAllNotification,
}