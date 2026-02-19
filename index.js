const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { connectToMongoDB } = require('./connect');
const { restrictTo, checkForAuthentication } = require('./middlewares/auth');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticrouter');
const userRoute = require('./routes/user');
const URL = require('./models/url');
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error(
    'MONGO_URI is not set. Create a .env file locally (do not commit) or set it in your deployment environment.'
  );
}

const app = express();
const PORT = process.env.PORT || 8001;

connectToMongoDB(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.get('/test', async (req, res) => {
  const allUrls = await URL.find({});
  return res.render('home', {
    allUrls: allUrls,
  });
});

app.use('/url', restrictTo(['NORMAL']), urlRoute);
app.use('/user', userRoute);
app.use('/', staticRoute);

app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortUrl: shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  if (!entry) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  return res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log('Server Started at PORT', PORT));
