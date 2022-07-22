# slashtags-bootstrap-server

Creates a bootstrapping server for the DHT.

## Setup

Install dependencies

```
npm install
```

Copy `config/default.json` to `config/local.json`.

Updated local.json to define which port the service should listen on.


## Running with PM2

Add the service to PM2

```
pm2 start stack.config.js
```

To reload it after an update...

```
pm2 reload BootstrapDHT
```

or just `node src/index.js`

## Using it

When you know the IP and port (set in config), you can add your server to the list of bootstrapping nodes you use when starting a hyperswarm. For example...

```
import DHT from '@hyperswarm/dht'
import Hyperswarm from 'hyperswarm'

const dht = new DHT({ bootstrap: ['<Your Servers IP>:<Configured Port>', '<other bootstrap nodes>'] })
const swarm = new Hyperswarm({ dht })
```
