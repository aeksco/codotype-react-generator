const { Generator } = require('codotype-generator');

module.exports = class ReactJsAuth extends Generator {
  async write() {
    await this.ensureDir('src/auth');

    await this.copyTemplate(
      this.templatePath('Login.js'),
      this.destinationPath('src/auth/Login.js')
    )

    await this.copyTemplate(
      this.templatePath('Register.js'),
      this.destinationPath('src/auth/Register.js')
    )
  }
}
