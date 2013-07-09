Write5k.StoryController = Ember.ObjectController.extend
  isEditing: false

  editStory: ->
    @set('isEditing', true)

  acceptChanges: ->
    @set('isEditing', false)
    @get('model').save()

  saveNew: ->
    story = Write5k.Story.createRecord
      title: title
      author: author
      body: body

    story.commit
