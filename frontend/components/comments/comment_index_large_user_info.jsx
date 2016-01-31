var React = require('react');
var FollowButton = require('../buttons/follow_button');

var CommentIndexLargeUserInfo = React.createClass({

  render: function () {
    return (
      <div className="comment-index-large-user-info">
        <img className="thumb-med" src={this.props.user.image_url} />
        <div className="track-artist-name">{this.props.user.username}</div>
        <FollowButton followedId={this.props.user.id} />
      </div>
    );
  }
});

module.exports = CommentIndexLargeUserInfo;