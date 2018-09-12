const { Generator } = require('codotype-generator')

module.exports = class extends Generator {
  async write () {
    await this.composeWith('./base')
    await this.composeWith('./auth')
    await this.composeWith('./app_component')
    await this.composeWith('./resource')
    // await this.composeWith('./reactjs_app_core')
    // await this.composeWith('./reactjs_routes')
    // await this.composeWith('./reactjs_list_component')
    // await this.composeWith('./reactjs_new_component')
    // await this.composeWith('./reactjs_editor_component')
    // await this.composeWith('./reactjs_show_component')
    // await this.composeWith('./reactjs_edit_component')
    // await this.composeWith('./reactjs_widget_component')
  }
};
