var config = {
		server: {
			port: 8080,
			useHttps: false,
			https: {
				keyPath: '',
				certPath: ''
			},
			appDirectory: __dirname,
			logDirectory: 'logs'
		}
}

module.exports = config;