
const updates_no = [
    { nr: 1, date: "1st of Jan, 2024", post: 1, src: 'img_src/dinnerflower.JPG', title: 'en vase med blomster på et middagsbord', alt: 'dinner flower', ptext: 'a vase of wildflowers. Wine in the background. Table is set for dinner', width: "100%", height: "100%" },
    { nr: 2, date: "1st of Jan, 2024", post: 1, src: 'img_src/rivercrossing.JPG', title: 'et sted å krysse elven', alt: 'river crossing', ptext: 'a place to cross the river. Not safe', width: "100%", height: "100%" },
    { nr: 3, date: "1st of Jan, 2024", post: 2, src: 'img_src/mountainbush.JPG', title: 'busker som skygger for stien', alt: 'mountain bushes', ptext: 'there is a path here, but it is not visible', width: "100%", height: "100%" },
    { nr: 4, date: "1st of Jan, 2024", post: 3, src: 'img_src/lakeislet.JPG', title: 'en liten øy i en innsjø', alt: 'lake islet', ptext: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet', width: "100%", height: "100%" },
    { nr: 5, date: "1st of Jan, 2024", post: 3, src: 'img_src/redberry.JPG', title: 'et umodent bær', alt: 'red berry', ptext: 'a marsh berry. It is not ripe', width: "100%", height: "100%" },
    { nr: 6, date: "1st of Jan, 2024", post: 4, src: 'img_src/plataugrassy.JPG', title: 'et platå', alt: 'a platau', ptext: 'it is not a platau, but in this angle, it looks like it', width: "100%", height: "100%" }
];

const updates_en = [
    { nr: 1, date: "1st of Jan, 2024", post: 1, src: 'img_src/dinnerflower.JPG', title: 'a vase of wildflowers on a dining table', alt: 'dinner flower', ptext: 'a vase of wildflowers. Wine in the background. Table is set for dinner', width: "100%", height: "100%" },
    { nr: 2, date: "1st of Jan, 2024", post: 1, src: 'img_src/rivercrossing.JPG', title: 'a place to cross the river', alt: 'river crossing', ptext: 'a place to cross the river. Not safe', width: "100%", height: "100%" },
    { nr: 3, date: "1st of Jan, 2024", post: 2, src: 'img_src/mountainbush.JPG', title: 'bushes obscouring mountain path', alt: 'mountain bushes', ptext: 'there is a path here, but it is not visible', width: "100%", height: "100%" },
    { nr: 4, date: "1st of Jan, 2024", post: 3, src: 'img_src/lakeislet.JPG', title: 'an islet on a lake', alt: 'lake islet', ptext: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet', width: "100%", height: "100%" },
    { nr: 5, date: "1st of Jan, 2024", post: 3, src: 'img_src/redberry.JPG', title: 'an unripe berry', alt: 'red berry', ptext: 'a marsh berry. It is not ripe', width: "100%", height: "100%" },
    { nr: 6, date: "1st of Jan, 2024", post: 4, src: 'img_src/plataugrassy.JPG', title: 'a platau', alt: 'a platau', ptext: 'it is not a platau, but in this angle, it looks like it', width: "100%", height: "100%" }
];

const container_element = document.getElementById("blogpost_wrapper");

// when page is opened this will be run first so that the blogpost area will be 
// populated with posts at once
updates_en.forEach(updatepost => {
    const blogupdate = document.createElement('article'); 
    blogupdate.classList.add('blogpost_grid');    
    
    /*child element - date*/
    const date_container = document.createElement('div');
    date_container.classList.add('blogpost_date');

    const date_el = document.createElement('p');
    date_el.innerHTML = updatepost.date;
    date_container.appendChild(date_el);

    /*child element - title*/
    const title_container = document.createElement('div');
    title_container.classList.add('blogpost_title');

    const title_el = document.createElement('h4');
    title_el.innerHTML = updatepost.title;
    title_container.appendChild(title_el);

    /*child element - summary*/
    const summary_container = document.createElement('div');
    summary_container.classList.add('blogpost_summary');

    const summary_el = document.createElement('p');
    summary_el.innerHTML = updatepost.summary;
    summary_container.appendChild(summary_el);

    /*child element - content*/
    const content_container = document.createElement('div');
    content_container.classList.add('blogpost_content');

    const content_el = document.createElement('p');
    content_el.innerHTML = updatepost.content;
    content_container.appendChild(content_el);

    /*child element - gallery*/
    const gallery_container = document.createElement('div');
    gallery_container.classList.add('blogpost_gallery');

    const gallery_el = document.createElement('img');
    gallery_el.src = updatepost.src;
    gallery_el.alt = updatepost.alt;
    gallery_el.title = updatepost.title;
    gallery_el.style.width = updatepost.width;
    gallery_el.style.height = updatepost.height;
    gallery_container.appendChild(gallery_el);
    
    /*append child elements to blogpost*/
    blogupdate.appendChild(date_container);
    blogupdate.appendChild(title_container);
    blogupdate.appendChild(summary_container);
    blogupdate.appendChild(content_container);
    blogupdate.appendChild(gallery_container);

    /*append blogpost to wrapper*/
    container_element.appendChild(blogupdate);
})

function lang_change(current_lang) {
    // remove children as to not get appended posts
    container_element.innerHTML = '';

    if (current_lang == 'lang_no') {
        update_page(updates_no);
    }
    else if (current_lang == 'lang_en') {
        update_page(updates_en);
    }
}

function update_page(current_lang) {
    current_lang.forEach(updatepost => {
        const blogupdate = document.createElement('article');
        blogupdate.classList.add('blogpost_grid');

        /*child element - date*/
        const date_container = document.createElement('div');
        date_container.classList.add('blogpost_date');

        const date_el = document.createElement('p');
        date_el.innerHTML = updatepost.date;
        date_container.appendChild(date_el);

        /*child element - title*/
        const title_container = document.createElement('div');
        title_container.classList.add('blogpost_title');

        const title_el = document.createElement('h4');
        title_el.innerHTML = updatepost.title;
        title_container.appendChild(title_el);

        /*child element - summary*/
        const summary_container = document.createElement('div');
        summary_container.classList.add('blogpost_summary');

        const summary_el = document.createElement('p');
        summary_el.innerHTML = updatepost.summary;
        summary_container.appendChild(summary_el);

        /*child element - content*/
        const content_container = document.createElement('div');
        content_container.classList.add('blogpost_content');

        const content_el = document.createElement('p');
        content_el.innerHTML = updatepost.content;
        content_container.appendChild(content_el);

        /*child element - gallery*/
        const gallery_container = document.createElement('div');
        gallery_container.classList.add('blogpost_gallery');

        const gallery_el = document.createElement('p');
        gallery_el.innerHTML = updatepost.gallery;
        gallery_container.appendChild(gallery_el);

        /*append child elements to blogpost*/
        blogupdate.appendChild(date_container);
        blogupdate.appendChild(title_container);
        blogupdate.appendChild(summary_container);
        blogupdate.appendChild(content_container);
        blogupdate.appendChild(gallery_container);

        /*append blogpost to wrapper*/
        container_element.appendChild(blogupdate);
    })
}