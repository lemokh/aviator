import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteImageFireStorage,
  removePostFireDB
} from "../../firebase/Firebase.config";

class GalleryPosts extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleEdit(id, text, src, imgFile) {
    // scrolls up to AminForm
    window.scrollTo(0, document.body.scrollHeight);
    // populates sibling Form.jsx state (via parent component)
    // with data (including ID) of admin update post
    const editObj = {
      id,
      text,
      src,
      imgFile
    };
    console.log("GalleryGroup editObj", editObj);
    this.props.editPostInputs(editObj);
  }
  handleDelete(id, src) {
    console.log("POST ID TO DELETE IN FIRE DB: ", id);

    if (src !== null) {
      console.log("DELETING IMAGE FROM FIRE STORAGE", src);
      // DELETES IMAGE FROM FIREBASE STORAGE
      deleteImageFireStorage(src);
    }
    console.log("REMOVING POST FROM FIRE DB");
    // REMOVES POST FROM FIREBASE DB
    removePostFireDB("gallery", id);
  }
  render() {
    const { src, text, imgFile, auth, id } = this.props;
    return (
      <div className="carousel-item mt-5 mb-5 rounded">
        <img src={src} className="gallery_img" alt="..." />
        {auth && (
          <div id="flex" className="carousel-caption">
            <FontAwesomeIcon
              type="button"
              onClick={() => {
                this.handleEdit(id, text, src, imgFile);
              }}
              className="icons"
              icon={faEdit}
            />
            <FontAwesomeIcon
              type="button"
              onClick={() => {
                this.handleDelete(id, src);
              }}
              className="icons"
              icon={faTrash}
            />
          </div>
        )}
        <p className="gallery_text font-italic">{text}</p>
      </div>
    );
  }
}

export default GalleryPosts;
