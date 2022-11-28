const mongoose = require('mongoose')

const CaseSchema = new mongoose.Schema({
    courtState: String,
    courtType: String,
    caseNature: String,
    caseType: String,
    complainentName: String,
    complainentEmail: String,
    complainentPhone: Number,
    complainentDOB: Date,
    complainentGender: String,
    complainentPin: String,
    complainentCity: String,
    complainentState: String,
    complainentAddress: String,
    respondentName: String,
    respondentEmail: String,
    respondentPhone: Number,
    respondentDOB: Date,
    respondentGender: String,
    respondentPin: String,
    respondentCity: String,
    respondentState: String,
    respondentAddress: String,
    causeOfAction: String,
    dateOfAction: Date,
    locationOfAction: String,
    actType: String,
    description: String,
})

module.exports = mongoose.models.Case || mongoose.model('Case',CaseSchema);
export default mongoose.models.Case || mongoose.model('Case',CaseSchema);

