document.addEventListener('DOMContentLoaded', function () {
    const memeForm = document.getElementById('meme-form');
    const memeContainer = document.getElementById('meme-container');

    memeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const topText = document.getElementById('top-text').value;
        const bottomText = document.getElementById('bottom-text').value;
        const imageUrl = document.getElementById('image-url').value;

        if (!topText || !bottomText || !imageUrl) {
            alert('Please fill out all fields.');
            return;
        }

        const memeDiv = document.createElement('div');
        memeDiv.className = 'meme';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-container';

        const img = document.createElement('img');
        img.src = imageUrl;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function () {
            memeDiv.remove();
        });

        const topTextDiv = document.createElement('div');
        topTextDiv.className = 'top-text';
        topTextDiv.innerText = topText;

        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.className = 'bottom-text';
        bottomTextDiv.innerText = bottomText;

        imgContainer.appendChild(img);
        memeDiv.appendChild(imgContainer);
        memeDiv.appendChild(deleteButton);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);

        memeContainer.insertBefore(memeDiv, memeContainer.firstChild);

        memeForm.reset();
    });
});