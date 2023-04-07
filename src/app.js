import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json())
app.use(cors());


const user = [];
const tweets = [];


app.post("/sing-up", (req, res) => {
    res.send('testando')
})

app.post("/tweets", (req, res) => {
    res.send('testando')
})

app.get("/tweets", (req, res) => {
    res.send("testando")
})



app.listen(5000, () => {
	console.log("Server on")
})