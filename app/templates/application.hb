  <section id="todoapp">
    <header id="header">
      <h1>todos</h1>
    </header>

      {{view Ember.TextField id="new-todo" placeholder="What needs to be done?"
          valueBinding="newTitle" action="createTodo"}}
      {{outlet}}

  </section>
