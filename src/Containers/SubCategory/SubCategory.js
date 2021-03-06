import React, { Component } from "react";
import Card from "../../Components/card/card";
import classes from "./SubCategory.module.css";
import axios from "axios";
import img1 from "../../imgs/examples/1.jpg";

import Modal from "../../Components/UI/modal/modal";
import Carousel from "react-bootstrap/Carousel";
class SubCategory extends Component {
  state = {
    data: [],
    path: "",
    title: "",
    ifShowModal: false,
  };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const url = new URL("http:/localhost:3001/sub");

    axios
      .get("http://localhost:3001/sub", {
        params: {
          id: urlParams.get("Id"),
          subId: urlParams.get("subId"),
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data.files,
          path: res.data.path,
          title: res.data.title,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const showModal = () => {
      this.setState({ ifShowModal: true });
    };

    const hideModal = () => {
      this.setState({ ifShowModal: false });
    };

    let cards = "no data to show";
    let ModalItems;
    if (this.state.data.length != 0) {
      cards = this.state.data.map((img, index) => {
        // let url = this.state.path + img;
        let url = img1;
        let name = img.split(".").slice(0, -1).join(".");
        return (
          <Card
            key={index}
            id={index}
            img={url}
            showModal={showModal}
            name={name}
          />
        );
      });

      ModalItems = this.state.data.map((img, index) => {
        // let url = this.state.path + img;
        let url = img1;
        let name = img.split(".").slice(0, -1).join(".");
        return (
          <Carousel.Item>
            <img className={classes.carousel__img} src={url} alt={index} />
            <Carousel.Caption>
              <p>{name}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    }
    return (
      <div className={classes.cards__container}>
        <h1>{this.state.title}</h1>
        <Modal show={this.state.ifShowModal} handleClose={() => hideModal()}>
          <div className={classes.carousel__container}>
            <Carousel>{ModalItems}</Carousel>
          </div>
        </Modal>
        {cards}
      </div>
    );
  }
}

export default SubCategory;
