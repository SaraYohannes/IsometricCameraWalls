
function open_large_gallery() {
    const lgallery_holder = document.body;
    // if section w class 'galleryModal' exists, clean it and add a new one


    if (document.querySelector('galleryModal'))
    {
        let clean = document.querySelector('galleryModal');
        clean.remove();
    }

    const lgallery_container = document.createElement('section');
    lgallery_container.classList.add('galleryModal');

    lgallery_holder.appendChild(lgallery_container);

}

