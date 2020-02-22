import React, {Component} from 'react';
import CommentForm from "../../components/CommentForm/CommentForm";
import {addComment, fetchComments, removeComment} from "../../store/actions/commentsActions";

import {connect} from "react-redux";
import {Button} from "reactstrap";


class Comments extends Component {
    componentDidMount() {
        this.props.fetchComments();
    }
    render() {
        if (!this.props.comment) {
            return (
              <>
                  <CommentForm submit={this.props.addComment} news_id={this.props.news_id} />
              </>
        )
        } else {
            return (
              <div className="Comments">
                  <h2>Comments:</h2>
                  {this.props.comment.map(item => (
                    <div key={item.id} className="Comment">
                        <p>Author: {item.author}</p>
                        <p>Message: {item.comment}</p>
                        <Button onClick={() => this.props.removeComment(item.id)}>remove</Button>
                        <CommentForm submit={this.props.addComment} news_id={this.props.news_id} />
                    </div>

                  ))}
              </div>
            );
        }

    }
}

const mapStateToProps = state => ({
    comment: state.comments.comment
});

const mapDispatchToProps = dispatch => ({
    fetchComments: (id) => dispatch(fetchComments(id)),
    addComment: (data) => dispatch(addComment(data)),
    removeComment: (id) => dispatch(removeComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);