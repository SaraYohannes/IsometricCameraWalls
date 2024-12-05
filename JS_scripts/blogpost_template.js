const post_img_no = [
    { nr: 1, date: "1st of Jan, 2024", post: 1, src: 'img_src/dinnerflower.JPG', title: 'en vase med blomster på et middagsbord', alt: 'dinner flower', ptext: 'a vase of wildflowers. Wine in the background. Table is set for dinner', width: "100%", height: "100%" },
    { nr: 2, date: "1st of Jan, 2024", post: 1, src: 'img_src/rivercrossing.JPG', title: 'et sted å krysse elven', alt: 'river crossing', ptext: 'a place to cross the river. Not safe', width: "100%", height: "100%" },
    { nr: 3, date: "1st of Jan, 2024", post: 2, src: 'img_src/mountainbush.JPG', title: 'busker som skygger for stien', alt: 'mountain bushes', ptext: 'there is a path here, but it is not visible', width: "100%", height: "100%" },
    { nr: 4, date: "1st of Jan, 2024", post: 3, src: 'img_src/lakeislet.JPG', title: 'en liten øy i en innsjø', alt: 'lake islet', ptext: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet', width: "100%", height: "100%" },
    { nr: 5, date: "1st of Jan, 2024", post: 3, src: 'img_src/redberry.JPG', title: 'et umodent bær', alt: 'red berry', ptext: 'a marsh berry. It is not ripe', width: "100%", height: "100%" },
    { nr: 5, date: "1st of Jan, 2024", post: 4, src: 'img_src/plataugrassy.JPG', title: 'et platå', alt: 'a platau', ptext: 'it is not a platau, but in this angle, it looks like it', width: "100%", height: "100%" }
];

const post_img_en = [
    { nr: 1, date: "1st of Jan, 2024", post: 1, src: 'img_src/dinnerflower.JPG', title: 'a vase of wildflowers on a dining table', alt: 'dinner flower', ptext: 'a vase of wildflowers. Wine in the background. Table is set for dinner', width: "100%", height: "100%" },
    { nr: 2, date: "1st of Jan, 2024", post: 1, src: 'img_src/rivercrossing.JPG', title: 'a place to cross the river', alt: 'river crossing', ptext: 'a place to cross the river. Not safe', width: "100%", height: "100%" },
    { nr: 3, date: "1st of Jan, 2024", post: 2, src: 'img_src/mountainbush.JPG', title: 'bushes obscouring mountain path', alt: 'mountain bushes', ptext: 'there is a path here, but it is not visible', width: "100%", height: "100%" },
    { nr: 4, date: "1st of Jan, 2024", post: 3, src: 'img_src/lakeislet.JPG', title: 'an islet on a lake', alt: 'lake islet', ptext: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet', width: "100%", height: "100%" },
    { nr: 5, date: "1st of Jan, 2024", post: 3, src: 'img_src/redberry.JPG', title: 'an unripe berry', alt: 'red berry', ptext: 'a marsh berry. It is not ripe', width: "100%", height: "100%" },
    { nr: 5, date: "1st of Jan, 2024", post: 4, src: 'img_src/plataugrassy.JPG', title: 'a platau', alt: 'a platau', ptext: 'it is not a platau, but in this angle, it looks like it', width: "100%", height: "100%" }
];

const updates_no = [
    { nr: 1, date: "1st of Jan, 2024", post: 1, title: 'en vase med blomster på et middagsbord', alt: 'dinner flower', summary: 'a vase of wildflowers. Wine in the background. Table is set for dinner' },
    { nr: 2, date: "1st of Jan, 2024", post: 2, title: 'busker som skygger for stien', alt: 'mountain bushes', summary: 'there is a path here, but it is not visible' },
    { nr: 3, date: "1st of Jan, 2024", post: 3, title: 'en liten øy i en innsjø', alt: 'lake islet', summary: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet' },
    { nr: 4, date: "1st of Jan, 2024", post: 4, title: 'et platå', alt: 'a platau', summary: 'it is not a platau, but in this angle, it looks like it' }
];

const updates_en = [
    { nr: 1, date: "1st of Jan, 2024", post: 1, title: 'a vase of wildflowers on a dining table', alt: 'dinner flower', summary: 'a vase of wildflowers. Wine in the background. Table is set for dinner' },
    { nr: 2, date: "1st of Jan, 2024", post: 2, title: 'bushes obscouring mountain path', alt: 'mountain bushes', summary: 'there is a path here, but it is not visible' },
    { nr: 3, date: "1st of Jan, 2024", post: 3, title: 'an islet on a lake', alt: 'lake islet', summary: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet' },
    { nr: 4, date: "1st of Jan, 2024", post: 4, title: 'a platau', alt: 'a platau', summary: 'it is not a platau, but in this angle, it looks like it' }
];

/* post imgs */
const postimg_no = [
    { postnr: 1, src: 'img_src/dinnerflower.JPG', title: 'en vase med blomster på et middagsbord', alt: 'dinner flower', ptext: 'a vase of wildflowers. Wine in the background. Table is set for dinner', width: "100%", height: "100%" },
    { postnr: 1, src: 'img_src/rivercrossing.JPG', title: 'et sted å krysse elven', alt: 'river crossing', ptext: 'a place to cross the river. Not safe', width: "100%", height: "100%" },
    { postnr: 1, src: 'img_src/mountainbush.JPG', title: 'busker som skygger for stien', alt: 'mountain bushes', ptext: 'there is a path here, but it is not visible', width: "100%", height: "100%" },
    { postnr: 2, src: 'img_src/lakeislet.JPG', title: 'en liten øy i en innsjø', alt: 'lake islet', ptext: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet', width: "100%", height: "100%" },
    { postnr: 3, src: 'img_src/redberry.JPG', title: 'et umodent bær', alt: 'red berry', ptext: 'a marsh berry. It is not ripe', width: "100%", height: "100%" },
    { postnr: 3, src: 'img_src/plataugrassy.JPG', title: 'et platå', alt: 'a platau', ptext: 'it is not a platau, but in this angle, it looks like it', width: "100%", height: "100%" }
];

const postimg_en = [
    { postnr: 1, src: 'img_src/dinnerflower.JPG', title: 'a vase of wildflowers on a dining table', alt: 'dinner flower', ptext: 'a vase of wildflowers. Wine in the background. Table is set for dinner', width: "100%", height: "100%" },
    { postnr: 1, src: 'img_src/rivercrossing.JPG', title: 'a place to cross the river', alt: 'river crossing', ptext: 'a place to cross the river. Not safe', width: "100%", height: "100%" },
    { postnr: 1, src: 'img_src/mountainbush.JPG', title: 'bushes obscouring mountain path', alt: 'mountain bushes', ptext: 'there is a path here, but it is not visible', width: "100%", height: "100%" },
    { postnr: 2, src: 'img_src/lakeislet.JPG', title: 'an islet on a lake', alt: 'lake islet', ptext: 'its not an islet, but it is a lake. The small rock could in this picture look like an islet', width: "100%", height: "100%" },
    { postnr: 3, src: 'img_src/redberry.JPG', title: 'an unripe berry', alt: 'red berry', ptext: 'a marsh berry. It is not ripe', width: "100%", height: "100%" },
    { postnr: 3, src: 'img_src/plataugrassy.JPG', title: 'a platau', alt: 'a platau', ptext: 'it is not a platau, but in this angle, it looks like it', width: "100%", height: "100%" }
];

/* post content */
const postcontent_no = [
    { postnr: 1, ctext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, nisi ut mattis ultrices, enim libero sagittis sapien, ac euismod libero ligula id velit. Praesent dapibus consectetur felis, ac efficitur nulla efficitur vitae. Nulla facilisi. Phasellus vitae pretium felis. Pellentesque sed diam elementum, eleifend purus pharetra, efficitur eros. Curabitur mollis ligula nibh, non scelerisque dui ullamcorper id. Donec pulvinar nisi in orci rhoncus hendrerit. Maecenas iaculis vulputate erat sit amet consectetur. Pellentesque blandit ipsum tellus, ac placerat nisi ullamcorper eget. Donec nec risus at eros pretium venenatis. Nunc tincidunt sapien lorem, sed eleifend ante pretium quis. Suspendisse ullamcorper euismod justo, id congue odio fringilla nec." },
    { postnr: 1, ctext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, nisi ut mattis ultrices, enim libero sagittis sapien, ac euismod libero ligula id velit. Praesent dapibus consectetur felis, ac efficitur nulla efficitur vitae. Nulla facilisi. Phasellus vitae pretium felis. Pellentesque sed diam elementum, eleifend purus pharetra, efficitur eros. Curabitur mollis ligula nibh, non scelerisque dui ullamcorper id. Donec pulvinar nisi in orci rhoncus hendrerit. Maecenas iaculis vulputate erat sit amet consectetur. Pellentesque blandit ipsum tellus, ac placerat nisi ullamcorper eget. Donec nec risus at eros pretium venenatis. Nunc tincidunt sapien lorem, sed eleifend ante pretium quis. Suspendisse ullamcorper euismod justo, id congue odio fringilla nec." },
    { postnr: 1, ctext: "Maecenas dignissim enim sit amet iaculis pharetra. Sed faucibus nisi at viverra gravida. Phasellus fringilla convallis arcu sed hendrerit. Aenean at est eu ipsum vulputate vulputate. Quisque tincidunt, odio id cursus tincidunt, lacus neque ullamcorper nulla, vitae lacinia nisi nunc eu enim. Pellentesque aliquam, est aliquet luctus luctus, lectus odio tempus nisi, quis porta enim sem vel odio. Donec eget pharetra lectus, ut semper arcu. Morbi quis urna viverra, molestie quam non, facilisis urna. Etiam quis dignissim dui, sed sagittis justo. Vestibulum vulputate risus id viverra varius. Vivamus nec ex consectetur, vulputate ligula vel, tempus turpis. Nunc sit amet tellus non est volutpat cursus. Aenean tristique sem sit amet urna cursus tincidunt. Vivamus fermentum faucibus nulla, in tincidunt arcu volutpat ac." },
    { postnr: 2, ctext: "Aenean lobortis sit amet libero quis dignissim. Nam vulputate ex et purus accumsan, vitae facilisis mi ultrices. Sed fermentum ante a augue finibus lacinia ut nec elit. Suspendisse potenti. Nunc vehicula facilisis leo eget consectetur. Suspendisse lacus justo, pretium iaculis commodo id, congue id dolor. Nam vitae felis consectetur, varius nisi at, accumsan elit. Phasellus iaculis leo augue, a tempor augue porttitor sed. Nam nec rutrum libero." },
    { postnr: 2, ctext: "Nam euismod enim nec nisi varius, in elementum sem cursus. Proin ultrices nisi vitae rutrum dictum. Mauris sit amet purus feugiat, cursus eros ullamcorper, luctus dui. Fusce egestas magna sed metus vulputate aliquam. Vivamus consequat elementum nunc, ut sodales neque ullamcorper quis. Vestibulum massa dolor, pellentesque ac turpis ullamcorper, ullamcorper pellentesque est. Praesent varius vulputate risus, non mattis urna facilisis ac. Curabitur id consequat sapien, ut volutpat orci." },
    { postnr: 2, ctext: "Sed sed ullamcorper orci. Aenean fermentum felis id neque dictum scelerisque. Donec a erat fermentum, porttitor est nec, pulvinar lorem. Mauris tortor mi, condimentum ac condimentum in, pharetra vitae ligula. Maecenas at turpis ante. Nam vehicula nibh neque, at pellentesque quam ultricies nec. Quisque feugiat consequat ex, id commodo arcu dignissim aliquam. Ut gravida justo nec tortor cursus, vitae facilisis nibh laoreet. Vivamus imperdiet elit vel ullamcorper sodales. Vivamus et augue leo. Nullam rhoncus sapien et ipsum molestie congue." },
    { postnr: 3, ctext: "Sed sed ullamcorper orci. Aenean fermentum felis id neque dictum scelerisque. Donec a erat fermentum, porttitor est nec, pulvinar lorem. Mauris tortor mi, condimentum ac condimentum in, pharetra vitae ligula. Maecenas at turpis ante. Nam vehicula nibh neque, at pellentesque quam ultricies nec. Quisque feugiat consequat ex, id commodo arcu dignissim aliquam. Ut gravida justo nec tortor cursus, vitae facilisis nibh laoreet. Vivamus imperdiet elit vel ullamcorper sodales. Vivamus et augue leo. Nullam rhoncus sapien et ipsum molestie congue." },
    { postnr: 3, ctext: "Maecenas dignissim enim sit amet iaculis pharetra. Sed faucibus nisi at viverra gravida. Phasellus fringilla convallis arcu sed hendrerit. Aenean at est eu ipsum vulputate vulputate. Quisque tincidunt, odio id cursus tincidunt, lacus neque ullamcorper nulla, vitae lacinia nisi nunc eu enim. Pellentesque aliquam, est aliquet luctus luctus, lectus odio tempus nisi, quis porta enim sem vel odio. Donec eget pharetra lectus, ut semper arcu. Morbi quis urna viverra, molestie quam non, facilisis urna. Etiam quis dignissim dui, sed sagittis justo. Vestibulum vulputate risus id viverra varius. Vivamus nec ex consectetur, vulputate ligula vel, tempus turpis. Nunc sit amet tellus non est volutpat cursus. Aenean tristique sem sit amet urna cursus tincidunt. Vivamus fermentum faucibus nulla, in tincidunt arcu volutpat ac." }
]

const postcontent_en = [
    { postnr: 1, ctext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, nisi ut mattis ultrices, enim libero sagittis sapien, ac euismod libero ligula id velit. Praesent dapibus consectetur felis, ac efficitur nulla efficitur vitae. Nulla facilisi. Phasellus vitae pretium felis. Pellentesque sed diam elementum, eleifend purus pharetra, efficitur eros. Curabitur mollis ligula nibh, non scelerisque dui ullamcorper id. Donec pulvinar nisi in orci rhoncus hendrerit. Maecenas iaculis vulputate erat sit amet consectetur. Pellentesque blandit ipsum tellus, ac placerat nisi ullamcorper eget. Donec nec risus at eros pretium venenatis. Nunc tincidunt sapien lorem, sed eleifend ante pretium quis. Suspendisse ullamcorper euismod justo, id congue odio fringilla nec." },
    { postnr: 1, ctext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, nisi ut mattis ultrices, enim libero sagittis sapien, ac euismod libero ligula id velit. Praesent dapibus consectetur felis, ac efficitur nulla efficitur vitae. Nulla facilisi. Phasellus vitae pretium felis. Pellentesque sed diam elementum, eleifend purus pharetra, efficitur eros. Curabitur mollis ligula nibh, non scelerisque dui ullamcorper id. Donec pulvinar nisi in orci rhoncus hendrerit. Maecenas iaculis vulputate erat sit amet consectetur. Pellentesque blandit ipsum tellus, ac placerat nisi ullamcorper eget. Donec nec risus at eros pretium venenatis. Nunc tincidunt sapien lorem, sed eleifend ante pretium quis. Suspendisse ullamcorper euismod justo, id congue odio fringilla nec." },
    { postnr: 1, ctext: "Maecenas dignissim enim sit amet iaculis pharetra. Sed faucibus nisi at viverra gravida. Phasellus fringilla convallis arcu sed hendrerit. Aenean at est eu ipsum vulputate vulputate. Quisque tincidunt, odio id cursus tincidunt, lacus neque ullamcorper nulla, vitae lacinia nisi nunc eu enim. Pellentesque aliquam, est aliquet luctus luctus, lectus odio tempus nisi, quis porta enim sem vel odio. Donec eget pharetra lectus, ut semper arcu. Morbi quis urna viverra, molestie quam non, facilisis urna. Etiam quis dignissim dui, sed sagittis justo. Vestibulum vulputate risus id viverra varius. Vivamus nec ex consectetur, vulputate ligula vel, tempus turpis. Nunc sit amet tellus non est volutpat cursus. Aenean tristique sem sit amet urna cursus tincidunt. Vivamus fermentum faucibus nulla, in tincidunt arcu volutpat ac." },
    { postnr: 2, ctext: "Aenean lobortis sit amet libero quis dignissim. Nam vulputate ex et purus accumsan, vitae facilisis mi ultrices. Sed fermentum ante a augue finibus lacinia ut nec elit. Suspendisse potenti. Nunc vehicula facilisis leo eget consectetur. Suspendisse lacus justo, pretium iaculis commodo id, congue id dolor. Nam vitae felis consectetur, varius nisi at, accumsan elit. Phasellus iaculis leo augue, a tempor augue porttitor sed. Nam nec rutrum libero." },
    { postnr: 2, ctext: "Nam euismod enim nec nisi varius, in elementum sem cursus. Proin ultrices nisi vitae rutrum dictum. Mauris sit amet purus feugiat, cursus eros ullamcorper, luctus dui. Fusce egestas magna sed metus vulputate aliquam. Vivamus consequat elementum nunc, ut sodales neque ullamcorper quis. Vestibulum massa dolor, pellentesque ac turpis ullamcorper, ullamcorper pellentesque est. Praesent varius vulputate risus, non mattis urna facilisis ac. Curabitur id consequat sapien, ut volutpat orci." },
    { postnr: 2, ctext: "Sed sed ullamcorper orci. Aenean fermentum felis id neque dictum scelerisque. Donec a erat fermentum, porttitor est nec, pulvinar lorem. Mauris tortor mi, condimentum ac condimentum in, pharetra vitae ligula. Maecenas at turpis ante. Nam vehicula nibh neque, at pellentesque quam ultricies nec. Quisque feugiat consequat ex, id commodo arcu dignissim aliquam. Ut gravida justo nec tortor cursus, vitae facilisis nibh laoreet. Vivamus imperdiet elit vel ullamcorper sodales. Vivamus et augue leo. Nullam rhoncus sapien et ipsum molestie congue." },
    { postnr: 3, ctext: "Sed sed ullamcorper orci. Aenean fermentum felis id neque dictum scelerisque. Donec a erat fermentum, porttitor est nec, pulvinar lorem. Mauris tortor mi, condimentum ac condimentum in, pharetra vitae ligula. Maecenas at turpis ante. Nam vehicula nibh neque, at pellentesque quam ultricies nec. Quisque feugiat consequat ex, id commodo arcu dignissim aliquam. Ut gravida justo nec tortor cursus, vitae facilisis nibh laoreet. Vivamus imperdiet elit vel ullamcorper sodales. Vivamus et augue leo. Nullam rhoncus sapien et ipsum molestie congue." },
    { postnr: 3, ctext: "Maecenas dignissim enim sit amet iaculis pharetra. Sed faucibus nisi at viverra gravida. Phasellus fringilla convallis arcu sed hendrerit. Aenean at est eu ipsum vulputate vulputate. Quisque tincidunt, odio id cursus tincidunt, lacus neque ullamcorper nulla, vitae lacinia nisi nunc eu enim. Pellentesque aliquam, est aliquet luctus luctus, lectus odio tempus nisi, quis porta enim sem vel odio. Donec eget pharetra lectus, ut semper arcu. Morbi quis urna viverra, molestie quam non, facilisis urna. Etiam quis dignissim dui, sed sagittis justo. Vestibulum vulputate risus id viverra varius. Vivamus nec ex consectetur, vulputate ligula vel, tempus turpis. Nunc sit amet tellus non est volutpat cursus. Aenean tristique sem sit amet urna cursus tincidunt. Vivamus fermentum faucibus nulla, in tincidunt arcu volutpat ac." }
]
/* post updates */
const postupdate_no = [
    { postnr: 1, date: "01.12.2024", title: "begynnelsen på advent", summary: "utgreiing om begynnelsen på advent og hvordan den påvirker økonomien" },
    { postnr: 2, date: "12.12.2024", title: "møte mennesker", summary: "hva er det med denne måned som gjør at man møter masse folk i ubekvemme situasjoner?" },
    { postnr: 3, date: "30.12.2024", title: "det nye året", summary: "refleksjoner på året som har gått og håp for det nye året" }
]

const postupdate_en = [
    { postnr: 1, date: "01.12.2024", title: "beginning of advent", summary: "discussing the beginning of advent and how it affects the economy" },
    { postnr: 2, date: "12.12.2024", title: "meeting people", summary: "what is it about the last month of the year which makes us meet awkwardly on the streets?" },
    { postnr: 3, date: "30.12.2024", title: "the new year", summary: "reflections on the year which has passed and hopes for the future year" }
];
  
const container_element = document.getElementById("blogpost_wrapper");

// when page is opened this will be run first so that the blogpost area will be
// populated with posts at once
/*
updates_en.forEach(updatepost => {



    const blogupdate = document.createElement('article'); 
    blogupdate.classList.add('blogpost_grid');    
    
    //child element - date
    const date_container = document.createElement('div');
    date_container.classList.add('blogpost_date');

    const date_el = document.createElement('p');
    date_el.innerHTML = updatepost.date;
    date_container.appendChild(date_el);

    //*child element - title
    const title_container = document.createElement('div');
    title_container.classList.add('blogpost_title');

    const title_el = document.createElement('h4');
    title_el.innerHTML = updatepost.title;
    title_container.appendChild(title_el);

    //child element - summary
    const summary_container = document.createElement('div');
    summary_container.classList.add('blogpost_summary');

    const summary_el = document.createElement('p');
    summary_el.innerHTML = updatepost.summary;
    summary_container.appendChild(summary_el);

    //child element - content
    const content_container = document.createElement('div');
    content_container.classList.add('blogpost_content');

    const content_el = document.createElement('p');
    content_el.innerHTML = updatepost.content;
    content_container.appendChild(content_el);

    //child element - gallery
    const gallery_container = document.createElement('div');
    gallery_container.classList.add('blogpost_gallery');

    const gallery_el = document.createElement('img');
    gallery_el.src = updatepost.src;
    gallery_el.alt = updatepost.alt;
    gallery_el.title = updatepost.title;
    gallery_el.style.width = updatepost.width;
    gallery_el.style.height = updatepost.height;
    gallery_container.appendChild(gallery_el);
    
    //append child elements to blogpost
    blogupdate.appendChild(date_container);
    blogupdate.appendChild(title_container);
    blogupdate.appendChild(summary_container);
    blogupdate.appendChild(content_container);
    blogupdate.appendChild(gallery_container);

    //append blogpost to wrapper
    container_element.appendChild(blogupdate);
})
*/


function lang_change(current_lang) {
    // remove children as to not get appended posts
    container_element.innerHTML = '';

    if (current_lang == 'lang_no') {
        // update_page(updates_no);
        update_posts(postupdate_no);    
    }
    else if (current_lang == 'lang_en') {
        //update_page(updates_en);
        update_posts(postupdate_en);    
    }
}

function update_posts(currentlang) {
    currentlang.forEach(post => {
        //create article, apply grid-area for structure
        const posttemplate = document.createElement('article');
        posttemplate.classList.add('blogpost_grid');

        //child element - date
        const postdate = document.createElement('div');
        postdate.classList.add('blogpost_date');

        const date_el = document.createElement('p');
        date_el.innerHTML = post.date;
        postdate.appendChild(date_el);

        //child element - title
        const posttitle = document.createElement('div');
        posttitle.classList.add('blogpost_title');

        const title_el = document.createElement('h4');
        title_el.innerHTML = post.title;
        posttitle.appendChild(title_el);

        //child element - summary
        const postsummary = document.createElement('div');
        postsummary.classList.add('blogpost_summary');

        const summary_el = document.createElement('p');
        summary_el.innerHTML = post.summary;
        postsummary.appendChild(summary_el);

        //add content
        //child element - content space
        const content = document.createElement('div');
        content.classList.add('blogpost_content');

        postcontent_en.forEach(paragraph => {
            if (post.postnr !== paragraph.postnr) { return; }
            else {
                const para = document.createElement('p');
                para.innerHTML = paragraph.ctext;
                content.appendChild(para);
            }
        })

        //add gallery
        //child element - gallery space
        const smallgallery = document.createElement('div');
        smallgallery.classList.add('illbox');

        postimg_en.forEach(image => {
            if (post.postnr !== image.postnr) { return; }
            else {
                const pic = document.createElement('figure');
                pic.classList.add('figureimg');

                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.alt;
                img.title = image.title;
                img.style.width = image.width;
                img.style.height = image.height;

                pic.appendChild(img);

                const description = document.createElement('figcaption');
                description.classList.add('small_gallery_text');
                description.innerHTML = image.ptext;

                smallgallery.appendChild(pic);
                smallgallery.appendChild(description);
            }
        })

        //append child elements to posttemplate
        posttemplate.appendChild(postdate);
        posttemplate.appendChild(posttitle);
        posttemplate.appendChild(postsummary);
        posttemplate.appendChild(content);
        posttemplate.appendChild(smallgallery);
        
        //append whole post to wrapper
        container_element.appendChild(posttemplate);
    })
}

function update_page(current_lang) {
    current_lang.forEach(updatepost => {
        const blogupdate = document.createElement('article');
        blogupdate.classList.add('blogpost_grid');

        //child element - date
        const date_container = document.createElement('div');
        date_container.classList.add('blogpost_date');

        const date_el = document.createElement('p');
        date_el.innerHTML = updatepost.date;
        date_container.appendChild(date_el);

        //child element - title
        const title_container = document.createElement('div');
        title_container.classList.add('blogpost_title');

        const title_el = document.createElement('h4');
        title_el.innerHTML = updatepost.title;
        title_container.appendChild(title_el);

        //child element - summary
        const summary_container = document.createElement('div');
        summary_container.classList.add('blogpost_summary');

        const summary_el = document.createElement('p');
        summary_el.innerHTML = updatepost.summary;
        summary_container.appendChild(summary_el);

        //child element - content
        const content_container = document.createElement('div');
        content_container.classList.add('blogpost_content');

        const content_el = document.createElement('p');
        content_el.innerHTML = updatepost.content;
        content_container.appendChild(content_el);

        //child element - gallery
        const gallery_container = document.createElement('div');
        gallery_container.classList.add('blogpost_gallery');

        const gallery_el = document.createElement('p');
        gallery_el.innerHTML = updatepost.gallery;
        gallery_container.appendChild(gallery_el);

        //append child elements to blogpost
        blogupdate.appendChild(date_container);
        blogupdate.appendChild(title_container);
        blogupdate.appendChild(summary_container);
        blogupdate.appendChild(content_container);
        blogupdate.appendChild(gallery_container);

        //append blogpost to wrapper
        container_element.appendChild(blogupdate);
    })
}