// Extract it in a function to avoid repetition
function getElementNameAndClasses(element) {
    let currentElementName = element.nodeName;
    let currentElementClasses = Array.from(element.classList).join('.');
    let currentElementString = currentElementClasses ? 
        currentElementName.toLowerCase() + '.' + currentElementClasses :
        currentElementName.toLowerCase();

    return currentElementString;
}

// Create empty array to collect name names with their classes
const parentsList = [];
// We need to do it once for the first element
let currentElement = document.querySelector('cite');
parentsList.unshift(getElementNameAndClasses(currentElement));
currentElement = currentElement.parentElement;

// Keep looping until there are no more parents
while(currentElement) {
    parentsList.unshift(getElementNameAndClasses(currentElement));
    // Update current element to its parent
    // if there is no parent currentElement will become null and the while loop will break
    currentElement = currentElement.parentElement;
}

// Print to the console as a string
console.log(parentsList.join(' > '));
