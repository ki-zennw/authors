let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public/dist/public'));

let path = require('path');

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors');


let AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required."], minlength: [3, "Name must contain more than 3 characters."] },
    // type: { type: String, required: [true, "Type is required."], minlength: [3, "Type must contain more than 3 characters."] },
    // description: { type: String, required: [true, "Description is required."], minlength: [3, "Description must contain more than 3 characters."] },
    // skill_1: { type: String },
    // skill_2: { type: String },
    // skill_3: { type: String },
}, { timestamps: true });

let Author = mongoose.model('Author', AuthorSchema);

mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/static'));

app.get('/get_authors', function (req, res) {
    Author.find({}, function (err, authors) {
        if (err) {
            console.log('something went wrong finding all the authors', err);
            res.json({ message: "Error", error: err })
        }
        else {
            console.log('successfully found all authors yo!');
            authors = authors;
            console.log(authors);
            res.json({ message: "Success", authors: authors });
        }
    })
})

//to show pet
app.get('/edit_author/:_id', function (req, res) {
    console.log("req.params.id:", req.params)
    Author.findOne({ _id: req.params._id }, function (err, author) {
        console.log(author);
        if (err) {
            console.log('something went wrong finding the author yo', err);
            res.json({ message: "Error", error: err })
        }
        else {
            console.log('successfully found the author yo!');
            author = author;
            res.json({ message: "Success", author: author });
        }
    })
})


app.post('/new_author', function (req, res) {
    console.log(req.body)
    let author = new Author({
        name: req.body.name,
        // type: req.body.type,
        // description: req.body.description,
        // skill_1: req.body.skill_1,
        // skill_2: req.body.skill_2,
        // skill_3: req.body.skill_3,
    });
    author.save(function (err) {
        if (err) {
            console.log('something went wrong creating a new author');
            res.json({ message: "Error", error: err })
        }
        else {
            console.log('successfully created this author!');
            author = author;
            console.log(author);
            res.json({ message: "Success", author: author });
        }
    })
})

app.put('/update/:_id', function (req, res) {
    Author.find({ _id: req.params._id }, function (err, author) {
        console.log("AUTHOR IN SERVER:", author);
        author[0].name = req.body.name;
        // pet[0].type = req.body.type;
        // pet[0].description = req.body.description;
        // pet[0].skill_1 = req.body.skill_1;
        // pet[0].skill_2 = req.body.skill_2;
        // pet[0].skill_3 = req.body.skill_3;
        author[0].save(function (err) {
            if (err) {
                console.log("updating author didn't go so well yo");
                res.json({ message: "Error", error: err })
            }
            else {
                console.log("successfully updated author yo!");
                author = author;
                res.json({ message: "Success", author: author })
            }
        })
    })
})

app.delete('/delete/:_id', function (req, res) {
    Author.remove({ _id: req.params._id }, function (err) {
        if (err) {
            console.log('something went wrong w/ deleting yo');
            res.json({ message: 'Error', error: err });
        }
        else {
            console.log('successfully deleted author yo!');
            // Author.find({}, function (err, authors) {
            //     if (err) {
            //         console.log('something went wrong finding all the authors yo', err);
            //         res.json({ message: "Error", error: err })
            //     }
            //     else {
            //         console.log('successfully found all authors yo!');
            //         authors = authors;
            //         console.log(authors);
            //         res.json({ message: "Success", authors: authors });
            //     }
            // })
        }
    })
})

// this route will be triggered if any of the routes above did not match
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})