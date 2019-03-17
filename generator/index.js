module.exports = {
  async write () {
    await this.composeWith('./base')
    await this.composeWith('./auth')
    await this.composeWith('./app_component')
    await this.composeWith('./resource')
  }
};
