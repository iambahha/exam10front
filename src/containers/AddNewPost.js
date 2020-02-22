import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import './ForumForm.css';

class AddNewPost extends Component {
	state = {
		title: '',
		content: '',
		image: null
	};
	submitFormHandler = event => {
		event.preventDefault();

		const formData = new FormData();

		Object.keys(this.state).forEach(key => {
			formData.append(key, this.state[key]);
		});

		this.props.submit(formData);
	};

	inputChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	fileChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.files[0]
		});
	};

	render() {
		return (
			<Form onSubmit={this.submitFormHandler} className="form" >
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
					<Button type="submit" color="primary" size="lg" block>Comment !</Button>
				</FormGroup>
			</Form>
		);
	}
}

export default AddNewPost;