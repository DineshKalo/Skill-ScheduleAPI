const express=require('express')
const schedule=require('../Controller/product.controller.js')
const router=express.Router()

router.get('/get',schedule.getSchedule)
router.post('/post',schedule.postSchedule)

module.exports=router;