Write5k.CreateStoryController = Ember.ObjectController.extend
  author: null
  title: null
  body: null

  save: ->
    story = Write5k.Story.createRecord
      title: @get('title')
      author: @get('author')
      body: @get('body')

    story.commit
    @transitionToRoute('story', story)
