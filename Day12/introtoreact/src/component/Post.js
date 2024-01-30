import React from 'react';
import Clock from './Clock';
import Images from './Images';
import Song from '../assets/audio/icicle_yeti_song.mp3';

const Post = (props) => {
    if (props.audio == "true") {
        return (
            <div className="post">
                <Images name={props.name}/>
                <h3>{props.name} Cookie</h3>
                <Clock timeElapsed={props.timeElapsed}/>
                <p>{props.msg}</p>
                <audio controls autoplay>
                    <source src={Song} type="audio/mpeg"/>
                </audio>
            </div>
        )
    } else {
        return (
            <div className="post">
                <Images name={props.name}/>
                <h3>{props.name} Cookie</h3>
                <Clock timeElapsed={props.timeElapsed}/>
                <p>{props.msg}</p>
            </div>
        )
    }

    
}

export default Post
