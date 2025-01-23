import express from "express";
import dataMusique from "./data/dataMusique.js";
import dataMode from "./data/dataMode.js";

import dataManga from "./data/dataManga.js";
import dataGhibli from "./data/dataGhibli.js";
import cors from "cors";
import dataDnD from "./data/dataDnD.js";
import dataSport from "./data/dataSport.js";
import  path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const serverPort = 4242;
//comme on est pas en ES module:
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);       

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
app.get("/dataMode", (req, res) => {
	res.json(dataMode);
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
app.get('/images/DnD/:imageName', (req, res) => {
	const { imageName } = req.params;
	console.log(req.params);
	const imageDirectory = path.join(__dirname, 'public/images/DnD/'); 
	
	const imagePath = path.join(imageDirectory, imageName);
	console.log("fetched:", imagePath);
	res.sendFile(imagePath, (err) => {
	  if (err) {
		console.error('Erreur lors de l’envoi de l’image :', err);
		res.status(404).send('Image non trouvée');
	  }
	});
  });
app.listen(serverPort, () => {
	console.info("l'api est lancée");
});

export default app;
