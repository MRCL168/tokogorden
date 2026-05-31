
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('a[href^="https://wa.me/"]');
  links.forEach(link => {
    link.addEventListener('click', () => {
      link.setAttribute('data-clicked','true');
    });
  });
});
