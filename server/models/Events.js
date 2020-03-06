const Mongoose = require('mongoose')

const EventSchema = new Mongoose.Schema({
    title: String,
    discription: String,
    location: String,
    registartionDue: Date,
    eventDate: Date,
    reportingTime: String,
    level: String,
    levelSheets: [
        { type: Mongoose.Schema.Types.ObjectId, ref: 'markingsheets' }
    ],
    participant: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'users' }],
    live: String
})

export default Mongoose.model('Events', EventSchema)
