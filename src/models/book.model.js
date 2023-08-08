const mongoose =require("mongoose");

const bookSchema =new mongoose.Schema({
    name: {type: String, required: true},
    trades: {
        type: [mongoose.Types.ObjectId],
        default: []
    }
});


const Book = mongoose.model("Book",bookSchema);

module.exports=Book;