const mongoose=require('mongoose')

const ScheduleSchema= mongoose.Schema({
    subject:{
        type: String,
        required: [true,'Please enter the subject'],
    },
    description:{
        type:String,
    },
    room:{
        type:String,
        required: true
    },
    teacher:{
        type:String,
        required: true
    }
});

const Schedule=mongoose.model("Schedule",ScheduleSchema);
module.exports=Schedule;