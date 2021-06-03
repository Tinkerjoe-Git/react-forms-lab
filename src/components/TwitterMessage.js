import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange=(e) => {
    let newMessage = e.target.value
    this.setState({
      message: newMessage
    })
  }

  render() {
    let leftchars = this.props.maxChars-this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.state.maxChars} value={this.state.message} onChange={this.handleChange}/>
        {leftchars}
      </div>
    );
  }
}

export default TwitterMessage;
