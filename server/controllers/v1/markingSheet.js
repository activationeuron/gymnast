import MakringSheets from '../../models/MakringSheets.js'

const createMarkingSheet = async (req, res) => {
    console.log(req.body)
    try {
        const sheet = await MakringSheets.create(req.body)
        return res.json(sheet)
    } catch (error) {
        console.log(error)
    }
}

export default {
    createMarkingSheet
}
