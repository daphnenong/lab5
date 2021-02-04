var data = require("../data.json");

exports.addFriend = function (req, res) {
	var desc = req.query.description;
	var name = req.query.name;
	var newFriend = {
		"name": name,
		"description": desc,
		"imageURL": "https://picsum.photos/400/400"
	}
	data.friends.push(newFriend)
};