import React, { Component } from 'react'

export class SportSnip extends Component {
    
    render() {
        const {id, sport, date, videoPath, home, away, headline} = this.props.article;
        const VIDEO_ID = videoPath.substring(32);
        const sportDate = date.substring(0, 10);
        
        return (
            <div className="card" style={{width: '20rem', height: '15rem', backgroundColor: 'gold', fontFamily: 'Pacifico'}}>
                <div className="card-header ">{sport}</div>
                <ul className="list-group list-group-flush text-center" >
                    <li className="list-group-item" style={{color: 'gold', backgroundColor: 'black'}}>{home}</li>
                    <li className="list-group-item" style={{color: 'gold', backgroundColor: 'black'}}>VS</li>
                    <li className="list-group-item" style={{color: 'gold', backgroundColor: 'black'}}>{away}</li>
                </ul>
                <div className="card-footer">
                    {sportDate}
                </div>
            </div>
        )
    }
}

export default SportSnip;
