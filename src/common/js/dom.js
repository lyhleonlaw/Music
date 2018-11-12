export  function addClass(el, className){
    if (hasClass(el, className)){
        return;
    }
    let res = el.className.split(' ');
    res.push(className);
    el.className = res.join(' ');
}

export function hasClass(el, className) {
    let res = new RegExp('(^|\\s)'+className+'(\\s|$)');
    return res.test(el.className);
}