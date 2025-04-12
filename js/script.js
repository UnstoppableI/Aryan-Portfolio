function showCertificate(certId) {
    const allCertificates = document.querySelectorAll(".cert-media");
    allCertificates.forEach(cert => {
      cert.classList.remove("active");
    });
  
    const selectedCert = document.getElementById(certId);
    if (selectedCert) {
      selectedCert.classList.add("active");
    }
  }
  
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