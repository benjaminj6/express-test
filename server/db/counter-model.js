let mongoose = require('mongoose');

let CounterSchema = new mongoose.Schema({
	_id: String,
	seq: Number,
});

CounterSchema.statics.getNextSequence = function(id, callback) {
	this.findByIdAndUpdate(id, {$inc: {seq: 1}}, callback);
};

let Counter = mongoose.model('Counters', CounterSchema);


module.exports = Counter;