function fetchImage() {
  fetch('/fetch-image')
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
