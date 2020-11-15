import axios from 'axios';

import { baseUrl } from '../../config/server';

export default async (urls) => await Promise.all(urls.map((url) => axios.get(`${baseUrl}${url}`)));
