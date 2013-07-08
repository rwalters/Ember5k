window.Write5k = Ember.Application.create()

showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper 'markdown', (input) ->
  new Handlebars.SafeString(showdown.makeHtml(input))
