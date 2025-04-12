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
  