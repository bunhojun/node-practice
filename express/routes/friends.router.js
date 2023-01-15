const express = require("express");
const { getFriends, postFriend, getFriend } = require("../controllers/friends.controller");

const router = express.Router();

router.get("/", getFriends);
router.post("/", postFriend);
router.get("/:friendId", getFriend);

module.exports = router;
