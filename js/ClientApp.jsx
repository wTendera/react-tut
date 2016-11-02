const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const MyFirstComponent =  React.createClass({
  render () {
    return (
        <div>
          <MyTitle title='Ayyy lmao' color='red' />
          <MyTitle title='XD' color='blue' />
          <MyTitle title='mmm' color='pink' />
        </div>
    )
  }
})

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
