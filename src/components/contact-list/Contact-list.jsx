import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
const Contactlist = () => {
  return (
    <>
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
      <section className="contact-list py-2">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Adress</th>
                      <th scope="col">Company</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>
                        <a href="mailto:Mark@gmail.com">
                        </a>
                      </td>
                      <td>123456789</td>
                      <td>1234, New York</td>
                      <td>Google</td>
                      <td>
                        <Link to="/ViwContact/1" className="btn btn-primary btn-sm m-1">
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                        <Link to="/EditContact/1" className="btn btn-secondary btn-sm m-1">
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                        <Link to="/ViwContact/1" className="btn btn-danger btn-sm m-1">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Contactlist