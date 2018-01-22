function addEventListeners() {

    let scrollTop = 0;
    let scrollbarTop = 0;
    let scrollbarHeight = 0;
    let contentHeight = 0;
    let viewHeight = 0;
    let scrollbar = document.getElementById('scrollbar')
    let current = document.getElementsByClassName('current')[0]

    scrollbar.style.width = '7.5px'
    scrollbar.style.background = 'rgba(255, 255, 255, 0.5)'
    scrollbar.style.position = 'fixed'
    scrollbar.style.right = '2px'
    scrollbar.style.top = '2px'
    scrollbar.style.borderRadius = '5px'
    scrollbar.style.transition = 'height .4s ease'

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

    function setHeight() {
        contentHeight = 0;
        findTallestNode(document.getElementsByClassName('current'))
        if (contentHeight <= viewHeight + 4) {
            scrollbarHeight = 0
            console.log('no scrollbar')
        }
        else {
            scrollbarHeight = (viewHeight - 4) * viewHeight / contentHeight
        }
        scrollbar.style.height = scrollbarHeight + 'px'
    }

    function setTop() {
        scrollTop = current.scrollTop
        scrollbarTop = scrollTop * (viewHeight - 4) / contentHeight + 2
        scrollbar.style.top = scrollbarTop + 'px'
    }

    function eventListener() {
        setHeight()
        setTop()
        // console.log(scrollTop, contentHeight, scrollbarTop, scrollbarHeight)
    }

    current.addEventListener('scroll', eventListener)
    window.addEventListener('resize', eventListener)
    window.addEventListener('click', eventListener)

    eventListener()

    function removeEventListeners() {
        current.removeEventListener('scroll', eventListener)
        window.removeEventListener('resize', eventListener)
        window.removeEventListener('click', eventListener)
    }

    return removeEventListeners

}

export default addEventListeners
