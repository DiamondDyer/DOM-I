const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Header 

const nav = document.querySelector("header nav")
console.log(nav)

const navLinks = document.querySelectorAll("header nav a")
console.log(navLinks)

navLinks[0].textContent = "Services"
navLinks[1].textContent = "Product"
navLinks[2].textContent = "Vision"
navLinks[3].textContent = "Features"
navLinks[4].textContent = "About"
navLinks[5].textContent = "Contact"

const h1 = document.querySelector(".cta-text h1")
console.log(h1)

h1.innerHTML = "DOM<br> Is<br> Awesome"

const btn = document.querySelector(".cta-text button")
console.log(btn)

btn.textContent = "Get Started"

const headerImg = document.querySelector(" #cta-img ")
console.log(headerImg)

headerImg.src = "img/header-img.png"



//Middle Content

const h4 = document.querySelectorAll(".text-content h4")
console.log(h4)

h4[0].textContent = "Features"
h4[1].textContent = "About"
h4[2].textContent = "Services"
h4[3].textContent = "Product"
h4[4].textContent = "Vision"

const text = document.querySelectorAll(".text-content p")
console.log(text)



text[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
text[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
text[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
text[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
text[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const middleImg = document.querySelector("#middle-img")
console.log(middleImg)

middleImg.src = "img/mid-page-accent.jpg"


//Contact

const contactH4 = document.querySelector(".contact h4")
console.log(contactH4)

contactH4.textContent = "Contact"

const contactP = document.querySelectorAll(".contact p")
console.log(contactP)

contactP[0].innerHTML ="123 Way 456 Street<br> Somewhere, USA"
contactP[1].textContent = "1 (888) 888-8888"
contactP[2].textContent = "sales@greatidea.io"


//Footer

const footerText = document.querySelector("footer p")
console.log(footerText)

footerText.textContent = "Copyright Great Idea! 2018"


//Making Links Green

navLinks.forEach((element)=>{
element.style.color = "green"
})


//Adding New Links

const newNavLink1 = document.createElement('a')
newNavLink1.textContent ="New Link"
newNavLink1.href = "#"

nav.appendChild(newNavLink1)
newNavLink1.style.color ="green"

const newNavLink2 = document.createElement('a')
newNavLink2.textContent ="New Link"
newNavLink2.href = "#"

nav.prepend(newNavLink2)
newNavLink2.style.color ="green"

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
