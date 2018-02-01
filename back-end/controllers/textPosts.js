var models = require('../models');
var TextPost = models.TextPost;

function index(req, res) {
  TextPost.find({}, function(err, textPosts) {
    if (err) { res.send(err) }
    else res.json(textPosts);
  });
}

function create(req, res) {
  let newTextPost = new TextPost(req.body);
  newTextPost.save((err, createdTextPost) => {
  	if (err) {res.send(err)}
  	res.status(200).send(createdTextPost);
  });
}

function show(req, res) {
	TextPost.find((err, textPosts) => {
		if (err) {
			console.log('index error:' + error);
			res.sendStatus(500);
		}
		for (var i=0;i<textPosts.length;i++) {
			if(textPosts[i]._id == req.params.id) {
				res.json(textPosts[i]);
				break;
			}
		}
	})
}

function update(req, res) {
	console.log('updating id ', req.params.id);
	console.log('received body ', req.body);

	TextPost.findOne({_id:req.params.id}, function(err, foundTextPost) {
		if(err) { console.log('error', err); }
		foundTextPost.title = req.body.title;
		foundTextPost.content = req.body.content;
		foundTextPost.thumbnail_image_url = req.body.thumbnail_image_url;
		foundTextPost.votes = req.body.votes;
		foundTextPost.comments = req.body.comments;
		foundTextPost.save(function(err, saved) {
			if(err) { console.log('error', err); }
			res.json(saved);
		})
	})
}

function destroy(req, res) {
	console.log('deleting id: ', req.params.id);
	TextPost.remove({_id: req.params.id}, function(err) {
		if (err) { return console.log(err); }
		console.log('removal of id=' + req.params.id +' successful.');
		res.status(200).send();
	})
}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;