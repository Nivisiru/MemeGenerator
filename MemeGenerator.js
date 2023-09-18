document.addEventListener('DOMContentLoaded', function () {
    const memeForm = document.getElementById('meme-form');
    const memeContainer = document.getElementById('meme-container');

    memeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form input values
        const topText = document.getElementById('top-text').value;
        const bottomText = document.getElementById('bottom-text').value;
        const imageUrl = document.getElementById('image-url').value;

        // Validate inputs
        if (!topText || !bottomText || !imageUrl) {
            alert('Please fill out all fields.');
            return;
        }

        // Create a meme div
        const memeDiv = document.createElement('div');
        memeDiv.className = 'meme';

        // Create an image element
        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-container';

        const img = document.createElement('img');
        img.src = imageUrl;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function () {
            memeDiv.remove();
        });

        // Create top text
        const topTextDiv = document.createElement('div');
        topTextDiv.className = 'top-text';
        topTextDiv.innerText = topText;

        // Create bottom text
        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.className = 'bottom-text';
        bottomTextDiv.innerText = bottomText;

        // Append elements
        imgContainer.appendChild(img);
        memeDiv.appendChild(imgContainer);
        memeDiv.appendChild(deleteButton);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);

        // Insert meme div at the beginning of the container
        memeContainer.insertBefore(memeDiv, memeContainer.firstChild);

        // Clear form inputs
        memeForm.reset();
    });
});