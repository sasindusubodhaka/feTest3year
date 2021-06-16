import React, {Component} from 'react';
import * as userActions from "./store/actions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';


class Auth extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            setLoginUser: userActions.setLoginUser,
        },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
