import React, { Component } from 'react';
import styled from 'styled-components';

export class Landing extends Component {
    render() {
        return (
            <div class="container-fluid">
                <br></br>
                    <Categories>
                        <h4>News</h4>
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
    height: 25vh;
    border-bottom: solid 1px #C0C0C0;
`
const Content = styled.div`
    margin: 10px 5px 0px 5px;
`