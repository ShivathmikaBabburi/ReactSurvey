import React from 'react';
import { useParams } from 'react-router-dom';

function withRouteParams(WrappedComponent) {
  return function(props) {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
  };
}

export default withRouteParams;
