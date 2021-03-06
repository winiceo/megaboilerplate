<div className="column row">
  <div className="row">
    <div className="medium-8 medium-offset-2 columns">
      <Messages messages={this.props.messages}/>

      <form onSubmit={this.handleSignup.bind(this)}>
        <h4>Create an account</h4>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange.bind(this)} autoFocus/>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)}/>

        <p className="help-text">By signing up, you agree to the <Link to="/">Terms of Service</Link>.</p>

        <button type="submit" className="button">Create an account</button>
      </form>

      <div className="hr-title"><span>or</span></div>

      <div className="button-group">
        //= SIGN_IN_WITH_FACEBOOK_INDENT4
        //= SIGN_IN_WITH_TWITTER_INDENT4
        //= SIGN_IN_WITH_GOOGLE_INDENT4
        //= SIGN_IN_WITH_VK_INDENT4
      </div>

      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  </div>
</div>
