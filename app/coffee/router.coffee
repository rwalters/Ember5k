Write5k.Router.map ->
  @resource 'createStory'
  @resource 'stories', ->
    @resource('story', {path: ':story_id'})

Write5k.StoriesRoute = Ember.Route.extend
  model: ->
    Write5k.Story.find()

Write5k.CreateStoryRoute = Ember.Route.extend
  setupController: (controller, model) ->
    controller.set('title', null)
    controller.set('author', null)
    controller.set('body', null)
