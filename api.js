async function fetchImage() {
  const proxyUrl = 'https://api.allorigins.win/get?url='; // AllOrigins proxy URL
  const targetUrl = 'https://saragift-fghlck2qaa-uc.a.run.app/media'; // Your target URL

  // Call the API endpoint using the AllOrigins proxy
  await fetch(proxyUrl+targetUrl)
    .then(async response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json(); // Convert response to JSON
    })
    .then(async data => {
      const blob = await fetch(data.contents).then(res => res.blob());
      const objectURL = URL.createObjectURL(blob);
      const image = document.createElement('img');
      image.src = objectURL;
      await document.body.appendChild(image);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
