const mongoose = require('mongoose')
const { Schema } = mongoose

const PoolSchema = new Schema({
  poolOwner: { type: mongoose.ObjectId, required: [true, "can't be blank"] },
  poolOwnerAddress: String,
  contractAddress: String,
  txHash: String,
  name: { type: String, required: [true, "can't be blank"] },
  description: { type: String, required: [true, "can't be blank"] },
  lockValue: { type: Number, required: [true, "can't be blank"] },
  icon: { type: String, required: [true, "can't be blank"] },
  coverImage: { type: String, required: [true, "can't be blank"] },
  winnerDescription: String,
  rewardDuration: { type: Number, default: null },
}, { timestamps: true })

const Pool = mongoose.model('Pool', PoolSchema)

module.exports = Pool
