function fetchImage() {
  // Call the API endpoint
  fetch('http://127.0.0.1:8080/media')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob(); // Convert response to a Blob object
    })
    .then(blob => {
      console.log(blob); // Log the blob data
      // Create an object URL from the Blob
      const objectURL = URL.createObjectURL(blob);

      // Open a new window/tab and set its content to display the image
      const newWindow = window.open('');
      newWindow.document.write(`<img src="${objectURL}" alt="Fetched Image">`);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
