import createDebug from 'debug'
import config from 'config'
import DHT from '@hyperswarm/dht'

const debug = createDebug('bootstrap')
debug('starting...')

// Get the address and port we are binding to
const host = config.get('host')
const port = config.get('port')
debug(`Host: ${host}, port: ${port}`)

// Create a DHT
const node = DHT.bootstrapper(port, host, { bootstrap: DHT.BOOTSTRAP})
await node.ready()
debug(`ready`)

console.log('Bootstrap node started and bound to', node.address())
