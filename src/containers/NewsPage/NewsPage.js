import React, {Component} from 'react';
import {fetchNews, removePost} from "../../store/actions/newsActions";
import {connect} from "react-redux";
import {Button} from "reactstrap";
import NewsThumbnail from "../../components/NewsThumbnail/NewsThumbnail";

import './NewsPage.css';

class NewsPage extends Component {
    componentDidMount() {
        this.props.fetchNews();
    }

    render() {
        if (this.props.newsLoading) {
            return <div>Loading...</div>
        }
        const news = this.props.news.map(item => (
            <li key={item.id}>
                <NewsThumbnail image={item.image} title={item.title}/>
                <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <p>{item.time}</p>
                    <Button
                        color="info"
                        onClick={() => this.props.history.push('news/' + item.id)}
                    >
                        Read more
                    </Button>
                    <Button
                        color="success"
                        onClick={() => this.props.removePost(item.id)}
                    >
                        Remove
                    </Button>
                </div>

            </li>
        ));
        return (
            <div className="NewsPage">
                <ul>{news}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    news: state.news.news,
    loading: state.news.loading
});

const mapDispatchToProps = dispatch => ({
    fetchNews: () => dispatch(fetchNews()),
    removePost: (id) => dispatch(removePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);