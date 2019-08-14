import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserCart from './UserCart';
import Reviews from './Reviews';

class UserProfile extends React.Component {
  render() {
    const { user, cart } = this.props;
    return (
      <div>
        <h3>
          User profile for {user.firstName} {user.lastName}
        </h3>
        <div>
          First Name: {user.firstName}
          Last Name: {user.lastName}
          email:
        </div>
        <div>
          {user.isAdmin ? <a href="/users/edit">Edit Current Users</a> : ''}
        </div>
        <div>
          {user.isAdmin ? <Link to="/create-product">Create Product</Link> : ''}
        </div>
        <UserCart cart={cart} />
        <div>
          <h1>Authored Reviews</h1>
          <Reviews user={user} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  reviews: state.reviews,
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  null,
)(UserProfile);
