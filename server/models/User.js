import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    createdAt: Date,
    club: String,
    role: {
        type: String,
        default: 'player',
        enum: ['player', 'superadmin', 'admin', 'judge', 'payment', 'club']
    }
})

UserSchema.pre('save', function() {
    this.password = bcryptjs.hashSync(this.password)
    this.createdAt = new Date()
})

UserSchema.methods.generateTokens = function() {
    return jwt.sign(
        { id: this._id, role: this.role, email: this.email },
        'secratesecrate'
    )
}
UserSchema.methods.comparePassword = function(plain) {
    return bcryptjs.compareSync(plain, this.password)
}

export default mongoose.model('User', UserSchema)
