import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class About extends React.Component {
  render () {
    return (
      <>
        <Header />
        <div className='wraper-nonLanding'></div>
        <div className='box-nonLanding'>
          <h1 className='cardTitle'>Contact the Flock</h1>
          {/* <div className='about-contrainer'> */}
          <div className="inputBox">
            <h1><span>Contact Us</span></h1>
            {/* <p className='about-flock'><span>Lorem ipsum  officia deserunt mollit anim id est laborum.</span></p> */}
            {/* <section className="contact-bg"> */}
            {/* <form action="#" method="post" noValidate>
              <div className="notification"></div>
              <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="contact_name" value="" />
              </p>
              <p>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="contact_email" value="" />
              </p>
              <p>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="contact_message" cols="20" rows="4"></textarea>
              </p>
              <p className="send">
                <label htmlFor="check">Please leave this field blank</label>
                <input id="check" name="contact_check" type="text" value="" />
                <input id="submit" name="send_contact_form" type="submit" value="Send" />
              </p>
            </form> */}
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
