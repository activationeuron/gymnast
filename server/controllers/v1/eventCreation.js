const getLevelOne = async (req, res) => {
    console.log(req.body)
}

const createEvent = async (req, res) => {
    console.log(req.body)
}

const getSheetsByLevel = async (req, res) => {
    console.log(req.body)
    return res.json({ status: 'Amit ria' })
}

export default {
    getLevelOne,
    createEvent,
    getSheetsByLevel
}
