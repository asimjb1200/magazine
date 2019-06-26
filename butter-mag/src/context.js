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

    //get the articles from the data file to the news array for usage later
    setArticles = () => {
        let newsCopies = [];
        Articles.forEach(story =>{
            const singleArticle = {...story} //copy each story from the data set one by one
            newsCopies = [...newsCopies, singleArticle]; //hold all of the copied articles
        })
        this.setState(() =>{
            return {news: newsCopies}//now the original articles are safe from tampering when we display them to the web since they've been copied
        })
    }

    //define a function that will pull in a specific article by it's id
    getArticle = (id) => {
        const story = this.state.news.find(story => story.id === id);
        return story;
    }

    handleDetail = (id) => {
        const story = this.getArticle(id);
        this.setState(() =>{
            return {storyDetails: story}//set the story being viewed to the one that was clicked
        })

    }

    componentDidMount() {
        this.setArticles();
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