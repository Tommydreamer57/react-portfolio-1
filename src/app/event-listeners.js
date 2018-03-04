function addEventListeners() {

    // INITIAL VARIABLES / PROPERTIES

    let scrollTop = 0;
    let scrollbarTop = 0;
    let scrollbarHeight = 0;
    let contentHeight = 0;
    let viewHeight = 0;

    // SCROLLBAR

    let scrollbar = document.getElementById('scrollbar')

    // CURRENT VIEW

    let currentArr = document.getElementsByClassName('current')
    let current = currentArr[currentArr.length - 1]

    console.log(current)

    // INITIAL SCROLLBAR STYLES

    scrollbar.style.width = '7.5px'
    scrollbar.style.background = 'rgba(255, 255, 255, 0.5)'
    scrollbar.style.position = 'fixed'
    scrollbar.style.right = 'calc(2px + 4 * (100vw - 769px) / 2048)'
    scrollbar.style.top = 'calc(2px + 4 * (100vw - 769px) / 2048)'
    scrollbar.style.borderRadius = '5px'
    scrollbar.style.transition = 'height .4s ease, top .4s ease'

    // FIND HEIGHT OF CURRENT VIEW

    function findTallestNode(nodes) {
        viewHeight = window.innerHeight;
        for (let i = nodes.length - 1; i >= 0; i--) {
            if (nodes[i] !== scrollbar && (nodes[i].scrollHeight && nodes[i].clientHeight)) {
                let elHeight = Math.max(nodes[i].scrollHeight, nodes[i].clientHeight)
                contentHeight = Math.max(contentHeight, elHeight);
            }
            if (nodes[i].childNodes.length) findTallestNode(nodes[i].childNodes);
        }
    }

    // RESET SCROLLBAR TRANSITION

    function resetTransition() {
        scrollbar.style.transition = 'height .4s ease'
    }

    // SET SCROLLBAR HEIGHT

    function setHeight() {
        contentHeight = 0;
        findTallestNode([current])
        if (contentHeight <= viewHeight + 6) {
            scrollbarHeight = 0
            console.log('no scrollbar')
        }
        else {
            scrollbarHeight = (viewHeight - 6) * viewHeight / contentHeight
        }
        if (~~scrollbar.style.height.replace(/px/, "") != ~~scrollbarHeight) {
            console.log(`changing scrollbar height from ${scrollbar.style.height} to ${scrollbarHeight}`)
            scrollbar.style.transition = 'height .4s ease, top .4s ease'
            setTimeout(resetTransition, 401)
        }
        scrollbar.style.height = ~~scrollbarHeight + 'px'
    }

    // SET SCROLLBAR TOP

    function setTop() {
        scrollTop = current.scrollTop
        scrollbarTop = scrollTop * (viewHeight - 6) / contentHeight + 3
        scrollbar.style.top = scrollbarTop + 'px'
    }

    // EVENT LISTENER

    function eventListener() {
        setHeight()
        setTop()
    }

    // ADDING EVENT LISTENER

    current.addEventListener('scroll', eventListener)
    window.addEventListener('resize', eventListener)
    window.addEventListener('click', eventListener)

    eventListener()

    // RETURN OBJECT

    let methodChainer = {
        addEventListeners,
        removeEventListeners
    }

    // RETURNED METHODS

    // REMOVE EVENT LISTENERS

    function removeEventListeners() {
        current.removeEventListener('scroll', eventListener)
        window.removeEventListener('resize', eventListener)
        window.removeEventListener('click', eventListener)
        return methodChainer
    }

    return methodChainer

}

export default addEventListeners
