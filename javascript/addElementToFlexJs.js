
// add element to flex via js
function createCategoryElement(href, imgSrc, imgAlt, captionText) {
    // Create a new <a> element
    const anchor = document.createElement('a');
    anchor.href = href;

    // Create a new <figure> element
    const figure = document.createElement('figure');
    figure.style.margin = '0';
    figure.style.padding = '0';
    figure.style.display = 'flex';
    figure.style.flexDirection = 'column';
    figure.style.alignItems = 'center';

    // Create a new <img> element
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;
    img.height = 100;
    img.width = 100;
    img.style.display = 'block';

    // Create a new <figcaption> element
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
            imgAlt: 'Electronics',
            captionText: 'Electronics'
        },
        {
            href: './kitchenware.html',
            imgSrc: './resources/images/blender-toaster-multi-cooker-apple-260nw-2338840097.webp',
            imgAlt: 'Kitchenware',
            captionText: 'Kitchenware'
        },
        {
            href: './apparel.html',
            imgSrc: './resources/images/clothing-apparel.webp',
            imgAlt: 'Clothing-Apparel',
            captionText: 'Clothing-Apparel'
        }
    ];

    // Add each category to the container
    categoryData.forEach(data => {
        const categoryElement = createCategoryElement(data.href, data.imgSrc, data.imgAlt, data.captionText);
        categories.appendChild(categoryElement);
    });
}

// Call the function directly since script is at the end of body
addCategories();
