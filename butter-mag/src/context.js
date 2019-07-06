import React, {Component} from 'react';
import { storyDetails } from './data';

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
        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        this.hydrateStateWithLocalStorage();
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
          );
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

    componentWillUnmount() {
        window.removeEventListener(
          "beforeunload",
          this.saveStateToLocalStorage.bind(this)
        );
    
        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
      }
    
      hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
          // if the key exists in localStorage
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);
    
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
            }
          }
        }
      }
    
      saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
          // save to localStorage
          localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
      }

    removeStory = (id) => {
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

    getStory = (id) => {
        //only return the item who's id matches the one that was passed in
        const story = this.state.news.find(item => item.id === id);
        return story;
    }

    handleDetail = (id) => {
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