const { model, Schema } = require('mongoose');

module.exports = new model("example", new Schema({
    exampleName: String,
}));