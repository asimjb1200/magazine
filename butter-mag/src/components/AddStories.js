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

        // let stories = that.state.newsArticles;
        // stories.push(data);
        // console.log(stories)
        // that.setState({
        //     newsArticles: stories
        // })

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

    render() {
        return (
            <div class="container-fluid">
            <h4>Add a news article</h4>
            <form ref="articleForm">
                <div className="form-group">
                    <label for="id">Enter article id</label>
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
                    <label for="content">Enter article content here</label>
                    <textarea id="content" rows="5" className="form-control"  type="text" ref="content" />
                </div>
                
                <input type="text" className="form-control"  ref="imagePath" placeholder="Enter Image Path" />
                <input type="date" className="form-control" ref="date" placeholder="Enter Date" />
                <input type="text" className="form-control" ref="author" placeholder="Enter Author" />
                <input type="text" className="form-control" ref="category" placeholder="Enter article's category" />
                <button className="btn btn-outline-success" onClick={this.addStory.bind(this)}>Add Article</button>
            </form>
        </div>
        )
    }
}

export default AddStories
