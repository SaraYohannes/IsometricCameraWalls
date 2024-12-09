
const postimg_no = [
    { postnr: 1, src: 'img_src/dinnerflower.JPG', title: 'en vase med blomster p� et middagsbord', alt: 'dinner flower', ptext: 'a vase of wildflowers. Wine in the background. Table is set for dinner', width: "100%", height: "100%" },
    { postnr: 1, src: 'img_src/rivercrossing.JPG', title: 'et sted � krysse elven', alt: 'river crossing', ptext: 'a place to cross the river. Not safe', width: "100%", height: "100%" },
    { postnr: 1, src: 'img_src/mountainbush.JPG', title: 'busker som skygger for stien', alt: 'mountain bushes', ptext: 'there is a path here, but it is not visible', width: "100%", height: "100%" },
    { postnr: 2, src: 'img_src/lakeislet.JPG', title: 'en liten �y i en innsj�', alt: 'lake islet', ptext: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet', width: "100%", height: "100%" },
    { postnr: 3, src: 'img_src/redberry.JPG', title: 'et umodent b�r', alt: 'red berry', ptext: 'a marsh berry. It is not ripe', width: "100%", height: "100%" },
    { postnr: 3, src: 'img_src/plataugrassy.JPG', title: 'et plat�', alt: 'a platau', ptext: 'it is not a platau, but in this angle, it looks like it', width: "100%", height: "100%" }
];

const postimg_en = [
    { postnr: 1, src: 'img_src/dinnerflower.JPG', title: 'a vase of wildflowers on a dining table', alt: 'dinner flower', ptext: 'a vase of wildflowers. Wine in the background. Table is set for dinner', width: "100%", height: "100%" },
    { postnr: 1, src: 'img_src/rivercrossing.JPG', title: 'a place to cross the river', alt: 'river crossing', ptext: 'a place to cross the river. Not safe', width: "100%", height: "100%" },
    { postnr: 1, src: 'img_src/mountainbush.JPG', title: 'bushes obscouring mountain path', alt: 'mountain bushes', ptext: 'there is a path here, but it is not visible', width: "100%", height: "100%" },
    { postnr: 2, src: 'img_src/lakeislet.JPG', title: 'an islet on a lake', alt: 'lake islet', ptext: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet', width: "100%", height: "100%" },
    { postnr: 3, src: 'img_src/redberry.JPG', title: 'an unripe berry', alt: 'red berry', ptext: 'a marsh berry. It is not ripe', width: "100%", height: "100%" },
    { postnr: 3, src: 'img_src/plataugrassy.JPG', title: 'a platau', alt: 'a platau', ptext: 'it is not a platau, but in this angle, it looks like it', width: "100%", height: "100%" }
];

function open_large_gallery() {
    const lgallery_holder = document.body;
    // if section w class 'galleryModal' exists, clean it and add a new one


    if (document.querySelector('.galleryModal'))
    {
        let clean = document.querySelector('.galleryModal');
        clean.remove();
    }

    const lgallery_container = document.createElement('section');
    lgallery_container.classList.add('galleryModal');

    if (document.documentElement.lang === 'no') {
        pop_l_gall(postimg_no);
    }
    else {
        pop_l_gall(postimg_en);
    }

    

    lgallery_holder.appendChild(lgallery_container);

}

function pop_l_gall(img_arr) {

}

