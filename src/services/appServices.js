import axios from "axios";

const TICKETS_URL_BASE = () => 'http://localhost:8080/bell-ticket-issue-system/tickets';
const TICKETS_URL_CREATE = () => TICKETS_URL_BASE();
const TICKETS_URL_GET_ALL = () => TICKETS_URL_BASE();
const TICKETS_URL_DELETE = (ticketId) => TICKETS_URL_BASE() + `/${ticketId}`;
const TICKETS_URL_UPDATE = () => TICKETS_URL_BASE();

const createTicket = async (ticket) => {
	ticket.status = 'NEW';
	return await axios.post(TICKETS_URL_CREATE(), ticket);
}

const getTickets = async () => {
	return await axios.get(TICKETS_URL_GET_ALL());
}

const deleteTicket = async (ticketId) => {
	return await axios.delete(TICKETS_URL_DELETE(ticketId));
}

const closeTicket = async (ticket) => {
	ticket.status = 'CLOSED';
	return await axios.put(TICKETS_URL_UPDATE(), ticket);
}

const markTicketAsDone = async (ticket) => {
	ticket.status = 'DONE';
	return await axios.put(TICKETS_URL_UPDATE(), ticket);
}

export {
	createTicket,
	getTickets,
	deleteTicket,
	closeTicket,
	markTicketAsDone
}