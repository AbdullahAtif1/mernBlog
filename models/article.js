const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
	
	title: {type: String, required: true},
	desc: {type: String, required: true},
	author: {type: String, required: true},
	date: { type: Date, default: Date.now},

})

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;

