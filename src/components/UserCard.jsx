import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p>{user.email}</p>
      <Link to={`/user/${user.id}`} className="text-blue-600">View Details</Link>
    </div>
  );
};

export default UserCard;
