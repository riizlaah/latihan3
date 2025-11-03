function createElement(tag, prop = {}) {
    return Object.assign(document.createElement(tag), prop);
}
const nav = createElement('nav', { className: 'closeable', innerHTML: `<a href="index.html">1</a><a href="index2.html">2</a><a href="index3.html">3</a><a href="index4.html">4</a>`})
document.body.prepend(nav);
document.addEventListener('mousemove', (event) => {
    if(event.clientY < 75) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});