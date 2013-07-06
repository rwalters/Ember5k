    <section id="main">
      {{outlet}}

      {{view Ember.Checkbox id="toggle-all" checkedBinding="allAreDone"}}
    </section>

    <footer id="footer">
      <span id="todo-count"><strong>{{remaining}}</strong> {{inflection}} left</span>

      <ul id="filters">
        <li>
          {{#linkTo todos.index activeClass="selected"}}All{{/linkTo}}
        </li>
        <li>
          {{#linkTo todos.active activeClass="selected"}}Active{{/linkTo}}
        </li>
        <li>
          {{#linkTo todos.completed activeClass="selected"}}Completed{{/linkTo}}
        </li>
      </ul>

      {{#if hasCompleted}}
      <button id="clear-completed" {{action "clearCompleted"}}>
        Clear completed ({{completed}})
      </button>
      {{/if}}
    </footer>
  </section>

  <footer id="info">
    <p>Double-click to edit a todo</p>
  </footer>
