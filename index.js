import express from 'express'
import dataManga from './data/dataManga.js'

const app = express()

const serverPort = 4242

app.get('/dataManga', (req, res) => {
    res.json(dataManga)
})

app.listen(serverPort, () => {
    console.info("l'api est lancée")
})

