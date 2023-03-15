import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
const Contactlist = () => {
  return (
    <section className="contact-search py-2">
      <div className="container">
        <div className="grid">
          <div className="row">
            <p className="h3 "><span className="text-primary">Contact</span> List

              <Link to="/AddContact" className="btn btn-primary m-2">
                New <i className="fa fa-plus" aria-hidden="true"></i>
              </Link>
            </p>
            <p className='fs-5'>
              Welcome to your contact list. You can add, edit, delete and view your contacts here.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form className="row">
              <div className="col">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Search Contact" aria-label="Search Contact" aria-describedby="button-addon2" />
                </div>
              </div>
              <div className="col">
              <div className="mb-3">
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
              </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contactlist