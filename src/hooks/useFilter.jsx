export function useFilter(product, search) {
    return product.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }