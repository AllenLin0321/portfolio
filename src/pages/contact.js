import React from 'react'
import Seo from '../components/Seo'

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xleabkro" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="姓名" className="form-control" />
              <input type="email" name="email" placeholder="email" className="form-control" />
              <textarea name="message" rows="5" placeholder="訊息內容" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              送出!
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
