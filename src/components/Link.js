import React from 'react';
import { timeDifferenceForDate } from '../utils';

const Links = ({ link, index }) => {
  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
      </div>
      <div className="ml1">
        <div>
          {link.description} ({link.url})
        </div>
        <div className="f6 lh-copy gray">
          {timeDifferenceForDate(link.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Links;
