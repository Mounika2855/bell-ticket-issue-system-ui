import React from 'react';
import { ListGroup, Button, Alert } from 'react-bootstrap';

const Ticket = ({ ticket, onDelete, onClose, onDone }) => 
	<ListGroup.Item className='ticket'>
		{ticket.id}. &nbsp;
		<b>{ticket.title}</b>: &nbsp;
		{ticket.description}
		<div align='center' className='actions'>
			{ ticket.status==='NEW' && <Button variant="danger" size="sm" onClick={() => onDelete(ticket.id)}>Delete</Button> }
			{ ticket.status==='NEW' && <Button variant="warning" size="sm" onClick={() => onClose(ticket)}>Close</Button> }
			{ ticket.status==='NEW' && <Button variant="success" size="sm" onClick={() => onDone(ticket)}>Mark as Done</Button> }
			{ ticket.status==='CLOSED' && <Alert variant='warning'>This ticket is closed.</Alert> }
			{ ticket.status==='DONE' && <Alert variant='success'>This ticket was completed.</Alert> }
		</div>
	</ListGroup.Item>

export default Ticket;