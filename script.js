var draganddrop = (function() {
    var myX = ''; //Position on the X Axis
    var myY = ''; //Position on the y Axis
    var whichArt = ''; //Holds the value to identify which peice of art is selected

    function resetZ() {
        var elements = document.querySelectorAll('img');
        for (var i = elements.length - 1; i >=0; i--) {
            elements[i].style.zIndex = 5;
        };
    }

    function moveStart(e) {
        whichArt = e.target;
        myX = e.offsetX === undefined ? e.layerX : e.offsetX;
        myY = e.offsetY === undefined ? e.layerY : e.offsetY;
        resetZ();
        whichArt.style.zIndex = 10;
    }

    function moveDragOver(e) {
        e.preventDefault();
    }

    function moveDrop(e) {
        e.preventDefault();
        whichArt.style.left = e.pageX - myX + 'px';
        whichArt.style.top = e.pageY - myY + 'px';
    }

    function touchStart(e) {
        // e.preventDefault();
        var whichArt = e.target;
        var touch = e.touches[0];
        var moveOffsetX = whichArt.offsetLeft - touch.pageX;
        var moveOffsetY = whichArt.offsetTop - touch.pageY;
        resetZ();
        whichArt.style.zIndex = 10;
        whichArt.addEventListener('touchMove', function() {
            var positionX = touch.pageX+moveOffsetX;
            var positiony = touch.pageY+moveOffsetY;
            whichArt.style.left = positionX + 'px';
            whichArt.style.top = positiony + 'px';
        }, false);
    }

    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector('body').addEventListener('dragover', moveDragOver, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);
    
    document.querySelector('body').addEventListener('touchstart', touchStart, false);

})();