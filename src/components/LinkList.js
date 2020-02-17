import React from 'react';
import Link from './Link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        description
        url
        createdAt
      }
    }
  }
`;

const NEW_LINKS_SUBSCRIPTION = gql`
  subscription {
    newLink {
      id
      url
      description
    }
  }
`;

const _subscribeToNewLinks = subscribeToMore => {
  subscribeToMore({
    document: NEW_LINKS_SUBSCRIPTION,
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev;
      const newLink = subscriptionData.data.newLink;

      return Object.assign({}, prev, {
        feed: {
          links: [newLink, ...prev.feed.links],
          count: prev.feed.links.length + 1,
          __typename: prev.feed.__typename
        }
      });
    }
  });
};

// Implementing with Apollo Hooks
const LinkList = () => {
  const { error, loading, data, subscribeToMore } = useQuery(FEED_QUERY);

  if (loading) return <p>Loading</p>;
  if (error) return <p>error</p>;

  _subscribeToNewLinks(subscribeToMore);

  const linksToRender = data.feed.links;
  return (
    <div>
      {linksToRender.map((link, index) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </div>
  );
};
export default LinkList;
