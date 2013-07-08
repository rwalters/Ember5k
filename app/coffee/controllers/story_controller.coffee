Write5k.StoryController = Ember.ObjectController.extend
  saveNew: ->
    story = Write5k.Story.createRecord
      title: title
      author: author
      body: body

    story.commit
