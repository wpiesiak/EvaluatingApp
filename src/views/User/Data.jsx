import React from 'react';



class UserData extends React.Component {


    render() {
        const { user } = this.props;
        return (
            <div className='user-data'>
                <div className='text-right'>
                    <button className='btn btn-primary' onClick={this.props.toggleEdit}>
                        Edit
                    </button>
                </div>
                <table className='table table-striped table-borderless text-left '>
                    <tbody>

                    <tr>
                        <th colSpan={4}>
                            <h3>General Info</h3>
                        </th>
                    </tr>
                    <tr>
                        <th colSpan={2}>First Name</th>
                        <td colSpan={2}>{user.firstName}</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>Last Name</th>
                        <td colSpan={2}>{user.lastName}</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>Email</th>
                        <td colSpan={2}>{user.email}</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>Age</th>
                        <td colSpan={2}>{user.age}</td>
                    </tr>
                    <tr>
                        <th colSpan={4}><h3>Address</h3></th>
                    </tr>
                    <tr>
                        <th>Street</th>
                        <td colSpan={3}>{user.address.street}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{user.address.city}</td>
                        <th>Province / State</th>
                        <td>{user.address.state}</td>
                    </tr>
                    <tr>
                        <th>Zip Code</th>
                        <td>{user.address.zipcode}</td>
                        <th>Country</th>
                        <td>{user.address.country}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default UserData;
