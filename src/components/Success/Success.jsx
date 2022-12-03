import { Link } from 'react-router-dom';

function Success() {
  return (
    <div>
      <h2>Thank you for completing the survey!</h2>
      <Link to={'/'}>Return to the main page</Link>
    </div>
  );
}

export default Success;
