import React, { Component } from 'react'
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
                                <Stories  onClick={() => stories.handleDetail(story.id)}>
                                <h2>{story.headline}</h2>
                                <p className="text-muted">{story.snippet}</p>
                                </Stories>
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

const Stories = styled.div`
    border-bottom: solid 1px #C0C0C0;
    font-family: Raleway;
    font-weight: bold;
    padding-left: 15px;
`
