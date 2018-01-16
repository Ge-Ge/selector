/**
 * @description 返回Element的css selector
 * @param node
 * @returns {String} selector
 */
function cssSelector(node) {
    var list = [];
    var selector = '';
    // 递归Element的父元，素获取Element的信息。
    var r = function (node) {
        var object = {
            'tagName': node.tagName,
            'id': node.id,
            'className': node.className,
            'index': indexof(node) + 1
        };
        list.push(object);
        if (node.parentElement) {
            // body父级的元素不用获取
            if (node.parentElement !== document.body.parentElement)
                r(node.parentElement);
        }
    };
    r(node);
    // 生成返回的css selector字符串
    for (var i = list.length - 1; i >= 0; i--) {
        selector += list[i].tagName;
        if (list[i].id) {
            selector += "[id = '" + list[i].id + "']";
        }
        else if (list[i].className) {
            selector += "[class = '" + list[i].className + "']";
        }
        if (list[i].index > 0)
            selector += ":nth-child(" + list[i].index + ")";
        if (i > 0)
            selector += ' > ';
    }
    return selector;
}
function indexof(el) {
    if (!el.parentElement)
        return -1;
    var list = el.parentElement.children;
    if (!list)
        return -1;
    var len = list.length;
    if (indexof)
        return indexof.call(list, el);
    for (var i = 0; i < len; ++i) {
        if (el == list[i])
            return i;
    }
    return -1;
}
;
export default cssSelector;
