export const navBarMenus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

import image1 from "public/banner/1.jpg";
import image2 from "public/banner/2.jpg";
import image3 from "public/banner/5.jpg";
export const bannerImages = [
  {
    image: image1,
    offerstatus: "Limited Edition",
    category: "Sport Essentials",
    title: "Yoga Mats, Weights& more",
    offer: "Discover our new items. Up to",
    href: "/1",
  },
  {
    image: image2,
    offerstatus: "Limited Edition",
    category: "Sport Essentials",
    title: "Yoga Mats, Weights& more",
    offer: "Discover our new items. Up to",
    href: "/1",
  },
  {
    image: image3,
    offerstatus: "Limited Edition",
    category: "Sport Essentials",
    title: "Yoga Mats, Weights& more",
    offer: "Discover our new items. Up to",
    href: "/1",
  },
];

import brand1 from "public/brand/epb1.png";
import brand2 from "public/brand/epb2.png";
import brand3 from "public/brand/epb3.png";
import brand4 from "public/brand/epb4.png";
import brand7 from "public/brand/epb7.png";
import brand8 from "public/brand/epb8.png";

export const brandList = [
  {
    image: brand1,
    name: "Apple",
  },
  {
    image: brand2,
    name: "Samsung",
  },
  {
    image: brand3,
    name: "Sony",
  },
  {
    image: brand4,
    name: "Nike",
  },
  {
    image: brand7,
    name: "Ray-Ban",
  },
  {
    image: brand8,
    name: "Michael Kors",
  },
  {
    image: brand3,
    name: "Sony",
  },
  {
    image: brand4,
    name: "Nike",
  },
];

import cat1 from "public/categories/ctb1.png";
import cat2 from "public/categories/ctb2.png";
import cat3 from "public/categories/ctb3.png";
import cat4 from "public/categories/ctb4.png";
import cat5 from "public/categories/ctb5.png";
import cat6 from "public/categories/ctb6.png";
export const popularCategories = [
  {
    category: "Electronics",
    image: cat1,
    sub_categories: [
      "Laptop",
      "Camera",
      "Air Condition",
      "Tv",
      "Audio & Theaters",
    ],
  },
  {
    category: "Toy & Video Games",
    image: cat2,
    sub_categories: ["Laptop", "Camera", "Air Condition", "Tv"],
  },
  {
    category: "Clothing",
    image: cat3,
    sub_categories: ["Laptop", "Camera", "Air Condition", "Tv"],
  },
  {
    category: "Health & Beauty",
    image: cat4,
    sub_categories: ["Laptop", "Camera", "Air Condition", "Tv"],
  },
  {
    category: "Home & Kitchen",
    image: cat5,
    sub_categories: ["Laptop", "Camera", "Air Condition", "Tv"],
  },
  {
    category: "Home & Furniture",
    image: cat6,
    sub_categories: ["Laptop", "Camera", "Air Condition", "Tv"],
  },
];

import new1 from "public/news/smartwatch.png";
import new2 from "public/news/smartdevice2.png";
export const upcoming = [
  {
    starting_price: 899,
    name: "Health Care Monitor",
    image: new1,
  },
  {
    starting_price: 899,
    name: "Blood Pressure Meter",
    off: 45,
    image: new2,
  },
];

import { TbTruckDelivery } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import {
  BsCreditCard2Front,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
export const storeFeatures = [
  {
    icon: <TbTruckDelivery />,
    title: "Free Shipping",
    description: "Free Shipping for orders over $200",
  },
  {
    icon: <LuShieldCheck />,
    title: "Money Guarantee",
    description: "Within 30 days for an exchange.",
  },
  {
    icon: <TfiHeadphoneAlt />,
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
  },
  {
    icon: <BsCreditCard2Front />,
    title: "Flexible Payment",
    description: "Pay with Multiple Credit Cards",
  },
];

export const footerData = [
  {
    title: "About Brandit",
    pages: [
      {
        name: "Track your order",
        href: "/order-tracking",
      },
      {
        name: "Product Guides",
        href: "/product-guides",
      },
      {
        name: "Wishlist",
        href: "/wishlist",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Store Locator",
        href: "/store-locator",
      },
    ],
  },
  {
    title: "Customer Support",
    pages: [
      {
        name: "Contact Us",
        href: "/contact-us",
      },
      {
        name: "Help Center",
        href: "/help",
      },
      {
        name: "Returns & Exchanges",
        href: "/returns",
      },
      {
        name: "Best Buy Financing",
        href: "/best-buy",
      },
      {
        name: "Best Buy Gift Card",
        href: "/best-gift",
      },
    ],
  },
  {
    title: "Services",
    pages: [
      {
        name: "Geek Squad",
        href: "/geek-squad",
      },
      {
        name: "In-Home Advisor",
        href: "/in-home",
      },
      {
        name: "Trade-In Program",
        href: "/trade",
      },
      {
        name: "Electronics Recycling",
        href: "/recycling",
      },
      {
        name: "Best Buy Health",
        href: "/best-buy-health",
      },
    ],
  },
];

export const socialLinks = [
  {
    icon: <BsFacebook />,
    href: "https://www.facebook.com/mohammed.fathy.562114/",
  },
  {
    icon: <BsInstagram />,
    href: "https://www.instagram.com/moo.fat7y/",
  },
  {
    icon: <BsWhatsapp />,
    href: "https://wa.me/201005550942",
  },
  {
    icon: <BsTwitter />,
    href: "https://twitter.com/moo_fat7y",
  },
];
