const friends = require("../models/friends.model");

function getFriend(req, res) {
  const { friendId } = req.params;
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
    return;
  }
  res.status(404).json({
    error: "Friend does not exist"
  });
}

function getFriends(req, res) {
  res.json(friends);
}

function postFriend(req, res) {
  if(!req.body.name) {
    res.status(400).json({
      error: "Missing friend name",
    })
    return;
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length
  }
  friends.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend
}