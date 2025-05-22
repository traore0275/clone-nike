// Mock data for Nike clone

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  colors?: number;
  isNew?: boolean;
  isFeatured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
};

export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
};

// Hero slides for the homepage
export const heroSlides: HeroSlide[] = [
  {
    id: "slide1",
    title: "JORDAN AIR REV",
    subtitle: "Lock in & Let it Fly",
    buttonText: "Shop",
    buttonLink: "/products",
    image: "https://ext.same-assets.com/1781292662/149732968.jpeg",
  },
  {
    id: "slide2",
    title: "ELEVATE YOUR WORKOUT",
    subtitle: "New Training Gear",
    buttonText: "Shop Training",
    buttonLink: "/products?category=training",
    image: "https://ext.same-assets.com/1781292662/497182140.jpeg",
  },
  {
    id: "slide3",
    title: "USWNT KITS",
    subtitle: "Rep your team in the latest styles",
    buttonText: "Shop Soccer",
    buttonLink: "/products?category=soccer",
    image: "https://ext.same-assets.com/1781292662/3450419666.jpeg",
  },
];

// Featured athletes sections
export const featuredSections = [
  {
    id: "section1",
    athlete: "Women's Air",
    title: "Cushioning to the Max",
    image: "https://ext.same-assets.com/1781292662/2868073556.jpeg",
    buttonText: "Shop",
    buttonLink: "/products/womens",
  },
  {
    id: "section2",
    athlete: "Scottie Scheffler",
    title: "Best player in the world? Guilty.",
    image: "https://ext.same-assets.com/1781292662/4086540862.jpeg",
    buttonText: "Shop",
    buttonLink: "/products/golf",
  },
];

// Sports categories
export const sportsCategories = [
  {
    id: "cat1",
    title: "The A'One Collection",
    subtitle: "Shop Basketball",
    image: "https://ext.same-assets.com/1781292662/4117086491.jpeg",
    link: "/products/basketball",
  },
  {
    id: "cat2",
    title: "USWNT Kits",
    subtitle: "Shop Soccer",
    image: "https://ext.same-assets.com/1781292662/3450419666.jpeg",
    link: "/products/soccer",
  },
  {
    id: "cat3",
    title: "Elevate Your Workout",
    subtitle: "Shop Training",
    image: "https://ext.same-assets.com/1781292662/497182140.jpeg",
    link: "/products/training",
  },
];

// Product categories for the "Shop The Classics" section
export const classicCategories: Category[] = [
  {
    id: "cat1",
    name: "Air Jordan 1",
    image: "https://ext.same-assets.com/33012722/1142059748.jpeg",
    slug: "air-jordan-1",
  },
  {
    id: "cat2",
    name: "Dunk",
    image: "https://ext.same-assets.com/33012722/96506151.jpeg",
    slug: "dunk",
  },
  {
    id: "cat3",
    name: "Field General",
    image: "https://ext.same-assets.com/33012722/3302444539.jpeg",
    slug: "field-general",
  },
  {
    id: "cat4",
    name: "Air Force 1",
    image: "https://ext.same-assets.com/33012722/3546756248.jpeg",
    slug: "air-force-1",
  },
  {
    id: "cat5",
    name: "Air Max",
    image: "https://ext.same-assets.com/33012722/3672736090.jpeg",
    slug: "air-max",
  },
];

// Featured products
export const featuredProducts: Product[] = [
  {
    id: "p1",
    name: "Nike Dunk Low",
    category: "Big Kids' Shoes",
    price: 90.00,
    image: "https://ext.same-assets.com/280984761/1657695089.jpeg",
    colors: 5,
    isFeatured: true,
  },
  {
    id: "p2",
    name: "Nike Free Metcon 6",
    category: "Men's Workout Shoes",
    price: 120.00,
    image: "https://ext.same-assets.com/280984761/171177906.jpeg",
    colors: 3,
    isFeatured: true,
  },
  {
    id: "p3",
    name: "Nike Calm",
    category: "Men's Slides",
    price: 50.00,
    image: "https://ext.same-assets.com/280984761/1578355283.jpeg",
    colors: 2,
    isFeatured: true,
  },
  {
    id: "p4",
    name: "Air Force 1 '07",
    category: "Men's Shoes",
    price: 110.00,
    image: "https://ext.same-assets.com/280984761/2971313166.jpeg",
    colors: 4,
    isFeatured: true,
  },
];

