import React from 'react';
import NewfeedsEntryView from './NewsfeedEntryView'
import helper from '../../Helper/Helper';

export default class Newfeeds extends React.Component {
  constructor() {
    super();
    this.state = {messages:[]};
    //Callback is used to handle asynchronous request.
    var callback = function(data) {
      //Setting the state will cause the page to re-render.
      this.setState({messages: data});
    }.bind(this);
    //'hien' is hard-coded in the second parameter but it setup to take in any username.
    helper.newsfeed(callback, 'hien');
  }

  //Display all message for particular teacher.
  render() {
    return (
      <div>
    		<h3>Newfeeds</h3>
        {this.state.messages.map((message, index)=>(
          <NewfeedsEntryView message={message} key={index} />
        ))}
      </div>
    )
  }
}