
const divs = document.querySelectorAll('.resizable');

divs.forEach(div => {
    let startX, startY, startWidth, startHeight;

    div.addEventListener('mousedown', function (e) {
        startX = e.clientX;
        startY = e.clientY;
        startWidth = parseInt(document.defaultView.getComputedStyle(div).width, 10);
        startHeight = parseInt(document.defaultView.getComputedStyle(div).height, 10);
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    });

    function resize(e) {
        const width = startWidth + (e.clientX - startX);
        const height = startHeight + (e.clientY - startY);

        if (width > 20) {
            div.style.width = width + 'px';
        }

        if (height > 20) {
            div.style.height = height + 'px';
        }
    }

    function stopResize() {
        document.removeEventListener('mousemove', resize);
    }
});
