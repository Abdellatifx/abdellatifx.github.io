function fetchImage() {
  // Call the API endpoint
  fetch('/media')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob(); // Convert response to a Blob object
    })
    .then(blob => {
      // Create an object URL from the Blob
      const objectURL = URL.createObjectURL(blob);

      // Create an image element and set its src to the object URL
      const image = document.createElement('img');
      image.src = objectURL;

      // Append the image to the document body or a specific element
      document.body.appendChild(image);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
