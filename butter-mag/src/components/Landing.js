import React, { Component } from 'react';
import news from '../icons/newsDark.svg';
import sport from '../icons/sport.svg';

export class Landing extends Component {
    render() {
        return (
            <div class="container-fluid landing">
                <div class="card "><h1>News</h1><p>Stay up to date on events in the city that matter to you</p><img src={news} alt="news icon" /></div>
                <div class="card "><h1>Sports</h1><p>Local and professional coverage so that you never miss a beat</p><img src={sport} alt="sports icon" /></div>
                <div class="card "><h1>Entertainment</h1></div>
                <div class="card "><h1>Interviews</h1></div>
            </div>
        )
    }
}

export default Landing
