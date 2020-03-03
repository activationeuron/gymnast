import sheets from '../../models/sheets.js'

const createMarkingSheet = async (req, res) => {
    console.log(req.body)
    try {
        const sheet = await sheets.create(req.body)
        return res.json(sheet)
    } catch (error) {
        console.log(error)
    }
}

export default {
    createMarkingSheet
}
