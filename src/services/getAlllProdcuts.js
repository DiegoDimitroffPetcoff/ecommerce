const URL = `https://fakestoreapi.com/products`
export async function getAllProducts() {
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
