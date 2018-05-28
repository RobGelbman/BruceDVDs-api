const express    = require('express');
const commentApi = express.Router();
const ObjectId        = require('mongoose').Types.ObjectId;

const Comment       = require('../models/comments');


commentApi.post('/submitComment', (req, res, next) => {
  const dvdDetailId = req.body.currentDVD;
  const username = req.body.username;
  const userId = ObjectId(req.body.userId);
  const comment = req.body.comment;
  console.log("backend")

  if (!comment ) {
    res.status(400).json({ message: 'Provide a comment' });
    return;
  }

  const theComment = new Comment({
    dvdDetailId,
    username,
    userId,
    comment
  });

  theComment.save((err) => {
    if (err) {
      res.status(400).json({ message: 'Something went wrong' });
      return;
    }
  });

});

// /* GET all DVDs */
// dvdApi.get('/dvds', (req, res, next) => {
//   Dvd.find().sort('dvdType').sort('dvdDate').sort('dvdLocation.venue')
//   .then(dvdList => {
//     res.json(dvdList);
//   })
//   .catch(error => next(error))
// });

// /* GET DVD by Id */
// dvdApi.get('/dvdDetail/:id', (req, res, next) => {
//   Dvd.find({'version.detailId': req.params.id}, {"version.$": 1})
//   .then(dvd => {      
//     res.json(dvd);
//   })
//   .catch(error => next(error))
// });

// /* GET DVD by venue */
// dvdApi.get('/dvds/location/venue/:venue', (req, res, next) => {
//   Dvd.find({"dvdLocation.venue": { $regex : new RegExp(req.params.venue, "i") }})
//   .then(dvd => {      
//     res.json(dvd);
//   })
//   .catch(error => next(error))
// });

// /* GET DVD by city */
// dvdApi.get('/dvds/location/city/:city', (req, res, next) => {
//   Dvd.find({"dvdLocation.city": { $regex : new RegExp(req.params.city, "i") }})
//   .then(dvd => {
//     res.json(dvd);
//   })
//   .catch(error => next(error))
// });

// dvdApi.get('/dvds/song/:song', (req, res, next) => {
//   Dvd.find({"version.tracklist.songlist": { $regex : new RegExp(req.params.song, "i") }})
//   .then(dvd => {
//     res.json(dvd);
//   })
//   .catch(error => next(error))
// });



module.exports = commentApi;