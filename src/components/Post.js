// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Js_json from "bs-platform/lib/es6/js_json.js";

function Post(Props) {
  var post = Props.post;
  var match = post[/* cover_img */1];
  var backgroundStyle = {
    backgroundImage: "url('" + ((
        match !== undefined ? match : ""
      ) + "')")
  };
  var match$1 = Js_json.decodeString(post[/* created_at */3]);
  return React.createElement("div", {
              className: "max-w-sm w-full lg:max-w-full lg:flex"
            }, React.createElement("div", {
                  className: "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",
                  style: backgroundStyle,
                  title: "Woman holding a mug"
                }), React.createElement("div", {
                  className: "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                }, React.createElement("div", {
                      className: "mb-8"
                    }, React.createElement("p", {
                          className: "text-sm text-gray-600 flex items-center"
                        }, React.createElement("svg", {
                              className: "fill-current text-gray-500 w-3 h-3 mr-2",
                              viewBox: "0 0 20 20",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, React.createElement("path", {
                                  d: "M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                                })), "Members only"), React.createElement("div", {
                          className: "text-gray-900 font-bold text-xl mb-2"
                        }, post[/* title */0]), React.createElement("p", {
                          className: "text-gray-700 text-base"
                        }, post[/* content */2])), React.createElement("div", {
                      className: "flex items-center"
                    }, React.createElement("img", {
                          className: "w-10 h-10 rounded-full mr-4",
                          alt: "Avatar of Vladimir Novickk",
                          src: post[/* user */4][/* avatar_url */1]
                        }), React.createElement("div", {
                          className: "text-sm"
                        }, React.createElement("p", {
                              className: "text-gray-900 leading-none"
                            }, post[/* user */4][/* name */0]), React.createElement("p", {
                              className: "text-gray-600"
                            }, match$1 !== undefined ? match$1 : "")))));
}

var make = Post;

export {
  make ,
  
}
/* react Not a pure module */
