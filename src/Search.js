import React, { Component } from "react";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";

const AsyncTypeahead = asyncContainer(Typeahead);

const urlForWiki = query =>
  `https://en.wikipedia.org/w/api.php?action=query&format=json&list=allpages&apfrom=${query}&aplimit=5`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleKeyPress = this.handleEnter.bind(this);
  }

  handleEnter = () => {
      
  }


  render() {
    return (
      <AsyncTypeahead
        onSearch={query =>
          fetch(urlForWiki(query))
            .then(data => data.json())
            .then(data => {

              const results = data.query.allpages;
              const titles = [];

              results.map(x => {
                titles.push(x.title);
              });

              console.log(titles);

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
        isLoading= {false}
        maxResults={5}
        emptyLabel="No Matches Found"
        searchText=""
        propText=""
        paginationText=""
        delay={300}
      />
    );
  }
}

export default Search;
