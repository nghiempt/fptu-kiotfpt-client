const PRODUCTS = [
  {
    id: 1,
    name: "Iphone 15 Pro Max",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/99/86/04/7a74043bebfb2645b559fd94587ecf77.png.webp',
    discount: 38,
    isFavourite: true,
    isOfficial: true,
    color: 'Blue',
    size: 'Small',
    seller: 'Minh Tuan Mobile',
    price: '$1099.9',
    sold: 92,
    rate: 4.0,
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/ca/e3/2b/68f2b0cd84cca8b2f7e4f57124076b15.jpg.webp',
    discount: 25,
    isFavourite: false,
    isOfficial: true,
    color: 'Black',
    size: 'Large',
    seller: 'Samsung Official Store',
    price: '$1199.9',
    sold: 120,
    rate: 5.0
  },
  {
    id: 3,
    name: "MacBook Pro 16-inch",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/d4/73/16/f411520dfaa575f3c9e128642b479bb7.jpg.webp',
    discount: 15,
    isFavourite: true,
    isOfficial: true,
    color: 'Silver',
    size: 'Large',
    seller: 'Apple Store',
    price: '$2399.9',
    sold: 75,
    rate: 3.0
  },
  {
    id: 4,
    name: "Sony WH-1000XM4",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/27/6e/c1/e9b8860a52516c09d6d01ba288766a28.png.webp',
    discount: 20,
    isFavourite: true,
    isOfficial: true,
    color: 'Black',
    size: 'Medium',
    seller: 'Sony Authorized Dealer',
    price: '$349.9',
    sold: 200,
    rate: 1.0
  },
  {
    id: 5,
    name: "Dell XPS 13",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/e0/be/a2/2007a3fdbdc48892339afd62352c9782.jpg.webp',
    discount: 18,
    isFavourite: false,
    isOfficial: true,
    color: 'White',
    size: 'Small',
    seller: 'Dell Store',
    price: '$999.9',
    sold: 60,
    rate: 5.0
  },
  {
    id: 6,
    name: "Nintendo Switch OLED",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/17/5e/d2/b4f314bc5123f6632e24198c3b8e40b0.jpg.webp',
    discount: 10,
    isFavourite: true,
    isOfficial: true,
    color: 'Neon Blue/Red',
    size: 'Small',
    seller: 'Nintendo Store',
    price: '$349.9',
    sold: 150,
    rate: 5.0
  },
  {
    id: 7,
    name: "Bose QuietComfort",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/49/43/74/446a5b2bafe82da09f00e11ce103d3c9.png.webp',
    discount: 12,
    isFavourite: false,
    isOfficial: true,
    color: 'White',
    size: 'Small',
    seller: 'Bose Store',
    price: '$279.9',
    sold: 90,
    rate: 4.0
  },
  {
    id: 8,
    name: "Fitbit Charge 5",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/e0/be/27/5160acae91fe919cad99b96a0f63adb7.png.webp',
    discount: 22,
    isFavourite: true,
    isOfficial: true,
    color: 'Black',
    size: 'Small',
    seller: 'Fitbit Store',
    price: '$179.9',
    sold: 130,
    rate: 4.0
  },
  {
    id: 9,
    name: "Sony A7 IV",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/2d/a4/27/edb87329b90e1fe61e6899dd40847f81.png.webp',
    discount: 5,
    isFavourite: false,
    isOfficial: true,
    color: 'Black',
    size: 'Large',
    seller: 'Sony Camera Store',
    price: '$2499.9',
    sold: 50,
    rate: 3.0
  },
  {
    id: 10,
    name: "Apple iPad Pro 12.9",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/f6/e6/59/63ea2169f9cfe79db4893a822d2869da.jpg.webp',
    discount: 18,
    isFavourite: true,
    isOfficial: true,
    color: 'Space Gray',
    size: 'Large',
    seller: 'Apple Store',
    price: '$1099.9',
    sold: 110,
    rate: 4.0
  },
  {
    id: 11,
    name: "GoPro Hero 11 Black",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/6b/31/62/51d93a00bcafa5f5b696db173fa98785.jpg.webp',
    discount: 30,
    isFavourite: false,
    isOfficial: true,
    color: 'Black',
    size: 'Small',
    seller: 'GoPro Store',
    price: '$499.9',
    sold: 95,
    rate: 2.0
  },
  {
    id: 12,
    name: "Razer Blade 15",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/70/bf/8f/f2be878640bc28b4a67cb81c0964ef5c.jpg.webp',
    discount: 10,
    isFavourite: true,
    isOfficial: true,
    color: 'Black',
    size: 'Medium',
    seller: 'Razer Store',
    price: '$1999.9',
    sold: 40,
    rate: 2.0
  },
  {
    id: 13,
    name: "Amazon Echo Dot (4th Gen)",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/c0/86/15/de28a09fc00db677a76078c49145bf32.jpg.webp',
    discount: 45,
    isFavourite: false,
    isOfficial: true,
    color: 'Charcoal',
    size: 'Small',
    seller: 'Amazon',
    price: '$49.9',
    sold: 300,
    rate: 4.0
  },
  {
    id: 14,
    name: "DJI Mavic Air 2",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/35/e6/07/f41a66c38c162444c42576493b1ae29e.jpg.webp',
    discount: 20,
    isFavourite: true,
    isOfficial: true,
    color: 'Gray',
    size: 'Medium',
    seller: 'DJI Store',
    price: '$799.9',
    sold: 85,
    rate: 4.0
  },
  {
    id: 15,
    name: "Logitech MX Master 3",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/3a/93/30/88db5af901d04d3d284422062989bad2.png.webp',
    discount: 12,
    isFavourite: false,
    isOfficial: true,
    color: 'Graphite',
    size: 'Small',
    seller: 'Logitech Store',
    price: '$99.9',
    sold: 180,
    rate: 4.0
  },
  {
    id: 16,
    name: "Asus ROG Strix G15",
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/1e/48/0d/3ee2fc7e048cfcd33f4c019e906b14f7.jpg.webp',
    discount: 8,
    isFavourite: true,
    isOfficial: true,
    color: 'Black',
    size: 'Large',
    seller: 'Asus Store',
    price: '$1499.9',
    sold: 65,
    rate: 5.0
  }
];

