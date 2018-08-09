const { Generator, Helpers } = require('codotype-generator')
const Base = require('./base')

// // // //

module.exports = class extends Generator {

  // constructor
  // Sets required input parameters
  constructor(options) {

    // Invokes super
    super(options)

    // // // //
    // TODO - abstract this into helpers.js

    // Global build configuration
    let build = {
      dest: {
        id: '',
        root: null,
        out: '',
        client: {}
      }
    }

    // Assigngs build.app from options
    build.app = options['appconfig']

    // Isolates the buildId
    const buildId = options['buildId']
    build.id = buildId

    // // // //
    // Destination helpers & constants
    // TODO - use this.env.cwd & path library, instead of hardcoded relative path
    build.dest.out = './build/' + buildId + '/'
    build.dest.root = build.dest.out + build.app.identifier + '/'

    //
    // // // //

    // VueJS
    build.dest.client.root = build.dest.root + 'react_client/'
    build.dest.client.src = build.dest.client.root + 'src/'

    // Sets this.options.build
    this.options = { build: Helpers.formatBuild(build) }

    // Returns the generator instance
    return this

  }

  // TODO - update to conditionally run each generator
  async write () {

    console.log('Starting Codotype generate')

    // Creates project build directories
    await this.ensureDir(this.options.build.dest.root)

    // Generates Vue + Onsen app
    await this.composeWith(Base)

    // TODO - implement a more robust logging solution
    console.log('Finished Codotype generate')

  }

};