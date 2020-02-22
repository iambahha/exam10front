import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {addPost} from "../store/actions/newsActions";
import {connect} from "react-redux";

class AddNewPost extends Component {

	state = {
		title: '',
		content: '',
		image: null
	};
	inputChangeHandler = event => {
		const {name, value} = event.target;
		this.setState({[name]: value});
	};

	fileChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.files[0]
		});
	};

	submitHandler = event => {
		event.preventDefault();

		const formData = new FormData();

		Object.keys(this.state).forEach(key => {
			formData.append(key, this.state[key]);
		});

		this.props.addPost(formData);
	};
	render() {
		return (
			<>
				<h1>Add new post</h1>
				<Form onSubmit={this.submitHandler} className="form" >
					<FormGroup>
						<Label for="title">Title</Label>
						<Input type="text" name="title" id="title" onChange={this.inputChangeHandler} />
					</FormGroup>
					<FormGroup>
						<Label for="content">Content</Label>
						<Input type="textarea" name="content" id="content" onChange={this.inputChangeHandler} required />
					</FormGroup>
					<FormGroup>
						<Label for="image">Image</Label><br/>
						<input type="file" id="image" name="image" onChange={this.fileChangeHandler} />
					</FormGroup>
					<FormGroup row>
						<Button type="submit" color="primary" size="lg" block>ADD</Button>
					</FormGroup>
				</Form>
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addPost: (data) => dispatch(addPost(data))
	};
};

export default connect(null, mapDispatchToProps)(AddNewPost);