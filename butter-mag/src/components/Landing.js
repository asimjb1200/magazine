import React, { Component } from 'react';
import styled from 'styled-components';
import News from './NewsSnip';
import Sports from './SportSnip';
import {ArticleConsumer} from '../context';
import {Link} from 'react-router-dom';
import Interview from './Interview';

export class Landing extends Component {
    render() {
        return (
            <div className="container-fluid">
                <br />
                    <Categories>
                        <Link to="/all-news" style={{textDecoration: 'none', color: 'black'}}>
                        <h4>News - <small className="text-muted">see all</small></h4>
                        </Link>
                        <Content>
                        <ArticleConsumer>
                            {(data) => {
                                return data.news.map(story => {
                                    return <News key={story.id} article={story} />
                                });
                            }}
                        </ArticleConsumer>
                        </Content>
                    </Categories>
                    
                    <Categories>
                    <Link to="/all-sports" style={{textDecoration: 'none', color: 'black'}}>
                        <h4>Sports - <small className="text-muted">see all</small></h4>
                    </Link>
                        <Content>
                        <ArticleConsumer>
                            {(data) => {
                                return data.sports.map(story => {
                                    return <Sports key={story.id} article={story} />
                                });
                            }}
                        </ArticleConsumer>
                        </Content>
                    </Categories>
                    <Categories>
                        <h4>Interviews</h4>
                        <Content>
                        <ArticleConsumer>
                            {(data) => {
                                return data.interviews.map(story => {
                                    return <Interview key={story.id} article={story} />
                                })
                            }}
                        </ArticleConsumer>
                        </Content>
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