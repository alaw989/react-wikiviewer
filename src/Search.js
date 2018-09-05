import React, { Component } from 'react';
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';

const AsyncTypeahead = asyncContainer(Typeahead);

const urlForWiki = query => `https://en.wikipedia.org/w/api.php?action=query&format=json&list=allpages&apfrom=${query}&aplimit=3`


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ""
        }
    }
    render() {
        return (
            <AsyncTypeahead
                onSearch={query =>
                    fetch(urlForWiki(query))
                        .then(data => data.json())
                        .then(data => {
                            const results = data.query.allpages
                           const titles = [];
                         results.map(x => {
                               console.log(x)
                                titles.push(x.title)

                            });


                            console.log(titles)
                            // query.map(x => titles.push(x.title));
                            this.setState({
                                options: titles
                            });
                        })}
                // options={this.state.options}
                // onKeyDown={this.handleAction}
                // onChange={this.handleClick}
                // onActiveItemChange={this.active}
                placeholder="Search Movie Title..."
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