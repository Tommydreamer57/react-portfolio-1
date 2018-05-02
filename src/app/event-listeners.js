
// FIND HEIGHT OF CURRENT VIEW

function findTallestNode(contentHeight = 0, nodes) {
    for (let i = nodes.length - 1; i >= 0; i--) {
        if (nodes[i].scrollHeight && nodes[i].clientHeight) {
            let elHeight = Math.max(nodes[i].scrollHeight, nodes[i].clientHeight);
            contentHeight = Math.max(contentHeight, elHeight);
        }
        if (nodes[i].childNodes.length) contentHeight = findTallestNode(contentHeight, nodes[i].childNodes);
    }
    return contentHeight;
}

function addEventListeners() {

    // SCROLLBAR

    let scrollbar = document.getElementById('scrollbar');

    // CURRENT VIEW

    let currentViews = document.getElementsByClassName('current');
    let current = currentViews[currentViews.length - 1];

    // OTHER VIEWS
    let nonCurrentViews = [...document.getElementsByClassName('previous'), ...document.getElementsByClassName('next')];

    // ALL VIEWS
    let allViews = [...currentViews, ...nonCurrentViews];

    // RESET SCROLLTOP OF ALL NON-CURRENT VIEWS

    function resetScrollTop() {
        for (let i = 0; i < nonCurrentViews.length; i++) {
            let view = nonCurrentViews[i];
            setTimeout(function () {
                if (view.className !== 'current') view.scrollTop = 0;
            }, 800);
        }
        // if (window.innerWidth < 769) {
        //     for (let i = 0; i < allViews.length; i++) {
        //         let view = allViews[i]
        //         view.scrollTop = 0
        //     }
        // }
    }

    // INITIAL VARIABLES / PROPERTIES

    let scrollTop = 0;
    let scrollbarTop = 0;
    let scrollbarHeight = 0;
    let contentHeight = 0;
    let viewHeight = 0;

    // SET SCROLLBAR HEIGHT

    let timeoutList = [];

    function setHeight() {
        viewHeight = window.innerHeight;
        contentHeight = findTallestNode(null, [current]);
        // NO OVERFLOW = NO SCROLLBAR
        if (contentHeight <= viewHeight + 6) {
            scrollbarHeight = 0;
        }
        // SET SCROLLBAR HEIGHT VARIABLE
        else {
            scrollbarHeight = (viewHeight - 6) * viewHeight / contentHeight;
        }
        // IF SCROLLBAR HEIGHT CHANGES
        if (~~scrollbar.style.height.replace(/px/, "") != ~~scrollbarHeight) {
            console.log(`changing scrollbar height from ${scrollbar.style.height} to ${scrollbarHeight}`);
            // SET TRANSITION TOP FOR HEIGHT CHANGE
            console.log('adding top to scrollbar transition');
            scrollbar.style.transition = 'height .4s ease, top .4s ease';
            let timeout = setTimeout(function resetTransition() {
                console.log('resetting scrollbar transition');
                // REMOVE TRANSITION TOP AFTER HEIGHT CHANGE
                scrollbar.style.transition = 'height .4s ease';
            }, 401);
            // KEEP TRACK OF TIMEOUTS SO THEY DON'T INTERFERE WITH EACH OTHER
            timeoutList.forEach(clearTimeout);
            timeoutList.push(timeout);
            // CHANGE SCROLLBAR HEIGHT
            scrollbar.style.height = ~~scrollbarHeight + 'px';
        }
    }

    // SET SCROLLBAR TOP

    function setTop() {
        scrollTop = current.scrollTop;
        scrollbarTop = scrollTop * (viewHeight - 6) / contentHeight + 3;
        scrollbar.style.top = scrollbarTop + 'px';
    }

    // EVENT LISTENER

    function eventListener() {
        setHeight();
        setTop();
        resetScrollTop();
    }

    eventListener();

    // ADDING EVENT LISTENER

    current.addEventListener('scroll', eventListener);
    window.addEventListener('resize', eventListener);

    // RETURN OBJECT

    let eventReset = {
        addEventListeners,
        removeEventListeners
    };

    // REMOVE EVENT LISTENERS

    function removeEventListeners() {
        current.removeEventListener('scroll', eventListener);
        window.removeEventListener('resize', eventListener);
        return eventReset;
    }

    return eventReset;

};

export default addEventListeners;
