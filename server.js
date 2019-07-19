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

//NEWS*************************************************/

//set up the api for GET requests for all news articles
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

/* API call to get a single news article*/
app.get('/api/news/:id', function(request, response) {
    var id = request.params.id;
    pool.connect(function(err, db, done) {
        if(err) {
            return response.status(400).send(err);
        } else {
            db.query('SELECT * FROM news WHERE id =$1', [id], function(err, table) {
                done();
                if(err) {
                    return response.status(400).send(err);
                } else {
                    console.log(table.rows[0]);
                    return response.status(200).send(table.rows[0]);
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

//SPORTS*************************************************************************************************************************************/
//set up the api to get all sports articles
app.get('/api/sports-articles', function(request, response) {
    pool.connect(function(err, db, done) {
        if(err) {
            return response.status(400).send(err);
        } else {
            db.query('SELECT * FROM sports', function(err, table) {
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

/* API call to get a single sports article*/
app.get('/api/sports/:id', function(request, response) {
    var id = request.params.id;
    pool.connect(function(err, db, done) {
        if(err) {
            return response.status(400).send(err);
        } else {
            db.query('SELECT * FROM sports WHERE id =$1', [id], function(err, table) {
                done();
                if(err) {
                    return response.status(400).send(err);
                } else {
                    console.log(table.rows[0]);
                    return response.status(200).send(table.rows[0]);
                }
            })
        }
    })
})

//set up the api for posting to sports
app.post('/api/add-sports', function(request, response) {
    console.log(request.body);
    var id = request.body.id;
    var date = request.body.date;
    var author = request.body.author;
    var sport = request.body.sport;
    var videoPath = request.body.videoPath;
    var home = request.body.home;
    var away = request.body.away;
    var headline = request.body.headline;
    var content = request.body.content;
    let values = [id, date, author, sport, videoPath, home, away, headline, content];

    pool.connect((err, db, done) => {
     if(err) {
         return response.status(400).send(err);
     } else {
         db.query('INSERT INTO sports (id, date, author, sport, "videoPath", home, away, headline, content) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',[...values], (err, table) => {
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

//INTERVIEWS*************************************************************************************************************************************/
//set up the api for posting to interview db
app.post('/api/add-interview', function(request, response) {
    console.log(request.body);
    var id = request.body.id;
    var date = request.body.date;
    var poi = request.body.poi;
    var category = request.body.category;
    var videoPath = request.body.videoPath;
    let values = [id, date, poi, category, videoPath];

    pool.connect((err, db, done) => {
     if(err) {
         return response.status(400).send(err);
     } else {
         db.query('INSERT INTO interviews (id, date, poi, category, "videoPath") VALUES($1, $2, $3, $4, $5)',[...values], (err, table) => {
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

//set up the api to get all interviews
app.get('/api/interviews', function(request, response) {
    pool.connect(function(err, db, done) {
        if(err) {
            return response.status(400).send(err);
        } else {
            db.query('SELECT * FROM interviews', function(err, table) {
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

/* API call to get a single sports article*/
app.get('/api/interview/:id', function(request, response) {
    var id = request.params.id;
    pool.connect(function(err, db, done) {
        if(err) {
            return response.status(400).send(err);
        } else {
            db.query('SELECT * FROM interviews WHERE id =$1', [id], function(err, table) {
                done();
                if(err) {
                    return response.status(400).send(err);
                } else {
                    console.log(table.rows[0]);
                    return response.status(200).send(table.rows[0]);
                }
            })
        }
    })
})


app.listen(PORT, () => console.log('Listening on port ' + PORT));