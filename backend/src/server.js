const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://msilva:msilva@omnistack-19acx.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// req.query = Acessar query params (para filtro)
// req.params = Acessar routes params (para edição, delete)
// req.body = Acessar o corpo da requisição (criação, edição)

app.use(express.json());
app.use(routes);
app.listen(3333);