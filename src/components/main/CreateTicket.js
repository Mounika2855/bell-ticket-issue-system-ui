import React from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateTicket extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: ''
		}
	}	

	onSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
    	title: '',
			description: ''
    });
  }

  onChange = (e) => {
  	const target = e.target;
  	this.setState({
  		[target.name]: target.value
  	})
  }

  render() {
  	const { title, description } = this.state;
  	return (
	  	<div className='container-create-ticket'>
				<Form onSubmit={this.onSubmit.bind(this)}>
					<h3>Create ticket(s) here</h3>
				  <Form.Group controlId="formTicketTitle">
				    <Form.Label>Ticket Title</Form.Label>
				    <Form.Control placeholder="Enter ticket title" name='title' value={title} onChange={this.onChange.bind(this)} required/>
				  </Form.Group>

				  <Form.Group controlId="formTicketDescription">
				    <Form.Label>Ticket Description</Form.Label>
				    <Form.Control as="textarea" rows="3" placeholder="Enter ticket description" name='description' value={description} onChange={this.onChange.bind(this)} required/>
				  </Form.Group>

				  <div align='center'>
				  	<Button variant="primary" type="submit">Create</Button>
				  </div>
				</Form>
		  </div>
	  );
  }
  
}

export default CreateTicket;