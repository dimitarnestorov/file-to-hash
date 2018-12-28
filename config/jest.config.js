const path = require('path')

module.exports = {
	rootDir: path.resolve(__dirname, '..'),
	testMatch: ["**/tests/**/*.js"],
	testPathIgnorePatterns: ["/node_modules/", "/assets/"],
}
