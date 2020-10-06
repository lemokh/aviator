import "./News.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../footer/Footer.component";
import NewsGroup from "./NewsGroup.component";
import NewsForm from "./NewsForm";
import { LanguageContext } from "../../context/LanguageContext";
import { backgroundColor } from "../catalog/Catalog.component";

import { deleteNews, createNews } from "../../redux/news/news.actions";

const translate = {
  Geo: {
    News: "სიახლეები"
  },
  Eng: {
    News: "News"
  },
  Rus: {
    News: "Новости"
  }
};

const News = ({ reduxNews, deleteNews, createNews, auth }) => ({
  // static contextType = LanguageContext;
  render() {
    const { auth, reduxNews } = this.props;

    // const { language } = this.context;
    // const { News } = translate[language];

    console.log(reduxNews);

    let newsList;
    if (reduxNews !== null) {
      const newsArr = Object.values(reduxNews);
      const newsIds = Object.keys(reduxNews);

      newsList = newsArr
        .reverse()
        .map((item, index) => (
          <NewsGroup
            name={item.name}
            title={item.title}
            text={item.text}
            src={item.src}
            id={newsIds[index]}
            auth={auth}
          />
        ));
    } else {
      // add jsx loading html
      // newsList = "LOADING...";
    }
    return (
      <div style={backgroundColor}>
        <h1 className="text-center font-italic heading">{News}</h1>
        {auth && <NewsForm createNews reduxNews />}
        <div className="container">
          {newsList}
          <br />
        </div>
        <Footer />
      </div>
    );
  }
});


const mapStateToProps = reduxStore => ({
  reduxNews: reduxStore.news
});

const mapDispatchToProps = dispatch => ({
  // propName: actionObjPayload => dispatch(actionCreator(actionObjPayload))

  deleteNews: id => dispatch(deleteNews(id)),
  createNews: data => dispatch(createNews(data))
});

// const mapDispatchToProps = {
//   // createNews,
//   // editNews,
//   deleteNews
// };

// export default News;

export default connect(mapStateToProps, mapDispatchToProps)(News);
