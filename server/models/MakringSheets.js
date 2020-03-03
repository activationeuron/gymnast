import Mongoose from 'mongoose'

const markingSheets = new Mongoose.Schema({
    SheetName: {
        type: String,
        required: true
    },
    sheetLevel: {
        type: String,
        required: true
    },
    createSheet: {
        type: Array,
        required: true
    }
})

export default Mongoose.model('markingSheet', markingSheets)
