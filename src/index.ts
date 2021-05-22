require('module-alias/register');

import { Config } from '../lib/interfaces/Config';
import config from '../config';
import { Bot } from '../lib/ws/Client';
import path from 'path';

require('dotenv').config({
	path: path.resolve(__dirname, '..', 'config', '.env'),
});

new Bot().start(config as Config);