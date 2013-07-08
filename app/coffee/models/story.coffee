Write5k.Story = DS.Model.extend
  title: DS.attr('string')
  author: DS.attr('string')
  body: DS.attr('string')

Write5k.Story.FIXTURES = [
  {id: 1, title: "Just a Title", author: "Random", body: "Just a test of the story here."}
  {id: 2, title: "Another Title", author: "Dude", body: "Story content here. I *want* to write some example content, but don't want to spend too much time. I'll add some Markdown in the text here, so that when the parser is introduced we'll have something to go off of. **Hello there** for ***example***. For now, this will all end up squished together. But now I don't have much else to say, so I will do some free writing for a while. I am writing this up to have a little sample app to show off, though this won't be all that exciting to start with. I intend to have a live show of the translation of the markdown, and hopefully a progress bar that pops up at the top to so how much writing has been done and how far there is to go to the 5k limit. `Do I want an actual 5*1024=5120, or just the 5000?` I'll wait and see how things look, maybe."}
]
