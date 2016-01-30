var React = require('react');
var ApiUtil = require('../../util/api_util');
var SongStore = require('../../stores/song_store');
var TrackPlayerLarge = require('./track_player_large');

var SongShowPage = React.createClass({
  getInitialState: function () {
    return { song: {} };
  },

  componentDidMount: function () {
    var ss = SongStore.addListener(this.onChange);
    this.setState({ ssToken: ss });
    ApiUtil.fetchSingleSong(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.state.ssToken.remove();
  },

  onChange: function () {
    this.setState({ song: SongStore.getSong() });
  },

  render: function () {
    if (Object.keys(this.state.song).length === 0) {
      return (
        <div className="loader">Loading...</div>
      );
    } else {
      return (
        <div className="user-show-page">
          <TrackPlayerLarge song={this.state.song} />
        </div>
      );
    }
  }

});

module.exports = SongShowPage;