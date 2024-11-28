
const updates_no = [
    { postXX_no: 1, date: "01 jan 2024", title: "OPPDATERINGSTITTEL", summary: "SAMMENDRAG!", content: "INNHOLD", gallery: "GALLERI" },
    { postXX_no: 2, date: "01 feb 2024", title: "OPPDATERINGSTITTEL", summary: "SAMMENDRAG!", content: "INNHOLD", gallery: "GALLERI" }
];

const updates_en = [
    { postXX_en: 1, date: "01 jan 2024", title: "TITLE OF UPDATE 1", summary: "SUMMARY!", content: "CONTENT", gallery: "GALLERY" },
    { postXX_en: 2, date: "01 feb 2024", title: "TITLE OF UPDATE 2", summary: "SUMMARY!", content: "CONTENT", gallery: "GALLERY" }
];

const container_element = document.getElementById("blogpost_wrapper");

updates_en.forEach(updatepost => {
    const blogupdate = document.createElement('article'); // I want to add a section with a grid, then I want to add 
    blogupdate.classList.add('blogpost_grid');        // items to those grids

    /*child element - date*/
    const date_container = document.createElement('div');
    date_container.classList.add('blogpost_date');

    const date_el = document.createElement('p');
    date_el.innerHTML = updatepost.date;
    date_container.appendChild(date_el);

    /*child element - title*/
    const title_container = document.createElement('div');
    title_container.classList.add('blogpost_title');

    updatepost.title.forEach(title => {
        const title_el = document.createElement('h4');
        title_el.innerHTML = title.title;
        title_container.appendChild(title_el);
    });
    /*child element - summary*/
    const summary_container = document.createElement('div');
    summary_container.classList.add('blogpost_summary');

    updatepost.summary.forEach(summary => {
        const summary_el = document.createElement('p');
        summary_el.innerHTML = summary.summary;
        summary_container.appendChild(summary_el);
    });
    /*child element - content*/
    const content_container = document.createElement('div');
    content_container.classList.add('blogpost_content');

    updatepost.content.forEach(content => {
        const content_el = document.createElement('p');
        content_el.innerHTML = content.content;
        content_container.appendChild(content_el);
    });
    /*child element - gallery*/
    const gallery_container = document.createElement('div');
    gallery_container.classList.add('blogpost_gallery');

    updatepost.gallery.forEach(gallery => {
        const gallery_el = document.createElement('p');
        gallery_el.innerHTML = gallery.gallery;
        gallery_container.appendChild(gallery_el);
    });

    /*append child elements to blogpost*/
    blogupdate.appendChild(date_container);
    blogupdate.appendChild(title_container);
    blogupdate.appendChild(summary_container);
    blogupdate.appendChild(container_element);
    blogupdate.appendChild(gallery_container);

    /*append blogpost to wrapper*/
    container_element.appendChild(blogupdate);
})
