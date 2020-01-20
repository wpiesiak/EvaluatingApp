import React from "react";
import { connect } from 'react-redux';
import { actions} from "../../redux/actions";
import withToggle from '../../components/withToggle';
import UserForm from "./Form";
import UserData from "./Data";
import './style.scss';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }
    formSubmit(data) {
      this.props.dispatch(actions.updateUser(data));
      this.props.toggle();
    }
    render() {
        const edit = this.props.toggleStatus;
        return (
            <div className="user-page">
                { edit ?
                    <UserForm
                        initialValues={this.props.user}
                        onSubmit={this.formSubmit}
                        toggleEdit={this.props.toggle}
                    />
                :
                    <UserData
                        user={this.props.user}
                        toggleEdit={this.props.toggle}
                    />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
};

export default connect(mapStateToProps)(withToggle(User));

