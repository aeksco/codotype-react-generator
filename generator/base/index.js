const Generator = require('@codotype/generator')

// // // //

module.exports = class ReactJsBase extends Generator {
  async write () {
    await this.copyDir(
      this.templatePath(),
      this.destinationPath()
    )
  }
}
