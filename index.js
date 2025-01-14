import express from 'express'
import dataManga from './data/dataManga.js'
import cors from "cors"

const app = express()

const serverPort = 4242

app.use(cors());
app.use(express.json());

app.get('/dataManga', (req, res) => {
    res.json(dataManga)
})

app.listen(serverPort, () => {
    console.info("l'api est lancée")
})

export default app
