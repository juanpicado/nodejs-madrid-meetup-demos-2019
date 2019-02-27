
export default class AuthEndpoint {
	constructor(config, options) {
		this.config = config;
		this.logger = options.logger;
		this.realConfig = options.config;
	}

	authenticate(user, password, callback) {
		this.logger.info("logging a user");
		this.logger.info({user, password}, "logging a user: @{user}|@{password}");

		callback(null, ['$all']);
	};


  adduser(user, password, cb) {
		this.logger.info("adding a user");
		this.logger.info({user, password}, "adding a user: @{user}|@{password}");

		cb(null, true);
	};
}
