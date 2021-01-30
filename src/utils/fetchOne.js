import axios from 'axios';

import { baseUrl } from '../../config/server';

const fetchOne = async (url) => await axios.get(`${baseUrl}${url}`);

export default fetchOne;
