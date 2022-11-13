import { BellIcon, EmailIcon, Search2Icon } from "@chakra-ui/icons";
import { Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthcontext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useUserAuth();
  const [auth, setAuth] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    user ? setAuth(true) : setAuth(false);
  }, [user]);

  console.log("auth", auth);
  console.log("1", user);

  function routeLogin() {
    Navigate("/login");
  }

  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/login");
    } catch (e) {
      console.log(e.message);
    }
  };
  //   console.log(user.email);
  return (
    <>
      <div id="nav1">
        <a href="#">
          <h3>
            Get FREE shipping on all orders when you join Beauty Insider.
            Exclusions/terms apply.†{" "}
            <span className="hover-item-li"> LEARN MORE▸</span>
            <i class="fa-solid fa-caret-right"></i>
          </h3>
        </a>
      </div>
      <div id="nav2">
        <div>
          <p>
            <Link to="/">SEPHORA</Link>
          </p>
          <input type="text" name="" id="" placeholder="🔍 Search" />
          <div className="dropdown">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3443/3443338.png"
                alt=""
              />
            </span>
            <p>
              Stores & Services <br />
              <span className="nav2-sub-section">Pick a Store</span>{" "}
            </p>
            <div className="dropdown-content" style={{ marginTop: "520px" }}>
              <div className="dropdown_container1">
                <button className="dropdown_container1_btn">
                  Choose Your Store
                </button>
                <div
                  style={{
                    display: "flex",
                    gap: "50px",
                    margin: "20px 0 10px 0",
                  }}
                >
                  <Search2Icon />
                  <Heading as="h5" size="sm">
                    Find a Sephora
                  </Heading>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <Heading as="h5" size="sm">
                    Happening at Sephora
                  </Heading>
                  <Link to="#" color="blue.500">
                    {" "}
                    View all
                  </Link>
                </div>
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      src="https://www.sephora.com/contentimages/meganav/icons/happening_services.jpg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Services</h4>
                    <p>Exciting launches, parties, and more!</p>
                  </div>
                </div>
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      src="https://www.sephora.com/contentimages/meganav/icons/happening_events_2.jpg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Store Events</h4>
                    <p>Discover topics tailored to your beauty interests</p>
                  </div>
                </div>
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      src="https://www.sephora.com/contentimages/meganav/icons/happening_new.jpg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>What's New in Store</h4>
                    <p>Explore what's hot in your store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1581/1581723.png"
                alt=""
              />
            </span>
            <p>Community</p>
            <div className="dropdown-content">
              <div className="dropdown_container1">
                <div className="dropdown_container1_box">
                  <div className="dropdown_container1_sub_box1">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                        alt="img"
                      />
                    </div>
                    <div>
                      <h4>Community Profile</h4>
                      <p>Join now to get started</p>
                    </div>
                  </div>
                  <div>
                    <BellIcon w={6} h={6} />
                    <EmailIcon w={6} h={6} />
                  </div>
                </div>
                <button className="dropdown_container1_btn">Join Now</button>
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      src="https://www.sephora.com/contentimages/meganav/icons/community_home.jpg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Community Home</h4>
                    <p>
                      Ask questions, join challenges, and get recommendations
                      from people like you
                    </p>
                  </div>
                </div>
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      src="https://www.sephora.com/contentimages/meganav/icons/community_groups.jpg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Groups</h4>
                    <p>Discover topics tailored to your beauty interests</p>
                  </div>
                </div>
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      src="https://www.sephora.com/contentimages/meganav/icons/community_gallery.jpg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Gallery</h4>
                    <p>
                      Add your photos and get inspired by fellow beauty lovers
                      Featured Groups
                    </p>
                  </div>
                </div>
              </div>
              <div className="dropdown_container2">
                <div className="dropdown_sub_container">
                  <h1>Featured Groups</h1>
                  <ul>
                    <li>Trending at Sephora</li>
                    <li>Trending at Sephora</li>
                    <li>Trending at Sephora</li>
                  </ul>
                </div>
                <hr />
                <div className="dropdown_sub_container">
                  <h1>Featured Threads</h1>
                  <ul>
                    <li>Trending at Sephora</li>
                    <li>Trending at Sephora</li>
                    <li>Trending at Sephora</li>
                  </ul>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/94/94428.png"
                alt=""
              />
            </span>
            {/*          
              <p id="btn">
              <Button>{user.email}</Button>
            </p> */}
            <p id="btn">
              {!auth ? (
                <Button variant="ghost" onClick={routeLogin}>
                  Sign In
                </Button>
              ) : (
                <Button variant="ghost" onClick={handleLogout}>
                  Sign Out
                </Button>
              )}
            </p>

            <div className="dropdown-content" style={{ marginTop: "510px" }}>
              <div className="dropdown_container1">
                <div className="dropdown_container1_box">
                  <div
                    className="dropdown_container1_sub_box1"
                    style={{ width: "100%" }}
                  >
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                        alt="img"
                      />
                    </div>
                    <div>
                      <h4>Hello {auth ? user?.email : "Guest"} 🎉</h4>
                    </div>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/beauty-traits.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Beauty Preferences</h4>
                    <p>Complete to see your personalized recommendations</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>INSIDER • 0 Points</h4>
                    <p>See your loyalty program savings, benefits, rewards</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/subscription.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Buy It Again</h4>
                    <p>Reorder from in-store and online purchases</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/track.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>
                      <Link to="/myorders">Orders</Link>
                    </h4>
                    <p>View & track online or pickup orders</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/auto-replenish.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Auto-Replenish</h4>
                    <p>View and manage your subscriptions</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/heart.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>
                      <Link to="/mywishlists">Loves</Link>
                    </h4>
                    <p>View saved products</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/account.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>
                      <Link to="/myaccount">Account Settings</Link>
                    </h4>
                    <p>Payment, contact info, addresses, password</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/reward-bazaar.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Rewards Bazaar</h4>
                    <p>Redeem items, samples, more</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Sephora Credit Card Program</h4>
                    <p>Apply now</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/productimages/sku/s2610293-main-zoom.jpg?imwidth=50"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Same-Day Unlimited</h4>
                    <p>Subscribe today</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/flash.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Flash</h4>
                    <p>Unlimited 1-2 Day Shipping Subscription</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/reservations.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Reservations</h4>
                    <p>Manage your services, classes, events</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                <div className="dropdown_container1_sub_box2">
                  <div>
                    <img
                      id="signin_dropdown_img"
                      src="https://www.sephora.com/img/ufe/icons/recommendations.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Beauty Advisor Recommendations</h4>
                    <p>Recommendations from your store visits</p>
                  </div>
                </div>
                <hr style={{ margin: "5px 0" }} />
                {/* <button
                  onClick={handleLogout}
                  className="dropdown_container1_btn"
                >
                  Sign Out
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7174/7174950.png"
            alt=""
            className="search"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/7777/7777990.png"
            alt=""
            className="search"
          />
          <Link to="/basket">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
              alt=""
              className="search"
            />
          </Link>
        </div>
      </div>
      <div id="nav5">
        <ul>
          <li>
            <a href="#">New</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    All New
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Just Dropped
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    New Makeup
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    New Skincare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    New Haircare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    New Fragrance
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    New Bath & Body
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    New Tools & Brushes
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    The Next Big Thing
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Bestsellers
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Quizzes & Buying Guides
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Clean Beauty Guide
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Clean+ Planet Positive Beauty Guide
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src="https://www.sephora.com/contentimages/meganav/large/2022-june-body-site-desktop-global-navigation-button-us.jpg?imwidth=294"
                    alt=""
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Brands</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Brands A-Z
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    SEPHORA COLLECTION
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    New Brands
                  </a>
                </li>
                <li>
                  <a href="">The Outset</a>
                </li>
                <li>
                  <a href="">HAUS LABS BY LADY GAGA</a>
                </li>
                <li>
                  <a href="">Abbott NYC</a>
                </li>
                <li>
                  <a href="">GXVE Beauty</a>
                </li>
                <li>
                  <a href="">Kate Mcleod</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Only At Sephora
                  </a>
                </li>
                <li>
                  <a href="">Paula's Choice</a>
                </li>
                <li>
                  <a href="">InnBeauty Project</a>
                </li>
                <li>
                  <a href="">The 7 Virtues</a>
                </li>
                <li>
                  <a href="">MAKEUP BY MARIO</a>
                </li>
                <li>
                  <a href="">Rare Beauty By Selena Gomez</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Affordable Brands
                  </a>
                </li>
                <li>
                  <a href="">SEPHORA COLLECTION</a>
                </li>
                <li>
                  <a href="">The Ordinary</a>
                </li>
                <li>
                  <a href="">The Inkey List</a>
                </li>
                <li>
                  <a href="">Verb</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Black-Owned Brands
                  </a>
                </li>
                <li>
                  <a href="">Shani Darden Skin Care</a>
                </li>
                <li>
                  <a href="">Adowa Beauty</a>
                </li>
                <li>
                  <a href="">PATTERN By Tracee Ellis Ross</a>
                </li>
                <li>
                  <a href="">Briogeo</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Clean At Sephora
                  </a>
                </li>
                <li>
                  <a href="">ILIA</a>
                </li>
                <li>
                  <a href="">Olaplex</a>
                </li>
                <li>
                  <a href="">Tatcha</a>
                </li>
                <li>
                  <a href="">Ellis Brooklyn</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/products">
              <a href="">Makeup</a>
            </Link>
            <div>
              <ul>
                <li>
                  <Link to="/products">
                    <a href="" className="hover-item-li">
                      All Makeup
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="" className="hover-item-li">
                      Face
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">Foundation</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">BB & CC Creams</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">Tinted Moisturizer</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">Concealer</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">Face Printer</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">Setting Spray & Powder</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">Highlighter</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">Contour</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">Color Correct</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/face">
                    <a href="">Face Sets</a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/products/eye">
                    <a href="" className="hover-item-li">
                      Eye
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">Eye Palettes</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">Mascara</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">Eyeliner</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">Eyebrow</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">False EyeLashes</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">Face Printer</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">Eye Shadow</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">Eyelash Serums</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">Eye Primer</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/eye">
                    <a href="">Eye Sets</a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/products/lip">
                    <a href="" className="hover-item-li">
                      Lip
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/lip">
                    <a href="">Lipstick</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/lip">
                    <a href="">Lip Gloss</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/lip">
                    <a href="">Lip Balm & Treatment</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/lip">
                    <a href="">Liquid Lipstick</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/lip">
                    <a href="">Lip Stain</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/lip">
                    <a href="">Lip Liner</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/lip">
                    <a href="">Lip Plumper</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/lip">
                    <a href="">Lip Sets</a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/products/cheek">
                    <a href="" className="hover-item-li">
                      Cheek
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/cheek">
                    <a href="">Blush</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/cheek">
                    <a href="">Bronzer</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/cheek">
                    <a href="">Cheek Palettes</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/cheek">
                    <a href="" className="hover-item-li">
                      Value & Gift Sets
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/cheek">
                    <a href="" className="hover-item-li">
                      Makeup Palettes
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/cheek">
                    <a href="" className="hover-item-li">
                      Brushes and Applicators
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/products/cheek">
                    <a href="" className="hover-item-li">
                      Accessories
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Nail
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    New
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    BestSellers
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Clean Makeup
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Vegan Makeup
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Mini Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Value Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Sephora Collection
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Help Me Choose
                  </a>
                </li>
                <li>
                  <a href="">Foundation Quiz</a>
                </li>
                <li>
                  <a href="">Lip Quiz</a>
                </li>
                <li>
                  <a href="">Brow QUiz</a>
                </li>
                <li>
                  <a href="">Complexion Routine Builder</a>
                </li>
                <li>
                  <a href="">Guide to Foundation</a>
                </li>
                <li>
                  <a href="">Clean Makeup Guide</a>
                </li>
                <li>
                  <a href="">No Makeup Makeup</a>
                </li>
                <li>
                  <a href="">Allure Best On Beauty Makeup</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Skincare</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    All Skincare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Moisturizers
                  </a>
                </li>
                <li>
                  <a href="">Night Creams</a>
                </li>
                <li>
                  <a href="">Face Oils</a>
                </li>
                <li>
                  <a href="">Mists & Essences</a>
                </li>
                <li>
                  <a href="">BB & CC Creams</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Cleansers
                  </a>
                </li>
                <li>
                  <a href="">Face Wash & Cleansers</a>
                </li>
                <li>
                  <a href="">Exfoliaters</a>
                </li>
                <li>
                  <a href="">Makeup Removers</a>
                </li>
                <li>
                  <a href="">Face Wipes</a>
                </li>
                <li>
                  <a href="">Toners</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Treatments
                  </a>
                </li>
                <li>
                  <a href="">Face Serums</a>
                </li>
                <li>
                  <a href="">Blemish & Acne Treatments</a>
                </li>
                <li>
                  <a href="">Facial Peels</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Masks
                  </a>
                </li>
                <li>
                  <a href="">Face Masks</a>
                </li>
                <li>
                  <a href="">Sheet Masks</a>
                </li>
                <li>
                  <a href="">Eye Masks</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Eye Care
                  </a>
                </li>
                <li>
                  <a href="">Eye Creams & Treatments</a>
                </li>
                <li>
                  <a href="">Eye Masks</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Lip Balms & Treatments
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    SunScreen
                  </a>
                </li>
                <li>
                  <a href="">Face Sunscreen</a>
                </li>
                <li>
                  <a href="">Body Sunscreen</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    High Tech Tools
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Wellness
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Shop By Concern
                  </a>
                </li>
                <li>
                  <a href="">Acne & Blemishes</a>
                </li>
                <li>
                  <a href="">Anti Aging</a>
                </li>
                <li>
                  <a href="">Dark Spots</a>
                </li>
                <li>
                  <a href="">Pores</a>
                </li>
                <li>
                  <a href="">Dryness</a>
                </li>
                <li>
                  <a href="">Fine Line & Wrinkles</a>
                </li>
                <li>
                  <a href="">Dullness</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    New
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Vegan Skincare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Value And Giftsets
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Mini Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    value Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Sephora Collection
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Help Me Choose
                  </a>
                </li>
                <li>
                  <a href="">Skin Care Quiz</a>
                </li>
                <li>
                  <a href="">Skin Routine Quiz</a>
                </li>
                <li>
                  <a href="">Clinnical Skincare</a>
                </li>
                <li>
                  <a href="">Skincare Ingredients</a>
                </li>
                <li>
                  <a href="">Best Skincare under $35</a>
                </li>
                <li>
                  <a href="">Clean Skincare Guide</a>
                </li>
                <li>
                  <a href="">Skincare By Age</a>
                </li>
                <li>
                  <a href="">SkinCare for Your Skin Type</a>
                </li>
                <li>
                  <a href="">Allure Best Of Beauty Skincare</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Hair</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    All Hair
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Shampoo & Conditioners
                  </a>
                </li>
                <li>
                  <a href="">Shampoo</a>
                </li>
                <li>
                  <a href="">Conditioners</a>
                </li>
                <li>
                  <a href="">Scalp Scrub</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Treatments
                  </a>
                </li>
                <li>
                  <a href="">Hair Masks</a>
                </li>
                <li>
                  <a href="">Leave-In Conditioners</a>
                </li>
                <li>
                  <a href="">Hair Oils</a>
                </li>
                <li>
                  <a href="">Hair Serums</a>
                </li>
                <li>
                  <a href="">Scalp Treatments</a>
                </li>
                <li>
                  <a href="">Hair Supplements</a>
                </li>
                <li>
                  <a href="">Hair Thinning & Hair Loss</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Styling
                  </a>
                </li>
                <li>
                  <a href="">Styling Creams</a>
                </li>
                <li>
                  <a href="">Dry Shampoo</a>
                </li>
                <li>
                  <a href="">Hair Primers</a>
                </li>
                <li>
                  <a href="">Hair Spray</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Curly,Coily,Textured Haircare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Hair Dye & Root Touchups
                  </a>
                </li>
                <li>
                  <a href="">Hair Toners</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Value & GiftSets
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="">Hair Dryers</a>
                </li>
                <li>
                  <a href="">Hair Straightners & Fist Irons</a>
                </li>
                <li>
                  <a href="">Curling Irons</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Brushes & Combs
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Accessories
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Shop BY Concern
                  </a>
                </li>
                <li>
                  <a href="">Damaged Hair</a>
                </li>
                <li>
                  <a href="">Dryness</a>
                </li>
                <li>
                  <a href="">Frizz</a>
                </li>
                <li>
                  <a href="">Scalp Care</a>
                </li>
                <li>
                  <a href="">BB & CC Creams</a>
                </li>
                <li>
                  <a href="">Volume</a>
                </li>
                <li>
                  <a href="">Color Care</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    New
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Clean Haircare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Vegan Haircare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Mini Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Value Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Sephora Collection
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Luxury Hair
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Help Me Choose
                  </a>
                </li>
                <li>
                  <a href="">Hair Quiz</a>
                </li>
                <li>
                  <a href="">Clean Hair Care Guide</a>
                </li>
                <li>
                  <a href="">Curly,Coily,Textured Haircare Guide</a>
                </li>
                <li>
                  <a href="">Healty Hair Care Guide</a>
                </li>
                <li>
                  <a href="">Allure Best Of Beauty Hair</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Fragrance</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    All Fragrance
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Women
                  </a>
                </li>
                <li>
                  <a href="">Perfume</a>
                </li>
                <li>
                  <a href="">Perfume Oils</a>
                </li>
                <li>
                  <a href="">RollerBalls & Travel Size</a>
                </li>
                <li>
                  <a href="">Body Mist & Hair Mist</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Men
                  </a>
                </li>
                <li>
                  <a href="">Cologne</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Value & Gift Sets
                  </a>
                </li>
                <li>
                  <a href="">Perfume Gift Sets</a>
                </li>
                <li>
                  <a href="">Cologne Gift Sets</a>
                </li>
                <li>
                  <a href="">Home Gift Sets</a>
                </li>
                <li>
                  <a href="">Sephora Favorites</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Candles & Home Scents
                  </a>
                </li>
                <li>
                  <a href="">Cnadles</a>
                </li>
                <li>
                  <a href="">Diffusers</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Shop By Fragrance Family
                  </a>
                </li>
                <li>
                  <a href="">Floral</a>
                </li>
                <li>
                  <a href="">Fresh</a>
                </li>
                <li>
                  <a href="">Warm & Spicy</a>
                </li>
                <li>
                  <a href="">Earthly & Woody</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    New
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Bestsellers
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Clean Fragrance
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Vegan Fragrance
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Mini Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Value Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Luxury Fragrance
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Help Me Choose
                  </a>
                </li>
                <li>
                  <a href="">Clean Fragrance Guide</a>
                </li>
                <li>
                  <a href="">Fragrance Quiz</a>
                </li>
                <li>
                  <a href="">Fragrance Notes Guide</a>
                </li>
                <li>
                  <a href="">Best Affordable Fragrance</a>
                </li>
                <li>
                  <a href="">Niche Fragrance</a>
                </li>
                <li>
                  <a href="">Next Big Thing</a>
                </li>
                <li>
                  <a href="">Allure Best of Beauty Fragrance</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Tools & Brushes</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    All Tools & Brushes
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Sephora Collection
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Brushes & Applications
                  </a>
                </li>
                <li>
                  <a href="">Brush Sets</a>
                </li>
                <li>
                  <a href="">Face Brushes</a>
                </li>
                <li>
                  <a href="">Eye Brushes</a>
                </li>
                <li>
                  <a href="">Lip Brushes</a>
                </li>
                <li>
                  <a href="">Sponges & Applicators</a>
                </li>
                <li>
                  <a href="">Brush Cleaners</a>
                </li>
                <li>
                  <a href="">Facial Cleansing Brushes</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Hair Tools
                  </a>
                </li>
                <li>
                  <a href="">Hair Dryers</a>
                </li>
                <li>
                  <a href="">Straightners & Flat Irons</a>
                </li>
                <li>
                  <a href="">Brushes & Combs</a>
                </li>
                <li>
                  <a href="">Accessories</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Beauty Tools
                  </a>
                </li>
                <li>
                  <a href="">Anti-Aging</a>
                </li>
                <li>
                  <a href="">Teeth Whitening</a>
                </li>
                <li>
                  <a href="">Hair Removal</a>
                </li>
                <li>
                  <a href="">Tweezers & Eyebrows</a>
                </li>
                <li>
                  <a href="">Manicure & Pedicure</a>
                </li>
                <li>
                  <a href="">Eyelash Curlers</a>
                </li>
                <li>
                  <a href="">Sharpners</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Vibrators & Devices
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    MakeUp & travle Cases
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Value & Gift Sets
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    New
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    BestSellers
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Allure Best of Beauty Tools & Brushes
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-pro-brushes-site-desktop-global-navigation-button.jpg?imwidth=294"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Bath & Body</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    All Bath & Body
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Bath & Body Shower
                  </a>
                </li>
                <li>
                  <a href="">Body Wash & Shower Gel</a>
                </li>
                <li>
                  <a href="">Scrub & Exfoliants</a>
                </li>
                <li>
                  <a href="">Bath Soaks & Bubble Bath</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Body Moisturizers
                  </a>
                </li>
                <li>
                  <a href="">Body Lotions & Body Oils</a>
                </li>
                <li>
                  <a href="">Hand Cream And Foot Creams</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Body Care
                  </a>
                </li>
                <li>
                  <a href="">Intimate Care</a>
                </li>
                <li>
                  <a href="">Hand Sanitizers</a>
                </li>
                <li>
                  <a href="">Cellulite & Stretch Masks</a>
                </li>
                <li>
                  <a href="">Deodorant & Antiperspirent</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Value & Gift Sets
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Shop By Concern
                  </a>
                </li>
                <li>
                  <a href="">Stretch Marks & Firming</a>
                </li>
                <li>
                  <a href="">Hydration</a>
                </li>
                <li>
                  <a href="">Smooth Texture</a>
                </li>
                <li>
                  <a href="">Even Skin Tone and COlor Correction</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Candle and Home Scents
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Sunscreens
                  </a>
                </li>
                <li>
                  <a href="">Face Sunscreen</a>
                </li>
                <li>
                  <a href="">Body Sunscreen</a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Self Tanners
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Beauty Supplements
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    New
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    BestSellers
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Mini Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Value Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Sephora Collection
                  </a>
                </li>
                <li>
                  <a href="">Allure Best Of Beauty Bath & Body</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2020-9-14-site-desktop-globalclassName='hover-item-li'-navigation-button-banner-sol-de-janeiro.jpg?imwidth=294"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Mini Size</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    All Mini Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Makeup
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Skincare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Hair
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Fragrance
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Bath and Body
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Value & Gift Sets
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    $15 and Under
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    $25 and Under
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Sephora Favorites
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-site-global-navigation-button-evergreen-crossworld-minis.jpg?imwidth=294"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">🎆Gifts</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    All Gifts
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Gift Finder
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Value and Gift Sets
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    By Price
                  </a>
                </li>
                <li>
                  <a href="">$10 and Under</a>
                </li>
                <li>
                  <a href="">$15 and Under</a>
                </li>
                <li>
                  <a href="">$25 and Under</a>
                </li>
                <li>
                  <a href="">$50 and Under</a>
                </li>
                <li>
                  <a href="">$75 and Under</a>
                </li>
                <li>
                  <a href="">$100 and Under</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    By Category
                  </a>
                </li>
                <li>
                  <a href="">Makeup</a>
                </li>
                <li>
                  <a href="">Skincare</a>
                </li>
                <li>
                  <a href="">Hair</a>
                </li>
                <li>
                  <a href="">Fragrance</a>
                </li>
                <li>
                  <a href="">Candles and Home Scents</a>
                </li>
                <li>
                  <a href="">Tools</a>
                </li>
                <li>
                  <a href="">Brush Sets and Accessories</a>
                </li>
                <li>
                  <a href="">Bath and Body</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    By Recipient
                  </a>
                </li>
                <li>
                  <a href="">For Her</a>
                </li>
                <li>
                  <a href="">For Him</a>
                </li>
                <li>
                  <a href="">For Teenagers</a>
                </li>
                <li>
                  <a href="">For Them</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Top Rated Gifts
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Mini Size
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Only At Sephora
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Luxury
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Gift Finder
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-gift-card.jpg?imwidth=294"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Beauty Under $20</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Makeup Under $20
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Skincare Under $20
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Hair Under $20
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Fragrance Under $20
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Tools & Brushes Under $20
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Bath and Body Under $20
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Sephora Collection Under $20
                  </a>
                </li>
                <li>
                  <a href="">Makeup</a>
                </li>
                <li>
                  <a href="">Skincare</a>
                </li>
                <li>
                  <a href="">Hair</a>
                </li>
                <li>
                  <a href="">Candles</a>
                </li>
                <li>
                  <a href="">Tools and Brushes</a>
                </li>
                <li>
                  <a href="">Bath And Body</a>
                </li>
                <li>
                  <a href="">Value & Gift Sets</a>
                </li>
                <li>
                  <a href="">Clean Beauty</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2022-04-29-sc-instabrow-site-desktop-global-navigation-button-beauty-under-20-us.jpg?imwidth=294"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Sale & Offers</a>
            <div>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    All Sale
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Makeup
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Skincare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Haircare
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Fragrance
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Tools and Brushes
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Bath And Body
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    Mini Size
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="" className="hover-item-li">
                    Beauty Offers
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-beauty-offers-abundance.jpg?imwidth=294"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div id="nav1" style={{ backgroundColor: "#eeeeee" }}>
        <a href="" className="hover-item-li">
          <h3 style={{ backgroundColor: "#eeeeee" }}>
            Shipping is delayed due to high demand. Need it sooner? Buy Online,
            Pick Up In Store or get Same-Day Delivery▸
            <i className="fa-solid fa-caret-right"></i>
          </h3>
        </a>
      </div>
    </>
  );
};

export default Navbar;
