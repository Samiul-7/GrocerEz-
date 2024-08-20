import foodModel from "../models/foodModel.js";

// Add food item
const addFood = async (req, res) => {
  try {
    // Extracting data from the request body
    const { name, description, price, category, image } = req.body;

    // Create a new food item using the provided data
    const food = new foodModel({
      name,
      description,
      price,
      category,
      image // This is now a URL provided directly in the request body
    });

    // Save the new food item to the database
    await food.save();

    // Respond with a success message
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    // Respond with an error message if something goes wrong
    res.json({ success: false, message: "Error" });
  }
};

// List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    // Find the food item by ID
    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res.json({ success: false, message: "Food not found" });
    }

    // Remove the food item from the database
    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
