import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

import pagelogo from "../images/svg/pagelogo.svg";
import Dashboard from "../images/svg/Dashboard.svg";
import Analytics from "../images/svg/Analytics.svg";
import Wallet from "../images/svg/Wallet.svg";
import Abstract_DESIGN from "../images/png/Abstract_DESIGN.png";
import Danger_Circle from "../images/svg/Danger_Circle.svg";
import Setting from "../images/svg/Setting.svg";
import Search from "../images/svg/Search.svg";
import bit_coin from "../images/svg/bit_coin.svg";
import Star from "../images/svg/Star.svg";
import Calendar from "../images/svg/Calendar.svg";
import Graph from "../images/png/Graph.png";
import red_shadow from "../images/svg/red_shadow.svg";
import green_shadow from "../images/svg/green_shadow.svg";
import Bitcoin from "../images/svg/Bitcoin.svg";
import BTC from "../images/png/BTC.png";
import Etheriam from "../images/svg/ETH-dark.svg";
import ETH from "../images/png/ETH.png";
import Eth from "../images/svg/Eth.svg";
import Notification from "../images/svg/Notification.svg";
import woman from "../images/svg/woman.svg";
import Arrow from "../images/svg/Polygon.svg";
import Arrowdown from "../images/svg/Arrow_Down_Circle.svg";
import menu from "../images/svg/menu.svg";

