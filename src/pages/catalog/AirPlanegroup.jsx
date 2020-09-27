import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class AirPlaneGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const { text, name, src, title, id, auth } = this.props;
    const { expanded } = this.state;
    return (
      <div className="col mb-4">
        <div className="card shadow p-3 mb-5 rounded border-0 airplain_background">
          <img src={src} className="card-img-top rounded" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p
              className={
                !expanded ? "fade text-truncate" : "card-text text-truncate"
              }
            >
              {text}
            </p>
            <button
              onClick={this.handleClick}
              className="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target={`#${id}`}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Read More...
            </button>
            {auth && (
              <div className="float-right">
                <FontAwesomeIcon className="icons" icon={faEdit} />
                <FontAwesomeIcon className="icons" icon={faTrash} />
              </div>
            )}
          </div>
          <div className="collapse" id={id}>
            <div className="card-body">
              <p className="card-text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AirPlaneGroup;
