'use strict'

const React = require('react')
const ReactDom = require('react-dom')
const Tags = require('../lib/ReactTags')
const suggestions = require('./countries')

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tags: [
        { id: 184, name: 'Thailand' },
        { id: 86, name: 'India' }
      ],
      suggestions,
      classNames: {
        input: 'tara-input',
      }
    }
  }

  handleDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }

  handleAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
  }

  handleBlur () {
    this.tags.clearQuery()
  }

  render () {
    return (
      <div>
        <Tags
          ref={(c) => { this.tags = c }}
          tags={this.state.tags}
          suggestions={this.state.suggestions}
          handleDelete={this.handleDelete.bind(this)}
          handleAddition={this.handleAddition.bind(this)}
          handleBlur={this.handleBlur.bind(this)}
          classNames={this.state.classNames}/>
        <hr />
        <pre><code>{JSON.stringify(this.state.tags, null, 2)}</code></pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
