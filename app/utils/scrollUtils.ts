export function saveScrollPosition() {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
}

export function restoreScrollPosition() {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
}