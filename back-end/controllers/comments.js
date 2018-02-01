var models = require('../models');
var Comment = models.Comment;

function create(req, res) {
  let newComment = new Comment(req.body);
  newComment.save((err, createdComment) => {
  	if(err) {res.send(err)}
  	res.status(200).send(createdComment);
  });
}

function update(req, res) {
	console.log('updating id ', req.params.com_id);
	console.log('received body ', req.body);

	Comment.findOne({_id:req.params.com_id}, function(err, foundComment) {
		if(err) { console.log('error', err); }
		foundComment.content = req.body.content;
		foundComment.votes = req.body.votes;
		foundComment.save(function(err, saved) {
			if(err) { console.log('error', err); }
			res.json(saved);
		})
	})
}

function destroy(req, res) {
	console.log('deleting id: ', req.params.com_id);
	Comment.remove({_id: req.params.id}, function(err) {
		if (err) { return console.log(err); }
		console.log('removal of id=' + req.params.com_id +' successful.');
		res.status(200).send();
	})
}

module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;