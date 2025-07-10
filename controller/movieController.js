const Movie = require('../models/movie')
const xlsx = require('xlsx')

//  Create a single movie
exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)
    res.status(201).json({ message: "Movie created", data: movie })
  } catch (err) {
    res.status(400).json({ message: "Error creating movie", error: err })
  }
}


exports.bulkUpload = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" })

    const workbook = xlsx.readFile(req.file.path)
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const movies = xlsx.utils.sheet_to_json(sheet)

    const formattedMovies = movies.map((m) => ({
      name: m.name,
      rating: parseFloat(m.rating),
      genres: m.genres ? m.genres.split(',').map((g) => g.trim()) : [],
      watchedUsers: m.watchedUsers ? m.watchedUsers.split(',').map((w) => w.trim()) : [],
    }));

    await Movie.insertMany(formattedMovies);
    res.status(201).json({ message: "Bulk upload successful", count: formattedMovies.length })
  } catch (err) {
    res.status(500).json({ message: "Error uploading movies", error: err })
  }
}

exports.getMovies = async (req, res) => {
  try {
    const { genres, rating, page = 1, limit = 10 } = req.query
    const filter = {};
    console.log(genres, "actionnnnnnnnnnnnnnnnnnnn");

    if (genres) {
      filter.genres = { $in: [genres] };
    }

    if (rating) {
      filter.rating = Number(rating);
    }

    const movies = await Movie.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Movie.countDocuments(filter)

    res.json({ data: movies, total });
  } catch (err) {
    res.status(500).json({ message: "Error fetching movies", error: err })
  }
}

