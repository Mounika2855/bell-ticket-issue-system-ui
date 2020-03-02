import React from 'react';
import CreateTicket from './CreateTicket';
import Tickets from './Tickets';
import { createTicket, getTickets, deleteTicket, closeTicket, markTicketAsDone } from './../../services/appServices';
import './main.scss';

class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			tickets: []
		}
	}

	componentDidMount() {
		this.getTickets();
	}

	getTickets() {
		getTickets().then(response => this.setState({ tickets: response.data }));
	}

	createTicket = (ticket) => {
		const getTickets = this.getTickets.bind(this);
		createTicket(ticket).then(response => getTickets());
	}

	deleteTicket = (ticketId) => {
		const getTickets = this.getTickets.bind(this);
		deleteTicket(ticketId).then(response => getTickets())
	}

	closeTicket = (ticket) => {
		const getTickets = this.getTickets.bind(this);
		closeTicket(ticket).then(response => getTickets())
	}

	markTicketAsDone = (ticket) => {
		const getTickets = this.getTickets.bind(this);
		markTicketAsDone(ticket).then(response => getTickets())
	}

	render() {
		const { tickets } = this.state;
		return (
			<div className='container-fluid'>
				<div className='main'>
					<div className='row'>
						<div className='col-md-6 offset-md-3'>
							<CreateTicket onCreate={this.createTicket.bind(this)}/>
							<Tickets tickets={tickets} onDelete={this.deleteTicket.bind(this)} 
								onDone={this.markTicketAsDone.bind(this)}
								onClose={this.closeTicket.bind(this)}
								/>
						</div>
					</div>
				</div>
		  </div>
		);
	}

}	

export default Main;