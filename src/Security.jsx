import React, { Component } from "react";
import "./Security.css";
class Security extends Component {
    state = {
        toggle: "on",
        active: "btns-active",
        off: "btns",
    };
    handleOnClick = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        if (e.target.name === "offButton") {
            this.setState({ active: "btns", off: "btns-active" });
        } else if (e.target.name === "onButton") {
            this.setState({ active: "btns-active", off: "btns" });
        }
    };
    render() {
        return (
            <div className="content2">
                <div className="card one">
                    <div className="first">
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="sec">
                        <p className="title">2FA</p>
                        <div className="innerSec">
                            <p>Google Authenticator</p>
                            <a href="#">FAQ's on Google 2FA</a>
                        </div>
                    </div>
                    <div className="third">
                        <button className="btn">Setup</button>
                    </div>
                </div>
                <div className="card two">
                    <div className="first">
                        <i class="fas fa-history"></i>
                    </div>
                    <div className="sec">
                        <p className="title">Safe Session Duration</p>
                        <div className="innerSec">
                            <p>
                                When Enable the trading session expires 10
                                minutes
                            </p>
                            <p>after the browser tab close</p>
                        </div>
                    </div>
                    <div className="tog">
                        <button
                            onClick={this.handleOnClick}
                            className={this.state.active}
                            name="onButton"
                        >
                            On
                        </button>
                        <button
                            onClick={this.handleOnClick}
                            className={this.state.off}
                            name="offButton"
                        >
                            OFF
                        </button>

                        {/* <button
                                    onClick={this.handleOnClick}
                                    className={this.state.buttonOffCss}
                                >
                                    OFF
                                </button> */}
                    </div>
                </div>
                <div className="card three">
                    <div className="first">
                        <i class="fas fa-file-invoice"></i>
                    </div>
                    <div className="sec">
                        <p className="title">Account Activity</p>
                        <div className="innerSec">
                            <ul>
                                <li>Last Login 23 Nov 2020</li>
                                <li>Ip Address: 103.235.121.101</li>
                                <li>3 Active Sessions</li>
                            </ul>
                            <a href="#">
                                <i class="fas fa-sign-out-alt logout"></i>Logout
                                from other session
                            </a>
                        </div>
                    </div>
                    <div className="third">
                        <button className="btn">Details</button>
                    </div>
                </div>
                <div className="card four">
                    <div className="first">
                        <i class="fas fa-address-card"></i>
                    </div>
                    <div className="sec">
                        <p className="title">Identity Verification</p>
                        <div className="innerSec">
                            <p>
                                Get verified to increase your withdrawls limit
                            </p>
                            <p>Current withdrawl limit is $10,000 per day</p>
                        </div>
                    </div>
                    <div className="third">
                        <button className="btn">Verify</button>
                    </div>
                </div>
                <div className="card five">
                    <div className="first pass">
                        <i class="fas fa-key"></i>
                    </div>
                    <div className="sec ">
                        <p className="pass title">Change Password</p>
                    </div>
                    <div className="third">
                        <button className="btn">Change</button>
                    </div>
                </div>
                <div className="card six">
                    <div className="first">
                        <i class="fas fa-address-book"></i>
                    </div>
                    <div className="sec">
                        <p className="title">Address Management</p>
                        <p>
                            Address Management is allows you to save and write
                            memos for each of your withdrawl addresses. The
                            optional whitlist function helps protect your funcd
                            by only allowing withdrawls to whitelist addresses
                        </p>
                    </div>
                    <div className="third">
                        <button className="btn">Manage</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Security;
