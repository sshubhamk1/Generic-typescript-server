# Generic-typescript-server

This will contain all my helpers and best ever express server

### Sequelize help

use env file in .sequelizerc for using environment variables
```
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path:'.env'});
module.exports = {
    'config': path.resolve('src/Engine/Config', 'config.js'),
    'models-path': path.resolve('src/Engine', 'Models'),
    'seeders-path': path.resolve('src/Engine/Database', 'Seeders'),
    'migrations-source-path': path.resolve('src/Engine/Database', 'Migrations'),
    'migrations-compiled-path': path.resolve('build/Engine/Database', 'Migrations'),
}

```
