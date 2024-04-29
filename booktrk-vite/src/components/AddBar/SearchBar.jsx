import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./SearchBar.css";

export const SearchBar = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "type",
  });

  return (
    <div
      className={`search-bar ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="overlap-4">
        {["default", "interm", "variant-3"].includes(state.property1) && (
          <div className="group">
            {["interm", "variant-3"].includes(state.property1) && (
              <div className="overlap-group-2">
                {state.property1 === "variant-3" && (
                  <>
                    <div className="text-wrapper-16">Book Title...</div>
                    <img className="add-book-button" alt="Add book button" src="https://icons8.com/icon/9433/multiply" />
                  </>
                )}

                {state.property1 === "interm" && <>Book Title...</>}
              </div>
            )}

            {state.property1 === "default" && <>Add Books</>}
          </div>
        )}

        <img
          className="line"
          alt="Line"
          src={
            state.property1 === "default"
              ? "https://icons8.com/icon/9433/multiply"
              : state.property1 === "interm"
              ? "https://icons8.com/icon/9433/multiply"
              : state.property1 === "type"
              ? "https://icons8.com/icon/9433/multiply"
              : "https://icons8.com/icon/9433/multiply"
          }
        />
        {state.property1 === "type" && (
          <div
            className="div-wrapper"
            onClick={() => {
              dispatch("click_108");
            }}
          >
            <div className="text-wrapper-17">Book Title...</div>
          </div>
        )}
      </div>
      {["type", "variant-3"].includes(state.property1) && (
        <div className="frame">
          <div className="frame-2">
            <img
              className="img"
              alt="Image"
              src={state.property1 === "type" ? "/img/image-3-7.png" : "https://icons8.com/icon/Fqihn9MGe0kQ/open-book-emoji"}
            />
            <div className="text-wrapper-18">Book Results</div>
          </div>
          <div className="frame-3">
            <img
              className="image-2"
              alt="Image"
              src={state.property1 === "type" ? "/img/image-3-7.png" : "https://icons8.com/icon/Fqihn9MGe0kQ/open-book-emoji"}
            />
            <div className="text-wrapper-18">Book Results</div>
          </div>
          <div className="frame-4">
            <img
              className="image-3"
              alt="Image"
              src={state.property1 === "type" ? "/img/image-3-7.png" : "https://icons8.com/icon/Fqihn9MGe0kQ/open-book-emoji"}
            />
            <div className="text-wrapper-18">Book Results</div>
          </div>
          <div className="frame-5">
            <img
              className="image-4"
              alt="Image"
              src={state.property1 === "type" ? "/img/image-3-7.png" : "https://icons8.com/icon/Fqihn9MGe0kQ/open-book-emoji"}
            />
            <div className="text-wrapper-18">Book Results</div>
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "type",
        };
    }
  }

  if (state.property1 === "type") {
    switch (action) {
      case "click_108":
        return {
          property1: "variant-3",
        };
    }
  }

  return state;
}

SearchBar.propTypes = {
  property1: PropTypes.oneOf(["type", "interm", "variant-3", "default"]),
};