const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Fruit Cocktails",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Strawberry Banana Smoothie",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Mango Lassie",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lemon Mint Juice",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const mockTailLists = [
  {
    name: "Avocado Shake",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Tropical Smoothie",
    country: "US",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Berry Mix Juice",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Date Milkshake",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Lemonade Mint",
    image: "/images/drink1.png",
    title: "Simple lemon and mint juice",
    description:
      "This refreshing lemon and mint juice is a vibrant, zesty drink made with freshly squeezed lemon juice and aromatic mint leaves. Served in an elegant martini glass, it offers a perfect balance of tartness and cool herbal notes, making it an ideal beverage for hot summer days or as a palate cleanser. Its bright yellow hue and garnish of lemon slice and mint sprig make it visually appealing as well as revitalizing.",
  },
  {
    id: 2,
    name: "Strawberry Juice",
    image: "/images/drink2.png",
    title: "A Fresh strawberry juice",
    description:
      "Fresh strawberry juice is a naturally sweet and vibrant beverage made from ripe, juicy strawberries. Rich in vitamin C, antioxidants, and a refreshing berry flavor, this juice is both delicious and nutritious. Its bright red color and smooth texture make it an appealing choice for any time of day—whether enjoyed on its own, blended with milk for a creamy twist, or served chilled over ice for a cooling summer treat.",
  },
  {
    id: 3,
    name: "Fruit Cocktail",
    image: "/images/drink3.png",
    title: "Fruit cocktail",
    description:
      "Fruit cocktail is a colorful and refreshing blend of various fresh fruits, often served in a light syrup or fruit juice. Typically featuring ingredients like pineapple, peaches, grapes, pears, and cherries, this vibrant mix offers a balance of sweet, tangy, and juicy flavors. Packed with vitamins, fiber, and antioxidants, fruit cocktail is not only visually appealing but also a healthy and energizing treat. It can be enjoyed on its own, as a dessert, or served chilled in a glass for a festive and tropical experience.",
  },
  {
    id: 4,
    name: "Orange Fizz",
    image: "/images/drink4.png",
    title: "Refreshing orange fizz",
    description:
      "Orange fizz is a sparkling beverage that combines the bright, citrusy flavor of fresh oranges with effervescent bubbles. This refreshing drink is typically made by mixing freshly squeezed orange juice with soda water or sparkling water, creating a light and invigorating experience. Often garnished with a slice of orange or a sprig of mint, orange fizz is perfect for warm days, brunches, or as a delightful non-alcoholic option at parties. Its vibrant color and zesty taste make it a favorite among fruit-based beverages.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
