const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email: {
        type : String,
        unique : true
    },
  mobile: Number,
  accountType: {type : Number,default : 3},
  password: String,
  dob: Date,
  gender: String,
  address: String,
  city: String,
  state: String,
  pincode: Number,
  profilePicUrl: String,
  identityProofType: Number,
  identityProofNumber: Number,
  identityProofUrl: String,
  barNo: Number,
  barPic: String,
})

module.exports = mongoose.models.User || mongoose.model('User',UserSchema);
export default mongoose.models.User || mongoose.model('User',UserSchema);

