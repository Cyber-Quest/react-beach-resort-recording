import React, { Component } from "react";
import Title from "../components/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        title: "free coocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia repellendus dolores, voluptatum labore recusandae, voluptatibus quod blanditiis esse quaerat, amet nam a delectus dolorum? Minus culpa quis praesentium officia?",
      },
      {
        icon: <FaHiking></FaHiking>,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia repellendus dolores, voluptatum labore recusandae, voluptatibus quod blanditiis esse quaerat, amet nam a delectus dolorum? Minus culpa quis praesentium officia?",
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia repellendus dolores, voluptatum labore recusandae, voluptatibus quod blanditiis esse quaerat, amet nam a delectus dolorum? Minus culpa quis praesentium officia?",
      },
      {
        icon: <FaBeer></FaBeer>,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia repellendus dolores, voluptatum labore recusandae, voluptatibus quod blanditiis esse quaerat, amet nam a delectus dolorum? Minus culpa quis praesentium officia?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
