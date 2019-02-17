import React from 'react';
import ConfiromationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true})
    
  }

  render(){
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm />
    } else {
      currentlyVisibleContent =  <ConfiromationQuestions onTroubleshootingConfirmation = {this.handleTroubleshootingConfirmation} />
    }
    return (
      {currentlyVisibleContent}
    );
  }
}
export default NewTicketControl;