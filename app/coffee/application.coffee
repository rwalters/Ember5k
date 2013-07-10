window.Write5k = Ember.Application.create
  LOG_TRANSITIONS: true
  LOG_BINDINGS: true

showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper 'markdown', (input) ->
  new Handlebars.SafeString(showdown.makeHtml(input))
