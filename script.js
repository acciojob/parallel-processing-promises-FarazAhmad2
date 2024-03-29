//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener('click', function() {
  
  const outputDiv = document.getElementById('output');

  // Map each image URL to a Promise that loads the image
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function() {
        // Append the image to the output div
        outputDiv.appendChild(img);
        resolve(img);
      };
      img.onerror = function() {
        reject(new Error(`Failed to load image: ${image.url}`));
      };
      img.src = image.url;
    });
  });

  // Use Promise.all() to wait for all images to be loaded
  Promise.all(promises)
    .then(downloadedImages => {
      console.log('All images downloaded successfully:', downloadedImages);
    })
    .catch(error => {
      console.error('Error downloading images:', error);
    });
});

