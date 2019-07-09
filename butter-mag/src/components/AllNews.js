import React, { Component } from 'react';
import styled from 'styled-components';
import { ArticleConsumer } from '../context';
import {Link} from 'react-router-dom';

export class AllNews extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center" style={{fontFamily: 'Lobster'}}>All News</h1>
                <ArticleConsumer>
                    {(stories) => {
                        return stories.news.map(story => {
                            return (
                                <Link to="/details" style={{textDecoration: 'none', color: 'black'}} key={story.id}>
                                <div className="row wrapper" style={{height: '20vh', borderBottom: 'solid 1px #C0C0C0', fontFamily: 'Raleway'}}>
                                    <div className="col-7" onClick={() => stories.handleDetail(story.id)}>
                                        <h4>{story.headline}</h4>
                                        <p className="text-muted">{story.snippet}</p>
                                        <p className="text-muted text-truncate"><strong>{story.content}</strong></p>
                                    </div>
                                    <div className="img-wrapper col-5" style={{backgroundImage: `url(${story.imagePath})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                        {/* <img src={story.imagePath} alt="story"  style={{ height: '15vh', width: '30vw'}}/> */}
                                    </div>
                                </div>
                                </Link>
                            )
                        })
                    }}
                </ArticleConsumer>
            </div>
        )
    }
}

export default AllNews;

