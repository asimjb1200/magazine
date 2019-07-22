import React, { Component } from 'react'

export class Interview extends Component {
    render() {
        const {id, date, poi, category, videoPath } = this.props.article;

        var VIDEO_ID = videoPath.substring(32);
        return (

                <div className="card bg-dark text-warning">
                    <img className="card-img" src={`http://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`} alt="Video thumbnail" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{poi}</h5>
                    </div>                 
                </div>
        

        )
    }
}

export default Interview
