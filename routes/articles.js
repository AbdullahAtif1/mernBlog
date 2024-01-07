const express = require('express')
const router = express.Router()
const articelModel = require('../models/article')

router.get('/new', (req, res) => {
	res.render('articles/newArticle', { article: new articelModel() })
})

router.get("/:id", (req, res) => {
	res.send(req.params.id)
})

router.post('/', async (req, res, next) => {
	let article = new articelModel({
		title: req.body.name,
		desc: req.body.desc,
		author: req.body.author
	})

	try {
		article = await article.save()
		console.log(article)
		res.redirect(`/articles/${article.id}`)
	} catch (error) {
		console.log(`Error: ${error}!`)
		res.render('articles/newArticle', { article: article }) // Update
	}
})

module.exports = router
