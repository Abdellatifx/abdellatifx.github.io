function fetchImage() {
  fetch('/fetch-image')
    .then(response => {
      // Convert response to a Blob object
      return response.blob();
    })
    .then(blob => {
      // Create object URL from the Blob
      const objectURL = URL.createObjectURL(blob);
      
      // Create an image element and set its source to the object URL
      const image = document.createElement('img');
      image.src = objectURL;
      
      // Append the image to the document body
      document.body.appendChild(image);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch operation
      console.error('There was a problem with the fetch operation:', error);
    });
}
