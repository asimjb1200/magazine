import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import styled from 'styled-components';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
    
    render() {
        return (
          <div class="container-fluid">
            <Sidebar
            sidebar={
            <b>
                <div className="menu-items">
                    <h3>Butter Media Group</h3>
                    <hr/>
                    <h2>News</h2>
                    <h2>Sports</h2>
                    <h2>Entertainment</h2>
                    <h2>Interviews</h2>
                    <h2>Contact Us</h2>
                </div>
            </b>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white", fontFamily: "Raleway", padding: "10px" } }}
          > 
          <Wrapper >
          {/*<button onClick={() => this.onSetSidebarOpen(true)}>
                
        </button> */}
            <i className="fas fa-bars fa-2x my-3 icon" onClick={() => this.onSetSidebarOpen(true)}></i>
              <Title >Butter</Title>

            </Wrapper>

          </Sidebar>
          </div>
        )
    }
}

export default Navbar;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  padding-bottom: 1.5rem;
  color: gold;
  font-family: 'Pacifico';
  vertical-align: middle;
  display: inline;
  position: absolute;
  top: 6%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.section`
  background: black;
  
`;

