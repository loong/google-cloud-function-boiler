# Google Cloud Functions Node.js Boilerplate

## Features:
 * Deployment via npm
 * ES6 support
 * Development server to test cloud functions locally

```
node run dev    - runs development server with watch
node run build  - builds deploy and writes to dist/
node run deploy - deploys to google cloud
```

## Development server
`node run dev` will spawns a development server, which serves the exported cloud functions (see `src/dev.js` for more). Note that if you want to add more functions or rename functions you have to edit `src/dev.js` as well!

## Deployment
Please have a look at `package.json` and edit the deploy script (e.g. add bucketName, change function name/ entry point), before deployment.