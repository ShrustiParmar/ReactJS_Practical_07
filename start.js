NPM_CONFIG_PRODUCTION=true
NODE_ENV=staging
// npm start OR node ./start.js
process.env.NODE_ENV=production

// There are two solutions.
// 1. Override 
process.env.NODE_ENV //in every entry point with a different variable like FORCE_NODE_ENV
//2.
// process.env.NODE_ENV =
  process.env.FORCE_NODE_ENV || process.env.NODE_ENV || 'development'