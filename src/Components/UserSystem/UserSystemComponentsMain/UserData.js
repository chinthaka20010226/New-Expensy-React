import React from 'react'
import { Button } from 'react-bootstrap'

function Userdata() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Categories</th>
            <th scope="col">UserID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Manoj</th>
            <td>wicmanoj15@gmail.com</td>
            <td>Active</td>
            <td>Personal</td>
            <td>12341bc</td>
          </tr>
          <tr>
            <th scope="row">Lahiru</th>
            <td>Lahiru15@gmail.com</td>
            <td>Deactivate</td>
            <td>Personal</td>
            <td>1234abc</td>
          </tr>
          <tr>
            <th scope="row">sandun</th>
            <td>Sadun@gmail.com</td>
            <td>Active</td>
            <td>Personal</td>
            <td>1234asd</td>
          </tr>
          <tr>
            <th scope="row">Kalumn</th>
            <td>Kalumn@gmail.com</td>
            <td>Active</td>
            <td>Personal</td>
            <td>1234asd</td>
          </tr>
          <tr>
            <th scope="row">Kalumn</th>
            <td>Kalumn@gmail.com</td>
            <td>Active</td>
            <td>Personal</td>
            <td>1234asd</td>
          </tr>
          <tr>
            <th scope="row">Kalumn</th>
            <td>Kalumn@gmail.com</td>
            <td>Active</td>
            <td>Personal</td>
            <td>1234asd</td>
          </tr>
    
        </tbody>
      </table>
    <div>
      <Button>CreateUser</Button>
    </div>
  </div>
  )
}

export default Userdata