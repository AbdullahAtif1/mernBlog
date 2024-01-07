const express = require('express')
const router = express.Router()
const articelModel = require('../models/article')

router.get('/new', (req, res) => {
	res.render('articles/newArticle.ejs')
})

router.get(("/:id", (req, res) => {
	
}))

router.post('/', async (req, res, next) => {
	console.log(req.body)
	const newArticle = new articelModel({
		title: req.body.name,
		desc: req.body.desc,
		author: req.body.author
	})
	// next();
	try {
		article = await newArticle.save()
		res.redirect(`/articles/${article.id}`)
	} catch (error) {

	}
})

module.exports = router
