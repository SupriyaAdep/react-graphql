import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const POSTARTICLE_MUTATION = gql`
  mutation postArticleMutation($url: String!, $description: $String!){
    postArticle(url: $url, description: $desctiption){
      id,
      url, description
    }
  }
`;

class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  };
  render() {
    const { url, description } = this.state;
    return (
      <div>
        <div className="flex flex-column mt-3">
          <input
            className="mb2"
            type="text"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            type="text"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          mutation={POSTARTICLE_MUTATION}
          variables={{ description, url }}
          onCompleted={() => this.props.hisory.push('/')}
        >
          {postArticle => <button onClick={postArticle}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
