import axios from 'axios';
import { getLocalStore } from '../utils/local';

//configAxios
export const HOST = axios.create({

  baseURL: 'http://localhost:8080',

});
