import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json())
app.use(cors());


const user = [];
const tweets = [];


app.post("/sign-up", (req, res) => {
	const loginUser = req.body

	if (!loginUser.username || typeof loginUser.username !== "string" || !loginUser.avatar || typeof loginUser.avatar !== "string") {
		return res.status(400).send("Todos os campos são obrigatórios!")
	}

	user.push(loginUser)
	res.status(201).send("OK")

})

app.post("/tweets", (req, res) => {
	const { username, tweet } = req.body
	const newTweet = { username, tweet }
	const registered = user.find(item => item.username === username)

	if (registered) {
		tweets.push(newTweet);
		res.send("OK");

	} else { res.send("UNAUTHORIZED") }

})


app.get("/tweets", (req, res) => {


})

app.listen(5000, () => {
	console.log("SERVER ONLINE")
})