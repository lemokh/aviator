import "./Gallery.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import GalleryPosts from "./GalleryPosts.component";
import AdminForm from "../AdminForm.component";
import Footer from "../../footer/Footer.component";
import Poster from "../../images/jpg/starPoster.jpg";
import { backgroundColor } from "../catalog/Catalog.component";

class Gallery extends Component {
  constructor(props) {
    super(props);
    // state controls form inputs
    this.state = null;

    this.editPostInputs = this.editPostInputs.bind(this);
  }
  // import editPostsInputs in all page components
  editPostInputs(postObj) {
    this.setState(postObj);
    console.log("Gallery.component STATE", this.state);
  }
  render() {
    const { auth, reduxGallery } = this.props;

    let galleryList;

    if (reduxGallery !== null) {
      const galleryIds = Object.keys(reduxGallery).reverse();
      const galleryArr = Object.values(reduxGallery);

      galleryList = galleryArr
        .reverse()
        .map((item, index) => (
          <GalleryPosts
            text={item.text}
            src={item.src}
            key={index}
            id={galleryIds[index]}
            editPostInputs={this.editPostInputs}
            auth={auth}
            pageName="gallery"
          />
        ));
    }
    return (
      <div style={backgroundColor}>
        <div className="container">
          <div
            id="carouselExampleCaptions"
            className="carousel carousel-fade slide gallery_container"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active mt-5 mb-5  rounded">
                <img src={Poster} className="gallery_img" alt="..." />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              {galleryList}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          {auth && <AdminForm editObj={this.state} pageName="gallery" />}
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxGallery: reduxStore.siteData.gallery
});

export default connect(mapStateToProps)(Gallery);
