const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  dvdDetailId : Number,
  userId: Schema.Types.ObjectId,
  username: String,
  comment: String,
  replies: [Schema.Types.ObjectId]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;