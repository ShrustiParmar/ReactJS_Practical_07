process.env.SETTINGS = process.env.SETTINGS || 'development'
if (process.env.NODE_ENV === 'production') {
  console.log('Running production-like with settings %s', process.env.SETTINGS)
}