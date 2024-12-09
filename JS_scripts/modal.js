
function open_large_gallery() {
    const lgallery_holder = document.getElementById('maincontent')

    const lgallery_container = document.createElement('section');
    lgallery_container.classList.add('galleryModal');

    lgallery_holder.appendChild(lgallery_container);
}

