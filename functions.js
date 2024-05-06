function fetchImage() {
  const proxyUrl = 'https://api.allorigins.win/get?url='; // AllOrigins proxy URL
  const targetUrl = 'http://127.0.0.1:8080/media'; // Your target URL

  // Call the API endpoint using the AllOrigins proxy
  fetch(proxyUrl + encodeURIComponent(targetUrl))
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Convert response to JSON
    })
    .then(data => {
      const blob = data.contents; // Extract blob from JSON response
      const objectURL = URL.createObjectURL(blob);
      const image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
