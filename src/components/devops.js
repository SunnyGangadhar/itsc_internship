import React, { Component } from 'react'
import avatar from "../images/img_avatar.png";

export default class Devops extends Component {
    render() {
        return (
            <div>
               <div className="col-lg-6">
                  <div className="speaker">
                      <div>
                        <img
                          src={avatar}
                          alt="User"
                          style={{ width: "60px" }}
                        ></img>
                      </div>
                      <div className="webkit-center">
                          <h1 className="name_of_the_project"> Project Details </h1>
                          <p className="name_of_the_person"> MSIT Student Gangadhar Parvatham </p>
                      </div>
                    </div>
                  </div>
            </div>
        )
    }
}
