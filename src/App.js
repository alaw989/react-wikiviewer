import React, { Component } from "react";
import "./App.css";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import styled from "styled-components";

const AsyncTypeahead = asyncContainer(Typeahead);

const urlForWiki = query =>
  `https://en.wikipedia.org/w/api.php?action=query&format=json&list=allpages&apfrom=${query}&aplimit=7`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleKeyPress = this.handleEnter.bind(this);
  }

  handleEnter = (e) => {

    console.log(e.target.value)
    if (e.key === "Enter") {

    }

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AsyncTypeahead
            onSearch={query =>
              fetch(urlForWiki(query))
                .then(data => data.json())
                .then(data => {
                  const results = data.query.allpages;
                  const titles = [];
                  console.log(data)
                  results.map(x => {
                    titles.push(x.title);
                  });

              

                  this.setState({
                    options: titles
                  });
                })
            }
            options={this.state.options}
            onKeyDown={this.handleEnter}
            // onChange={this.handleClick}
            // onActiveItemChange={this.active}
            placeholder="Search Wikipedia..."
            isLoading={false}
            maxResults={6}
            emptyLabel="No Matches Found"
            searchText=""
            propText=""
            paginationText=""
            delay={300}
          />
        </header>
      </div>
    );
  }
}

export default App;
