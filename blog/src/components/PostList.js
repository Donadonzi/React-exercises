import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

 class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

     render() {
        return (
            <div>
                Post List!
            </div>
        );
     }
 }

 
 export default connect(null, { fetchPosts : fetchPosts })(PostList); // First argument of connect() is always mapStateToProps(). But since we don't have it now, we pass null