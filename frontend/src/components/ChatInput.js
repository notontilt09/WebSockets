import React, { Component } from 'react'

class ChatInput extends Component {
  state = {
    message: '',
  }

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <input
          type="text"
          className="chat-input"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        {/* <input type="submit" value={'Send'} /> */}
      </form>
    )
  }
}

export default ChatInput