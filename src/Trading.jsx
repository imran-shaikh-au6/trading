import React, { Component } from "react";
import "./Trading.css";
import { Link } from "react-router-dom";
class Trading extends Component {
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
                <div className="backMenu">
                    <i
                        onClick={this.handleBackButton}
                        class="fas fa-arrow-left leftIcon"
                    >
                        <Link to="/" />
                    </i>
                    <p className="backTag">{this.props.data}</p>
                </div>
                <div className="sampleData">
                    <h1>Balance Remained</h1>
                    <h2 style={{ paddingLeft: "2em" }}>$60,0000</h2>
                </div>
            </div>
        );
    }
}

export default Trading;
