const express = require('express');
require('dotenv').config();
const noteRoutes = require('./routes/notes')

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use('/api/notes', noteRoutes);


app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
});