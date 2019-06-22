import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export class NewsSnip extends Component {
    render() {
        return (
            <Wrapper>
            <div className="card shadow-sm">
                  <img class="card-img-top" src="..." alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
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
    width: 18rem;
    margin-right: 10px;
    margin-bottom: 10px;
}
.card-img-top {
    width: 100%;
    height: 30vw;
    object-fit: cover;
}
`