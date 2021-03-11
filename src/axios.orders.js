import axios from "axios";

const instance = axios.create({
   baseURL: 'https://react-my-burger-63181-default-rtdb.firebaseio.com/'
});

export default instance;