export function render(vnode, container) {
    let rootElement, rootComponent;

    function rerender() {
        rootElement.innerHTML = ""; // Clear the existing DOM
        stateIndex = 0; // Reset state index
        render(h(rootComponent), rootElement);
    }
    if (typeof vnode.nodeName === "function") {
        return render(vnode.nodeName(vnode.attributes), container);
    }



    // If vnode is a string, create a text node
    if (typeof vnode === "string") {
        container.appendChild(document.createTextNode(vnode));
        return;
    }

    // Create an actual DOM element
    const element = document.createElement(vnode.nodeName);

    // Set attributes
    if (vnode.attributes) {
        Object.entries(vnode.attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }

    // Recursively render children
    if (vnode.children) {
        vnode.children.forEach(child => render(child, element));
    }

    // Append the created element to the container
    container.appendChild(element);
}
