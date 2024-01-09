const contentBlock = document.querySelectorAll(".content-block");
contentBlock.forEach(item => {
    item.addEventListener("mouseover", () => {
        const itemID = item.id
        addUnderline(itemID);
    })
});

contentBlock.forEach(item => {
    item.addEventListener("mouseout", () => {
        const itemID = item.id
        removeUnderline(itemID);
    })
});

function addUnderline(id) {
    const blockToChange = document.getElementById(id);
    const contentID = id + "-content"
    const contentToChange = document.getElementById(contentID);
    blockToChange.style.cssText = ` text-decoration: underline;
                                    text-decoration-color: var(--flair-color);
                                    text-decoration-thickness: 3px;`
    contentToChange.style.cssText = `text-decoration: underline;
                                    text-decoration-color: white;
                                    text-decoration-thickness: 3px;`
}

function removeUnderline(id) {
    const blockToChange = document.getElementById(id);
    const contentID = id + "-content"
    const contentToChange = document.getElementById(contentID);
    blockToChange.style.cssText = ""
}

const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const linkID = link.id
        addBorder(linkID)
    })    
});

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        const linkID = link.id
        if(link.id) { removeBorder(linkID) }
    })    
});

function addBorder(id) {
    const ids = id.split("-")
    console.log("ids: " + ids)
    const iconID = id + "-icon"
    const icon = document.getElementById(iconID)
    const content = document.getElementById(id)

    icon.classList.remove("removeMovingBorder")
    icon.classList.add("addMovingBorder")

}

function removeBorder(id) {
    const ids = id.split("-")
    console.log("ids: " + ids)
    const iconID = id + "-icon"
    const icon = document.getElementById(iconID)
    const content = document.getElementById(id)

    icon.classList.remove("addMovingBorder")
    icon.classList.add("removeMovingBorder")

}

function idSplit(ids) {
    
}
/* 
const home = document.getElementById("home-icon");
home.addEventListener("mouseover", () => {
    home.style.cssText = `  border: 3px solid var(--flair-color);
                            border-radius: 15px;`
})

home.addEventListener("mouseout", () => {
    home.style.cssText = ""
}) */