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

//set up the api for GET requests
app.get('/api/articles', function(request, response) {
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
app.post('/api/new-article', function(request, response) {
    //console.log(request.body);
    var headline = request.body.headline;
    var date = request.body.date;
    var content = request.body.content;
    var images = request.body.images;
    var id = request.body.id;
    var snippet = request.body.snippet;
    var author = request.body.author;
    let values = [headline, date, content, images, id, snippet, author];

    pool.connect((err, db, done) => {
     if(err) {
         return response.status(400).send(err);
     } else {
         db.query('INSERT INTO news (headline, date, content, images, id, snippet, author) VALUES($1, $2, $3, $4, $5, $6, $7)',[...values], (err, table) => {
             done();
             if (err) {
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

