import React, { Component } from "react";
import "./App.css";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import Title from "./Title.js";
//import styled from "styled-components";

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
    console.log(value)
    if (e.length > 0) {
      fetch(urlForWiki(value))
        .then(data => data.json())
        .then(data => {
          console.log(data.query.search)
          const wikiResults = data.query.search
          // let movie = data.results;
          // const titles = [];
          // movie.map(x => (x.title === value ? titles.push(x) : ""));
          // if (titles.length < 1) {
          //   return null;
          // }
          this.setState({
            options: wikiResults
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
                  const titles = results.map(x => {
                    return x.title
                  });

                  // const concatArray = titles.reduce(function (result, value, index, array) {
                  //   if (index % 2 === 0)
                  //     result.push(array.slice(index, index + 2));
                  //   return result;
                  // }, []);

                  // const arrayToString = concatArray.map(array => {
                  //   array = array.toString('').replace(/<span class="searchmatch">/g, '').replace(/\//g, '').replace(/<span>/g, '').replace(/&quot;/g, '"').replace(',', ' - ');
                  //   return array;
                  // });

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
        
        <Title wiki={this.state.options}/>
      </div>
    );
  }
}

export default App;
