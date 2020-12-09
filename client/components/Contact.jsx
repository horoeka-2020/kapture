import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class About extends React.Component {
  render () {
    return (
      <>
        <Header />
        <div className='wraper'></div>
        <div className='box'>
          {/* <div className='about-contrainer'> */}
          <div className="inputBox">
            <h1><span>Contact Us</span></h1>
            <form>
              <input
                className="input"
                id="name"
                type="text"
                autoComplete="name"
                name="name"
                // value={this.state.name}
                placeholder="Please enter your name"
                onChange={this.handleChange}
              ></input>

              <input
                className="input"
                id="email"
                type="text"
                autoComplete="email"
                name="email"
                // value={this.state.email}
                placeholder="Please enter your email address"
                onChange={this.handleChange}
              ></input>

              <textarea
                className="input"
                id="message"
                type="text"
                autoComplete="message"
                name="message"
                // value={this.state.message}
                placeholder="Please enter your message for the flock"
                onChange={this.handleChange}
              ></textarea>
            </form>
            <input
              className="btn-submit"
              type="submit"
              data-testid="submit-button"
              name="login-submit"
              value="Submit"
              onClick={this.handleClick}/>
            {/* </section> */}
          </div>
        </div>
        <Footer />

      </>
    )
  }
}
