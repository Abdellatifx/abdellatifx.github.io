function fetchImage() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Use a CORS proxy
  const targetUrl = 'http://127.0.0.1:8080/media'; // Your target URL
  
  // Call the API endpoint using the proxy
  fetch(proxyUrl + targetUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob(); // Convert response to a Blob object
    })
    .then(blob => {
      const objectURL = URL.createObjectURL(blob);
      const image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
