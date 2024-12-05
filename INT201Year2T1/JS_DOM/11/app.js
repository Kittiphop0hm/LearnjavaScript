//Top node
const rootNode = window.document;
console.log(rootNode);

const rootElement = document.documentElement;
console.log(rootElement);

console.log(rootNode.nodeName);
console.log(rootNode.nodeType);
console.log(rootNode.nodeValue);

console.log(rootElement.nodeName);
console.log(rootElement.nodeType);
console.log(rootElement.nodeValue);

if (rootElement.nodeType === Node.ELEMENT_NODE) {
  console.log("Node element");
}

let rootNodeChilds = rootNode.childNodes;
rootNodeChilds.forEach((node) => {
  console.log(`
        nodeType: ${node.nodeType}, nodeName: ${node.nodeName}
        nodeValue: ${node.nodeValue}
        `);
});

const rootNodeChildren = rootNode.children;
console.log(rootNodeChildren);
Array.from(rootNodeChildren).forEach((node) => {
  console.log(`
        nodeType: ${node.nodeType}, nodeName: ${node.nodeName}
        nodeValue: ${node.nodeValue}
        `);
});

//66130500009 กิตติภพทรงพลัง.js
//Root node body
const rootBody = window.document.body;
const rootNodeChildsBody = rootBody.childNodes;
rootNodeChildsBody.forEach((node) => {
  console.log(`
        nodeType: ${node.nodeType}, nodeName: ${node.nodeName}
        nodeValue: ${node.nodeValue}
        `);
});

const rootNodeChildrenBody = rootBody.children;
Array.from(rootNodeChildsBody).forEach((node) => {
  console.log(`
        nodeType: ${node.nodeType}, nodeName: ${node.nodeName}
        nodeValue: ${node.nodeValue}
        `);
});

//Root node head
const rootHead = window.document.head;
const rootNodeChildsHead = rootHead.childNodes;
rootNodeChildsHead.forEach((node) => {
  console.log(`
        nodeType: ${node.nodeType}, nodeName: ${node.nodeName}
        nodeValue: ${node.nodeValue}
        `);
});

const rootNodeChildrenHead = rootBody.children;
Array.from(rootNodeChildrenHead).forEach((node) => {
  console.log(`
        nodeType: ${node.nodeType}, nodeName: ${node.nodeName}
        nodeValue: ${node.nodeValue}
        `);
});

const rootElement2 = document.body
console.log(rootElement2.firstChild);
console.log(rootElement2.firstElementChild);

console.log(rootElement2.lastChild);
console.log(rootElement2.lastElementChild);

const bodyChildNodes = rootElement2.childNodes
console.log(bodyChildNodes.length);
console.log(rootElement2.parentElement);
console.log(rootElement2.parentNode);

//Go node div
console.log(rootElement2.children[2]);

const divElement = document.getElementById('dom-01')
const divAttrs = divElement.attributes
console.log(divAttrs.length);
for (let i = 0; i < divAttrs.length; i++) {
    console.log(divAttrs[i].name);
    console.log(divAttrs[i].value);
    console.log(divAttrs[i]);
}

console.log(divElement.getAttribute('id'));
console.log(divElement.getAttribute('style'));

console.log(divElement.attributes[0].parentElement);
console.log(divElement.attributes[0].parentNode);
console.log(divElement.attributes[0].ownerElement);


const pNewNode = document.createElement('p')
const bodyElement = document.body
console.log(bodyElement.appendChild(pNewNode))











