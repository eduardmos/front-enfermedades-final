import React from "react";

import { Pages } from "../../components/GraphicsComponent";

import "./GraphicsPage.scss";

const GraphicsPage = (props) => {
  const { setCurrentPage } = props;

  return (
    <section className="graphics">
      {Object.keys(Pages).map((page) => {
        return (
          <button
            className="pages"
            onClick={() => {
              console.log(setCurrentPage);
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </section>
  );
};

export default GraphicsPage;
