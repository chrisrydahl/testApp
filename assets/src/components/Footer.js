import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
  
    render() {
      return (
        <footer className="page-footer z-depth-1 grey darken-3">
        <div className="footer-copyright z-depth-1 grey darken-4">
            <div className="row center " >
            
                <div className="col ">
                     © Copyright-{this.state.date.getFullYear()}- <a href="http://agoulzi.com/about" target="_blank">Driss ASBAR</a> | Made with:
                </div>
                <div className="heart col"></div>
            </div>
        </div>
    </footer>
      );
    }
  }

  export default Footer;