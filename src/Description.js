import React, { Component } from "react";

const Description = (props) => {


    if (props === undefined || props.length == 0) {
        return ""
    }
    else {
        const wikiTitle = props.wiki.map(x => { return x.snippet });
        const array1 = wikiTitle.toString('').replace(/<span class="searchmatch">/g, '').replace(/\//g, '').replace(/<span>/g, '').replace(/&quot;/g, '"').replace(',', ' - ');
        return <h1 className="WikiTitle">{array1}</h1>
    }
}

export default Description;