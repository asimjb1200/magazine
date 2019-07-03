import React, { Component } from 'react';
import styled from 'styled-components';
import News from './NewsSnip';
import {ArticleConsumer} from '../context';
import { func } from 'prop-types';

export class Landing extends Component {

    render() {

        return (
            <div className="container-fluid">
                    <Categories>
                        <h4>News</h4>
                        <Content>
                        <ArticleConsumer>
                                {(data) => {
                                    
                                    return data.news.map(story => {
                                        console.log(story);
                                        return <News key={story.id} article={story} />
                                    });
                                }}
                        </ArticleConsumer>
                        </Content>
                    </Categories>
                    
                    <Categories>
                        <h4>Entertainment</h4>
                        <Content>

                        </Content>
                    </Categories>
                    <Categories>
                        <h4>News</h4>
                        <Content>content</Content>
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