// Products for product listing page
export const products: Product[] = [
  ...featuredProducts,
  {
    id: "p5",
    name: "Nike Air Max DN",
    category: "Men's Shoes",
    price: 160.00,
    image: "https://ext.same-assets.com/33012722/3302444539.jpeg",
    colors: 5,
  },
  {
    id: "p6",
    name: "Air Jordan XXXIX",
    category: "Basketball Shoes",
    price: 200.00,
    image: "https://ext.same-assets.com/33012722/1142059748.jpeg",
    isNew: true,
  },
  {
    id: "p7",
    name: "Nike ReactX Rejuven8",
    category: "Men's Slides",
    price: 65.00,
    oldPrice: 85.00,
    image: "https://ext.same-assets.com/280984761/2010269973.jpeg",
    colors: 2,
  },
  {
    id: "p8",
    name: "Nike Pegasus 41",
    category: "Men's Road Running Shoes",
    price: 130.00,
    image: "https://ext.same-assets.com/33012722/2518693063.jpeg",
    colors: 6,
    isNew: true,
  },
  {
    id: "p9",
    name: "Nike Flex Runner 3",
    category: "Kids' Shoes",
    price: 55.00,
    image: "https://ext.same-assets.com/280984761/3644869161.jpeg",
    colors: 4,
  },
  {
    id: "p10",
    name: "Nike Giannis Immortality 4",
    category: "Basketball Shoes",
    price: 85.00,
    image: "https://ext.same-assets.com/280984761/3853475956.jpeg",
    colors: 3,
  },
  {
    id: "p11",
    name: "Nike A'One OG Pearl",
    category: "A'ja Wilson Basketball Shoes",
    price: 170.00,
    image: "https://ext.same-assets.com/280984761/2733251332.jpeg",
    isNew: true,
  },
  {
    id: "p12",
    name: "Hyperboot by Nike x Hyperice",
    category: "Recovery Boot",
    price: 799.00,
    image: "https://ext.same-assets.com/33012722/2518271809.jpeg",
    isNew: true,
  },
];

// Footer links
export const footerLinks = {
  featured: [
    { name: "Air Force 1", href: "/products/air-force-1" },
    { name: "Jordan 1", href: "/products/jordan-1" },
    { name: "Air Max On", href: "/products/air-max-on" },
    { name: "Vomero", href: "/products/vomero" },
  ],
  shoes: [
    { name: "All Shoes", href: "/products/shoes" },
    { name: "Jordan Shoes", href: "/products/jordan-shoes" },
    { name: "Running Shoes", href: "/products/running-shoes" },
    { name: "Basketball Shoes", href: "/products/basketball-shoes" },
  ],
  clothing: [
    { name: "All Clothing", href: "/products/clothing" },
    { name: "Tops & T-Shirts", href: "/products/tops-t-shirts" },
    { name: "Shorts", href: "/products/shorts" },
    { name: "Hoodies & Pullovers", href: "/products/hoodies-pullovers" },
  ],
  kids: [
    { name: "Infant & Toddler Shoes", href: "/products/infant-toddler-shoes" },
    { name: "Kids Shoes", href: "/products/kids-shoes" },
    { name: "Kids Basketball Shoes", href: "/products/kids-basketball-shoes" },
    { name: "Kids Running Shoes", href: "/products/kids-running-shoes" },
  ],
  resources: [
    { name: "Gift Cards", href: "/gift-cards" },
    { name: "Find a Store", href: "/stores" },
    { name: "Membership", href: "/membership" },
    { name: "Nike Journal", href: "/journal" },
    { name: "Site Feedback", href: "#site-feedback" },
  ],
  help: [
    { name: "Get Help", href: "/help" },
    { name: "Order Status", href: "/orders" },
    { name: "Shipping and Delivery", href: "/help/shipping" },
    { name: "Returns", href: "/help/returns" },
    { name: "Order Cancellation", href: "/help/cancellation" },
    { name: "Payment Options", href: "/help/payment" },
    { name: "Gift Card Balance", href: "/gift-cards/balance" },
    { name: "Contact Us", href: "/help/contact" },
  ],
  company: [
    { name: "About Nike", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/investors" },
    { name: "Purpose", href: "/purpose" },
    { name: "Sustainability", href: "/sustainability" },
  ],
  promotions: [
    { name: "Student", href: "/promo/student" },
    { name: "Military", href: "/promo/military" },
    { name: "Teacher", href: "/promo/teacher" },
    { name: "First Responders & Medical Professionals", href: "/promo/first-responders" },
    { name: "Birthday", href: "/promo/birthday" },
  ],
};
