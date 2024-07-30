// navbar usig js

const navBarElement = [
    {nofLink: "Admin Login", href:"./adminlogin.html"},
    {nofLink: "Add Product", href:"./edit-product.html"},
    {nofLink: "Home", href:"#"},
    {nofLink: "About", href:"#"},
    {nofLink: "Contact Us", href:"#"}
]

function navbarUsingJs() {

    const navbar = document.getElementById("jsnavbar")

    const inNavbardiv = document.createElement("div")
    inNavbardiv.className = "navbar"
    
    navBarElement.forEach(element => {
        const anchorTag = document.createElement("a")
       
        anchorTag.textContent=element.nofLink
        anchorTag.href = element.href

        anchorTag.style.margin="10px";
        anchorTag.style.color="white";
        inNavbardiv.appendChild(anchorTag)
    });    
    navbar.appendChild(inNavbardiv)
}

navbarUsingJs()



