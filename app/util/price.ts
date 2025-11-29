export default function FormatPrice(price: number): string {
  return "Ɇ" + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
