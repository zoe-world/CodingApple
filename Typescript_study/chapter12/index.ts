interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Basket {
  product: string;
  price: number;
}
let 장바구니: Basket[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface Card extends Basket {
  card: boolean;
}
