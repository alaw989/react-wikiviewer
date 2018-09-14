import React, { Component } from "react";

const Title = (props) => {

  const wikiTitle = props.wiki.map(x => { return x.title });
  
  return <h1 className="WikiTitle">{wikiTitle}</h1>
}
 
export default Title;