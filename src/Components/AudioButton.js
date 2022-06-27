import React, { Component } from 'react';

class AudioButton extends Component {
    
    render() {
        return (
            <div key={this.props.uni} className="audioButton" id={this.props.letter} onClick={this.props.handleClick}>
                {this.props.letter}
                <audio src={this.props.src} id={this.props.soundID} key={this.props.code}>
                </audio>
            </div>
        );
    }
}

export default AudioButton;