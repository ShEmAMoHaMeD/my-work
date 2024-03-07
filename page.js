function searchProducts() {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value.toLowerCase();
  
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      const productName = product.querySelector('h3').innerText.toLowerCase();
  
      if (productName.includes(searchValue)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navigation = document.querySelector('.navigation');
  
  hamburgerMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
  });