import React from "react";
import "../../components/GraphicsComponent";
import { Pages } from "../../components/GraphicsComponent";

import "./GraphicsPage.scss";

const GraphicsPage = (props) => {
  const { setCurrentPage } = props;

  return (
    <section className="general-container">
      {Object.values(Pages).map((page) => {
        return (
          <button
            key={page}
            className="pages"
            onClick={() => {
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
