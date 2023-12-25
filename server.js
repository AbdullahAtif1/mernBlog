const express = require("express")
const app = express()
app.set("view engine", "ejs")

const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/mernblog')

const articleRouter = require('./routes/articles')
app.use('/articles', articleRouter)


app.get('/', (req, res) => {

	const articles = [{
		title: "Test article",
		date: new Date(),
		desc: "Lorem Ipsum dolor sit amet",
		author: "Abdullah Atif Khwajgi"
	}, {
    title: "Another article",
    date: new Date(),
    desc: "This is another article description",
    author: "John Doe"
	}, {
		title: "Yet Another article",
		date: new Date(),
		desc: "This is yet another article description",
		author: "Jane Doe"
	}]

	res.render('articles/index.ejs', { articles: articles })
})

app.listen(3000)
