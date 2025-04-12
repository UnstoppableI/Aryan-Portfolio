document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".cert-list li");
  const mediaItems = document.querySelectorAll(".cert-media");

  listItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active from all list items and media
      listItems.forEach(li => li.classList.remove("active"));
      mediaItems.forEach(media => media.classList.remove("active"));

      // Add active to clicked item and corresponding media
      item.classList.add("active");
      const targetId = item.getAttribute("data-cert");
      const targetMedia = document.getElementById(targetId);
      if (targetMedia) {
        targetMedia.classList.add("active");
      }
    });
  });
});

  
  // Portfolio Tab Javascript
  // Wait for the document to be ready
  document.addEventListener("DOMContentLoaded", function () {
    var elem = document.querySelector('.portfolio-grid');
    var iso = new Isotope(elem, {
      itemSelector: '.col-lg-4',
      layoutMode: 'fitRows'
    });

    var filtersElem = document.querySelector('.portfolio-filter ul');
    filtersElem.addEventListener('click', function (event) {
      if (!event.target.matches('li')) return;

      // Remove active class from all
      filtersElem.querySelectorAll('li').forEach(el => el.classList.remove('active'));
      // Add active to clicked tab
      event.target.classList.add('active');

      // Filter items
      var filterValue = event.target.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });
  });