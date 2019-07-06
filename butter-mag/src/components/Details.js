import React, { Component } from 'react';
import {ArticleConsumer} from '../context';


export class Details extends Component {
    
    render() {
        return (
            <ArticleConsumer>
                {(data)=> {
                    const {id, images, author, date, headline, content} = data.storyDetails;
                    
                    return (
                        <div className="container-fluid">
                            {headline}
                        </div>
                    )
                }}
            </ArticleConsumer>
        )
        
    }
}

export default Details
