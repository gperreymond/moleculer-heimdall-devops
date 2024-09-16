const config = require('./moleculer.config')

const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker(config)

const start = async () => {
  await broker.start()
}

start()
