const photos = [
    {
      url: "Ashish_Kumar.jpg",
      caption: "Beautiful sunset",
      tags: ["nature", "sky"]
    },
    // ... Add more photo objects with URL, caption, and tags (up to 100)
  ];
const photoGrid = document.getElementById('photo-grid');

  photos.forEach(photo => {
    const photoItem = document.createElement('div');
    photoItem.classList.add('photo-item');
  
    const photoImg = document.createElement('img');
    photoImg.src = photo.url;
    photoItem.appendChild(photoImg);
  
    const photoCaption = document.createElement('p');
    photoCaption.textContent = photo.caption;
    photoItem.appendChild(photoCaption);
  
    // Optional: Add functionality for tags (displaying or filtering)
  
    photoGrid.appendChild(photoItem);
  });
