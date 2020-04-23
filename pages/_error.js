import React from 'react';

import ErrorView from '../components/ErrorComponent';

const RootError = ({statusCode}) => {
  return <ErrorView statusCode={statusCode} />;
}

export default RootError
    