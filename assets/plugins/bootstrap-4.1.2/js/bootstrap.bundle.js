/*!
  * Bootstrap v4.1.2 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */(function (global,factory){typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')):typeof define === 'function' && define.amd ? define(['exports','jquery'],factory) : (factory((global.bootstrap = {}),global.jQuery))}(this,(function (exports,$){$ = $ && $.hasOwnProperty('default') ? $['default']:$}function getStyleComputedProperty(element,property){return property ? css[property]:css}function getOffsetParent(element){// NOTE:1 DOM access here var offsetParent = element.offsetParent;var start = order ? element1:element2;var end = order ? element2:element1}function getScroll(element){var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1]:'top';var upperSide = side === 'top' ? 'scrollTop':'scrollLeft'}function includeScroll(rect,element){var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2]:false;var modifier = subtract ? -1:1}function getBordersSize(styles,axis){var sideA = axis === 'x' ? 'Left':'Top';var sideB = sideA === 'Left' ? 'Right':'Bottom'}function getSize(axis,body,html,computedStyle){return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top':'Left') ] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right') ] : 0)}function getBoundingClientRect(element){// IE10 10 FIX:Please,don't ask, the element isn't//considered in DOM in some circumstances...//This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`//we make this check conditional for performance reasons if (horizScrollbar || vertScrollbar) { var styles = getStyleComputedProperty(element); horizScrollbar -= getBordersSize(styles,'x'); vertScrollbar -= getBordersSize(styles,'y'); result.width -= horizScrollbar; result.height -= vertScrollbar; } return getClientRect(result)}function getOffsetRectRelativeToArbitraryNode(children,parent){var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2]:false}function getViewportOffsetRectRelativeToArtbitraryNode(element){var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1]:false;var scrollTop = !excludeScroll ? getScroll(html):0;var scrollLeft = !excludeScroll ? getScroll(html, 'left'):0}function runModifiers(modifiers,data,ends){var modifiersToRun = ends === undefined ? modifiers:modifiers.slice(0,findIndex(modifiers,'name',ends))}