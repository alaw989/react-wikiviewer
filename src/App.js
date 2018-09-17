import React, { Component } from "react";
import "./App.css";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import Title from "./Title.js";
import Description from "./Description.js"
import styled from "styled-components";

const AsyncTypeahead = asyncContainer(Typeahead);

const urlForWiki = query =>
  `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&titles=${query}&srsearch=${query}`;





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleKeyPress = this.handleAction.bind(this);
  }

  handleAction = (e) => {

    if (e.key === "Enter") {

    }

    let value = e.toString("");
    if (e.length > 0) {
      fetch(urlForWiki(value))
        .then(data => data.json())
        .then(data => {

          const wikiResults = data.query.search

          const wikiTitles = [];
          wikiResults.map(x => {
            x.title === value ? wikiTitles.push(x) : ""
          });
          if (wikiTitles.length < 1) {
            return null;
          }

          this.setState({
            options: wikiTitles
          });
        });
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
                  const results = data.query.search;
                  console.log(results);
                  const titles = results.map(x => {
                    return x.title
                  });

                  this.setState({
                    options: titles
                  });
                })
            }
            options={this.state.options}
            onKeyDown={this.handleAction}
            onChange={this.handleAction}
            onActiveItemChange={this.active}
            placeholder="Search Wikipedia..."
            isLoading={false}
            maxResults={10}
            emptyLabel="No Matches Found"
            searchText=""
            propText=""
            paginationText=""
            delay={300}
          />
        </header>
        <div className="wikiBlock">
          <Title wiki={this.state.options} />
          <Description wiki={this.state.options} />
        </div>

      </div>
    );
  }
}

export default App;
