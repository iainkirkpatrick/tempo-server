var env = process.env.NODE_ENV
var config = env ? require(`./config/${env}`) : require(`./config/default`)

module.exports = config.db
