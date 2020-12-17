import React from "react";
import "./styles.css";
import { useState } from "react";

const newsletterDB = {
  business: [
    {
      name: "The Pomp Letter",
      link: "https://pomp.substack.com/",
      image:
        "https://cdn.substack.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb712ae9c-f80b-4374-8f3e-de31f6d52cde_256x256.png"
    },
    {
      name: "Bankless",
      link: "https://bankless.substack.com/",
      image:
        "https://cdn.substack.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe94e7dd2-9c40-4693-96ab-190ad094490b_256x256.png"
    }
  ],
  health: [
    {
      name: "My Sweet Dumb Brain",
      link: "https://mysweetdumbbrain.substack.com/",
      image:
        "https://cdn.substack.com/image/fetch/w_264,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F77c57a6d-0d3d-466a-bc20-0bf9941996ab_256x256.png"
    },
    {
      name: "Small Big Ideas",
      link: "https://smallbigideas.substack.com/",
      image:
        "https://cdn.substack.com/image/fetch/w_264,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F401ebcd0-7eaa-4777-a8e6-ffc4f85686d9_114x114.png"
    }
  ],
  technology: [
    {
      name: "Zero Credibility",
      link: "https://www.spakhm.com/",
      image:
        "https://cdn.substack.com/image/fetch/w_264,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F817793f6-4298-4eba-8e3d-806bcc7653d2_355x355.png"
    },
    {
      name: "Platformer",
      link: "https://www.platformer.news/",
      image:
        "https://cdn.substack.com/image/fetch/w_264,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3eceaea0-1d7f-4fc7-8973-671eb4430d67_1024x1024.png"
    }
  ]
};

export default function App() {
  const [category, setCategory] = useState("business");
  function clickEventHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <div class="header">
        <h1>Newsletter Recommendation App</h1>
        <h3>
          Having trouble finding newsletters? We've curated a list based on
          different categories from Substack
        </h3>
      </div>
      <div>
        {Object.keys(newsletterDB).map((category) => {
          return (
            <button onClick={() => clickEventHandler(category)} className="btn">
              {category}
            </button>
          );
        })}
      </div>
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {newsletterDB[category].map((newsletter) => (
            <li key={newsletter.name} className="listStyle">
              {" "}
              <div>
                <img src={newsletter.image} alt={newsletter.name}></img>
              </div>
              <div class="name"> {newsletter.name} </div>
              <div style={{ padding: "1rem" }}>
                {" "}
                <a href={newsletter.link}>Go to the newsletter page</a>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
