import React, { Component } from 'react';
import './app.css';
import Trend from 'react-trend'; 

class App extends Component {
  render() {
    return (
      <div className="outer graph">
        <h2>CPU load representation</h2>
        <fieldset className="graph current">
          <div> Current System Load: {this.props.data[this.props.data.length-1]}</div>
        </fieldset>
        <fieldset className="graph">
          <legend>System Load</legend>
          <div>
            <Trend data={this.props.data}  
              width={600} 
              height={200}
              padding={18} smooth
              gradient={['#42b3f4']}
              radius={2.8}
              strokeWidth={2}
              strokeLinecap={'round'}
            />
          </div>
        </fieldset>
      </div>
    );
  }
}
export default App;
