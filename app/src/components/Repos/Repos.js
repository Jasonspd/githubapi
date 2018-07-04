import React, { Component } from 'react';
import './Repos.css';

class Repos extends Component {
    
  constructor() {
		super();
		this.state = {
			repos: [{'name': 'loading...'}], //initial state
			issues: [{'title': 'loading...'}]
		}
		this.fetchIssuesHandler = this.fetchIssuesHandler.bind(this); //Required to bind this to handleClick
	}

	fetchIssuesHandler(event) {
		var repo = event.currentTarget.id;
		event.currentTarget.childNodes[1].style.display ='block'; //reveal issues

		fetch('/issues/'+repo)
			.then(res => res.json())
			.then(issues => this.setState({issues}, () => console.log('Issues fetched', issues)))
	}

	componentDidMount() {
		fetch('/repos/nodejs')
			.then(res => res.json())
			.then(repos => this.setState({repos}, () => console.log('Repos fetched', repos)))
	}

  render() {
    return (
      <div>
        <h1>Repos</h1>
				<ul>
					{this.state.repos.map(repo => 
						<li id={repo.name} onClick={this.fetchIssuesHandler} key={repo.id}>
							{repo.name}
							<ul style={{display: 'none'}}>
								{this.state.issues.map(issue => 
									<li key={issue.id}>{issue.title}</li>
								)}
							</ul>
						</li>
					)}
				</ul>
      </div>
    );
  }
}

export default Repos;
