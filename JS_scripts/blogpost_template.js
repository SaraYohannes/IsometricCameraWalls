
const updates_no = [
    { postXX_no: 1, date: "DD.MMM YYYY", title: "OPPDATERINGSTITTEL", content: "INNHOLD" },
    { postXX_no: 2, date: "DD.MMM YYYY", title: "OPPDATERINGSTITTEL", content: "INNHOLD" }
];

const updates_en = [
    { postXX_en: 1, date: "DD.MMM YYYY", title: "TITLE OF UPDATE", content: "CONTENT" },
    { postXX_en: 2, date: "DD.MMM YYYY", title: "TITLE OF UPDATE", content: "CONTENT" }
];

const container_element = document.getElementById("blogpost_template");

updates_en.forEach(update => {
    const blogupdate = document.createElement('article');
    blogupdate.classList.add('blogpost_date');
    blogupdate.classList.add('blogpost_title');
    blogupdate.classList.add('blogpost_summary');
    blogupdate.classList.add('blogpost_content');
    blogupdate.classList.add('blogpost_gallery');

    blogupdate.blogpost_title.innerHTML =
        <h4>${post.title}</h4>;
    blogupdate.blogpost_content.innerHTML =
        <p>${post.content}</p>;

})
