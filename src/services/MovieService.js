import axios from 'axios'

export default class Movies{
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api'
    }

    index() {
        return axios.get('/movies')
    }

}

export const movies = new Movies();