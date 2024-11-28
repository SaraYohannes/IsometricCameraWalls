
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

    /*child elements*/
    const date_container = document.createElement('div');
    date_container.classList.add('blogpost_date');

    blogupdate.date.forEach(date => {
        const date_el = document.createElement('p');
        date_el.innerHTML = blogupdate.date;
    })

    const title_container = document.createElement('div');
    title_container.classList.add('blogpost_title');

    blogupdate.title.forEach(title => {
        const title_el = document.createElement('h4');
        title_el.innerHTML = blogupdate.title;
    })

    const summary_container = document.createElement('div');
    summary_container.classList.add('blogpost_summary');

    blogupdate.summary.forEach(summary => {
        const summary_el = document.createElement('p');
        summary_el.innerHTML = blogupdate.summary;
    })

    const content_container = document.createElement('div');
    content_container.classList.add('blogpost_content');

    blogupdate.content.forEach(content => {
        const content_el = document.createElement('p');
        content_el.innerHTML = blogupdate.content;
    })

    const gallery_container = document.createElement('div');
    gallery_container.classList.add('blogpost_gallery');

    blogupdate.gallery.forEach(gallery => {
        const gallery_el = document.createElement('p');
        gallery_el.innerHTML = blogupdate.gallery;
    })


    container_element.appendChild(blogupdate);
})
