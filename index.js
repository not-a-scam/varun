const varun = document.getElementsByClassName("varun")[0];
const header = document.getElementsByClassName("header")[0];
const description = document.getElementsByClassName("description")[0];
const imgContainer = document.getElementsByClassName("img-container")[0];
const cta = document.getElementsByClassName("cta")[0];

const laptopWidth = 1050;

let checkClick = false;
let checkDesc = false;

const headerTop = {"initial": 0, "final":0};
const headerLeft = {"initial": 0, "final": 0};
const descLeft = {"initial": 0, "final": 0};


function openCloseMouth(delay){
    if (varun.ariaLabel === "left"){
        varun.src = "./images/open-mouth-left.png";
    } else {
        varun.src = "./images/open-mouth-right.png";
    }
    setTimeout(() => {
        if (varun.ariaLabel === "left"){
            varun.src = "./images/closed-mouth-left.png";
        } else {
            varun.src = "./images/closed-mouth-right.png";
        }
    }, delay);
}

varun.addEventListener("mouseover", () => {
    if (varun.ariaLabel === "left"){
        varun.src = "./images/open-mouth-left.png";
    } else {
        varun.src = "./images/open-mouth-right.png";
    }
});

varun.addEventListener("mouseout", () => {
    if (varun.ariaLabel === "left"){
        varun.src = "./images/closed-mouth-left.png";
    } else {
        varun.src = "./images/closed-mouth-right.png";
    }
});

varun.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/vaaaarrun/";
});

header.addEventListener("click", () => {
    let id = null;
    let pos = 0;
    let step = 0;
    let first = true;
    if (header.classList.contains("initial")){
        header.classList.remove("initial");
        document.getElementsByClassName("title")[0].innerHTML = "Hi i'm <span class=\"accent-color\">Varun</span>";
        clearInterval(id);
        openCloseMouth(300);
        id = setInterval(() => {
            const titleBg = document.getElementsByClassName("title-bg")[0];
            if (pos == 100){
                clearInterval(id);
                pos = 0;
            } else {
                pos++;
                titleBg.style.width = pos + "%";
            }
        }, 8);
        headerTop.initial = header.getBoundingClientRect().top;
        
    } else {
        if (checkClick){
            if (description.classList.contains("initial")){
                if (screen.width > laptopWidth){
                    pos = description.getBoundingClientRect().left;
                    step = pos / 500;
                    first = true;
                    id = setInterval(() => {
                        if (pos > 0){
                            if (first){
                                description.style.transform="translateX("+ pos+"px)";
                                description.classList.remove("initial");
                                openCloseMouth(300);
                                first = false;
                            } else {
                                pos -= step;
                                description.style.transform= "translateX("+ pos+"px)";
                            }
                        } else {
                            clearInterval(id);
                            pos = 0;
                        }
                    } ,1);
                } else {
                    description.classList.remove("initial");
                    openCloseMouth(300);
                }
            }
        } else {
            if (screen.width > laptopWidth){
                header.style.visibility = "hidden";
                description.innerHTML = "<div class=\"card-content\"><p>I am:</p><ul><li>Very handsome</li><li>Very cool</li><li>Varun</li></ul></div>";
                description.classList.add("card", "text-color", "sans-serif", "card-color", "initial");

                header.style.margin = "auto auto 0";
                headerTop.final = header.getBoundingClientRect().top;
                pos = headerTop.initial - headerTop.final;
                step = pos / 500;
                clearInterval(id);
                openCloseMouth(500);
                first = true;
                id = setInterval(() => {
                    if (pos > 0){
                        if (first){
                            header.style.transform= "translateY("+ pos+"px)";
                            header.style.visibility = "visible";
                            first = false;
                        } else {
                            pos -= step;
                            header.style.transform= "translateY("+ pos+"px)";
                        }
                    } else {
                        clearInterval(id);
                        pos = 0;
                    }
                } ,1);
                checkClick = true;
            } else {
                description.innerHTML = "<div class=\"card-content\"><p>I am:</p><ul><li>Very handsome</li><li>Very cool</li><li>Varun</li></ul></div>";
                description.classList.add("card", "text-color", "sans-serif", "card-color", "initial");
                header.style.margin = "auto auto 0";
                openCloseMouth(300);
                checkClick = true;
            }
        }
    }
});

description.addEventListener("click", () => {
    let id = null;
    let id1 = null;
    let posHeader = 0;
    let posDesc = 0;
    let posImgContainer = 0;
    let stepHeader = 0;
    let stepDesc = 0;
    let stepImgContainer = 0;

    let first = true;

    if (screen.width > laptopWidth){
        if (!checkDesc){
            headerLeft.initial = header.getBoundingClientRect().left;
            descLeft.initial = description.getBoundingClientRect().left;
            header.style.visibility = "hidden";
            description.style.visibility ="hidden";
            header.style.marginLeft = "0";
            description.style.margin = "auto auto auto 0";
            headerLeft.final = header.getBoundingClientRect().left;
            descLeft.final = description.getBoundingClientRect().left;


            posHeader = headerLeft.initial - headerLeft.final;
            posDesc = descLeft.initial - descLeft.final;
            posImgContainer = 0;

            stepHeader = posHeader / 500;
            stepDesc = posDesc / 500;
            stepImgContainer = imgContainer.getBoundingClientRect().right / 500;

            clearInterval(id);
            first = true;

            id = setInterval(() => {
                if (posHeader > 0){
                    if (first) {
                        header.style.transform = "translateX(" + posHeader + "px)";
                        description.style.transform = "translateX(" + posDesc + "px)";
                        imgContainer.style.transform = "translateX(-" + posImgContainer + "px)"; 
                        header.style.visibility = "visible";
                        description.style.visibility ="visible";
                        first = false;
                    } else {
                        posHeader -= stepHeader;
                        posDesc -= stepDesc;
                        posImgContainer += stepImgContainer;
                        header.style.transform = "translateX(" + posHeader + "px)";
                        description.style.transform = "translateX(" + posDesc + "px)";
                        imgContainer.style.transform = "translateX(-" + posImgContainer + "px)"; 
                    }
                } else {
                    clearInterval(id);
                    imgContainer.style.visibility = "hidden";
                    imgContainer.style.right = "0";
                    imgContainer.style.left = "auto";
                    imgContainer.style.height = "auto";
                    imgContainer.style.width = "30%";
                    imgContainer.style.transform = "translateX(0)";
                    cta.innerHTML = '<p class="text-color serif">Click here for</p><p class="text-color serif"><span class="accent-color">MORE</span> Varun</p><img class="arrow-icon" src="./images/arrow.png" alt="">';
                    varun.src = "./images/closed-mouth-right.png";
                    varun.ariaLabel = "right";
                    varun.style.height = "auto";
                    varun.style.width = "100%";
                    posImgContainer = imgContainer.getBoundingClientRect().left;
                    stepImgContainer = posImgContainer / 500;
                    first = true;

                    id1 = setInterval(() => {
                        if (posImgContainer > 0){
                            if (first){
                                imgContainer.style.transform = "translateX(" + posImgContainer + "px)";
                                imgContainer.style.visibility = "visible"; 
                                first = false; 
                            } else {
                                posImgContainer -= stepImgContainer;
                                imgContainer.style.transform = "translateX(" + posImgContainer + "px)";
                            }
                        } else {
                            clearInterval(id1);
                        }
                    }, 1);
                }
                
            }, 1);







            checkDesc = false;
        }
    }
});

