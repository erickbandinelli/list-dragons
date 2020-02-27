import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/'
});

export const apiLogin = axios.create({
	baseURL: 'http://localhost:4000/api/'
});
