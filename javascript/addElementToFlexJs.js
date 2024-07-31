
// add element to flex via js
function createCategoryElement(href, imgSrc, captionText) {
    // Create a new <a> element
    const anchor = document.createElement('a');
    anchor.href = href;

    // new <figure> element
    const figure = document.createElement('figure');
    figure.style.display = 'flex';
    figure.style.flexDirection = 'column';
    figure.style.alignItems = 'center';

    // new <img> element
    const img = document.createElement('img');
    img.src = imgSrc;
    img.height = 100;
    img.width = 100;
    img.style.display = 'block';

    //new <figcaption> element
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = captionText;

    // Append <img> and <figcaption> to <figure>
    figure.appendChild(img);
    figure.appendChild(figcaption);

    // Append <figure> to <a>
    anchor.appendChild(figure);

    return anchor;
}

function addCategories() {
    const categories = document.getElementById('categories');

    // Style the container to use flexbox
    categories.style.display = 'flex';
    categories.style.flexWrap = 'row';
    categories.style.gap = '40px'; // Space between items

    // Define the category data
    const categoryData = [
        {
            href: './electronics.html',
            imgSrc: './resources/images/online-shopping-concept-brought-life-through-laptop-shopping-bags_896558-12649.jpg',           
            captionText: 'Electronics'
        },
        {
            href: './kitchenware.html',
            imgSrc: './resources/images/blender-toaster-multi-cooker-apple-260nw-2338840097.webp',    
            captionText: 'Kitchenware'
        },
        {
            href: './apparel.html',
            imgSrc: './resources/images/clothing-apparel.webp',           
            captionText: 'Clothing-Apparel'
        }
    ];

    // Add each category to the container
    categoryData.forEach(element => {
        const categoryElement = createCategoryElement(element.href, element.imgSrc, element.captionText);
        categories.appendChild(categoryElement);
    });
}
addCategories();
