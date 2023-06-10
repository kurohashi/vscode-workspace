/**
 * Define App Locals & Configs
 */
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../../.env') });

class Configuration {
	crypto = {
		gen: {
			salt: "default-salt",
			iterations: 10,
			keyLen: 80,
		}
	};
	url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
	port = process.env.PORT || 4040;
	appSecret = process.env.APP_SECRET || 'This is your responsibility!';
	databaseUrl = process.env.DATABASE_URL;
	maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
	maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';
	name = process.env.APP_NAME || 'NodeTS Dashboard';
	keywords = process.env.APP_KEYWORDS || 'somethings';
	year = (new Date()).getFullYear();
	copyright = `Copyright ${this.year} ${this.name} | All Rights Reserved`;
	company = process.env.COMPANY_NAME || 'GeekyAnts';
	description = process.env.APP_DESCRIPTION || 'Here goes the app description';
	jwtExpiresIn = process.env.JWT_EXPIRES_IN || 86400;
	apiPrefix = process.env.API_PREFIX || 'api';
	logDays = process.env.LOG_DAYS || 10;
	queueMonitor = process.env.QUEUE_HTTP_ENABLED || true;
	queueMonitorHttpPort = process.env.QUEUE_HTTP_PORT || 5550;
	redisHttpPort = process.env.REDIS_QUEUE_PORT || 6379;
	redisHttpHost = process.env.REDIS_QUEUE_HOST || '127.0.0.1';
	redisPrefix = process.env.REDIS_QUEUE_DB || 'q';
	redisDB = process.env.REDIS_QUEUE_PREFIX || 3;
}


/**
 * Makes env configs available for your app
 * throughout the app's runtime
 */
console.log(new Configuration());
