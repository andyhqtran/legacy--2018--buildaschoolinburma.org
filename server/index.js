/**
 * External dependencies
 */
import express from 'express';
import path from 'path';

/**
 * Variables
 */
const app = express();

/**
 * Middlewares
 */
app.use('/public', express.static(path.join(`${__dirname}/public`))

/**
 * View engine
 */
app.set('view engine', 'pug')

/**
 * Routes
 */
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey' })
});

/**
 * Initialize server
 */
app.listen(process.env.PORT || 3000, () => console.log('Server is online.'));