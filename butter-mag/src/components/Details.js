import React, { Component } from 'react';
import {ArticleConsumer} from '../context';


export class Details extends Component {
    render() {
        return (
            <ArticleConsumer>
                {(data)=> {
                    const {id, images, author, date, headline, content} = data.handleDetails;
                    return (
                        <div>
                            {headline}
                        </div>
                    )
                }}
            </ArticleConsumer>
        )
    }
}

export default Details