const CATEGORIES = [
  {
    id: 1,
    name: "Clothes",
    img: 'https://cdn-icons-png.flaticon.com/128/863/863684.png'
  },
  {
    id: 2,
    name: "Home",
    img: 'https://cdn-icons-png.flaticon.com/128/4635/4635381.png'
  },
  {
    id: 3,
    name: "Technology",
    img: 'https://cdn-icons-png.flaticon.com/128/4257/4257483.png'
  },
  {
    id: 4,
    name: "Tools",
    img: 'https://cdn-icons-png.flaticon.com/128/1086/1086581.png'
  },
  {
    id: 5,
    name: "Sports",
    img: 'https://cdn-icons-png.flaticon.com/128/4163/4163679.png'
  },
  {
    id: 6,
    name: "Anima",
    img: 'https://cdn-icons-png.flaticon.com/128/1076/1076877.png'
  },
  {
    id: 7,
    name: "Machinery",
    img: 'https://cdn-icons-png.flaticon.com/128/4257/4257448.png'
  },
  {
    id: 8,
    name: "Travel",
    img: 'https://cdn-icons-png.flaticon.com/128/761/761488.png'
  },
  {
    id: 9,
    name: "Decoration",
    img: 'https://cdn-icons-png.flaticon.com/128/942/942165.png'
  },
  {
    id: 10,
    name: "Health and Beauty",
    img: 'https://cdn-icons-png.flaticon.com/128/2382/2382443.png'
  }
]

const BRANDS = [
  {
    id: 1,
    name: "Samsung",
    url: 'samsung.com.vn',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Samsung_icon.svg/1187px-Samsung_icon.svg.png?20220626150407'
  },
  {
    id: 2,
    name: "Apple",
    url: 'apple.com.vn',
    img: 'https://cdn-icons-png.flaticon.com/128/0/747.png'
  },
  {
    id: 3,
    name: "Xiaomi",
    url: 'xiaomi.com.vn',
    img: 'https://cdn-icons-png.flaticon.com/128/882/882720.png'
  },
  {
    id: 4,
    name: "Oppo",
    url: 'oppo.com.vn',
    img: 'https://cdn-icons-png.flaticon.com/128/882/882745.png'
  },
  {
    id: 5,
    name: "Vivo",
    url: 'vivo.com.vn',
    img: 'https://cdn-icons-png.flaticon.com/128/882/882711.png'
  },
  {
    id: 6,
    name: "Nokia",
    url: 'nokia.com.vn',
    img: 'https://cdn-icons-png.flaticon.com/128/16183/16183634.png'
  },
  {
    id: 7,
    name: "Panasonic",
    url: 'panasonic.com.vn',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIIMjezV8bvmPulB4OV0SiN1RqPZu6otkdg&usqp=CAU'
  },
  {
    id: 8,
    name: "Sony",
    url: 'sony.com.vn',
    img: 'https://cdn-icons-png.flaticon.com/128/5969/5969288.png'
  },
  {
    id: 9,
    name: "LG",
    url: 'lg.com.vn',
    img: 'https://cdn-icons-png.flaticon.com/128/882/882722.png'
  },
  {
    id: 10,
    name: "Philips",
    url: 'philips.com.vn',
    img: 'https://cdn-icons-png.flaticon.com/128/882/882703.png'
  },
  {
    id: 11,
    name: "Hitachi",
    url: 'hitachi.com.vn',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlbtpnrlusD51_BD14fHGvmZqsqEIPgKIDA&usqp=CAU'
  },
  {
    id: 12,
    name: "Sharp",
    url: 'sharp.com.vn',
    img: 'https://cdn-icons-png.flaticon.com/128/882/882714.png'
  }
]

export const FAKE = {
  CATEGORIES,
  PRODUCTS,
  BRANDS
};
