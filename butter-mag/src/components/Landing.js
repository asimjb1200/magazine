import React, { Component } from 'react';
import styled from 'styled-components';
import News from './NewsSnip';
import {ArticleConsumer} from '../context';

export class Landing extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Testing article data',
            newsArticles: []
        }
    }

    //make ajax calls here
    componentDidMount() {
        console.log('component has mounted');
        //set up the GET request so that we can pull in data as soon as components load
        fetch('http://localhost:3001/api/articles')
            .then(function(response) {
                response.json()
                    .then(function(data) {
                        console.log(data);
                    })
            })
    }

    addStory(event) {
        var that=this;
        event.preventDefault();
        let data = {
            headline: this.refs.headline.value,
            date: this.refs.date.value,
            content: this.refs.content.value,
            images: this.refs.images.value,
            id: this.refs.id.value,
            snippet: this.refs.snippet.value,
            author: this.refs.author.value
        };
        
        //start the connection to send data to db via api
        var request = new Request('http://localhost:3001/api/new-article', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        let stories = that.state.newsArticles;
        stories.push(data);
        console.log(stories)
        that.setState({
            newsArticles: stories
        })

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
        let title = this.state.title;
        return (
            <div class="container-fluid">
                <br></br>
                <div>
                <h4>{title}</h4>
<form ref="articleForm">
                <input type="text" ref="headline" placeholder="Enter Headline" />
                <input type="date" ref="date" placeholder="Enter Date" />
                <input type="text" ref="content" placeholder="Enter Article Content" />
                <input type="text" ref="images" placeholder="Enter Image URL" />
                <input type="number" ref="id" placeholder="Enter article id" />
                <input type="text" ref="snippet" placeholder="Enter Snippet" />
                <input type="text" ref="author" placeholder="Enter Author" />
                <button onClick={this.addStory.bind(this)}>Add Article</button>
            </form>
                </div>
                    <Categories>
                        <h4>News</h4>
                        <Content>
                        <ArticleConsumer>
                                {(data) => {
                                    return data.news.map( story => {
                                        return <News key={story.id} article={story} />
                                    });
                                }}
                        </ArticleConsumer>
                        </Content>
                    </Categories>
                    
                    <Categories>
                        
                        <Content>

                        </Content>
                    </Categories>
                    <Categories>
                        <h4>News</h4>
                        <Content>content</Content>
                    </Categories>
                    <Categories>
                        <h4>News</h4>
                        <Content>content</Content>
                    </Categories>
            </div>
        )
    }
}

export default Landing

const Categories = styled.div`
    border-bottom: solid 1px #C0C0C0;
    overflow-y: hidden;
    font-family: Raleway;
    font-weight: bold;
`
const Content = styled.div`
    margin: 10px 5px 0px 5px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
      }
    

`