const express = require ('express');
const conn = require('./conn.js');
const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.json())

app.get('/', (req, res)=>{
    res.render('index');
})

app.post('/register', (req, res) => {
    const { item_type, metal_type, stone_type, price, karat } = req.body;

    const insert = `INSERT INTO jewels (item_type, metal_type, stone_type, price, karat) VALUES (?, ?, ?, ?, ?)`;

    conn.query(insert, [item_type, metal_type, stone_type, price, karat], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Insert failed');
        }
        res.send(`
            <script>
                alert('Data Inserted');
                location.href = '/';
            </script>`);
    });
});

app.listen(9000)