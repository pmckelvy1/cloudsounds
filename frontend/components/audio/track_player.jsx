var React = require('react');
var TrackWaveform = require('./track_waveform');
var LikeButton = require('../buttons/like_button');

var TrackPlayer = React.createClass({

  render: function () {
    var userURL = '#/users/' + this.props.song.user_id;
    return (
      <div className="track-player">
        <div className="thumb-large"><img src={this.props.song.image_url}/></div>
        <h1 className="track-artist-name"><a href={userURL}>{this.props.song.username}</a></h1>
        <h2 className="track-name">{this.props.song.title}</h2>
        <TrackWaveform />
        <LikeButton className="like-button" song={this.props.song}/>
      </div>
    );
  }

});

module.exports = TrackPlayer;
