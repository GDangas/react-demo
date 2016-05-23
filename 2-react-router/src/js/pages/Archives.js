import React from "react";


export default class Archives extends React.Component {
  render() {
    console.log(this.props);

    const { params } = this.props;
    console.log({params});
    const { article } = params;
    console.log({article});

    return (
      <div>
        <h1>Archives: ({article})</h1>
        <h1>Archives: ({this.props.params.article})</h1>
      </div>
    );
  }
}

/*import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Archives</h1>
        article: {article}, date: {date}, filter: {filter}
        <div class="row">{Articles}</div>
      </div>
    );
  }
}*/
