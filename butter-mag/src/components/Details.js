import React, { Component } from 'react';
import {ArticleConsumer} from '../context';


export class Details extends Component {

    state = {
        details: {}
    }

    componentDidMount () {
        const { id } = this.props.match.params;
        console.log('mounting')
        fetch(`http://localhost:3001/api/news/${id}`)
            .then(res => res.json())
                .then(results => this.setState({details: results}))
            
    }
    
    render() {
        return (
            
            <div className="container-fluid">
                {this.state.details.headline}
            </div>   
        )
        
    }
}

export default Details
