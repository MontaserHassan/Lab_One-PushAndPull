const { Notification } = require('../models/Notification');

const createNotification = async (req, res) => {
    const notification = new Notification({
        title: req.body.title,
    });
    // console.log(notification)
    await notification.save().then(() => {
      res.json(notification);
    }).catch((err)=>{
        // console.log(err)
        res.status(500).send({message: 'Error creating notification'});
    });
};

const getAllNotification = async (req, res) => {
    const notifications = await Notification.find().exec();
    // if(!notifications) return res.status(404).json({message : 'Notifications not found'});
    const lastTimestamp = req.query.lastTimestamp;
    const newNotifications = notifications.filter(notification => notification.createdAt >= lastTimestamp);
    // console.log(newNotifications)
    res.json(newNotifications);
}


module.exports= {
    createNotification,
    getAllNotification,
}