import React, {Component} from 'react';
import '../css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: [],
      email: '',
      password: '',
      message: ''
    }
  }

  changeUser(e){
    this.setState({email: e.target.value});
  }

  changePassword(e) {
    this.setState({password: e.target.value});
  }

  componentDidMount(){

  }

  access(e) {
    e.preventDefault();

    let email = this.state.email;
    let password = this.state.password;

    fetch('https://private-2b3317-teste593.apiary-mock.com/accounts')
    .then(Response => Response.json())
    .then( ({accounts}) => {
      let account = accounts.filter(a => a.email === email && a.password === password)
      .map(a => a)[0];
      if(account) {
        this.setState({message: 'Welcome '+ account.user});
      } else {
        this.setState({message: 'User not found'});
      }
      return account;
    }).catch(Response => {
      console.log(Response);
    })

  }

  getAccess(e) {
    e.preventDefault();

    let email = this.state.email;
    let password = this.state.password;

    fetch('https://private-d62c42-accounts55.apiary-mock.com/accounts/'+email+'/'+password)
    .then(Response => Response.json())
    .then(accounts => {
      let account = accounts.accounts[0];
      this.setState({
        account,
        message: 'Welcome '+account.user
      });
    })
    .catch(Response => {
      console.log(Response);
      this.setState({
        message: 'User not found'
      });
    })
  }

  render() {
    return (
      <main className="login">
        <section>
          <header>
            <h1>Login Todo-List</h1>
          </header>
          <div>
            <form onSubmit={e => this.getAccess(e)}>
              <input
                placeholder="User"
                onChange={e => this.changeUser(e)}
                value={this.state.email}
              />
              <input
                type="password"
                placeholder="Pass"
                onChange={e => this.changePassword(e)}
                value={this.state.password}
              />
              <p>
                {this.state.message}
              </p>
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
