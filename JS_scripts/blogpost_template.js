
const updates_no = [
    { postXX_no: 1, date: "01 jan 2024", title: "OPPDATERINGSTITTEL", summary: "SAMMENDRAG!", content: "INNHOLD", gallery: "GALLERI" },
    { postXX_no: 2, date: "01 feb 2024", title: "OPPDATERINGSTITTEL", summary: "SAMMENDRAG!", content: "INNHOLD", gallery: "GALLERI" }
];

const updates_en = [
    { postXX_en: 1, date: "01 jan 2024", title: "TITLE OF UPDATE 1", summary: "SUMMARY!", content: "CONTENT", gallery: "GALLERY" },
    { postXX_en: 2, date: "01 feb 2024", title: "TITLE OF UPDATE 2", summary: "SUMMARY!", content: "CONTENT", gallery: "GALLERY" },
    { postXX_en: 3, date: "05 mar 2024", title: "TITLE OF UPDATE 3", summary: "A short summary of what's in the content so you can make an informed decision if you want to read this or not!", content: "A long string of content. You need to know all of these things to be able to follow along on my project development! And there are tonnes of links to external sources and references. I will also add pictures so it will be easier to follow along and you can understand and visualise what I want to achieve", gallery: "GALLERY with picutres and descriptions." }
];

const container_element = document.getElementById("blogpost_wrapper");

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

function lang_change(current_lang) {
    if (current_lang == 'lang_no') {
        update_page(updates_no);
    }
    else if (current_lang == 'lang_en') {
        update_page(updates_en);
    }
}

function update_page(current_lang) {
    const postlang = current_lang;
    postlang.forEach(updatepost => {
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