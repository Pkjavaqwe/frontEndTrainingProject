$(document).ready(function() {
    // Footer navbar links with associated images
    const footerLinks = [
        { text: "government", href: '#', image: "./resources/images/government.png" },
        { text: "Investers", href: '#about', image: "./resources/images/investors.webp"},
        { text: "TradeUnion", href: '#services', image: "./resources/images/tradeunion.webp" }    ];

    // Generate footer navbar
    let footerNavHtml = '<div class="footer-navbar"><ul>';
    footerLinks.forEach(link => {
        footerNavHtml += `<li><a href="${link.href}" data-image="${link.image}">${link.text}</a></li>`;
    });
    footerNavHtml += '</ul></div>';

    // Append the footer navbar to the div with id="footerNavbar"
    $('#footerNavbar').append(footerNavHtml);

    // Event listeners for hover
    $('.footer-navbar a').hover(
        function() {
            // Mouse enter
            const imageUrl = $(this).data('image');
            if (imageUrl) {
                $('#previewImage').attr('src', imageUrl).show();
                $('#imagePreview').show();
            }
        },
        function() {
            // Mouse leave
            $('#previewImage').hide();
            $('#imagePreview').hide();
        }
    );
});