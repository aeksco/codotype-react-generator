const { Generator, Helpers } = require('codotype-generator')
const Base = require('./base')

const ReactJsAppBase = require('./reactjs_app_base')
const ReactJsAppCore = require('./reactjs_app_core')
const ReactJsAuth = require('./reactjs_auth')
const ReactJsRoutes = require('./reactjs_routes')
const ReactJsListComponent = require('./reactjs_list_component')
const ReactJsNewComponent = require('./reactjs_new_component')
const ReactJsEditorComponent = require('./reactjs_editor_component')
const ReactJsShowComponent = require('./reactjs_show_component')
const ReactJsEditComponent = require('./reactjs_edit_component')
const ReactJsWidgetComponent = require('./reactjs_widget_component')


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

    // ReactJS
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

    // Generates app
    await this.composeWith(Base)
    await this.composeWith(ReactJsAppBase)
    await this.composeWith(ReactJsAppCore)
    await this.composeWith(ReactJsAuth)
    await this.composeWith(ReactJsRoutes)
    await this.composeWith(ReactJsListComponent)
    await this.composeWith(ReactJsNewComponent)
    await this.composeWith(ReactJsEditorComponent)
    await this.composeWith(ReactJsShowComponent)
    await this.composeWith(ReactJsEditComponent)
    await this.composeWith(ReactJsWidgetComponent)

    // TODO - implement a more robust logging solution
    console.log('Finished Codotype generate')

  }

};
