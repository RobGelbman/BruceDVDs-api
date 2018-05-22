const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dvdSchema = new Schema({
    dvdId: Number,
    dvdDate: String,
    dvdLocation: {
      venue: String,
      city: String,
      state: String
    },
    dvdType: String,
    version: [
      {
        detailId: Number,
        name: String,
        format: {
          type: String,
          enum : ['pal', 'ntsc']
        },
        audio: String,
        video: String,
        generation: String,
        chapters: String,
        menu: String,
        summary: String,
        tracklist: [{dvd: Number, songlist: [String]}],
        rating: Number,
        description: String,
        capture: [{filename: String, caption: String}],
        coverArt: Boolean
      }
    ]

});

const Dvd = mongoose.model('Dvd', dvdSchema);
module.exports = Dvd;