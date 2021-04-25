const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mutationSchema = new Schema(
    {
        found: {
            type: Boolean,
            required: true
        },
    }
);

module.exports = mongoose.model('Mutation', mutationSchema);
