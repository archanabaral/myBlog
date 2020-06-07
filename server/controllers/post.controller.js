const Post = require('../models/Post');
const User = require('../models/User');

exports.getPost = async (req, res) => {
	try {
		const user = await User.findOne({
			id: req.params.userId,
		});
		if (user) {
			const post = await Post.findAll({
				userId: req.params.userId,
			});
			res.status(201).json(post);
		} else {
			res.status(404).send('User Not Found');
		}
	} catch (err) {
		console.log(err.message);
		res.status(500).send('server error');
	}
};
//   try {
//     const post = await Post.findAll();
//     res.json(post);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send("Server error");
//   }
// };

exports.createPost = async (req, res) => {
	try {
		const user = await User.findOne({
			id: req.params.userid,
		});

		console.log('User', user, req.params.userid);

		if (user) {
			req.body.userId = req.params.userid;

			const post = await Post.create(req.body);

			res.status(201).json(post);
		} else {
			res.status(404).send('User Not Found');
		}
	} catch (err) {
		console.log(err.message);
		res.status(500).send('server error');
	}
};

exports.updatePost = async (req, res) => {
	try {
		const post = await Post.update(req.body, {
			where: { id: req.params.id },
			returning: true,
		});

		res.status(200).json({
			success: true,
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send('server error');
	}
};

exports.deletePost = async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.id);
		await post.destroy();
		res.json({
			success: true,
			data: {},
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send('server error');
	}
};
