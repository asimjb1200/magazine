import React, { Component } from 'react'

export class SportSnip extends Component {
    
    render() {
        const {id, videoPath, home, away, headline} = this.props.article;
        const VIDEO_ID = videoPath.substring(32);
        console.log(VIDEO_ID);
        return (
            <div className="card" style={{width: '20rem', height: '15rem'}}>
                <div className="card-img-top youtube-player" data-id={VIDEO_ID}>
                    
                </div>
            </div>
        )
    }
}

export default SportSnip
