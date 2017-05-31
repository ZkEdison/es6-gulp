import yargs from 'yargs'

const args = yargs

  .option('production', {
    boolean: true,
    default: false,
    descript: 'min all scripts'
  })

  .option('watch', {
    boolean: true,
    default: false,
    descript: 'watch all files'
  })

  .option('verbose', {
    boolean: true,
    default: false,
    descript: 'log'
  })

  .option('sourcemaps', {
    descript: 'force the creation of sroucemaps'
  })

  .option('port', {
    string: true,
    default: 8080,
    descript: 'server port'
  })

  .argv
