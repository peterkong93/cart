import React from "react";
import HeaderBar from "./Nav";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const stockData = [
  {
    success: true,
    data: [
      {
        image:
          "https://static.offgamers.com/images/products/202868_1652079588.jpg",
        name: "TTRacing x CARNAGE Edition - XL Memory Foam Lumbar Pillow with Cooltec Gel",
        price: 0.88,
        currency: "USD",
        final_price: 0.84,
      },
      {
        image:
          "https://static.offgamers.com/images/products/175101_1525764832.jpg?v=1583132702",
        name: "iTunes USD200 Gift Card (US) Discount Promo",
        price: 4.98,
        currency: "USD",
        final_price: 4.73,
      },
      {
        image:
          "https://static.offgamers.com/images/products/204981_1657764230.jpg?v=1658215177",
        name: "Endling - Extinction is Forever STEAM KEY [GLOBAL]",
        price: 8.32,
        currency: "USD",
        final_price: 7.9,
      },
      {
        image:
          "https://static.offgamers.com/images/products/199272_1656644727.jpg?v=1656644727",
        name: "ARMORIG MAMBA Series - Black",
        price: 7.32,
        currency: "USD",
        final_price: 6.95,
      },
      {
        image:
          "https://static.offgamers.com/images/products/promo_156918_1543376877.jpg?v=1535362138",
        name: "gametower 100 Points (Global)",
        price: 7,
        currency: "USD",
        final_price: 6.65,
      },
      {
        image:
          "https://static.offgamers.com/images/products/184444_1595771366.jpg?v=1605224401",
        name: "Google Play AED500 Gift Cards (AE) Discount Promo",
        price: 6.71,
        currency: "USD",
        final_price: 6.37,
      },
      {
        image:
          "https://static.offgamers.com/images/products/204775_1656916975.jpg?v=1656933415",
        name: "PlayStationTMStore USD110 Gift Cards (US) Discount Promo",
        price: 9.48,
        currency: "USD",
        final_price: 9.01,
      },
      {
        image:
          "https://static.offgamers.com/images/products/171043_1524817409.jpg?v=1617365714",
        name: "USD25 Karma Koin Card (Global) Discount Promo",
        price: 6.1,
        currency: "USD",
        final_price: 5.8,
      },
    ],
  },
];

const Product = ({
  searchvalue,
  setCart,
  setSearchValue,
  cart,
  show,
  setShow,
}) => {
  const [found, setFound] = React.useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (searchvalue != "") {
    // setFound(
    //   stockData[0].data.filter((obj) => {
    //     return obj.name.toLowerCase().startsWith(searchvalue.toLowerCase());
    //   })
    // );
  }

  const saveToCart = (data) => {
    setCart([...cart, data]);
  };

  function removecart(key) {
    const index = cart.findIndex((prod) => prod.name === key.name);
    if (index > -1) {
      setCart((prevState) => prevState.splice(index, 1));
    }
  }
  return (
    <>
      <div>
        <HeaderBar
          searchvalue={searchvalue}
          setSearchValue={setSearchValue}
          setShow={setShow}
        />
        <div className="container">
          {searchvalue != "" ? (
            <div className="row">
              {found[0].map((data, key) => {
                return (
                  <div className="col-lg-4 col-6 pt-4">
                    <div className="card">
                      <div
                        className="card-body"
                        style={{
                          justifyContent: "center",
                          padding: "10px",
                          textAlign: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <img
                          style={{
                            padding: "20px",
                            width: "100%",
                            height: "100%",
                          }}
                          src={data.image}
                        ></img>
                        <h6>{data.name}</h6>
                        <h5 style={{ color: "green" }}>{data.final_price}</h5>
                        <h6 style={{ textDecoration: "line-through" }}>
                          {data.price}
                        </h6>
                      </div>
                      <div className="card-footer bg-transparent pt-4">
                        <div className="row">
                          <div className="d-flex justify-content-center">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="row">
              {stockData[0].data.map((data, key) => {
                return (
                  <div className="col-lg-4 col-6 pt-4">
                    <div className="card">
                      <div
                        className="card-body"
                        style={{
                          justifyContent: "center",
                          padding: "10px",
                          textAlign: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <img
                          style={{
                            padding: "20px",
                            width: "100%",
                            height: "100%",
                          }}
                          src={data.image}
                        ></img>
                        <h6>{data.name}</h6>
                        <h5 style={{ color: "green" }}>{data.final_price}</h5>
                        <h6 style={{ textDecoration: "line-through" }}>
                          {data.price}
                        </h6>
                      </div>
                      <div className="card-footer bg-transparent pt-4">
                        <div className="row">
                          <div className="d-flex justify-content-center">
                            <button
                              onClick={() => saveToCart(data)}
                              className="btn btn-primary"
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <div className="row">
                  {cart.map((data, key) => {
                    return (
                      <div className="col-12">
                        <div className="card">
                          <div
                            className="card-body"
                            style={{
                              padding: "10px",
                              textAlign: "center",
                              width: "100%",
                              height: "100%",
                            }}
                          >
                            <img
                              style={{
                                padding: "20px",
                                width: "100%",
                                height: "100%",
                              }}
                              src={data.image}
                            ></img>
                            <h6>{data.name}</h6>
                            <h5 style={{ color: "green" }}>
                              {data.final_price}
                            </h5>
                          </div>
                          <div className="card-footer bg-transparent pt-4">
                            <div className="row">
                              <div className="d-flex justify-content-center">
                                <button
                                  onClick={() => removecart(data)}
                                  className="btn btn-primary"
                                >
                                  Remove from cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Check Out
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Product;
