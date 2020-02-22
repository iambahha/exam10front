import React, {Component} from 'react';
import {Button, Form, Input, Label} from 'reactstrap'

class CommentForm extends Component {
	render() {
		return (
			<Form onSubmit={onSubmit}>
				<Label for="name">Name</Label>
				<Input type="text" name="name" id="name"  />
				<Label for="comment">Comment</Label>
				<Input type="text" name="comment" id="comment"  />
				<Button type="submit">ADD</Button>
			</Form>
		);
	}
}

export default CommentForm;