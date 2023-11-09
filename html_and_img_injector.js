function addHTML() {
    let mainBodyContainer = document.getElementById("main-body");   // get container to inject HTML
    let string = mainBodyContainer.innerText;                       // get the text inside the container
    let pattern = /\[([^\]]*)\]/g;                                  // establish regex pattern to match anything inside brackets
    let sectionClass;
    let img = /\[IMG:.*\]/i;                // image identifier
    let title = /\[TITLE:.*\]/i;            // title identifier
    let section = /\[SECTION:.*\]/i;
    let section = /\[SECTIONEND:.*\]/i;
    let sectionTitle = /\[SECTIONTITLE:.*\]/i;   // section identifier
    let subSectionTitle = /\[SUBSECTIONTITLE:.*\]/i;    // subsection identifier
    let footnote = /\[FOOTNOTE:.*\]/i;      // footnote identifier
    let caption = /\[CAPTION:.*\]/i;        // caption identifier                                               // declare variable to store section names
    let newString = string.replaceAll(pattern, function(match) {

        function separator(string) {        // alternate separator based on type
            let imgSeparator = /:|\./i;     // separator for images
            let textSeparator = /:|\]/i;    // separator for text elements
            if(string.match(img)) {  
                return imgSeparator;    
            } else {
                return textSeparator;
            }
        }
    
        function splitter(string) {                            // Isolate image and text inside brackets (called in if/else below)
            let array = string.split(separator(string));       // use the image separator defined above to split the string
            let innerText = array[1];                          // take the second value as the text value or image name
            let id = innerText.replaceAll(" ","-");            // and the first as an ID with spaces replaced by hyphens                    // and return these two values in an array
            if(string.match(subSectionTitle)) {                // if the object in question is a subsection, update sectionClass
                sectionClass = id;                             // use the ID value as its class name
            }
            return [id,innerText];
        }
    
        if(match.match(img)) {
            let id = splitter(match);
            return `<img data-zoom-image id="${id[0]}" class="text-image ${sectionClass}" src="">`;
        } else if(match.match(title)) {
            let id = splitter(match);
            return `<span class="title ${sectionClass}" id="${id[0]}">${id[1]}</span>`;
        } else if(match.match(section)) {
            let id = splitter(match);
            return `<span class="section ${sectionClass}" id="${id[0]}">`;
        } else if(match.match(sectionEnd)) {
            return `</span>`;
        } else if(match.match(sectionTitle)) {
            let id = splitter(match);
            return `<span class="section ${sectionClass}" id="${id[0]}">${id[1]}</span>`;
        } else if(match.match(subSectionTitle)) {
            let id = splitter(match);
            console.log(id[1]);
            return `<span class="subsection ${sectionClass}" id="${id[0]}-section">${id[1]}</span>`;
        } else if(match.match(footnote)) {
            let id = splitter(match);
            return `<span class="footnote ${sectionClass}" id="${id[0]}">${id[1]}</span>`;
        } else if(match.match(caption)){
            let id = splitter(match);
            console.log("caption: " + id);
            return `<span class="caption ${id[0]}">${id[1]}</span>`;
        } else {
            console.log("error");
        }
    });

    mainBodyContainer.innerHTML = newString; // set this new string as HTML inside of the "main-body" element

}

/////////////////////////////////////////////////////////////

async function addImages() {
    const response = await fetch("http://api.are.na/v2/channels/csm-4vw6agqwwg4/contents?per=100&page=1")
    .then(response => response.json())
    .then(data => {
        const contents = data.contents;

        for(let i = 0; i < contents.length; i++) {
            let title = contents[i].title;
            // console.log(title);
            if(title === "024.jpeg" | title === "009.png") {
                let separator = /\./i;
                let id = title.split(separator)[0];
                // console.log(id);
                let displayURL = contents[i].image.display.url;
                let image = document.getElementById(id);
                image.src = displayURL;
            }
        }
    }) 
}

addHTML();
addImages();