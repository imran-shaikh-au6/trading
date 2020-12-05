import React, { Component } from "react";
import "./Home.css";
import img from "./logo.svg";
import Security from "./Security";
class Practice extends Component {
    state = {
        active: "",
        tabSelected: null,
        color: "",
    };

    handleData = (e) => {
        this.setState({ tabSelected: "security" });
        this.setState({ active: "active" });
        this.setState({ color: "rgb(1, 141, 184)" });
    };

    render() {
        return (
            <div>
                <div className="mob">
                    <nav className="logo">
                        <img src={img} />
                    </nav>
                    <div className="hams" onClick={this.hamburger}>
                        <i class="fas fa-bars fa-2x"></i>
                    </div>
                </div>
                <header className="nav">
                    <nav>
                        <img src={img} />
                    </nav>
                    <p>
                        <i className="fas fa-angle-double-left"></i> Back to
                        Trading
                    </p>
                </header>
                <div className="contents">
                    <div className="leftDrawer">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fas fa-wallet fa-fw costum"></i>
                                    Balances
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-arrow-circle-right fa-fw costum"></i>
                                    Deposits
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-arrow-circle-left fa-fw costum"></i>
                                    Withdrawls
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-user-alt fa-fw costum"></i>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={this.handleData}
                                    className={this.state.active}
                                    style={{ color: this.state.color }}
                                    href="#"
                                >
                                    <i class="fas fa-lock fa-fw costum"></i>
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-hockey-puck fa-fw costum"></i>
                                    API Keys
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-cog fa-fw costum"></i>
                                    Preferences
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="far fa-clock fa-fw costum"></i>
                                    Transaction Logs
                                </a>
                            </li>
                        </ul>
                    </div>
                    {this.state.tabSelected === "security" ? (
                        <Security />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Practice;
