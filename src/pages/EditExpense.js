import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

function EditExpense() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const routeMatch = useRouteMatch();

  console.log({
    history,
    location,
    params,
    routeMatch,
  })
  
  
  return (
    <div>
      <p>Editing the expense with the id of {params.id}</p>
    </div>
  );
}

export default EditExpense;
