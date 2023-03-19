import React from "react";

export default class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <form class='App App-header App-link'>
                <div class='position-absolute top-50 start-50 translate-middle border border-5 border-info'>
                    <h3>Log In</h3>
                    <label>
                    Username:
                    <input class='m-1' type="text" name="name" /><br/>
                    Password:
                    <input class='m-1' type="text" name="name" />
                    </label>
                    <input class='btn btn-outline-info m-1' type="submit" value="Submit" />
                </div>
                </form>
            </div>
        );
    }
}