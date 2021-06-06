import {Component} from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {

  constructor(props, context) {
    super(props, context);

    // define/initialize the states
    this.state = {
      showUsers: true,
      dummy: 'Dukes'
    };
  }

  toggleUsersHandler() {
    // setShowUsers((curState) => !curState);

    // this will merge the changes with the existing state, we don't have to pass all the values like we do in functional components
    this.setState((currentState) => {
      return {
        showUsers: !currentState.showUsers
      }
    });
  }

  /**
   * Called once when component mounted (was evaluated & rendered)
   * equivalent to: useEffect(..., [])
   */
  componentDidMount() {
  }

  /**
   * Called once component updated (was evaluated & rendered)
   * equivalent to: useEffect(..., [someDependency])
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  /**
   * Called right before component is unmounted (remove from the DOM)
   * equivalent to: useEffect(() => {...}, [])
   */
  componentWillUnmount() {
  }


  render() {
    const usersList = (
        <ul>
          {this.props.users.map((user) => (
              <User key={user.id} name={user.name} />
          ))}
        </ul>
    );

    return <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
    </div>;
  }
}


/*
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

 */

export default Users;
