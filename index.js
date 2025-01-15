import express from "express";
import dataManga from "./data/dataManga.js";
import dataGhibli from "./data/dataGhibli.js";
import cors from "cors";

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

app.get("/dataGhibli", (req, res) => {
	res.json(dataGhibli);
});

app.listen(serverPort, () => {
	console.info("l'api est lancée");
});

export default app;
