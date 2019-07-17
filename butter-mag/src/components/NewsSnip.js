import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ArticleConsumer} from '../context';

export class NewsSnip extends Component {

    render() {
        
        const {id, imagePath, headline, snippet} = this.props.article;
        return (
                <ArticleConsumer>             
                    {(data) => (
                        <Link to={`/details/${id}`} >
                        <div className="card shadow" /*onClick={() => data.handleDetail(id)} */ >
                        <img className="card-img-top" src={imagePath} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{headline}</h5>
                                <p className="card-text">{snippet}</p>
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