import markingSheet from '../../models/sheets'
import Events from '../../models/Events'
console.log(markingSheet)

const createEvent = async (req, res) => {
    console.log(req.body)
    try {
        const event = await Events.create(req.body)
        return res.json(event)
    } catch (error) {
        console.log(error)
    }
}

const getSheetsByLevel = async (req, res) => {
    const { level } = req.query
    try {
        const sheetsByLevel = await markingSheet
            .find({ sheetLevel: level })
            .select('SheetName sheetLevel')
        return res
            .status(200)
            .json({ status: 'success', result: sheetsByLevel })
    } catch (error) {
        console.log(error)
    }
}
const getAllEvents = async (req, res) => {
    const { status } = req.query
    if (status === 'true') {
        try {
            const allEvents = await Events.find({
                $where: function() {
                    return this.live === 'true'
                }
            }).select(
                '_id title discription location registrationDue eventDate reportingTime level live'
            )
            return res
                .status(200)
                .send({ status: 'success', result: allEvents })
        } catch (error) {
            return res.json({ status: 'unsuccess', result: error })
        }
    } else {
        try {
            const allEvents = await Events.find({
                $where: function() {
                    return this.live === 'false'
                }
            }).select(
                '_id title discription location registrationDue eventDate reportingTime level live'
            )
            return res
                .status(200)
                .send({ status: 'success', result: allEvents })
        } catch (error) {
            return res.json({ status: 'unsuccess', result: error })
        }
    }
}

export default {
    createEvent,
    getSheetsByLevel,
    getAllEvents
}
