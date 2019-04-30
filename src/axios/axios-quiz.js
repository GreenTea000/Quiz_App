import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-e3bb4.firebaseio.com/'
})