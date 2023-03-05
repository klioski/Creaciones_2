window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const scrollToTop = document.querySelector('.scroll-to-top');
    
    if (scrollPosition > 500) {
      scrollToTop.classList.add('show');
    } else {
      scrollToTop.classList.remove('show');
    }
  });
  
  document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
  