const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type:String, unique: true},
  email: {type:String, unique: true},
  password: String,
  avatar: String,
  comments: [Schema.Types.ObjectId],
  replies: [Schema.Types.ObjectId],
  role: {
    type: String,
    enum : ['USER', 'MOD', 'ADMIN'],
    default : 'USER'
  },
  have: [Schema.Types.ObjectId],
  want: [Schema.Types.ObjectId]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;