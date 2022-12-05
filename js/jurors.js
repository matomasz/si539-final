// Variable for each page element
let jurorSelect = document.getElementById("jurorDropdown");

function adjustGallery() {
    let allFigures = document.querySelectorAll("#gallery figure");
    let selectedFigure = jurorSelect.value;
    // Reworked how to iterate NodeLists through the forum page:
    // https://stackoverflow.com/questions/12194435/cannot-set-property-display-of-undefined
    if (selectedFigure === "all") {
        for (var i=0;i<allFigures.length;i+=1){
            allFigures[i].style.display = 'block';
        }
    }
    else {
        document.getElementById(selectedFigure).style.display = "block";
        for (var i=0;i<allFigures.length;i+=1){
            if (allFigures[i].id != selectedFigure){
                allFigures[i].style.display = 'none';
            }
        }
    }
}

// Set Event Listener
jurorSelect.addEventListener("change", adjustGallery);