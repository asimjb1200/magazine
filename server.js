let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
let cors = require('cors');
const PORT = 3001;


//connect with pg database
let pool = new pg.Pool({
    port: 5432,
    password: 'Megabad2',
    database: 'ButterMagazine',
    max: 10,
    host: 'localhost',
    user: 'postgres'
});

// pool.connect((err, db, done) => {
//     if(err) {
//         return console.log(err);
//     } else {
//         var headline = 'Testing the database';
//         var date = '2019-01-29';
//         var author = 'Mike';
//         var snippet = 'Testing our the postgres database I think i will like this magazine';
//         var content = 'This will be where the main article is stored , on guard!';
//         var images = 'This will store the images for the articles';
//         var id = 2;

//         db.query('SELECT * FROM news', (err, table) => {
//             done();
//             if (err) {
//                 return console.log(err);
//             } else {
//                 console.log(table.rows[1].author);
//                 db.end();
//             }
//         })
//     }
// })

let app = express();// instantiate application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//set up the api for GET requests for news articles
app.get('/api/news-articles', function(request, response) {
    pool.connect(function(err, db, done) {
        if(err) {
            return response.status(400).send(err);
        } else {
            db.query('SELECT * FROM news', function(err, table) {
                done();
                if(err) {
                    return response.status(400).send(err);
                } else {
                    return response.status(200).send(table.rows);
                }
            })
        }
    })
})

app.delete('/api/remove/:id', function(request, response) {
    var id = request.params.id;
    pool.connect(function(err,db, done) {
        if(err) {
            return response.status(400).send(err);
        } else {
            db.query('DELETE FROM news WHERE id =$1', [id], function(err, result) {
                if(err){
                    return response.status(400).send(err);
                } else {
                    return response.status(200).send({message: 'successfully deleted'});
                }
            })
        }
    })
})

//set up the api for posting to db
app.post('/api/add-news', function(request, response) {
    console.log(request.body);
    var id = request.body.id;
    var headline = request.body.headline;
    var snippet = request.body.snippet;
    var content = request.body.content;
    var images = request.body.imagePath;
    var date = request.body.date;
    var author = request.body.author;
    var category = request.body.category;
    let values = [id, headline, snippet, content, images, date, author, category];

    pool.connect((err, db, done) => {
     if(err) {
         return response.status(400).send(err);
     } else {
         db.query('INSERT INTO news (id, headline, snippet, content, "imagePath", date, author, category) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',[...values], (err, table) => {
             done();
             if (err) {
                 console.log(err);
                 return response.status(400).send(err);
             } else {
                 return response.status(201).send(`Data Inserted`);
                // db.end();

             }
         })
     }
 })


})

app.listen(PORT, () => console.log('Listening on port ' + PORT));

