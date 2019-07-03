import React, {Component} from 'react';
import {Articles, storyDetails} from './data';

const SiteData = React.createContext();

class ArticleProvider extends Component {
    state = {
        news: [],
        entertainment: [],
        interviews: [],
        storyDetails: storyDetails, 
    };

    //make ajax calls here
    componentDidMount() {
        console.log('component has mounted');
        var that = this;
        //set up the GET request so that we can pull in data as soon as components load
         fetch('http://localhost:3001/api/news-articles')
             .then(function(response) {
                 response.json()
                     .then(function(data) {
                         that.setState({
                             news: data
                         })
                     })
             })
    }

    removeStory(id) {
        var that = this;
        let stories = this.state.newsArticles;
        let story = stories.find(function(story) {
            return story.id === id;
        });
        
        var request = new Request('http://localhost:3001/api/remove/' + id, {
        method: 'DELETE'
        });

        fetch(request)
            .then(function(response) {
                stories.splice(stories.indexOf(story), 1); // remove that specific one from the array
                that.setState({
                    newsArticles: stories
                })
                response.json()
                    .then(function(data) {
                    })
            })
    }

    getStory(id) {
        //only return the item who's id matches the one that was passed in
        const story = this.state.news.find(item => item.id === id);
        return story;
    }

    handleDetail(id) {
        const story = this.getStory(id);
        this.setState(() =>{
            return {storyDetails: story}
        })
    }

    render() {
        return (
            // now make the information available
            <SiteData.Provider value={{
                ...this.state,
                getArticle: this.getArticle,
                handleDetail: this.handleDetail
            }}>
                {this.props.children}
            </SiteData.Provider>
        )
    }
}

const ArticleConsumer = SiteData.Consumer;

export {ArticleProvider, ArticleConsumer};