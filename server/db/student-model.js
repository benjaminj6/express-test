let mongoose = require('mongoose');

let StudentSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	}, 
	lastName: {
		type: String,
		required: true,
	},
	_id: {
		type: Number,
		required: true,
		unique: true,
	}
});

StudentSchema.virtual('fullName').set(function() {
	return `${this.firstName} ${this.lastName}`;
});

let Student = mongoose.model('Students', StudentSchema);

module.exports = Student;