function Header() {
  const [navShow, setNavShow] = useState(false);
  return (
    <header className="bg-black d-flex flex-column container-fluid py-4 ps-3">
      <section className="row pb-3 pb-lg-0 align-items-center mb-4">
        <div className="col-lg-2 col-3 col-sm-2">
          <img src={pagelogo} alt="page-logo" className="d-inline-block" />
        </div>
        <div className="col-lg-10 col-9 col-sm-10">
          <div className="row flex-column-reverse flex-md-row align-items-center">
            <div className="col-md-8">
              <form className="mx_w420 w-100 input_box d-flex align-items-center">
                <img src={Search} alt="search_bar" />
                <input
                  type="text"
                  placeholder="Find Something..."
                  className="src_bar w-100"
                />
              </form>
            </div>

            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-end">
                <div className="purple_dot position-relative">
                  <a href="#">
                    <img src={Notification} alt="Notification" />
                  </a>
                </div>
                <Dropdown as={ButtonGroup}>
                  <Button>
                    <div className="d-flex align-items-center">
                      <img src={woman} alt="woman" />
                      <h3 className="ff_inter fw_500 fs_md text-white ms-lg-3 mb-0">
                        Mariana James
                      </h3>
                    </div>
                  </Button>

                  <Dropdown.Toggle id="dropdown-split-basic" />

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <div className="d-flex align-items-center">
                        <img src={woman} alt="woman" />
                        <h3 className="ff_inter fw_500 fs_md text-white ms-3 mb-0">
                          Mariana James
                        </h3>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="d-flex align-items-center">
                        <img src={woman} alt="woman" />
                        <h3 className="ff_inter fw_500 fs_md text-white ms-3 mb-0">
                          Jhonathan
                        </h3>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <div className="d-flex align-items-center">
                        <img src={woman} alt="woman" />
                        <h3 className="ff_inter fw_500 fs_md text-white ms-3 mb-0">
                          Lisa
                        </h3>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row flex-column flex-lg-row">
        <section className="col-2 mt-xl-4">
          <nav className="d-none d-xl-flex flex-column justify-content-between h-100">
            <div>
              <div>
                <div className="d-flex smll_box cursor">
                  <img src={Dashboard} alt="Dashboard-logo" />
                  <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                    Dashboard
                  </p>
                </div>
                <div className="d-flex smll_box cursor">
                  <img src={Analytics} alt="Analytics-logo" />
                  <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                    Analytics
                  </p>
                </div>
                <div className="d-flex smll_box cursor">
                  <img src={Wallet} alt="Wallet-logo" />
                  <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                    Wallet
                  </p>
                </div>
              </div>
              <div className="mt-4 nav_box d-flex justify-content-start flex-column">
                <p className="ff_inter fw-semibold fs_xl lh_sm text-white mb-3">
                  Ugrade your Account for Better Experience with
                  <span className="purple">50% OFF</span>
                </p>
                <img src={Abstract_DESIGN} alt="Abstract_DESIGN" />
                <a
                  href="#"
                  className="ff_inter fw-semibold fs_md text-black Premium_btn mt-4 mb-0 d-block text-center"
                >
                  Go premium
                </a>
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex cursor">
                <img src={Danger_Circle} alt="help_icon" />
                <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                  Help
                </p>
              </div>
              <div className="d-flex mt-4 cursor">
                <img src={Setting} alt="help_icon" />
                <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                  Settings
                </p>
              </div>
            </div>
          </nav>
          <button
            onClick={() => setNavShow(true)}
            className="d-flex d-xl-none p-2 rounded-2 border_none"
          >
            <img src={menu} alt="menu" />
          </button>
          <div className={`${navShow ? "nav-fix bg-dark" : "fix-navbar"}`}>
            <nav className="d-flex d-xl-none flex-column">
              <div>
                <div className="d-flex smll_box cursor">
                  <img src={Dashboard} alt="Dashboard-logo" />
                  <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                    Dashboard
                  </p>
                </div>
                <div className="d-flex smll_box cursor">
                  <img src={Analytics} alt="Analytics-logo" />
                  <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                    Analytics
                  </p>
                </div>
                <div className="d-flex smll_box cursor">
                  <img src={Wallet} alt="Wallet-logo" />
                  <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                    Wallet
                  </p>
                </div>
              </div>
              <div className="mt-4 nav_box d-flex justify-content-start flex-column">
                <p className="ff_inter fw-semibold fs_xl lh_sm text-white mb-3">
                  Ugrade your Account for Better Experience with
                  <span className="purple">50% OFF</span>
                </p>
                <img src={Abstract_DESIGN} alt="Abstract_DESIGN" />
                <a
                  href="#"
                  className="ff_inter fw-semibold fs_md text-black Premium_btn mt-4 mb-0 d-block text-center"
                >
                  Go premium
                </a>
              </div>
              <div className="mt-5">
                <div className="d-flex cursor">
                  <img src={Danger_Circle} alt="help_icon" />
                  <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                    Help
                  </p>
                </div>
                <div className="d-flex mt-4 cursor">
                  <img src={Setting} alt="help_icon" />
                  <p className="ff_inter fw-semibold fs_md text-white mb-0 ps-2">
                    Settings
                  </p>
                </div>
              </div>
            </nav>
            <button
              onClick={() => setNavShow(false)}
              className="butn btn-close position-absolute start-0 top-0 bg-light m-4"
            ></button>
          </div>
        </section>
        <section className="col-xl-10 col-12 ">
          <div className="row">
            <div className="col-lg-8 mt-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex ">
                  <p className="ff_inter fw_500 fs_3xl text-white mb-0">BTC</p>
                  <img src={bit_coin} alt="bitcoin" className="ms-2" />
                </div>
                <div>
                  <img src={Star} alt="star" />
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row align-items-sm-center justify-content-between position-relative">
                <div className="d-flex">
                  <h1 className="ff_inter fw-semibold fs_4xl text-white">
                    <span className="fw_500">$</span>16,590.40
                  </h1>
                  <article className="d-flex mt-3 ms-1">
                    <svg
                      className="mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#11E326"
                      class="bi bi-caret-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg>
                    <p className="ff_inter fw-semibold fs_2xl green mb-0">
                      12,5%
                    </p>
                  </article>
                </div>

                <div className="smll_line mr _cust"></div>

                <div className="d-flex flex-column flex-sm-row justify-content-around w-100">
                  <div>
                    <p className="ff_inter fw-semibold fs_md grey mb-0">
                      Market Cap
                    </p>
                    <p className="ff_inter fw-normal fs_xl off_white mb-0">
                      $318,180,846,869
                    </p>
                    <article className="d-flex">
                      <svg
                        className="mt-2"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="#11E326"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 0L9.33013 7.5H0.669873L5 0Z"
                          fill="#11E326"
                        />
                      </svg>
                      <p className="ff_inter fw-semibold fs_ml green">12,5%</p>
                    </article>
                  </div>
                  <div className="ms-lg-4">
                    <p className="ff_inter fw-semibold fs_md grey mb-0">
                      Volume 24h
                    </p>
                    <p className="ff_inter fw-normal fs_xl off_white mb-0">
                      $19,486,443,287
                    </p>
                    <article className="d-flex">
                      <svg
                        className="mt-2"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="#11E326"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 0L9.33013 7.5H0.669873L5 0Z"
                          fill="#11E326"
                        />
                      </svg>
                      <p className="ff_inter fw-semibold fs_ml green">6,5%</p>
                    </article>
                  </div>
                </div>
                <div className="line1"></div>
              </div>
              <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-between mt-4">
                <div className="smll_box2">
                  <a
                    href="#"
                    className="ff_inter fw-semibold fs_xsm text-white price_btn"
                  >
                    Price
                  </a>
                  <a
                    href="#"
                    className="ff_inter fw-semibold fs_xsm text-white price_btn ms-3"
                  >
                    Chart
                  </a>
                </div>
                <div className="smll_box2 mt-2">
                  <a
                    href="#"
                    className="ff_inter fw-semibold fs_xsm text-white price_btn"
                  >
                    1H
                  </a>
                  <a
                    href="#"
                    className="ff_inter fw-semibold fs_xsm text-white price_btn ms-3"
                  >
                    4H
                  </a>
                  <a
                    href="#"
                    className="ff_inter fw-semibold fs_xsm text-white price_btn ms-3"
                  >
                    1D
                  </a>
                  <a
                    href="#"
                    className="ff_inter fw-semibold fs_xsm text-white price_btn ms-3"
                  >
                    1M
                  </a>
                  <a href="#">
                    <img src={Calendar} alt="calender_logo" className="ms-3" />
                  </a>
                </div>
              </div>
              <div className="d-flex mt-4 position-relative row">
                <div className="col-1 d-flex flex-column justify-content-between">
                  <p className="ff_inter fw_500 fs_xsm text-white mb-0">
                    16.62K
                  </p>
                  <p className="ff_inter fw_500 fs_xsm text-white mb-0">
                    16.60K
                  </p>
                  <p className="ff_inter fw_500 fs_xsm text-white mb-0">
                    16.58K
                  </p>
                  <p className="ff_inter fw_500 fs_xsm text-white mb-0">
                    16.56K
                  </p>
                  <p className="ff_inter fw_500 fs_xsm text-white mb-0">
                    16.54K
                  </p>
                  <p className="ff_inter fw_500 fs_xsm text-white mb-0">
                    16.52K
                  </p>
                  <p className="ff_inter fw_500 fs_xsm text-white mb-0">
                    16.50K
                  </p>
                  <p className="ff_inter fw_500 fs_xsm text-white mb-0">
                    16.48K
                  </p>
                </div>
                <div className="col-11">
                  <div className="mt-4 ms-2">
                    <img src={Graph} alt="graph" className="w-100 w_xsm_75" />
                    <div className="d-flex justify-content-center ms-5 mt-3">
                      <article className="d-flex">
                        <img src={red_shadow} alt="red_dot" />
                        <p className="ff_inter fw_500 fs_sm text-white mb-0">
                          Lower Price
                        </p>
                      </article>
                      <article className="d-flex ms-3">
                        <img src={green_shadow} alt="green_dot" />
                        <p className="ff_inter fw_500 fs_sm text-white mb-0">
                          Higher Price
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="line2"></div>
              </div>
              <div className="row mt-5">
                <div className="col-xl-7 col-md-6">
                  <div className="d-flex justify-content-between">
                    <a href="#" className="ff_inter fw_500 fs_md text-white">
                      Favorite
                    </a>
                    <a href="#" className="ff_inter fw_500 fs_md grey view_all">
                      View All
                    </a>
                  </div>
                  <div>
                    <div className="d-flex justify-content-around align-items-center list_box gap-2 mt-3">
                      <p className="ff_inter fw_500 fs_lg text-white mb-0">1</p>
                      <img src={Bitcoin} alt="Bitcoin" />
                      <p className="ff_inter fw-semibold fs_lg text-white">
                        BTC
                      </p>
                      <img src={BTC} alt="BTC_graph" />
                      <article>
                        <p className="ff_inter fw_500 fs_lg text-white mb-0">
                          16.61K
                        </p>
                        <p className="ff_inter fw-normal fs_ml grey2 mb-0">
                          $318B <span className="green2">+12.5%</span>
                        </p>
                      </article>
                    </div>
                    <div className="d-flex justify-content-around align-items-center list_box gap-2 mt-3">
                      <p className="ff_inter fw_500 fs_lg text-white mb-0">2</p>
                      <img src={Etheriam} alt="Etheriam" />
                      <p className="ff_inter fw-semibold fs_lg text-white">
                        ETH
                      </p>
                      <img src={ETH} alt="ETH_graph" />
                      <article>
                        <p className="ff_inter fw_500 fs_lg text-white mb-0">
                          2.9K
                        </p>
                        <p className="ff_inter fw-normal fs_ml grey2 mb-0">
                          $148B<span className="green2">+6.5%</span>
                        </p>
                      </article>
                    </div>
                    <div className="text-center mt-1">
                      <img src={Arrowdown} alt="Arrowdown" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6 mt-5 mt-md-0">
                  <div className="d-flex flex-column justify-content-center purple_box">
                    <p className="ff_inter fw-semibold fs_2xl lh_sm text-white mb-0 mx_w200">
                      New Features That Will Make Your
                      <span className="mehndi"> Crypto</span> Life Easier
                    </p>
                    <p className="ff_inter fw-normal fs_xsm lh_xsm off_white mb-0 mt-1">
                      We’re finally ready to tell <br /> you everything about
                      this new version
                    </p>
                    <div className="d-flex align-items-center mt-4 justify-content-end">
                      <p className="ff_inter fw_500 fs_sm lite_white mb-0 me-2">
                        Lets See
                      </p>
                      <svg
                        width="24"
                        height="15"
                        viewBox="0 0 24 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.9792 7.72571L1.72916 7.72571"
                          stroke="white"
                          stroke-opacity="0.7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.4086 1.70131L22.9794 7.72531L14.4086 13.7503"
                          stroke="white"
                          stroke-opacity="0.7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4">
              <h2 className="fw-semibold fs_2xl ff_inter text-white-50 text-lg-end text-center">
                Total Ballance
              </h2>
              <p className="ff_inter fw-semibold text-white text-lg-end text-center fs_4xl">
                $ 338,086.20
              </p>
              <h2 className="fw-semibold fs_2xl ff_inter text-white-50 mt-5">
                Assets
              </h2>
              <div className="row">
                <div className="col-6 mt-2">
                  <div className="box1 d-flex flex-column flex-sm-row flex-md-column justify-content-sm-between align-sm-items-center mt-3">
                    <div>
                      <img src={bit_coin} alt="coin" />
                      <span className="ff_inter fs_md text-white ms-2">
                        BTC
                      </span>
                    </div>
                    <p className="fw_500 m-0 py-3 py-sm-0 py-md-3 ff_inter fs_md text-white">
                      $ 170,892.90
                    </p>
                    <span className="box2">
                      <img src={Arrow} alt="Arrow" />
                      <span className="fw-normal ff_inter fs-fs_xsm green ms-1">
                        6,5%
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-6 mt-2">
                  <div className="box1 d-flex flex-column flex-sm-row flex-md-column justify-content-sm-between align-sm-items-center mt-3">
                    <div>
                      <img src={Eth} alt="coin" />
                      <span className="ff_inter fs_md text-white ms-2">
                        ETH
                      </span>
                    </div>
                    <p className="fw_500 m-0 py-3 py-sm-0 py-md-3 ff_inter fs_md text-white">
                      $ 139,043,21
                    </p>
                    <span className="box2">
                      <img src={Arrow} alt="Arrow" />
                      <span className="fw-normal ff_inter fs-fs_xsm green ms-1">
                        2,5%
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="box3 mt-4">
                <h3 className="ff_inter fw-semibold text-white text-center fs_2xl mb-3">
                  Convert
                </h3>
                <div className="box2 d-flex align-items-center justify-content-between p-2 gap-1">
                  <h4 className="ff_inter fw_500 fs_xl text-white mb-0">
                    89 ETH ETH
                  </h4>
                  <Dropdown as={ButtonGroup}>
                    <Button className="bg_purple blk_clr fw_500 ff_inter fs_xl fw_500">
                      ETH
                    </Button>

                    <Dropdown.Toggle
                      id="dropdown-split-basic"
                      className="bg_purple"
                    />

                    <Dropdown.Menu className="dropdown_purple_bg">
                      <Dropdown.Item
                        href="#/action-1"
                        className="blk_clr fw_500 ff_inter fs_xl fw_500"
                      >
                        ETH
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        className="blk_clr fw_500 ff_inter fs_xl fw_500"
                      >
                        ETH
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        className="blk_clr fw_500 ff_inter fs_xl fw_500"
                      >
                        ETH
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="box2 d-flex align-items-center justify-content-between p-2 gap-1 mt-2">
                  <h4 className="ff_inter fw_500 fs_xl text-white mb-0">
                    $120.000
                  </h4>
                  <Dropdown as={ButtonGroup}>
                    <Button className="bg_green blk_clr fw_500 ff_inter fs_xl fw_500">
                      USD
                    </Button>

                    <Dropdown.Toggle
                      id="dropdown-split-basic"
                      className="bg_green blk_clr"
                    />

                    <Dropdown.Menu className="dropdown_green_bg">
                      <Dropdown.Item
                        href="#/action-1"
                        className="blk_clr fw_500 ff_inter fs_xl fw_500"
                      >
                        USD
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        className="blk_clr fw_500 ff_inter fs_xl fw_500"
                      >
                        USD
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        className="blk_clr fw_500 ff_inter fs_xl fw_500"
                      >
                        USD
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <h3 className="ff_inter fw_500 fs_md text-white opacity-75 mt-2 mb-3">
                  1 ETH = 2500 USD
                </h3>
                <a
                  href="#"
                  className="ff_inter fw-semibold fs_md text-black Premium_btn mt-4 mb-0 d-block text-center"
                >
                  Convert
                </a>
              </div>
              <div className="mt-4">
                <h2 className="fw-semibold fs_2xl ff_inter text-white-50">
                  Recent Transtaction
                </h2>
                <div className="d-flex justify-content-between">
                  <span className="ff_pop fw_500 fs_md text-white">
                    Ethereum
                  </span>
                  <span className="ff_pop fw_500 fs_md text-white mx-4">
                    12,5 ETH
                  </span>
                  <span className="ff_pop fw_500 fs_md text-white dot">
                    On Progress
                  </span>
                  <span className="ms-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#ffffff"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="ff_pop fw_500 fs_md text-white">
                    Ethereum
                  </span>
                  <span className="ff_pop fw_500 fs_md text-white mx-4">
                    8 ETH
                  </span>
                  <span className="ff_pop fw_500 fs_md text-white dot2 ms-3">
                    Compeleted
                  </span>
                  <span className="ms-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#ffffff"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="ff_pop fw_500 fs_md text_bg me-3">
                    Bitcoin
                  </span>
                  <span className="ff_pop fw_500 fs_md text_bg mx-4">
                    0,5 BTC
                  </span>
                  <span className="ff_pop fw_500 fs_md text_bg dot2 ms-1">
                    Compeleted
                  </span>
                  <span className="ms-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#ffffff"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </div>
                <a
                  href="#"
                  className="ff_inter fw-semibold fs_md text-black Premium_btn mt-4 mb-0 d-block text-center"
                >
                  View All History{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </header>
  );
}

export default Header;
