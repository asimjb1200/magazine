import React, { Component } from 'react'

export class AddStories extends Component {

    addStory(event) {
        event.preventDefault();
        let data = {
            id: this.refs.id.value,
            headline: this.refs.headline.value,
            snippet: this.refs.snippet.value,
            content: this.refs.content.value,
            imagePath: this.refs.imagePath.value,
            date: this.refs.date.value,
            author: this.refs.author.value,
            category: this.refs.category.value
        };
        
        //start the connection to send data to db via api
        var request = new Request('http://localhost:3001/api/add-news', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

         //xmlhttprequest()
         fetch(request)
             .then(function(response) {
                 response.json()
                     .then(function(data) {

                     })
             })
             .catch(function(err) {
                console.log(err);
             })
    }

    addSports(event) {
        event.preventDefault();
        let data = {
            id: this.refs.id.value,
            date: this.refs.date.value,
            author: this.refs.author.value,
            sport: this.refs.sport.value,
            videoPath: this.refs.videoPath.value,
            home: this.refs.home.value,
            away: this.refs.away.value,
            headline: this.refs.headline.value,
            content: this.refs.content.value,
        };
        
        //start the connection to send data to db via api
        var request = new Request('http://localhost:3001/api/add-sports', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

         //xmlhttprequest()
         fetch(request)
             .then(function(response) {
                 response.json()
                     .then(function(data) {

                     })
             })
             .catch(function(err) {
                console.log(err);
             })
             alert('Article Posted');
    }

    addInterview(event) {
        event.preventDefault();
        let data = {
            id: this.refs.id.value,
            date: this.refs.date.value,
            poi: this.refs.poi.value,
            category: this.refs.category.value,
            videoPath: this.refs.videoPath.value,
        };
        
        //start the connection to send data to db via api
        var request = new Request('http://localhost:3001/api/add-interview', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

         //xmlhttprequest()
         fetch(request)
             .then(function(response) {
                 response.json()
                     .then(function(data) {

                     })
             })
             .catch(function(err) {
                console.log(err);
             })
             alert('Article Posted');
    }
    render() {
        return (
            <div class="container-fluid">
            <h4>Add a News Article</h4>
            <form ref="articleForm">
                <div className="form-group">
                    <label for="id">Enter ID</label>
                    <input id="id" type="number" className="form-control" ref="id" />
                </div>  
                <div className="form-group">
                    <label for="headline">Enter Headline</label>
                    <input id="headline" type="text" className="form-control" ref="headline" />
                </div>
                <div className="form-group">
                    <label for="snippet">Enter Story Snippet</label>
                    <input id="snippet" type="text" className="form-control" ref="snippet" />
                </div>
                <div className="form-group">
                    <label for="content">Enter Content</label>
                    <textarea id="content" rows="5" className="form-control"  type="text" ref="content" />
                </div>              
                <div className="form-group">
                    <label for="path">Enter Image Path</label>
                    <input id="path" type="text" className="form-control"  ref="imagePath" />
                </div>
                <div className="form-group">
                    <label for="date">Enter Date</label>
                    <input id="date" type="date" className="form-control" ref="date" />
                </div>
                <div className="form-group">
                    <label for="author">Enter Author</label>
                    <input id="author" type="text" className="form-control" ref="author" />
                </div>
                <div className="form-group">
                    <label for="category">Article's Category</label>
                    <input id="category" type="text" className="form-control" ref="category" />
                </div>
                <button className="btn btn-outline-success" onClick={this.addStory.bind(this)}>Add Article</button>
            </form>
            <hr/>
            <br/>
            <br/>

            <h4>Add a Sports Article</h4>
            <form ref="articleForm">
                <div className="form-group">
                    <label for="sport-id">Enter ID</label>
                    <input id="sport-id" type="number" className="form-control" ref="id" />
                </div>  
                <div className="form-group">
                    <label for="sport-date">Enter Date</label>
                    <input id="sport-date" type="date" className="form-control" ref="date" />
                </div>
                <div className="form-group">
                    <label for="sport-author">Enter Author</label>
                    <input id="sport-author" type="text" className="form-control" ref="author" />
                </div>
                <div className="form-group">
                    <label for="sport">Enter Sport Played</label>
                    <input id="sport" type="text" className="form-control" ref="sport" />
                </div>
                <div className="form-group">
                    <label for="sport-path">Enter Video Path</label>
                    <input id="sport-path" type="text" className="form-control"  ref="videoPath" />
                </div>
                <div className="form-group">
                    <label for="home">Enter Home Team</label>
                    <input id="home" type="text" className="form-control"  ref="home" />
                </div>
                <div className="form-group">
                    <label for="away">Enter Away Team</label>
                    <input id="away" type="text" className="form-control"  ref="away" />
                </div>
                <div className="form-group">
                    <label for="sport-headline">Enter Headline</label>
                    <input id="sport-headline" type="text" className="form-control" ref="headline" />
                </div>
                <div className="form-group">
                    <label for="sport-content">Enter Content</label>
                    <textarea id="sport-content" rows="5" className="form-control"  type="text" ref="content" />
                </div>              

                <button className="btn btn-outline-success" onClick={this.addSports.bind(this)}>Add Article</button>
            </form>
            <hr/>
            <br/>
            <br/>
            <h4>Add an Interview</h4>
            <form ref="articleForm">
                <div className="form-group">
                    <label for="interview-id">Enter ID</label>
                    <input id="interview-id" type="number" className="form-control" ref="id" />
                </div>  
                <div className="form-group">
                    <label for="interview-date">Enter Date</label>
                    <input id="interview-date" type="date" className="form-control" ref="date" />
                </div>
                <div className="form-group">
                    <label for="poi">Enter Person of Interest</label>
                    <input id="poi" type="text" className="form-control" ref="poi" />
                </div>
                <div className="form-group">
                    <label for="interview-category">Enter Category</label>
                    <input id="interview-category" type="text" className="form-control" ref="category" />
                </div>
                <div className="form-group">
                    <label for="interview-path">Enter Video Path</label>
                    <input id="interview-path" type="text" className="form-control"  ref="videoPath" />
                </div>            
                <button className="btn btn-outline-success" onClick={this.addInterview.bind(this)}>Add Article</button>
            </form>
        </div>
        )
    }
}

export default AddStories
