module.exports = {
  async write () {
    await this.copyDir(
      this.templatePath(),
      this.destinationPath()
    )
  }
}
