const Shops = [
  { id: 145, name: "Somchai's Store", owner: "Kwan", city: "Bangkok" },
  { id: 629, name: "Sawasdee Mart", owner: "Kwan", city: "Chiang Mai" },
  { id: 231, name: "Lotus Market", owner: "Natakan", city: "Koh Samui" },
  { id: 42, name: "Chaiyo Shop", owner: "Kwan", city: "Bangkok" },
  { id: 8, name: "Baan Thai", owner: "Natakan", city: "Bangkok" },
  { id: 77, name: "Smile Store", owner: "Kwan", city: "Chiang Rai" },
  { id: 101, name: "Happy Mart", owner: "Chang", city: "Koh Samui" },
  { id: 202, name: "Sunshine Market", owner: "Kwan", city: "Bangkok" },
  { id: 303, name: "Elephant Mart", owner: "Chang", city: "Chiang Rai" },
  { id: 404, name: "Golden Store", owner: "Chang", city: "Chiang Rai" }
];
const Items = [
  { id: 44, name: "Coconut Milk", price: 30, weight: 1000 },
  { id: 81, name: "Jasmine Rice", price: 50, weight: 1000 },
  { id: 42, name: "Fish Sauce", price: 20, weight: 750 },
  { id: 145, name: "Green Curry Paste", price: 25, weight: 400 },
  { id: 55, name: "Thai Tea", price: 15, weight: 200 },
  { id: 9, name: "Tamarind Candy", price: 10, weight: 100 },
  { id: 7, name: "Mango Sticky Rice", price: 40, weight: 500 },
  { id: 88, name: "Tom Yum Soup", price: 35, weight: 600 },
  { id: 99, name: "Pad Thai Noodles", price: 45, weight: 300 },
  { id: 66, name: "Durian Chips", price: 60, weight: 250 }
];
const Customers = [
  { id: 34, name: "Narin" },
  { id: 70, name: "Pim" },
  { id: 25, name: "Anan" },
  { id: 56, name: "Somsak" },
  { id: 89, name: "Malee" },
  { id: 12, name: "Kanya" },
  { id: 78, name: "Wichai" },
  { id: 45, name: "Siri" },
  { id: 23, name: "Nok" },
  { id: 67, name: "Lek" }
];
const Purchases = [
  { id: 145, itemIds: [81, 44, 145], shopId: 629, customerId: 70, date: { day: 1, month: 1, year: 2024 } },
  { id: 135, itemIds: [55, 9, 7], shopId: 231, customerId: 25, date: { day: 2, month: 12, year: 2024 } },
  { id: 246, itemIds: [42, 88, 99], shopId: 42, customerId: 70, date: { day: 15, month: 1, year: 2024 } },
  { id: 357, itemIds: [66, 7, 55], shopId: 8, customerId: 25, date: { day: 10, month: 12, year: 2024 } },
  { id: 468, itemIds: [9, 81, 42], shopId: 77, customerId: 89, date: { day: 20, month: 1, year: 2024 } },
  { id: 579, itemIds: [145, 88, 99], shopId: 101, customerId: 70, date: { day: 25, month: 8, year: 2024 } },
  { id: 680, itemIds: [44, 66, 7], shopId: 202, customerId: 78, date: { day: 30, month: 8, year: 2024 } },
  { id: 791, itemIds: [55, 9, 81], shopId: 303, customerId: 45, date: { day: 5, month: 4, year: 2024 } },
  { id: 802, itemIds: [42, 145, 88], shopId: 404, customerId: 25, date: { day: 12, month: 9, year: 2024 } },
  { id: 913, itemIds: [99, 66, 44], shopId: 145, customerId: 67, date: { day: 18, month: 9, year: 2024 } }
];
