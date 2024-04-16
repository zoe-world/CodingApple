interface CarType {
  [key: string]: string | number;
}
let obj: CarType = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

console.log(obj);

interface FontType {
  "font-size": number;
  [key: string]: FontType | number;
}

let obj2: FontType = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
