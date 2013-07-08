Write5k.Router.map ->
  @resource 'stories', ->
    @resource('story', {path: ':story_id'})

Write5k.StoriesRoute = Ember.Route.extend
  model: ->
    Write5k.Story.find()
