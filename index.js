import express from 'express'
import pg  from 'pg'
const app = express()
const port = 3000
const { Pool } = pg

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'risma123rv',
    port: 5433,
})

app.get('/', (req, res, next) => {
    console.log("TEST DATA :");
    pool.query('select * from biodata')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
        