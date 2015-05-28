import React from 'react';
import IssueModel from 'models/issue';

class Issues extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { issues: [] };
  }

  render() {
    return (
      <div>
      <h2>Issues</h2>
      <ul>
        {this.state.issues.map((issue) => {
          return <li>
            <p><strong>{issue.title}</strong></p>
            <p dangerouslySetInnerHTML={{__html: issue.description_output}}></p>
          </li>
        })}
      </ul>
    </div>
    );
  }

  componentWillMount() {
    var issue = new IssueModel();
    issue.all().then((response) => {
      this.setState({ issues: response.data });
    }, (response) => { console.log(response) });
  }
}

export default Issues;
