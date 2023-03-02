const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    initialBalance: { type: Number, required: true },
    adharNo: { type: String, required: true, unique: true },
    panNo: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
    transactions: [
      {
        type: {
          type: String,
          enum: ['Deposit', 'Withdrawal', 'Transfer', 'Received'],
          required: true,
        },
        amount: { type: Number, required: true },
        from: { type: String },
        to: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],
      closed: { type: Boolean, default: false },
ledger:[{
    type:{type:"String"},
    amount:{type:"Number"},
    date:{type:Date},
    from:{type:"String"},
    to:{type:"String"}
}]
//     ledger: [
//         {
//           type: String,
//           amount: Number,
//           date: Date
//         }
//       ],
// name: String,
// gender: String,
// dob: String,
// email: String,
// mobile: String,
// address: String,
// balance: Number,
// adharNo: String,
// panNo: String,
// status: String,
// ledger: [
//   {
//     type: String,
//     amount: Number,
//     date: Date
//   }
// ]

  });
  
 const BackAccount = mongoose.model('BackAccount', accountSchema);

module.exports = BackAccount  