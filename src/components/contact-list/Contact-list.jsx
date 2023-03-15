import React from 'react'
import { Link } from 'react-router-dom'
import './Contact-list.css'

const Contactlist = () => {
  return (
    <>
      <section className="contact-search p-3">
        <div className="container conteudo">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">Contact List
                  <Link to="/AddContact" className="btn btn-success m-2">New
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </Link>
                </p>
                <p className="fs-italic">
                  Phone Forstress is a free online phone directory where you can find
                  phone numbers of people and busin
                  <span className="text-danger"> This a community driven project, so please help us by adding
                    missing numbers and correcting existing ones.
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className=" col-md-8">
                <form className="row ">
                  <div className="col">
                    <div className="col-md-12">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="col-md-2">
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list p-3">
        <div className="container">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Img</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Country</th>
                <th scope="col">Zip</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
               <img src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Avatar" className="avatar" />
                </th>

                <td>John Doe</td>
                <td>123456789</td>
                <td>123 Main St</td>
                <td>Anytown</td>
                <td>CA</td>
                <td>USA</td>
                <td>12345</td>
                <td className="d-flex justify-content-around">
                  <Link to="/ViwContact/:id" className="btn btn-primary">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </Link>
                  <Link to="/AddContact" className="btn btn-success">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                  <Link to="//EditContact/:id" className="btn btn-danger">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Link>

                </td>
              </tr>
             </tbody>
          </table>

        </div>
      </section>
    </>

  )
}

export default Contactlist