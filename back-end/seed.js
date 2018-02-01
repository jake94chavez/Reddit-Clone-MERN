var db = require('./models');

var textPostList = [
	{
		title: 'Wednesday',
		content: 'This is What it is My Dudes!',
		thumbnail_image_url: 'http://i1.kym-cdn.com/photos/images/newsfeed/001/091/264/665.jpg',
		votes: 456,
		comments:
		[
		{
			content: 'Heckin yes my guy!',
			votes: 32
		},
		{
			content:'But it\'s thursday now, my man',
			votes: -12
		}
		]
	},
	{
		title: 'It\'s Bananas',
		content: 'B-A-N-A-N-A-S',
		thumbnail_image_url: 'https://images-na.ssl-images-amazon.com/images/I/71OebfTPCiL._SX466_.jpg',
		votes: 12,
		comments: 
		[
		{
			content: 'Apples are the superior fruits',
			votes: 5
		}
		]
	}
]

db.TextPost.remove({}, function(err, textposts) {
	if(err) {
		console.log('Error occured in remove posts', err);
	} else {
		console.log('removed all posts');

		db.TextPost.create(textPostList, function(err, textposts) {
			if(err) { return console.log('Error', err); }
			console.log('all posts: ', textposts);
			console.log('created', textposts.length, 'books');
			process.exit();
		})
	}
})