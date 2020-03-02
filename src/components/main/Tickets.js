import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import Ticket from './Ticket';

const Tickets = ({ tickets, onDelete, onClose, onDone }) => 
	<div className='tickets'>
		<h3>Raised tickets are listed here</h3>
		<ListGroup>
			{
				tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} onDelete={onDelete} onClose={onClose} onDone={onDone}/>)
			}
		</ListGroup>
		{ (!tickets || tickets.length===0) && <Alert variant='info'>There are no tickets to show.</Alert>}
	</div>

export default Tickets;