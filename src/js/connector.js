
export async function fetchAllProducts() {
    const response = await fetch('http://localhost:3000/products');
    const responseObj = await response.json();
  
    return responseObj
  }

