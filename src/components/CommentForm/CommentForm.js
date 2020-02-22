import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class CommentForm extends Component {
    state = {
      author: '',
      comment: ''
    };

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.submit({...this.state, news_id: this.props.news_id});
    };

    render() {
        return (
            <div>
                <h3>Enter comment:</h3>
                <Form onSubmit={this.submitHandler} className='commentForm'>
                    <FormGroup>
                        <Label for="author">Name</Label>
                        <Input type="text" name="author" value={this.state.author} id="author"  onChange={this.valueChanged} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="comment">comment</Label>
                        <Input type="text" name="comment" value={this.state.comment} id="comment"  onChange={this.valueChanged} />
                    </FormGroup>

                    <Button type="submit" color="warning">Add comment</Button>
                </Form>
            </div>

        );
    }
}

export default CommentForm;