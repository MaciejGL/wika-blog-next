import axios from 'axios';

import { baseUrl } from '../../config/server';

export default async (url) => await axios.get(`${baseUrl}${url}`);
