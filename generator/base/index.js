module.exports = {
  name: 'ReactBase',
  async write () {
    await this.copyDir(
      this.templatePath(),
      this.destinationPath()
    )
  }
}
