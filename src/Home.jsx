import React, { Component } from "react";
import "./Home.css";
import img from "./logo.svg";
import Security from "./Security";
import Trending from "./Trading";
class Practice extends Component {
    state = {
        tabSelected: null,
        showCollapsedMenu: false,
        initialTab: true,
        tab1Active: "active",
        tab2Active: "",
        tab3Active: "",
        tab4Active: "",
        tab5Active: "",
        tab6Active: "",
        tab7Active: "",
        tab8Active: "",
    };
    toggleMenu = () => {
        this.setState({
            showCollapsedMenu: !this.state.showCollapsedMenu,
        });
    };

    handleTab1 = (e) => {
        this.setState({ tabSelected: "Balances" });
        this.setState({ tab1Active: "active" });
        this.setState({ initialTab: false });
        this.setState({ tab2Active: "" });
        this.setState({ tab3Active: "" });
        this.setState({ tab4Active: "" });
        this.setState({ tab5Active: "" });
        this.setState({ tab6Active: "" });
        this.setState({ tab7Active: "" });
        this.setState({ tab8Active: "" });
    };
    handleTab2 = (e) => {
        this.setState({ tabSelected: "Deposits" });
        this.setState({ tab1Active: "" });
        this.setState({ tab2Active: "active" });
        this.setState({ tab3Active: "" });
        this.setState({ tab4Active: "" });
        this.setState({ tab5Active: "" });
        this.setState({ tab6Active: "" });
        this.setState({ tab7Active: "" });
        this.setState({ tab8Active: "" });
        this.setState({ initialTab: false });
    };
    handleTab3 = (e) => {
        this.setState({ tabSelected: "Withdrawls" });
        this.setState({ tab1Active: "" });
        this.setState({ tab2Active: "" });
        this.setState({ tab3Active: "active" });
        this.setState({ tab4Active: "" });
        this.setState({ tab5Active: "" });
        this.setState({ tab6Active: "" });
        this.setState({ tab7Active: "" });
        this.setState({ tab8Active: "" });
        this.setState({ initialTab: false });
    };
    handleTab4 = (e) => {
        this.setState({ tabSelected: "Profile" });
        this.setState({ tab1Active: "" });
        this.setState({ tab2Active: "" });
        this.setState({ tab3Active: "" });
        this.setState({ tab4Active: "active" });
        this.setState({ tab5Active: "" });
        this.setState({ tab6Active: "" });
        this.setState({ tab7Active: "" });
        this.setState({ tab8Active: "" });
        this.setState({ initialTab: false });
    };
    handleTab5 = (e) => {
        console.log("tab5 selected");
        this.setState({ tabSelected: "Security" });
        this.setState({ tab1Active: "" });
        this.setState({ tab2Active: "" });
        this.setState({ tab3Active: "" });
        this.setState({ tab4Active: "" });
        this.setState({ tab5Active: "active" });
        this.setState({ tab6Active: "" });
        this.setState({ tab7Active: "" });
        this.setState({ tab8Active: "" });
        this.setState({ initialTab: false });
    };
    handleTab6 = (e) => {
        this.setState({ tabSelected: "Apikeys" });
        this.setState({ tab1Active: "" });
        this.setState({ tab2Active: "" });
        this.setState({ tab3Active: "" });
        this.setState({ tab4Active: "" });
        this.setState({ tab5Active: "" });
        this.setState({ tab6Active: "active" });
        this.setState({ tab7Active: "" });
        this.setState({ tab8Active: "" });
        this.setState({ initialTab: false });
    };
    handleTab7 = (e) => {
        this.setState({ tabSelected: "Preferences" });
        this.setState({ tab1Active: "" });
        this.setState({ tab2Active: "" });
        this.setState({ tab3Active: "" });
        this.setState({ tab4Active: "" });
        this.setState({ tab5Active: "" });
        this.setState({ tab6Active: "" });
        this.setState({ tab7Active: "active" });
        this.setState({ tab8Active: "" });
        this.setState({ initialTab: false });
    };
    handleTab8 = (e) => {
        this.setState({ tabSelected: "Transactionlogs" });
        this.setState({ tab1Active: "" });
        this.setState({ tab2Active: "" });
        this.setState({ tab3Active: "" });
        this.setState({ tab4Active: "" });
        this.setState({ tab5Active: "" });
        this.setState({ tab6Active: "" });
        this.setState({ tab7Active: "" });
        this.setState({ tab8Active: "active" });
        this.setState({ initialTab: false });
    };

