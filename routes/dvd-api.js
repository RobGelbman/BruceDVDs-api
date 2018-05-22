const express    = require('express');
const dvdApi = express.Router();

const Dvd       = require('../models/dvd');

/* GET all DVDs */
dvdApi.get('/dvds', (req, res, next) => {
  Dvd.find().sort('dvdDate')
  .then(dvdList => {
    console.log(dvdList)
      
    res.json(dvdList);
  })
  .catch(error => next(error))
});

/* GET DVD by Id */
dvdApi.get('/dvds/:id', (req, res, next) => {
  Dvd.find({dvdId: req.params.id})
  .then(dvd => {
    console.log(dvd)
      
    res.json(dvd);
  })
  .catch(error => next(error))
});

/* GET DVD by venue */
dvdApi.get('/dvds/location/venue/:venue', (req, res, next) => {
  Dvd.find({"dvdLocation.venue": { $regex : new RegExp(req.params.venue, "i") }})
  .then(dvd => {
    console.log(dvd)
      
    res.json(dvd);
  })
  .catch(error => next(error))
});

/* GET DVD by city */
dvdApi.get('/dvds/location/city/:city', (req, res, next) => {
  Dvd.find({"dvdLocation.city": { $regex : new RegExp(req.params.city, "i") }})
  .then(dvd => {
    console.log(dvd)
      
    res.json(dvd);
  })
  .catch(error => next(error))
});

dvdApi.get('/dvds/song/:song', (req, res, next) => {
  Dvd.find({"version.tracklist.songlist": { $regex : new RegExp(req.params.song, "i") }})
  .then(dvd => {
    console.log(dvd)
      
    res.json(dvd);
  })
  .catch(error => next(error))
});

module.exports = dvdApi;