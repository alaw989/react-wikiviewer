import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div className="App">
              <Search
                // onSearch={query =>
                //   fetch(urlForWiki(query))
                //     .then(data => data.json())
                //     .then(data => {
                //       console.log(data.query.allpages)
                    
                //       const titles = [];
                //       // query.map(x => titles.push(x.title));
                //       this.setState({    
                //         options: titles
                //       });
                //     })}
                // options={this.state.options}
                // onKeyDown={this.handleAction}
                // onChange={this.handleClick}
                // onActiveItemChange={this.active}
                // placeholder="Search Movie Title..."
                // maxResults={5}
                // emptyLabel="No Matches Found"
                // searchText=""
                // propText=""
                // paginationText=""
                // delay={300}
              />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wikipedia Viewer</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
    );
  }
}

export default App;


