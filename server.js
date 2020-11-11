const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
//const { animals } = require('./data/animals');
//onst apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//functions moved to lib/animals.js
//animal API routes moved to animalRoutes.js
//get routes moved to htmlRoutes/index.js



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});




