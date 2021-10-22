const config = {childList: true, subtree:true};

const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            Array.from(mutation.addedNodes).forEach((node)=>{
                if(node.classList && node.classList.contains('panel-content-inner')){
                    addPreviewLinkFileContainer(node)
                }else if(node.classList && node.classList.contains('wants-props-update')){
                    addPreviewLinkBBEditor(node)
                }
            })
        }
    }
};

function addPreviewLinkFileContainer(container){
    container.querySelectorAll(".file-container").forEach((file_container)=>{
        const previewLink = file_container.querySelector(".file-preview a").getAttribute("data-ally-file-preview-url");
        const filenameSpan = file_container.querySelector("span.file-name");
        filenameSpan.outerHTML = `<a href = "${previewLink}" target="_blank">${filenameSpan.outerHTML}</a>`;
    })
}

function addPreviewLinkBBEditor(file_container){
    const previewLink = file_container.getAttribute("href");
    const filenameSpan = file_container.querySelector("span.bb-file-viewer-file-text");
    console.log(filenameSpan.innerText);
    filenameSpan.outerHTML = `<a href = "${previewLink}" target="_blank">${filenameSpan.outerHTML}</a>`;;
}

const observer = new MutationObserver(callback);
observer.observe(document, config);


