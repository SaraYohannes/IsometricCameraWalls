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
    //create box for gallery
    const galleryaside = document.createElement('section');
    galleryaside.classList.add('blogpost_gallery')

    postimg_en.forEach(image => {
        if (post.postnr !== image.postnr) { return; }
        else {
            const smallgallery = document.createElement('div');
            smallgallery.classList.add('illbox');

            const pic = document.createElement('figure');
            pic.classList.add('figureimg');

            smallgallery.appendChild(pic);

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

            smallgallery.appendChild(description);

            //append smallgallery to box for gallery
            galleryaside.appendChild(smallgallery);
        }
    })

    //append child elements to posttemplate
    posttemplate.appendChild(postdate);
    posttemplate.appendChild(posttitle);
    posttemplate.appendChild(postsummary);
    posttemplate.appendChild(content);
    posttemplate.appendChild(galleryaside);

    //append whole post to wrapper
    container_element.appendChild(posttemplate);
})

function lang_change(current_lang) {
    // remove children as to not get appended posts
    container_element.innerHTML = '';

    if (current_lang == 'lang_no') {
        update_posts(postupdate_no, postcontent_no, postimg_no);    
    }
    else if (current_lang == 'lang_en') {
        update_posts(postupdate_en, postcontent_en, postimg_en);    
    }
}

function update_posts(update, contentupdate, imageupdate) {
    update.forEach(post => {
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

        contentupdate.forEach(paragraph => {
            if (post.postnr !== paragraph.postnr) { return; }
            else {
                const para = document.createElement('p');
                para.innerHTML = paragraph.ctext;
                content.appendChild(para);
            }
        })

        //add gallery
        //child element - gallery space
        //create box for gallery
        const galleryaside = document.createElement('section');
        galleryaside.classList.add('blogpost_gallery')

        imageupdate.forEach(image => {
            if (post.postnr !== image.postnr) { return; }
            else {
                const smallgallery = document.createElement('div');
                smallgallery.classList.add('illbox');

                const pic = document.createElement('figure');
                pic.classList.add('figureimg');

                smallgallery.appendChild(pic);

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
                
                smallgallery.appendChild(description);

                //append smallgallery to box for gallery
                galleryaside.appendChild(smallgallery);
            }
        })

        //append child elements to posttemplate
        posttemplate.appendChild(postdate);
        posttemplate.appendChild(posttitle);
        posttemplate.appendChild(postsummary);
        posttemplate.appendChild(content);
        posttemplate.appendChild(galleryaside);
        
        //append whole post to wrapper
        container_element.appendChild(posttemplate);
    })
}
