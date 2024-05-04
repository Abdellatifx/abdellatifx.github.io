// api.js

// Function to call the API
const callApi = () => {
  return fetch('YOUR_API_ENDPOINT')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the API response data
      return data;
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
    });
};

export default callApi;
