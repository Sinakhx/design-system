(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('jb-time-input')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'jb-time-input'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JBTimeInput = factory(global.React, global.PropTypes));
}(this, (function (React, PropTypes) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var arrayWithHoles = _arrayWithHoles;

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  var iterableToArrayLimit = _iterableToArrayLimit;

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  var arrayLikeToArray = _arrayLikeToArray;

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  var unsupportedIterableToArray = _unsupportedIterableToArray;

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var nonIterableRest = _nonIterableRest;

  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
  }

  var slicedToArray = _slicedToArray;

  function useEvent(dom, event, handler) {
    var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    React.useEffect(function () {
      if (dom) {
        // initiate the event handler
        dom.addEventListener(event, handler, passive);
      } // this will clean up the event every time the component is re-rendered


      return function cleanup() {
        if (dom) {
          dom.removeEventListener(event, handler);
        }
      };
    });
  }

  var JBTimeInput = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
    var element = React.useRef();

    var _useState = React.useState(0),
        _useState2 = slicedToArray(_useState, 2),
        refChangeCount = _useState2[0],
        refChangeCountSetter = _useState2[1];

    React.useImperativeHandle(ref, function () {
      return element ? element.current : {};
    }, [element]);
    React.useEffect(function () {
      refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);

    function onChange(e) {
      if (props.onChange) {
        props.onChange(e);
      }
    }

    function onKeydown(e) {
      if (props.onKeydown) {
        props.onKeydown(e);
      }
    }

    function onKeyup(e) {
      if (props.onKeyup) {
        props.onKeyup(e);
      }
    }

    function onEnter(e) {
      if (props.onEnter) {
        props.onEnter(e);
      }
    }

    function onFocus(e) {
      if (props.onFocus && e instanceof FocusEvent) {
        props.onFocus(e);
      }
    }

    function onBlur(e) {
      if (props.onBlur && e instanceof FocusEvent) {
        props.onBlur(e);
      }
    }

    React.useEffect(function () {
      var value = props.value;

      if (props.value == null || props.value === undefined) {
        value = '00:00:00';
      }

      element.current.value = value;
    }, [props.value]);
    React.useEffect(function () {
      element.current.setAttribute('direction', props.direction);
    }, [props.direction]);
    React.useEffect(function () {
      element.current.validationList = props.validationList;
    }, [props.validationList]);
    React.useEffect(function () {
      if (props.secondEnabled !== null && props.secondEnabled !== undefined) {
        element.current.secondEnabled = props.secondEnabled;
      }
    }, [props.secondEnabled]);
    useEvent(element.current, 'change', onChange);
    useEvent(element.current, 'keydown', onKeydown);
    useEvent(element.current, 'keyup', onKeyup);
    useEvent(element.current, 'focus', onFocus);
    useEvent(element.current, 'blur', onBlur);
    useEvent(element.current, 'enter', onEnter);
    return /*#__PURE__*/React__default['default'].createElement("jb-time-input", {
      placeholder: props.placeholder,
      ref: element,
      "class": props.className,
      label: props.label,
      message: props.message,
      "close-button-text": props.closeButtonText
    });
  });
  JBTimeInput.propTypes = {
    label: PropTypes__default['default'].string,
    closeButtonText: PropTypes__default['default'].string,
    value: PropTypes__default['default'].string,
    onChange: PropTypes__default['default'].func,
    onKeyUp: PropTypes__default['default'].func,
    onEnter: PropTypes__default['default'].func,
    className: PropTypes__default['default'].string,
    placeholder: PropTypes__default['default'].string,
    direction: PropTypes__default['default'].string,
    validationList: PropTypes__default['default'].array,
    secondEnabled: PropTypes__default['default'].bool
  };

  return JBTimeInput;

})));
//# sourceMappingURL=JBTimeInput.umd.js.map
