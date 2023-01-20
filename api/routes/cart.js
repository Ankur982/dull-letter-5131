const jwt = require("jsonwebtoken");
const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const authHeader = req.headers.token;
  const data = req.body;

  try {
    let userData = jwt.verify(authHeader, process.env.JWT_SEC);
    let productCart = {
      userId: userData.id,
      products: [
        {
          productId: data.products[0].productId,
          quantity: data.products[0].quantity,
        },
      ],
    };
    const newCart = new Cart(productCart);
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete all 
router.post("/", verifyToken, async (req, res) => {
  const authHeader = req.headers.token;


  try {
    let userData = jwt.verify(authHeader, process.env.JWT_SEC);
    let productCart = {
      userId: userData.id,
      products: [
        {
          productId: data.products[0].productId,
          quantity: data.products[0].quantity,
        },
      ],
    };
    const newCart = new Cart(productCart);
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});


//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});




//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
