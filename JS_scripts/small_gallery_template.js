const complete_gallery = [
    { nr: 1, post: 1, src: '', title: '', alt: 'this is picture 1', ptext: 'a short description of intent' },
    { nr: 2, post: 1, src: '', title: '', alt: 'this is picture 2', ptext: 'describing the illustration' },
    { nr: 3, post: 2, src: '', title: '', alt: 'this is picture 3', ptext: 'some math for interested' },
    { nr: 4, post: 3, src: '', title: '', alt: 'this is picture 4', ptext: 'current progress, interesting bug' }
];

const container_whole_gallery = document.getElementById("illmod");

complete_gallery.forEach(pic => {
    const addPic = document.createElement('article');
    addPic.classList.add('illbox');

    /*child element - picture*/
    const pic_cont = document.createElement('picture');
    pic_cont.classList.add('small_gallery_picture');
    pic_cont.innerHTML = pic.alt;

    /*child element - p*/
    const pic_dec = document.createElement('p');
    pic_dec.classList.add('small_gallery_text')
    pic_dec.innerHTML = pic.ptext;

    /*append child elements to illbox*/
    addPic.appendChild(pic_cont);
    addPic.appendChild(pic_dec);

    /*append child elements to container element*/
    container_whole_gallery.appendChild(addPic);

})