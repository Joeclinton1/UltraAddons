replaceLinks();

function replaceLinks(){
    onExists(".content-navigator-container",()=>{
        console.log(document.querySelectorAll(".content-navigator-container a"))
        document.querySelectorAll(".content-navigator-container a").forEach((button)=>{
            console.log("button");
            button.addEventListener("click", ()=>{
                console.log("clicked")
                onNotExists(".file-container-panel", replaceLinks, 50)
            });
        })
    });
    
    onExists(".file-container-panel", ()=>{
        const file_container_panels = document.querySelectorAll(".file-container-panel")
        file_container_panels.forEach((file_container_panel) => {
            const previewLink = file_container_panel.querySelector(".file-preview a").getAttribute("data-ally-file-preview-url");
            const filenameSpan = file_container_panel.querySelector("span.file-name");
            filenameSpan.innerHTML = `
                <a href = "${previewLink}">
                    ${filenameSpan.innerHTML}
                </a>
            `;
        });
    });
}



