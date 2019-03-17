module.exports = {
  name: 'ReactApp',
  async write({ app }) {
    await this.copyTemplate(
      this.templatePath('app.js'),
      this.destinationPath('src/app.js')
    )
  }
}
