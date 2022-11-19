const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
})

module.exports = mongoose.models.User || mongoose.model('User',UserSchema);
export default mongoose.models.User || mongoose.model('User',UserSchema);

