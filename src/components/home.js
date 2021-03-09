import React, { Component } from 'react'
import avatar from "../images/img_avatar.png";

export default class Home extends Component {
    render() {
        return (
            <div style={{background: 'beige'}}>
            <div className="container">
              <div style={{ textAlign: "center" }}>
                <h1> IT EXPO 2020</h1>
                <p>
                  Where People Meet, Where Ideas Evolve, Where the Future is Made
                </p>
              </div>
              <div className="row pb-3" >
                <div className="col-lg-10 offset-lg-1">
                    <div className="stream-responsive stream-responsive-16by9">
                  <iframe
                    title="IT"
                    src="https://player.vimeo.com/video/408561496?autoplay=1"               
                    allow="autoplay; fullscreen"
                    allowFullScreen=""
                  ></iframe>
                  </div>
                </div>
              </div>
            </div>
    
            <section className="schedule-background">
              <div className="title" style={{ marginBottom:'4%'}}>
                <h1> Schedule and Speakers</h1>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="speaker">
                      <div>
                        <img
                          src={avatar}
                          alt="User"
                          style={{ width: "180px" }}
                        ></img>
                      </div>
                      <div className="webkit-center">
                         <div className="date"> <p> 09:05 A.M - 09:10 A.M</p></div>
                          <h1 className="name"> Speaker Name, Phd</h1>
                          <p className="designation">Executive Vice President and Provost - University of Cincinnati</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="speaker">
                      <div>
                        <img
                          src={avatar}
                          alt="User"
                          style={{ width: "180px" }}
                        ></img>
                      </div>
                      <div className="webkit-center">
                      <div className="date"> <p> 09:05 A.M - 09:10 A.M</p></div>
                          <h1 className="name"> Speaker Name, Phd</h1>
                          <p className="designation">Executive Vice President and Provost - University of Cincinnati</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
    }
}
