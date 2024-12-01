import React from "react";
import "./SliderScroll.css";

const sliderItems = [
  {
    id: 1,
    imgSrc: "images/img1.png",
    title: "DESIGN SLIDER",
    topic: "Aerphone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
    detailTitle: "Aerphone GHTK",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi.",
    specifications: [
      { label: "Used Time", value: "6 hours" },
      { label: "Charging Port", value: "Type-C" },
      { label: "Compatible", value: "Android" },
      { label: "Bluetooth", value: "5.3" },
      { label: "Controlled", value: "Touch" },
    ],
  },
  // Add more items here
];

const SliderItem = ({ item }) => (
  <div className="item">
    <img src={item.imgSrc} alt={`${item.topic} image`} />
    <div className="introduce">
      <div className="title">{item.title}</div>
      <div className="topic">{item.topic}</div>
      <div className="des">{item.description}</div>
      <button className="seeMore">SEE MORE ↗</button>
    </div>
    <div className="detail">
      <div className="title">{item.detailTitle}</div>
      <div className="des">{item.details}</div>
      <div className="specifications">
        {item.specifications.map((spec, index) => (
          <div key={index}>
            <p>{spec.label}</p>
            <p>{spec.value}</p>
          </div>
        ))}
      </div>
      <div className="checkout">
        <button>ADD TO CART</button>
        <button>CHECKOUT</button>
      </div>
    </div>
  </div>
);

const SliderScroll = () => {
  return (
    <div className="carousel">
      <div className="list">saxasxasx
        {sliderItems.map((item) => (
          <SliderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SliderScroll;
