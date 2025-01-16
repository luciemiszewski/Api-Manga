import express from "express";
import dataMusique from "./data/dataMusique.js";
import dataManga from "./data/dataManga.js";
import dataGhibli from "./data/dataGhibli.js";
import cors from "cors";
import dataDnD from "./data/dataDnD.js";
import dataSport from "./data/dataSport.js";
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

app.get("/dataGhibli", (req, res) => {
	res.json(dataGhibli);
});

app.get("/dataDnD", (req, res) => {
	res.json(dataDnD);
});

app.get("/dataSport", (req, res) => {
	res.json(dataSport);
});

app.listen(serverPort, () => {
	console.info("l'api est lancée");
});

export default app;
