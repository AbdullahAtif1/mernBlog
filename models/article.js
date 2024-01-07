const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
	
	title: {type: String, default: "Lorem Ipsum", required: true, unique: true},
	desc: {type: String, default: "Neque porro quisquam est qui dolorem ipsum...", required: true},
	author: {type: String, default: "Abdullah Atif Khajgi", required: true},
	date: { type: Date, default: Date.now},

})

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;

