import React, {Component, Fragment} from 'react';
import {fetchPost} from "../../store/actions/newsActions";
import connect from "react-redux/es/connect/connect";
import NewsThumbnail from "../../components/NewsThumbnail/NewsThumbnail";
import Comments from "../Comments/Comments";


class NewsFullDetails extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    render() {
        if (!this.props.post) {
            return <div>Loading...</div>
        }

        return (
            <Fragment>
                <div className="News_Detail">
                    <NewsThumbnail image={this.props.post.image} title={this.props.post.title} />
                    <div>
                        <h2>{this.props.post.title}</h2>
                        <p>{this.props.post.time}</p>
                        <p>{this.props.post.content}</p>
                    </div>
                </div>
                <Comments news_id={this.props.match.params.id}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    post: state.news.post
});

const mapDispatchToProps = dispatch => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFullDetails);