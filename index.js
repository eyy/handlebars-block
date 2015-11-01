module.exports = function(hbs) {

  hbs.registerHelper('block', function (name, options) {
    if (!this.blocks) this.blocks = {}
    this.blocks[name] = options.fn()
  })
  
}
