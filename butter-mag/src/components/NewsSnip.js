import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ArticleConsumer} from '../context';

export class NewsSnip extends Component {
    render() {
        const {id, images, headline, content} = this.props.article;
        return (
                <ArticleConsumer>             
                    {(data) => (
                        <Link to="/details">
                        <div className="card shadow" onClick={() => data.handleDetail(id)}>
                        <img class="card-img-top" src={images} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">{headline}</h5>
                                <p class="card-text">{content}</p>
                            </div>
                        </div>
                        </Link>
                        )
                    }
                </ArticleConsumer>
        )
    }
}

export default NewsSnip;