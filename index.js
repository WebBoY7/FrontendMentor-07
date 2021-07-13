const hamBurger = document.querySelector(".ham-burger");
const menu = document.getElementById("menu")
let isOpen = false;

hamBurger.addEventListener("click",()=>{
    if(!isOpen){
        menu.style.transform = "translateY(0)"
        hamBurger.classList.add("open")
        isOpen = true;
    }else{
        menu.style.transform = "translateY(-200%)"
        hamBurger.classList.remove("open")
        isOpen = false
    }
})

// product
const productHeading = document.getElementById("product-heading");
const arrow = document.querySelector("#arrow-p");
const productSubHeading = document.querySelector(".sub-list-product");
isDroppedP = false;

productHeading.addEventListener("click",()=>{
    if(!isDroppedP){
        isDroppedP = true;
        productHeading.style.color = "hsl(207, 13%, 34%)"
        productHeading.style.fontSize = ".9rem"
        productSubHeading.style.display = "inherit";
        arrow.style.transform = "rotate(180deg)";
    }else{
        isDroppedP = false;
        productHeading.style.color = ""
        productHeading.style.fontSize = ""
        productSubHeading.style.display = "none";
        arrow.style.transform = "rotate(0)";
        arrow.src = "icon-arrow-dark.svg"
    }
})
// company
const companyHeading = document.getElementById("company-heading");
const arrowCompany = document.querySelector("#arrow-company");
const companySubHeading = document.querySelector(".sub-list-company");
isDroppedCompany = false;

companyHeading.addEventListener("click",()=>{
    if(!isDroppedCompany){
        isDroppedCompany = true;
        companyHeading.style.color = "hsl(207, 13%, 34%)"
        companyHeading.style.fontSize = ".9rem"
        companySubHeading.style.display = "inherit";
        arrowCompany.style.transform = "rotate(180deg)";
    }else{
        isDroppedCompany = false;
        companyHeading.style.color = ""
        companyHeading.style.fontSize = ""
        companySubHeading.style.display = "none";
        arrowCompany.style.transform = "rotate(0)";
    }
})
// connect
const connectHeading = document.getElementById("connect-heading");
const arrowConnect = document.querySelector("#arrow-connect");
const connectSubHeading = document.querySelector(".sub-list-connect");
isDroppedConnect = false;

connectHeading.addEventListener("click",()=>{
    if(!isDroppedConnect){
        isDroppedConnect = true;
        connectHeading.style.color = "hsl(207, 13%, 34%)"
        connectHeading.style.fontSize = ".9rem"
        connectSubHeading.style.display = "inherit";
        arrowConnect.style.transform = "rotate(180deg)";
    }else{
        isDroppedConnect = false;
        connectHeading.style.color = ""
        connectHeading.style.fontSize = ""
        connectSubHeading.style.display = "none";
        arrowConnect.style.transform = "rotate(0)";
    }
})

// desktop

const productMenuBtnD = document.getElementById("product-list-heading-d");
const productArrowD = document.getElementById("product-arrow");
const productsubListD = document.querySelector(".product-sub-list-container-d");
let isDroppedProductD = false;
productMenuBtnD.addEventListener("click",()=>{
    if(!isDroppedProductD){
        productsubListD.style.pointerEvents = "auto"
        productsubListD.style.opacity = "1";
        productArrowD.style.transform = "rotate(180deg)"
        productsubListD.style.top = "3rem"
        isDroppedProductD = true
    }else{
        productsubListD.style.pointerEvents = "none"
        isDroppedProductD = false
        productsubListD.style.opacity = "0";
        productArrowD.style.transform = "rotate(0)"
        productsubListD.style.top = "0"
    }
})

const companyMenuBtnD = document.getElementById("company-list-heading-d");
const companyArrowD = document.getElementById("company-arrow");
const companySubListD = document.querySelector(".company-sub-list-container-d");
let isDroppedCompanyD = false;
companyMenuBtnD.addEventListener("click",()=>{
    if(!isDroppedCompanyD){
        companySubListD.style.pointerEvents = "auto"
        companySubListD.style.opacity = "1";
        companyArrowD.style.transform = "rotate(180deg)"
        companySubListD.style.top = "3rem"
        isDroppedCompanyD  = true;
    }else{
        isDroppedCompanyD  = false;
        companySubListD.style.pointerEvents = "none"
        companySubListD.style.opacity = "0";
        companyArrowD.style.transform = "rotate(0)"
        companySubListD.style.top = "0"
    }
})
const connectMenuBtnD = document.getElementById("connect-list-heading-d");
const connectArrowD = document.getElementById("connect-arrow");
const connectSubListD = document.querySelector(".connect-sub-list-container-d");
let isDroppedConnectD = false;
connectMenuBtnD.addEventListener("click",()=>{
    if(!isDroppedConnectD){
        connectSubListD.style.pointerEvents = "auto"
        connectSubListD.style.opacity = "1";
        connectArrowD.style.transform = "rotate(180deg)"
        connectSubListD.style.top = "3rem"
        isDroppedConnectD  = true;
    }else{
        isDroppedConnectD  = false;
        connectSubListD.style.pointerEvents = "none"
        connectSubListD.style.opacity = "0";
        connectArrowD.style.transform = "rotate(0)"
        connectSubListD.style.top = "0"
    }
})
