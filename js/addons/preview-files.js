const config = {childList: true, subtree:true};

const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            Array.from(mutation.addedNodes).some((node)=>{
                if(node.classList && node.classList.contains('panel-content-inner')){
                    addPreviewLink(mutation.target)
                    return true;
                }
            })
        }
    }
};

function addPreviewLink(container){
    container.querySelectorAll(".file-container").forEach((file_container)=>{
        const previewLink = file_container.querySelector(".file-preview a").getAttribute("data-ally-file-preview-url");
        const filenameSpan = file_container.querySelector("span.file-name");
        filenameSpan.innerHTML = `
            <a href = "${previewLink}">
                ${filenameSpan.innerHTML}
            </a>
        `;
    })
}

const observer = new MutationObserver(callback);
observer.observe(document, config);


