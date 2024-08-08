const schedule= require('../models/schedule.model')

const getSchedule= async(req,res)=>{
    try {
        const getTable= await schedule.find({});
        res.status(200).json(getTable);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const postSchedule= async(req,res)=>{
    try {
        const table= await schedule.create(req.body);
        res.status(200).json(table);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports={
    getSchedule,
    postSchedule
}