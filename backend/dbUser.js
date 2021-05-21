import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
});

userSchema.statics.findByCredentials = async (email, password) => {
    console.log("2")
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

export default mongoose.model('users', userSchema);