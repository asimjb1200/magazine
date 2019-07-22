import React, { Component } from 'react';
import { ArticleConsumer } from '../context';
import {Link} from 'react-router-dom';

export class AllSports extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center" style={{fontFamily: 'Lobster'}}>All Sports</h1>
                <ArticleConsumer>
                    {(stories) => {
                        return stories.sports.map((story) => {
                            var VIDEO_ID = story.videoPath.substring(32);
                            var shortDate = story.date.substring(0, 10);
                            return (
                                <div style={{width: '100%', height: '25%', marginBottom: '0.5rem', paddingBottom: '10px', borderBottom: 'solid 1.2px #C0C0C0', fontFamily: 'Raleway'}} key={story.id}>
                                    <h5>{story.headline}</h5>
                                    <span style={{float: 'right'}}>{shortDate}</span>
                                    <p className="text-muted">- read full story</p>
                                    <div className="youtube-player card-img-top" data-id={VIDEO_ID} >
                                        
                                    </div>
                                </div>
                                
                            )
                        })
                    }}
                </ArticleConsumer>
            </div>
        )
    }
}

export default AllSports;
