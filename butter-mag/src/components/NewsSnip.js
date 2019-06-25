import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ArticleConsumer} from '../context';

export class NewsSnip extends Component {
    render() {
        const {images, headline, content} = this.props.article;
        return (
            <Wrapper>
                <ArticleConsumer>
                    {(data) => (
                        <div className="card shadow-sm">
                        <img class="card-img-top" src={images} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">{headline}</h5>
                                <p class="card-text">{content}</p>
                            </div>
                        </div>
                    )
                    }
                </ArticleConsumer>
            </Wrapper>
        )
    }
}

export default NewsSnip;

const Wrapper = styled.div`
.card {
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block!important;
    width: 15rem;
    margin-right: 10px;
    margin-bottom: 10px;
}
.card-img-top {
    width: 100%;
    height: 30vw;
    object-fit: cover;
}
`