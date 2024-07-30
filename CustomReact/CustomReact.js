

function customReact(ReactElemennt , Container){

//     const domElement = document.createElement(ReactElemennt.type)
//     domElement.innerHTML = ReactElemennt.children
//     domElement.setAttribute('href', ReactElemennt.props.href)
//     domElement.setAttribute('target', ReactElemennt.props.target)

//     Container.appendChild(domElement);

        const domElement = document.createElement(ReactElemennt.type)
        domElement.innerHTML  = ReactElemennt.children
        for (const prop in ReactElemennt.props) {
                if(prop ==='children') continue;
                domElement.setAttribute(prop , ReactElemennt.props[prop])
        }
        Container.appendChild(domElement);
    }

const ReactElemennt = {
    type : 'a',
    props : {
    href: 'https://google.com',
    target : '_blank'
    },
    children : 'Click me open Google'
}

const mainComtainer = document.querySelector('#root')


customReact(ReactElemennt , mainComtainer)