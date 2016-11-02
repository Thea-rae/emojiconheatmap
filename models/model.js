var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// See http://mongoosejs.com/docs/schematypes.html

var emojiSchema = new Schema({
	type: Array,
	text: String,
	date: String
})

// export 'Animal' model so we can interact with it in other files
module.exports = mongoose.model('Emoji',emojiSchema);