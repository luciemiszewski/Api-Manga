import express from "express";
import dataManga from "./data/dataManga.js";
import cors from "cors";
import dataMusique from "./data/dataMusique.js";
import dataDnD from "./data/dataDnD.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const serverPort = 4242;

app.use(cors());
app.use(express.json());

app.get("/dataManga", (req, res) => {
	res.json(dataManga);
});

app.get("/dataManga/:id", (req, res) => {
	const { id } = req.params;
	const manga = dataManga.find((element) => element.id === id);
	res.json(manga);
});

app.get("/dataMusique", (req, res) => {
	res.json(dataMusique);
});

app.get("/dataDnD", (req, res) => {
	res.json(dataDnD);
});

app.listen(serverPort, () => {
	console.info("l'api est lancée");
});

export default app;
