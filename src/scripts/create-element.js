createElement = function (elementType, className) {
    let element = document.createElement(elementType);
    element.className = className;
    return element;
}