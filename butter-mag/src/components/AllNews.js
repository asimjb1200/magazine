import React, { Component } from 'react'
import styled from 'styled-components';

export class AllNews extends Component {
    render() {
        return (
            <Stories>
                <h1>Headline</h1>
                <p>content</p>
            </Stories>
        )
    }
}

export default AllNews;

const Stories = styled.div`
    border-bottom: solid 1px #C0C0C0;
    font-family: Raleway;
    font-weight: bold;
`
