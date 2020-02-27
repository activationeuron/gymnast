import User from '../../models/User'
const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
        if (user.comparePassword(password)) {
            const token = user.generateTokens()
            user.password = undefined
            return res.json({
                user,
                token
            })
        }
    }
    return res.json({ error: 'error' })
}

const register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body
    console.log(req.body)

    try {
        const user = await User.create({
            firstname,
            lastname,
            email,
            password
        })
        const tokens = user.generateTokens()
        return res.status(201).json({ user: user, tokens: tokens })
    } catch (error) {
        if (error) {
            res.json({ error: error.errmsg })
        }
    }
}

export default {
    register,
    login
}
