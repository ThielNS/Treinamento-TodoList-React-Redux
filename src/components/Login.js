import React, {Component} from 'react';
import '../css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="login">
        <section>
          <header>
            <h1>Login Todo-List</h1>
          </header>
          <div>
            <form>
              <input placeholder="User" />
              <input type="password" placeholder="Pass" />
              <button>
                Login
              </button>
            </form>
            <p><a href="">Register</a></p>
            <p><a href="">Forget your pass?</a></p>
          </div>
        </section>
      </main>
    );
  }
}

export default Login;
