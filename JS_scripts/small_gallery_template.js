const complete_gallery = [
    { nr: 1, post: 1, src: 'img_src/dinnerflower.JPG', title: 'a vase of wildflowers on a dining table', alt: 'dinner flower', ptext: 'a vase of wildflowers. Wine in the background. Table is set for dinner', width: "100%", height: "100%" },
    { nr: 2, post: 1, src: 'img_src/rivercrossing.JPG', title: 'a place to cross the river', alt: 'river crossing', ptext: 'a place to cross the river. Not safe', width: "100%", height: "auto" },
    { nr: 3, post: 2, src: 'img_src/mountainbush.JPG', title: 'bushes obscouring mountain path', alt: 'mountain bushes', ptext: 'there is a path here, but it is not visible', width: "100%", height: "auto" },
    { nr: 4, post: 3, src: 'img_src/lakeislet.JPG', title: 'an islet on a lake', alt: 'lake islet', ptext: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet', width: "100%", height: "auto" },
    { nr: 5, post: 3, src: 'img_src/redberry.JPG', title: 'an unripe berry', alt: 'red berry', ptext: 'a marsh berry. It is not ripe', width: "100%", height: "auto" },
    { nr: 6, post: 4, src: 'img_src/plataugrassy.JPG', title: 'a platau', alt: 'a platau', ptext: 'it is not a platau, but in this angle, it looks like it', width: "100%", height: "auto" }
];

const container_whole_gallery = document.getElementById("illmod");

complete_gallery.forEach(pic => {
    const addPic = document.createElement('article');
    addPic.classList.add('illbox');

    /*child element - picture*/
    const pic_cont = document.createElement('figure');
    pic_cont.classList.add('figureimg');

    const img = document.createElement('img');
    img.src = pic.src;
    img.alt = pic.alt;
    img.title = pic.title;
    img.style.width = pic.width;
    img.style.height = pic.height;

    pic_cont.appendChild(img);

    /*child element - p*/
    const pic_dec = document.createElement('figcaption');
    pic_dec.classList.add('small_gallery_text')
    pic_dec.innerHTML = pic.ptext;

    /*append child elements to illbox*/
    addPic.appendChild(pic_cont);
    addPic.appendChild(pic_dec);

    /*append child elements to container element*/
    container_whole_gallery.appendChild(addPic);

})