import classes from './UserProfile.module.css';
import {useSelector} from "react-redux";

const UserProfile = () => {
   const username = useSelector(state => state.authentication.username);


    return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>

      <p>{username}</p>

    </main>
  );
};

export default UserProfile;
