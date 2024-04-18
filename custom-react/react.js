
function customRender(reactElement, container ){
//    const domElement = document.createElement(reactElement.type)
//    domElement.innerHTML = reactElement.children
//    domElement.setAttribute('href',reactElement.props.href)
//    domElement.setAttribute('target', reactElement.props.target)
//    container.appendChild(domElement)

    const domElement = document.createElement
    (reactElement.type)
    for(const prop in props){

    }
}
 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visint Google'
}

const mainContainer = document.getElementById("root")
customRender(reactElement, mainContainer)



