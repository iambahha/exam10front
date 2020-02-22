import React, {Component} from 'react';
import CommentForm from "../../components/CommentForm/CommentForm";
import {addComment, fetchComments, removeComment} from "../../store/actions/commentsActions";

import {connect} from "react-redux";
import {Button} from "reactstrap";
// import './Comments.css';


class Comments extends Component {
    componentDidMount() {
        this.props.fetchComments(this.props.news_id);
    }
    render() {
        if (this.props.commentsLoading) {
            return <div>Loading...</div>
        }

        return (
            <div className="Comments">
                <h2>Comments ({this.props.comments.length}):</h2>
                {this.props.comments.map(item => (
                    <div key={item.id} className="Comment">
                        <p>Author: {item.author}</p>
                        <p>Message: {item.message}</p>
                        <Button onClick={() => this.props.removeComment(item.id)}>remove</Button>
                    </div>
                ))}

                <CommentForm submit={this.props.addComment} news_id={this.props.news_id} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.comments.comments,
    commentsLoading: state.comments.loading
});

const mapDispatchToProps = dispatch => ({
    fetchComments: (id) => dispatch(fetchComments(id)),
    addComment: (data) => dispatch(addComment(data)),
    removeComment: (id) => dispatch(removeComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);