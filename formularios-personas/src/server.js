

const express = require ('express')

const app = express ();


const personas = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set ('views', './views');
app.set ('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('inicio', {persona});
})

app.post('/personas' , (req, res)=>{
    personas.push(req.body);
    console.log(personas);
    res.redirect('/');
})

const port = 8080;

const server = app.listen(port, () => {
console.log(`Servidor http escuchendo en el puerto ${server.address().port}`);
})
server.on('error' , error => console.log(`Error en servidor ${error}`) );