    render() {
        const show = this.state.showCollapsedMenu ? "show" : "";
        return (
            <div>
                <div className="ham-hide">
                    <nav class="navbar navbar-expand-lg ">
                        <nav>
                            <img src={img} />
                        </nav>
                        <button
                            className="navbar-toggler hams"
                            data-toggle="collapse"
                            data-target="#/navbar-menu"
                            type="button"
                            aria-controls="navbarSupportedContent1"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={this.toggleMenu}
                        >
                            <i class="fas fa-bars fa-2x"></i>
                        </button>
                        <div
                            className={"collapse navbar-collapse " + show}
                            id="navbarNav"
                        >
                            <div
                                className="collapse navbar-collapse"
                                id="navbar-menu"
                            ></div>
                            <div className="ham-hide leftDrawerMob">
                                <ul>
                                    <li>
                                        <a
                                            href="#/"
                                            onClick={this.handleTab1}
                                            className={this.state.tab1Active}
                                            href="#/"
                                        >
                                            <i className="fas fa-wallet fa-fw costum"></i>
                                            Balances
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#/"
                                            onClick={this.handleTab2}
                                            className={this.state.tab2Active}
                                        >
                                            <i className="fas fa-arrow-circle-right fa-fw costum"></i>
                                            Deposits
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#/"
                                            onClick={this.handleTab3}
                                            className={this.state.tab3Active}
                                        >
                                            <i class="fas fa-arrow-circle-left fa-fw costum"></i>
                                            Withdrawls
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#/"
                                            onClick={this.handleTab4}
                                            className={this.state.tab4Active}
                                        >
                                            <i class="fas fa-user-alt fa-fw costum"></i>
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#/"
                                            onClick={this.handleTab5}
                                            className={this.state.tab5Active}
                                        >
                                            <i class="fas fa-lock fa-fw costum"></i>
                                            Security
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#/"
                                            onClick={this.handleTab6}
                                            className={this.state.tab6Active}
                                        >
                                            <i class="fas fa-hockey-puck fa-fw costum"></i>
                                            API Keys
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#/"
                                            onClick={this.handleTab7}
                                            className={this.state.tab7Active}
                                        >
                                            <i class="fas fa-cog fa-fw costum"></i>
                                            Preferences
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#/"
                                            onClick={this.handleTab8}
                                            className={this.state.tab8Active}
                                        >
                                            <i class="far fa-clock fa-fw costum"></i>
                                            Transaction Logs
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* descktop view start */}
                <div className="navs">
                    <nav>
                        <img src={img} />
                    </nav>
                    <p>
                        <i className="fas fa-angle-double-left"></i> Back to
                        Trading
                    </p>
                </div>

                <div className="contents">
                    <div className="leftDrawer">
                        <ul>
                            <li>
                                <a
                                    href="#/"
                                    onClick={this.handleTab1}
                                    className={this.state.tab1Active}
                                    href="#/"
                                >
                                    <i className="fas fa-wallet fa-fw costum"></i>
                                    Balances
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    onClick={this.handleTab2}
                                    className={this.state.tab2Active}
                                >
                                    <i className="fas fa-arrow-circle-right fa-fw costum"></i>
                                    Deposits
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    onClick={this.handleTab3}
                                    className={this.state.tab3Active}
                                >
                                    <i class="fas fa-arrow-circle-left fa-fw costum"></i>
                                    Withdrawls
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    onClick={this.handleTab4}
                                    className={this.state.tab4Active}
                                >
                                    <i class="fas fa-user-alt fa-fw costum"></i>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    onClick={this.handleTab5}
                                    className={this.state.tab5Active}
                                >
                                    <i class="fas fa-lock fa-fw costum"></i>
                                    Security
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    onClick={this.handleTab6}
                                    className={this.state.tab6Active}
                                >
                                    <i class="fas fa-hockey-puck fa-fw costum"></i>
                                    API Keys
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    onClick={this.handleTab7}
                                    className={this.state.tab7Active}
                                >
                                    <i class="fas fa-cog fa-fw costum"></i>
                                    Preferences
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    onClick={this.handleTab8}
                                    className={this.state.tab8Active}
                                >
                                    <i class="far fa-clock fa-fw costum"></i>
                                    Transaction Logs
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* {this.state.initialTab ? <Trending /> : null} */}

                    {/* {this.state.tabSelected === "security" ? (
                        <Security />
                    ) : null} */}
                    {this.state.tabSelected === "Deposits" ||
                    this.state.tabSelected === "Withdrawls" ||
                    this.state.tabSelected === "Profile" ||
                    this.state.tabSelected === "Apikeys" ||
                    this.state.tabSelected === "Preferences" ||
                    this.state.tabSelected === "Balances" ||
                    this.state.tabSelected === "Transactionlogs" ? (
                        <Trending data={this.state.tabSelected} />
                    ) : this.state.initialTab ? (
                        <Trending data={this.state.tabSelected} />
                    ) : (
                        <Security data={this.state.tabSelected} />
                    )}
                    {/* {this.state.tabSelected === "Deposits" ||
                    "Withdrawls" ||
                    "Profile" ||
                    "Apikeys || Preferences" ||
                    "Transactionlogs" ? (
                        <Sample />
                    ) : null} */}
                </div>
            </div>
        );
    }
}

export default Practice;
