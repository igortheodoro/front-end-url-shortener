import React from "react";
import axios from "axios";

export default function Redirect() {
  let urlLocal = window.location.href;
  let code = urlLocal.lastIndexOf("/");

  const url = urlLocal.substring(code + 1, urlLocal.length);

  const verificarUrl = (url) => {
    let haveHttp = url.search("http://");
    let haveHttps = url.search("https://");

    if (haveHttp >= 0 || haveHttps >= 0) {
      return url;
    } else {
      return "https://" + url;
    }
  };

  axios
    .get(`https://shortenerapi.azurewebsites.net/${url}`)
    .then((res) => (window.location.href = verificarUrl(res.data.url)))
    .catch((err) => console.log(err));

  return <h1> </h1>;
}
