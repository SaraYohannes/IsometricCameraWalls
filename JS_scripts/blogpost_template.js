
const updates_no = [
    { postXX_no: 1, date: "DD.MMM YYYY", title: "OPPDATERINGSTITTEL", content: "INNHOLD" },
    { postXX_no: 2, date: "DD.MMM YYYY", title: "OPPDATERINGSTITTEL", content: "INNHOLD" }
];

const updates_en = [
    { postXX_en: 1, date: "DD.MMM YYYY", title: "TITLE OF UPDATE 1", content: "CONTENT" },
    { postXX_en: 2, date: "DD.MMM YYYY", title: "TITLE OF UPDATE 2", content: "CONTENT" }
];

const container_element = document.getElementById("blogpost_template");

updates_en.forEach(updatepost => {
    const blogupdate = document.createElement('article'); // I want to add a section with a grid, then I want to add 
    blogupdate.classList.add('blogpost_template');        // items to those grids
    
    blogupdate.innerHTML =
        `
        <h4>${updatepost.title}</h4>
    `;

    container_element.appendChild(blogupdate);
})
