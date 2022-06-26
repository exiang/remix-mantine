import {
  _extends,
  require_react_dom
} from "/build/_shared/chunk-ZYPCWYTR.js";
import {
  __commonJS,
  __toESM,
  init_react,
  require_object_assign,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment3 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment3;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    init_react();
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment3 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment3;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    init_react();
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    init_react();
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    init_react();
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    init_react();
    var ReactIs = require_react_is2();
    var assign2 = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement2, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement2(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign2({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement2(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    init_react();
    if (true) {
      ReactIs = require_react_is2();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@mantine/styles/esm/theme/MantineProvider.js
init_react();
var import_react9 = __toESM(require_react());

// node_modules/@mantine/styles/esm/theme/default-theme.js
init_react();

// node_modules/@mantine/styles/esm/theme/default-colors.js
init_react();
var DEFAULT_COLORS = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};

// node_modules/@mantine/styles/esm/theme/functions/attach-functions.js
init_react();

// node_modules/@mantine/styles/esm/theme/functions/fns/index.js
init_react();

// node_modules/@mantine/styles/esm/theme/functions/fns/font-styles/font-styles.js
init_react();
function fontStyles(theme) {
  return () => ({ fontFamily: theme.fontFamily || "sans-serif" });
}

// node_modules/@mantine/styles/esm/theme/functions/fns/focus-styles/focus-styles.js
init_react();
function focusStyles(theme) {
  return () => ({
    WebkitTapHighlightColor: "transparent",
    "&:focus": {
      outlineOffset: 2,
      outline: theme.focusRing === "always" || theme.focusRing === "auto" ? `2px solid ${theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5]}` : "none"
    },
    "&:focus:not(:focus-visible)": {
      outline: theme.focusRing === "auto" || theme.focusRing === "never" ? "none" : void 0
    }
  });
}

// node_modules/@mantine/styles/esm/theme/functions/fns/theme-color/theme-color.js
init_react();
function themeColor(theme) {
  return (color, shade, primaryFallback = true) => {
    const primaryShades = theme.colors[theme.primaryColor];
    return color in theme.colors ? theme.colors[color][shade] : primaryFallback ? primaryShades[shade] : color;
  };
}

// node_modules/@mantine/styles/esm/theme/functions/fns/gradient/gradient.js
init_react();

// node_modules/@mantine/styles/esm/theme/functions/fns/gradient/get-gradient-color-stops/get-gradient-color-stops.js
init_react();
function getGradientColorStops(colors) {
  let stops = "";
  for (let i = 1; i < colors.length - 1; i += 1) {
    stops += `${colors[i]} ${i / (colors.length - 1) * 100}%, `;
  }
  return `${colors[0]} 0%, ${stops}${colors[colors.length - 1]} 100%`;
}

// node_modules/@mantine/styles/esm/theme/functions/fns/gradient/gradient.js
function linearGradient(deg, ...colors) {
  return `linear-gradient(${deg}deg, ${getGradientColorStops(colors)})`;
}
function radialGradient(...colors) {
  return `radial-gradient(circle, ${getGradientColorStops(colors)})`;
}

// node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js
init_react();

// node_modules/@mantine/styles/esm/theme/functions/fns/size/size.js
init_react();
function size(props) {
  if (typeof props.size === "number") {
    return props.size;
  }
  return props.sizes[props.size] || props.size || props.sizes.md;
}

// node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js
function largerThan(theme) {
  return (breakpoint) => `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) + 1}px)`;
}
function smallerThan(theme) {
  return (breakpoint) => `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
}

// node_modules/@mantine/styles/esm/theme/functions/fns/rgba/rgba.js
init_react();

// node_modules/@mantine/styles/esm/theme/utils/to-rgba/to-rgba.js
init_react();
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  const parsed = parseInt(hexString, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g, b, a: a || 1 };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}

// node_modules/@mantine/styles/esm/theme/functions/fns/rgba/rgba.js
function rgba(color, alpha) {
  if (typeof color !== "string" || alpha > 1 || alpha < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// node_modules/@mantine/styles/esm/theme/functions/fns/cover/cover.js
init_react();
function cover(offset = 0) {
  return {
    position: "absolute",
    top: offset,
    right: offset,
    left: offset,
    bottom: offset
  };
}

// node_modules/@mantine/styles/esm/theme/functions/fns/darken/darken.js
init_react();
function darken(color, alpha) {
  const { r, g, b, a } = toRgba(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
}

// node_modules/@mantine/styles/esm/theme/functions/fns/lighten/lighten.js
init_react();
function lighten(color, alpha) {
  const { r, g, b, a } = toRgba(color);
  const light = (input) => Math.round(input + (255 - input) * alpha);
  return `rgba(${light(r)}, ${light(g)}, ${light(b)}, ${a})`;
}

// node_modules/@mantine/styles/esm/theme/functions/fns/radius/radius.js
init_react();
function radius(theme) {
  return (size2) => {
    if (typeof size2 === "number") {
      return size2;
    }
    const defaultRadius = typeof theme.defaultRadius === "number" ? theme.defaultRadius : theme.radius[theme.defaultRadius] || theme.defaultRadius;
    return theme.radius[size2] || size2 || defaultRadius;
  };
}

// node_modules/@mantine/styles/esm/theme/functions/fns/variant/variant.js
init_react();

// node_modules/@mantine/styles/esm/theme/functions/fns/primary-shade/primary-shade.js
init_react();
function primaryShade(theme) {
  return (colorScheme) => {
    if (typeof theme.primaryShade === "number") {
      return theme.primaryShade;
    }
    return theme.primaryShade[colorScheme || theme.colorScheme];
  };
}

// node_modules/@mantine/styles/esm/theme/functions/fns/variant/variant.js
var DEFAULT_GRADIENT = {
  from: "indigo",
  to: "cyan",
  deg: 45
};
function variant(theme) {
  const getThemeColor = themeColor(theme);
  const getPrimaryShade = primaryShade(theme);
  return ({ variant: variant2, color, gradient }) => {
    if (variant2 === "light") {
      return {
        border: "transparent",
        background: rgba(getThemeColor(color, theme.colorScheme === "dark" ? 8 : 0), theme.colorScheme === "dark" ? 0.35 : 1),
        color: color === "dark" ? theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9] : getThemeColor(color, theme.colorScheme === "dark" ? 2 : getPrimaryShade("light")),
        hover: rgba(getThemeColor(color, theme.colorScheme === "dark" ? 7 : 1), theme.colorScheme === "dark" ? 0.45 : 0.65)
      };
    }
    if (variant2 === "default") {
      return {
        border: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[4],
        background: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        hover: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[0]
      };
    }
    if (variant2 === "white") {
      return {
        border: "transparent",
        background: theme.white,
        color: getThemeColor(color, getPrimaryShade()),
        hover: null
      };
    }
    if (variant2 === "outline") {
      return {
        border: getThemeColor(color, theme.colorScheme === "dark" ? 4 : getPrimaryShade("light")),
        background: "transparent",
        color: getThemeColor(color, theme.colorScheme === "dark" ? 4 : getPrimaryShade("light")),
        hover: theme.colorScheme === "dark" ? rgba(getThemeColor(color, 4), 0.05) : rgba(getThemeColor(color, 0), 0.35)
      };
    }
    if (variant2 === "gradient") {
      const merged = {
        from: (gradient == null ? void 0 : gradient.from) || DEFAULT_GRADIENT.from,
        to: (gradient == null ? void 0 : gradient.to) || DEFAULT_GRADIENT.to,
        deg: (gradient == null ? void 0 : gradient.deg) || DEFAULT_GRADIENT.deg
      };
      return {
        background: `linear-gradient(${merged.deg}deg, ${getThemeColor(merged.from, getPrimaryShade(), false)} 0%, ${getThemeColor(merged.to, getPrimaryShade(), false)} 100%)`,
        color: theme.white,
        border: "transparent",
        hover: null
      };
    }
    if (variant2 === "subtle") {
      return {
        border: "transparent",
        background: "transparent",
        color: color === "dark" ? theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9] : getThemeColor(color, theme.colorScheme === "dark" ? 2 : getPrimaryShade("light")),
        hover: rgba(getThemeColor(color, theme.colorScheme === "dark" ? 8 : 0), theme.colorScheme === "dark" ? 0.35 : 1)
      };
    }
    return {
      border: "transparent",
      background: getThemeColor(color, getPrimaryShade()),
      color: theme.white,
      hover: getThemeColor(color, getPrimaryShade() === 9 ? 8 : getPrimaryShade() + 1)
    };
  };
}

// node_modules/@mantine/styles/esm/theme/functions/fns/hover/hover.js
init_react();
function hover(hoverStyle) {
  return {
    "@media (hover: hover)": {
      "&:hover": hoverStyle
    },
    "@media (hover: none)": {
      "&:active": hoverStyle
    }
  };
}

// node_modules/@mantine/styles/esm/theme/functions/fns/index.js
var fns = {
  fontStyles,
  themeColor,
  focusStyles,
  linearGradient,
  radialGradient,
  smallerThan,
  largerThan,
  rgba,
  size,
  cover,
  darken,
  lighten,
  radius,
  variant,
  primaryShade,
  hover
};

// node_modules/@mantine/styles/esm/theme/functions/attach-functions.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function attachFunctions(themeBase) {
  return __spreadProps(__spreadValues({}, themeBase), {
    fn: {
      fontStyles: fns.fontStyles(themeBase),
      themeColor: fns.themeColor(themeBase),
      focusStyles: fns.focusStyles(themeBase),
      largerThan: fns.largerThan(themeBase),
      smallerThan: fns.smallerThan(themeBase),
      radialGradient: fns.radialGradient,
      linearGradient: fns.linearGradient,
      rgba: fns.rgba,
      size: fns.size,
      cover: fns.cover,
      lighten: fns.lighten,
      darken: fns.darken,
      primaryShade: fns.primaryShade(themeBase),
      radius: fns.radius(themeBase),
      variant: fns.variant(themeBase),
      hover: fns.hover
    }
  });
}

// node_modules/@mantine/styles/esm/theme/default-theme.js
var MANTINE_COLORS = Object.keys(DEFAULT_COLORS);
var _DEFAULT_THEME = {
  dir: "ltr",
  primaryShade: {
    light: 6,
    dark: 8
  },
  focusRing: "auto",
  loader: "oval",
  dateFormat: "MMMM D, YYYY",
  colorScheme: "light",
  white: "#fff",
  black: "#000",
  defaultRadius: "sm",
  transitionTimingFunction: "ease",
  colors: DEFAULT_COLORS,
  lineHeight: 1.55,
  fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  primaryColor: "blue",
  shadows: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
    md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
    xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  },
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32
  },
  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24
  },
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400
  },
  headings: {
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 34, lineHeight: 1.3 },
      h2: { fontSize: 26, lineHeight: 1.35 },
      h3: { fontSize: 22, lineHeight: 1.4 },
      h4: { fontSize: 18, lineHeight: 1.45 },
      h5: { fontSize: 16, lineHeight: 1.5 },
      h6: { fontSize: 14, lineHeight: 1.5 }
    }
  },
  other: {},
  datesLocale: "en"
};
var DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);

// node_modules/@mantine/styles/esm/theme/GlobalStyles.js
init_react();
var import_react3 = __toESM(require_react());

// node_modules/@emotion/react/dist/emotion-react.browser.esm.js
init_react();
var import_react2 = __toESM(require_react());

// node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
init_react();

// node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
init_react();
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (true) {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error('There was a problem inserting the following rule: "' + rule + '"', e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet2;
}();

// node_modules/stylis/src/Enum.js
init_react();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";

// node_modules/stylis/src/Utility.js
init_react();
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/stylis/src/Parser.js
init_react();

// node_modules/stylis/src/Tokenizer.js
init_react();
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size2 = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size2; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Prefixer.js
init_react();
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}

// node_modules/stylis/src/Serializer.js
init_react();
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
init_react();
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
                case "::placeholder":
                  return serialize([
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
                  ], callback);
              }
              return "";
            });
      }
  }
}

// node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js
init_react();

// node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
init_react();
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var emotion_memoize_browser_esm_default = memoize;

// node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var last = function last2(arr) {
  return arr.length ? arr[arr.length - 1] : null;
};
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment2(element) {
  return !!element && element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
  return function(element, index, children) {
    if (element.type !== "rule")
      return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;
      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }
      unsafePseudoClasses.forEach(function(unsafePseudoClass) {
        console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
      });
    }
  };
};
var isImportRule = function isImportRule2(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement2(element) {
  element.type = "";
  element.value = "";
  element["return"] = "";
  element.children = "";
  element.props = "";
};
var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
      var attrib = node2.getAttribute("data-emotion").split(" ");
      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node2);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [stringify, true ? function(element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          currentSheet.insert(element.value + "{}");
        }
      }
    } : rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (serialized.map !== void 0) {
        currentSheet = {
          insert: function insert2(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var emotion_cache_browser_esm_default = createCache;

// node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js
init_react();
var import_react = __toESM(require_react());

// node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
init_react();
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
init_react();

// node_modules/@emotion/hash/dist/hash.browser.esm.js
init_react();
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= k >>> 24;
    h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var hash_browser_esm_default = murmur2;

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
init_react();
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ emotion_memoize_browser_esm_default(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitless_browser_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
if (true) {
  contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue3(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
      throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles2 = interpolation.styles + ";";
        if (interpolation.map !== void 0) {
          styles2 += interpolation.map;
        }
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else if (true) {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && true) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (_key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (strings[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles2 += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      if (strings[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles2 += strings[i];
    }
  }
  var sourceMap;
  if (true) {
    styles2 = styles2.replace(sourceMapPattern, function(match3) {
      sourceMap = match3;
      return "";
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = hash_browser_esm_default(styles2) + identifierName;
  if (true) {
    return {
      name,
      styles: styles2,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name,
    styles: styles2,
    next: cursor
  };
};

// node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js
var hasOwnProperty = {}.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ (0, import_react.createContext)(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ emotion_cache_browser_esm_default({
  key: "css"
}) : null);
if (true) {
  EmotionCacheContext.displayName = "EmotionCacheContext";
}
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
    var cache = (0, import_react.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ (0, import_react.createContext)({});
if (true) {
  ThemeContext.displayName = "EmotionThemeContext";
}
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var Noop = function Noop2() {
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, (0, import_react.useContext)(ThemeContext));
  if (serialized.name.indexOf("-") === -1) {
    var labelFromStack = props[labelPropName];
    if (labelFromStack) {
      serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
    }
  }
  var rules = insertStyles(cache, serialized, typeof type === "string");
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  var ele = /* @__PURE__ */ (0, import_react.createElement)(type, newProps);
  var possiblyStyleElement = /* @__PURE__ */ (0, import_react.createElement)(Noop, null);
  return /* @__PURE__ */ (0, import_react.createElement)(import_react.Fragment, null, possiblyStyleElement, ele);
});
if (true) {
  Emotion.displayName = "EmotionCssPropInternal";
}

// node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var pkg = {
  name: "@emotion/react",
  version: "11.7.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: false,
  author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.13.10",
    "@emotion/cache": "^11.7.1",
    "@emotion/serialize": "^1.0.2",
    "@emotion/sheet": "^1.1.0",
    "@emotion/utils": "^1.0.0",
    "@emotion/weak-memoize": "^0.2.5",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: true
    },
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@babel/core": "^7.13.10",
    "@emotion/css": "11.7.1",
    "@emotion/css-prettifier": "1.0.1",
    "@emotion/server": "11.4.0",
    "@emotion/styled": "11.6.0",
    "@types/react": "^16.9.11",
    dtslint: "^0.3.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact"
  }
};
var warnedAboutCssPropForGlobal = false;
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  if (!warnedAboutCssPropForGlobal && (props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, (0, import_react2.useContext)(ThemeContext));
  var sheetRef = (0, import_react2.useRef)();
  (0, import_react2.useLayoutEffect)(function() {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  (0, import_react2.useLayoutEffect)(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
if (true) {
  Global.displayName = "EmotionGlobal";
}
var classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = "";
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
          }
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}
var Noop3 = function Noop4() {
  return null;
};
var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var css = function css2() {
    if (hasRendered && true) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered);
    {
      insertStyles(cache, serialized, false);
    }
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && true) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css, classnames(args));
  };
  var content = {
    css,
    cx,
    theme: (0, import_react2.useContext)(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  var possiblyStyleElement = /* @__PURE__ */ (0, import_react2.createElement)(Noop3, null);
  return /* @__PURE__ */ (0, import_react2.createElement)(import_react2.Fragment, null, possiblyStyleElement, ele);
});
if (true) {
  ClassNames.displayName = "EmotionClassNames";
}
if (true) {
  isBrowser2 = true;
  isJest = typeof jest !== "undefined";
  if (isBrowser2 && !isJest) {
    globalContext = typeof globalThis !== "undefined" ? globalThis : isBrowser2 ? window : globalThis;
    globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    if (globalContext[globalKey]) {
      console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
    }
    globalContext[globalKey] = true;
  }
}
var isBrowser2;
var isJest;
var globalContext;
var globalKey;

// node_modules/@mantine/styles/esm/theme/GlobalStyles.js
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
function GlobalStyles({ theme }) {
  return /* @__PURE__ */ import_react3.default.createElement(Global, {
    styles: {
      "*, *::before, *::after": {
        boxSizing: "border-box"
      },
      body: __spreadProps2(__spreadValues2({}, theme.fn.fontStyles()), {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        lineHeight: theme.lineHeight,
        fontSize: theme.fontSizes.md,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      })
    }
  });
}

// node_modules/@mantine/styles/esm/theme/MantineCssVariables.js
init_react();
var import_react5 = __toESM(require_react());
function assignSizeVariables(variables, sizes5, name) {
  Object.keys(sizes5).forEach((size2) => {
    variables[`--mantine-${name}-${size2}`] = typeof sizes5[size2] === "number" ? `${sizes5[size2]}px` : sizes5[size2];
  });
}
function MantineCssVariables({ theme }) {
  const variables = {
    "--mantine-color-white": theme.white,
    "--mantine-color-black": theme.black,
    "--mantine-transition-timing-function": theme.transitionTimingFunction,
    "--mantine-line-height": `${theme.lineHeight}`,
    "--mantine-font-family": theme.fontFamily,
    "--mantine-font-family-monospace": theme.fontFamilyMonospace,
    "--mantine-font-family-headings": theme.headings.fontFamily,
    "--mantine-heading-font-weight": `${theme.headings.fontWeight}`
  };
  assignSizeVariables(variables, theme.shadows, "shadow");
  assignSizeVariables(variables, theme.fontSizes, "font-size");
  assignSizeVariables(variables, theme.radius, "radius");
  assignSizeVariables(variables, theme.spacing, "spacing");
  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--mantine-color-${color}-${index}`] = shade;
    });
  });
  const headings = theme.headings.sizes;
  Object.keys(headings).forEach((heading) => {
    variables[`--mantine-${heading}-font-size`] = `${headings[heading].fontSize}px`;
    variables[`--mantine-${heading}-line-height`] = `${headings[heading].lineHeight}`;
  });
  return /* @__PURE__ */ import_react5.default.createElement(Global, {
    styles: {
      ":root": variables
    }
  });
}

// node_modules/@mantine/styles/esm/theme/utils/merge-theme/merge-theme.js
init_react();
var __defProp3 = Object.defineProperty;
var __defProps3 = Object.defineProperties;
var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp3.call(b, prop))
      __defNormalProp3(a, prop, b[prop]);
  if (__getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(b)) {
      if (__propIsEnum3.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps3 = (a, b) => __defProps3(a, __getOwnPropDescs3(b));
function mergeTheme(currentTheme, themeOverride) {
  if (!themeOverride) {
    return currentTheme;
  }
  return Object.keys(currentTheme).reduce((acc, key) => {
    if (key === "headings" && themeOverride.headings) {
      const sizes5 = themeOverride.headings.sizes ? Object.keys(currentTheme.headings.sizes).reduce((headingsAcc, h) => {
        headingsAcc[h] = __spreadValues3(__spreadValues3({}, currentTheme.headings.sizes[h]), themeOverride.headings.sizes[h]);
        return headingsAcc;
      }, {}) : currentTheme.headings.sizes;
      return __spreadProps3(__spreadValues3({}, acc), {
        headings: __spreadProps3(__spreadValues3(__spreadValues3({}, currentTheme.headings), themeOverride.headings), {
          sizes: sizes5
        })
      });
    }
    acc[key] = typeof themeOverride[key] === "object" ? __spreadValues3(__spreadValues3({}, currentTheme[key]), themeOverride[key]) : typeof themeOverride[key] === "number" ? themeOverride[key] : themeOverride[key] || currentTheme[key];
    return acc;
  }, {});
}
function mergeThemeWithFunctions(currentTheme, themeOverride) {
  return attachFunctions(mergeTheme(currentTheme, themeOverride));
}

// node_modules/@mantine/styles/esm/theme/utils/filter-props/filter-props.js
init_react();
function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}

// node_modules/@mantine/styles/esm/theme/NormalizeCSS.js
init_react();
var import_react7 = __toESM(require_react());
var styles = {
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%"
  },
  body: {
    margin: 0
  },
  "article, aside, footer, header, nav, section, figcaption, figure, main": {
    display: "block"
  },
  h1: {
    fontSize: "2em"
  },
  hr: {
    boxSizing: "content-box",
    height: 0,
    overflow: "visible"
  },
  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  a: {
    background: "transparent",
    textDecorationSkip: "objects"
  },
  "a:active, a:hover": {
    outlineWidth: 0
  },
  "abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline"
  },
  "b, strong": {
    fontWeight: "bolder"
  },
  "code, kbp, samp": {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  dfn: {
    fontStyle: "italic"
  },
  mark: {
    backgroundColor: "#ff0",
    color: "#000"
  },
  small: {
    fontSize: "80%"
  },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  sup: {
    top: "-0.5em"
  },
  sub: {
    bottom: "-0.25em"
  },
  "audio, video": {
    display: "inline-block"
  },
  "audio:not([controls])": {
    display: "none",
    height: 0
  },
  img: {
    borderStyle: "none",
    verticalAlign: "middle"
  },
  "svg:not(:root)": {
    overflow: "hidden"
  },
  "button, input, optgroup, select, textarea": {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: 0
  },
  "button, input": {
    overflow: "visible"
  },
  "button, select": {
    textTransform: "none"
  },
  "button, [type=reset], [type=submit]": {
    WebkitAppearance: "button"
  },
  "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner": {
    borderStyle: "none",
    padding: 0
  },
  "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring": {
    outline: "1px dotted ButtonText"
  },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal"
  },
  progress: {
    display: "inline-block",
    verticalAlign: "baseline"
  },
  textarea: {
    overflow: "auto"
  },
  "[type=checkbox], [type=radio]": {
    boxSizing: "border-box",
    padding: 0
  },
  "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button": {
    height: "auto"
  },
  "[type=search]": {
    appearance: "textfield",
    outlineOffset: "-2px"
  },
  "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration": {
    appearance: "none"
  },
  "::-webkit-file-upload-button": {
    appearance: "button",
    font: "inherit"
  },
  "details, menu": {
    display: "block"
  },
  summary: {
    display: "list-item"
  },
  canvas: {
    display: "inline-block"
  },
  template: {
    display: "none"
  },
  "[hidden]": {
    display: "none"
  }
};
function NormalizeCSS() {
  return /* @__PURE__ */ import_react7.default.createElement(Global, {
    styles
  });
}

// node_modules/@mantine/styles/esm/theme/MantineProvider.js
var __defProp4 = Object.defineProperty;
var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
var __hasOwnProp4 = Object.prototype.hasOwnProperty;
var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp4.call(b, prop))
      __defNormalProp4(a, prop, b[prop]);
  if (__getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(b)) {
      if (__propIsEnum4.call(b, prop))
        __defNormalProp4(a, prop, b[prop]);
    }
  return a;
};
var MantineProviderContext = (0, import_react9.createContext)({
  theme: DEFAULT_THEME,
  styles: {},
  classNames: {},
  emotionOptions: { key: "mantine", prepend: true },
  defaultProps: {}
});
function useMantineTheme() {
  var _a;
  return ((_a = (0, import_react9.useContext)(MantineProviderContext)) == null ? void 0 : _a.theme) || DEFAULT_THEME;
}
function useMantineThemeStyles(component) {
  const ctx = (0, import_react9.useContext)(MantineProviderContext);
  return { styles: ctx.styles[component] || {}, classNames: ctx.classNames[component] || {} };
}
function useMantineEmotionOptions() {
  var _a;
  return ((_a = (0, import_react9.useContext)(MantineProviderContext)) == null ? void 0 : _a.emotionOptions) || { key: "mantine", prepend: true };
}
function useMantineDefaultProps(component, defaultProps11, props) {
  var _a, _b;
  const contextProps = ((_b = (_a = (0, import_react9.useContext)(MantineProviderContext)) == null ? void 0 : _a.defaultProps) == null ? void 0 : _b[component]) || {};
  return __spreadValues4(__spreadValues4(__spreadValues4({}, defaultProps11), contextProps), filterProps(props));
}
function MantineProvider({
  theme,
  styles: styles2 = {},
  classNames = {},
  defaultProps: defaultProps11 = {},
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  withCSSVariables = false,
  inherit = false,
  children
}) {
  const ctx = (0, import_react9.useContext)(MantineProviderContext);
  const overrides = {
    themeOverride: inherit ? __spreadValues4(__spreadValues4({}, ctx.theme), theme) : theme,
    emotionOptions: inherit ? __spreadValues4(__spreadValues4({}, ctx.emotionOptions), emotionOptions) : emotionOptions,
    styles: inherit ? __spreadValues4(__spreadValues4({}, ctx.styles), styles2) : styles2,
    classNames: inherit ? __spreadValues4(__spreadValues4({}, ctx.classNames), classNames) : classNames,
    defaultProps: inherit ? __spreadValues4(__spreadValues4({}, ctx.defaultProps), defaultProps11) : defaultProps11
  };
  const mergedTheme = mergeThemeWithFunctions(DEFAULT_THEME, overrides.themeOverride);
  return /* @__PURE__ */ import_react9.default.createElement(MantineProviderContext.Provider, {
    value: {
      theme: mergedTheme,
      styles: overrides.styles,
      classNames: overrides.classNames,
      emotionOptions: overrides.emotionOptions,
      defaultProps: overrides.defaultProps
    }
  }, withNormalizeCSS && /* @__PURE__ */ import_react9.default.createElement(NormalizeCSS, null), withGlobalStyles && /* @__PURE__ */ import_react9.default.createElement(GlobalStyles, {
    theme: mergedTheme
  }), withCSSVariables && /* @__PURE__ */ import_react9.default.createElement(MantineCssVariables, {
    theme: mergedTheme
  }), children);
}
MantineProvider.displayName = "@mantine/core/MantineProvider";

// node_modules/@mantine/styles/esm/index.js
init_react();

// node_modules/@mantine/styles/esm/theme/utils/get-default-z-index/get-default-z-index.js
init_react();
var elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400
};
function getDefaultZIndex(level) {
  return elevations[level];
}

// node_modules/@mantine/styles/esm/theme/utils/extract-system-styles/extract-system-styles.js
init_react();
var __getOwnPropSymbols5 = Object.getOwnPropertySymbols;
var __hasOwnProp5 = Object.prototype.hasOwnProperty;
var __propIsEnum5 = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols5)
    for (var prop of __getOwnPropSymbols5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function extractSystemStyles(others) {
  const _a = others, { m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr } = _a, rest = __objRest(_a, ["m", "mx", "my", "mt", "mb", "ml", "mr", "p", "px", "py", "pt", "pb", "pl", "pr"]);
  const systemStyles = { m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr };
  Object.keys(systemStyles).forEach((key) => {
    if (systemStyles[key] === void 0) {
      delete systemStyles[key];
    }
  });
  return { systemStyles, rest };
}

// node_modules/@mantine/styles/esm/tss/create-styles.js
init_react();

// node_modules/@mantine/styles/esm/tss/utils/from-entries/from-entries.js
init_react();
function fromEntries(entries) {
  const o = {};
  Object.keys(entries).forEach((key) => {
    const [k, v] = entries[key];
    o[k] = v;
  });
  return o;
}

// node_modules/@mantine/styles/esm/tss/use-css.js
init_react();

// node_modules/clsx/dist/clsx.m.js
init_react();
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// node_modules/@mantine/styles/esm/tss/utils/use-guaranteed-memo/use-guaranteed-memo.js
init_react();
var import_react10 = __toESM(require_react());
function useGuaranteedMemo(fn, deps) {
  const ref = (0, import_react10.useRef)();
  if (!ref.current || deps.length !== ref.current.prevDeps.length || ref.current.prevDeps.map((v, i) => v === deps[i]).indexOf(false) >= 0) {
    ref.current = {
      v: fn(),
      prevDeps: [...deps]
    };
  }
  return ref.current.v;
}

// node_modules/@mantine/styles/esm/tss/use-emotion-cache.js
init_react();
var defaultCacheOptions = {
  key: "mantine",
  prepend: true
};
var { getCache } = (() => {
  let cache;
  let _key = defaultCacheOptions.key;
  function _getCache(options) {
    if (cache === void 0 || _key !== (options == null ? void 0 : options.key)) {
      _key = (options == null ? void 0 : options.key) || "mantine";
      cache = emotion_cache_browser_esm_default((options == null ? void 0 : options.key) ? options : defaultCacheOptions);
    }
    return cache;
  }
  return { getCache: _getCache };
})();
function useEmotionCache() {
  const options = useMantineEmotionOptions();
  return getCache(options);
}

// node_modules/@mantine/styles/esm/tss/use-css.js
var __defProp5 = Object.defineProperty;
var __getOwnPropSymbols6 = Object.getOwnPropertySymbols;
var __hasOwnProp6 = Object.prototype.hasOwnProperty;
var __propIsEnum6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp5 = (obj, key, value) => key in obj ? __defProp5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp6.call(b, prop))
      __defNormalProp5(a, prop, b[prop]);
  if (__getOwnPropSymbols6)
    for (var prop of __getOwnPropSymbols6(b)) {
      if (__propIsEnum6.call(b, prop))
        __defNormalProp5(a, prop, b[prop]);
    }
  return a;
};
var refPropertyName = "ref";
function getRef(args) {
  let ref;
  if (args.length !== 1) {
    return { args, ref };
  }
  const [arg] = args;
  if (!(arg instanceof Object)) {
    return { args, ref };
  }
  if (!(refPropertyName in arg)) {
    return { args, ref };
  }
  ref = arg[refPropertyName];
  const argCopy = __spreadValues5({}, arg);
  delete argCopy[refPropertyName];
  return { args: [argCopy], ref };
}
var { cssFactory } = (() => {
  function merge2(registered, css, className) {
    const registeredStyles = [];
    const rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css(registeredStyles);
  }
  function _cssFactory(params) {
    const { cache } = params;
    const css = (...styles2) => {
      const { ref, args } = getRef(styles2);
      const serialized = serializeStyles(args, cache.registered);
      insertStyles(cache, serialized, false);
      return `${cache.key}-${serialized.name}${ref === void 0 ? "" : ` ${ref}`}`;
    };
    const cx = (...args) => merge2(cache.registered, css, clsx_m_default(args));
    return { css, cx };
  }
  return { cssFactory: _cssFactory };
})();
function useCss() {
  const cache = useEmotionCache();
  return useGuaranteedMemo(() => cssFactory({ cache }), [cache]);
}

// node_modules/@mantine/styles/esm/tss/utils/merge-class-names/merge-class-names.js
init_react();
function mergeClassNames(cx, classes, themeClassNames, classNames, name) {
  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = cx(classes[className], themeClassNames !== null && themeClassNames[className], classNames != null && classNames[className], name ? `mantine-${name}-${className}` : null);
    return acc;
  }, {});
}

// node_modules/@mantine/styles/esm/tss/create-styles.js
function createStyles(getCssObjectOrCssObject) {
  const getCssObject = typeof getCssObjectOrCssObject === "function" ? getCssObjectOrCssObject : () => getCssObjectOrCssObject;
  function useStyles10(params, options) {
    const theme = useMantineTheme();
    const { styles: themeStyles, classNames: themeClassNames } = useMantineThemeStyles(options == null ? void 0 : options.name);
    const { css, cx } = useCss();
    function createRef(refName) {
      return `__mantine-ref-${refName || ""}`;
    }
    const cssObject = getCssObject(theme, params, createRef);
    const _styles = typeof (options == null ? void 0 : options.styles) === "function" ? options == null ? void 0 : options.styles(theme) : (options == null ? void 0 : options.styles) || {};
    const _themeStyles = typeof themeStyles === "function" ? themeStyles(theme, params || {}) : themeStyles || {};
    const classes = fromEntries(Object.keys(cssObject).map((key) => {
      const mergedStyles = cx(css(cssObject[key]), css(_themeStyles[key]), css(_styles[key]));
      return [key, mergedStyles];
    }));
    return {
      classes: mergeClassNames(cx, classes, themeClassNames, options == null ? void 0 : options.classNames, options == null ? void 0 : options.name),
      cx,
      theme
    };
  }
  return useStyles10;
}

// node_modules/@mantine/core/esm/components/Button/Button.js
init_react();
var import_react16 = __toESM(require_react());

// node_modules/@mantine/core/esm/components/Button/Button.styles.js
init_react();

// node_modules/@mantine/core/esm/components/Input/Input.styles.js
init_react();
var __defProp6 = Object.defineProperty;
var __defProps4 = Object.defineProperties;
var __getOwnPropDescs4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols7 = Object.getOwnPropertySymbols;
var __hasOwnProp7 = Object.prototype.hasOwnProperty;
var __propIsEnum7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp6 = (obj, key, value) => key in obj ? __defProp6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp7.call(b, prop))
      __defNormalProp6(a, prop, b[prop]);
  if (__getOwnPropSymbols7)
    for (var prop of __getOwnPropSymbols7(b)) {
      if (__propIsEnum7.call(b, prop))
        __defNormalProp6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps4 = (a, b) => __defProps4(a, __getOwnPropDescs4(b));
var sizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60
};
var useStyles = createStyles((theme, {
  size: size2,
  multiline,
  radius: radius2,
  variant: variant2,
  invalid,
  rightSectionWidth,
  withRightSection,
  iconWidth
}) => {
  const invalidColor = theme.colors.red[theme.colorScheme === "dark" ? 6 : 7];
  const sizeStyles = variant2 === "default" || variant2 === "filled" ? {
    minHeight: theme.fn.size({ size: size2, sizes }),
    paddingLeft: theme.fn.size({ size: size2, sizes }) / 3,
    paddingRight: withRightSection ? rightSectionWidth : theme.fn.size({ size: size2, sizes }) / 3,
    borderRadius: theme.fn.radius(radius2)
  } : null;
  return {
    wrapper: {
      position: "relative"
    },
    input: variant2 === "headless" ? {} : __spreadProps4(__spreadValues6(__spreadProps4(__spreadValues6({}, theme.fn.fontStyles()), {
      height: multiline ? variant2 === "unstyled" ? void 0 : "auto" : theme.fn.size({ size: size2, sizes }),
      WebkitTapHighlightColor: "transparent",
      lineHeight: multiline ? theme.lineHeight : `${theme.fn.size({ size: size2, sizes }) - 2}px`,
      appearance: "none",
      resize: "none",
      boxSizing: "border-box",
      fontSize: theme.fn.size({ size: size2, sizes: theme.fontSizes }),
      width: "100%",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      display: "block",
      textAlign: "left"
    }), sizeStyles), {
      "&:disabled": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
        color: theme.colors.dark[2],
        opacity: 0.6,
        cursor: "not-allowed",
        "&::placeholder": {
          color: theme.colors.dark[2]
        }
      },
      "&::placeholder": {
        opacity: 1,
        userSelect: "none",
        color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
      },
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
        appearance: "none"
      },
      "&[type=number]": {
        MozAppearance: "textfield"
      }
    }),
    defaultVariant: {
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[4]}`,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      transition: "border-color 100ms ease",
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 8 : 5]
      }
    },
    filledVariant: {
      border: "1px solid transparent",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: `${theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 8 : 5]} !important`
      }
    },
    unstyledVariant: {
      borderWidth: 0,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      backgroundColor: "transparent",
      minHeight: 28,
      outline: 0,
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: "transparent"
      },
      "&:disabled": {
        backgroundColor: "transparent",
        "&:focus, &:focus-within": {
          outline: "none",
          borderColor: "transparent"
        }
      }
    },
    withIcon: {
      paddingLeft: typeof iconWidth === "number" ? iconWidth : theme.fn.size({ size: size2, sizes })
    },
    invalid: {
      color: invalidColor,
      borderColor: invalidColor,
      "&::placeholder": {
        opacity: 1,
        color: invalidColor
      }
    },
    disabled: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
      color: theme.colors.dark[2],
      opacity: 0.6,
      cursor: "not-allowed",
      "&::placeholder": {
        color: theme.colors.dark[2]
      }
    },
    icon: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: 1,
      left: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: typeof iconWidth === "number" ? iconWidth : theme.fn.size({ size: size2, sizes }),
      color: invalid ? theme.colors.red[theme.colorScheme === "dark" ? 6 : 7] : theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5]
    },
    rightSection: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: rightSectionWidth
    }
  };
});

// node_modules/@mantine/core/esm/components/Button/Button.styles.js
var __defProp7 = Object.defineProperty;
var __defProps5 = Object.defineProperties;
var __getOwnPropDescs5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols8 = Object.getOwnPropertySymbols;
var __hasOwnProp8 = Object.prototype.hasOwnProperty;
var __propIsEnum8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp7 = (obj, key, value) => key in obj ? __defProp7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp8.call(b, prop))
      __defNormalProp7(a, prop, b[prop]);
  if (__getOwnPropSymbols8)
    for (var prop of __getOwnPropSymbols8(b)) {
      if (__propIsEnum8.call(b, prop))
        __defNormalProp7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps5 = (a, b) => __defProps5(a, __getOwnPropDescs5(b));
var sizes2 = {
  xs: {
    height: sizes.xs,
    padding: "0 14px"
  },
  sm: {
    height: sizes.sm,
    padding: "0 18px"
  },
  md: {
    height: sizes.md,
    padding: "0 22px"
  },
  lg: {
    height: sizes.lg,
    padding: "0 26px"
  },
  xl: {
    height: sizes.xl,
    padding: "0 32px"
  },
  "compact-xs": {
    height: 22,
    padding: "0 7px"
  },
  "compact-sm": {
    height: 26,
    padding: "0 8px"
  },
  "compact-md": {
    height: 30,
    padding: "0 10px"
  },
  "compact-lg": {
    height: 34,
    padding: "0 12px"
  },
  "compact-xl": {
    height: 40,
    padding: "0 14px"
  }
};
var heights = Object.keys(sizes2).reduce((acc, size2) => {
  acc[size2] = sizes2[size2].height;
  return acc;
}, {});
var getSizeStyles = ({ compact, size: size2 }) => {
  if (!compact) {
    return sizes2[size2];
  }
  return sizes2[`compact-${size2}`];
};
var getWidthStyles = (fullWidth) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto"
});
function getVariantStyles({ variant: variant2, theme, color }) {
  const colors = theme.fn.variant({ color, variant: variant2 });
  return __spreadValues7({
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
    backgroundImage: colors.background,
    color: colors.color
  }, theme.fn.hover({
    backgroundColor: colors.hover
  }));
}
var useStyles2 = createStyles((theme, {
  color,
  size: size2,
  radius: radius2,
  fullWidth,
  compact,
  gradientFrom,
  gradientTo,
  gradientDeg
}, getRef2) => {
  const gradient = theme.fn.variant({
    color,
    variant: "gradient",
    gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg }
  });
  return {
    loading: {
      ref: getRef2("loading"),
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.dark[7], 0.5) : "rgba(255, 255, 255, .5)",
        borderRadius: theme.fn.radius(radius2),
        cursor: "not-allowed"
      }
    },
    outline: getVariantStyles({ variant: "outline", theme, color }),
    filled: getVariantStyles({ variant: "filled", theme, color }),
    light: getVariantStyles({ variant: "light", theme, color }),
    default: getVariantStyles({ variant: "default", theme, color }),
    white: getVariantStyles({ variant: "white", theme, color }),
    subtle: getVariantStyles({ variant: "subtle", theme, color }),
    gradient: {
      border: 0,
      backgroundImage: gradient.background,
      color: gradient.color,
      "&:hover": theme.fn.hover({
        backgroundSize: "200%"
      })
    },
    root: __spreadProps5(__spreadValues7(__spreadValues7(__spreadValues7(__spreadValues7({}, getSizeStyles({ compact, size: size2 })), theme.fn.fontStyles()), theme.fn.focusStyles()), getWidthStyles(fullWidth)), {
      borderRadius: theme.fn.radius(radius2),
      fontWeight: 600,
      position: "relative",
      lineHeight: 1,
      fontSize: theme.fn.size({ size: size2, sizes: theme.fontSizes }),
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",
      boxSizing: "border-box",
      textDecoration: "none",
      cursor: "pointer",
      appearance: "none",
      WebkitAppearance: "none",
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      [`&:not(.${getRef2("loading")}):disabled`]: {
        borderColor: "transparent",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
        cursor: "not-allowed"
      }
    }),
    icon: {
      display: "flex",
      alignItems: "center"
    },
    leftIcon: {
      marginRight: 10
    },
    rightIcon: {
      marginLeft: 10
    },
    inner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      overflow: "visible"
    },
    label: {
      whiteSpace: "nowrap",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    }
  };
});
var Button_styles_default = useStyles2;

// node_modules/@mantine/core/esm/components/Loader/Loader.js
init_react();
var import_react15 = __toESM(require_react());

// node_modules/@mantine/core/esm/components/Loader/loaders/Bars.js
init_react();
var import_react11 = __toESM(require_react());
var __defProp8 = Object.defineProperty;
var __getOwnPropSymbols9 = Object.getOwnPropertySymbols;
var __hasOwnProp9 = Object.prototype.hasOwnProperty;
var __propIsEnum9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp8 = (obj, key, value) => key in obj ? __defProp8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp9.call(b, prop))
      __defNormalProp8(a, prop, b[prop]);
  if (__getOwnPropSymbols9)
    for (var prop of __getOwnPropSymbols9(b)) {
      if (__propIsEnum9.call(b, prop))
        __defNormalProp8(a, prop, b[prop]);
    }
  return a;
};
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp9.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols9)
    for (var prop of __getOwnPropSymbols9(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum9.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Bars(_a) {
  var _b = _a, { size: size2, color } = _b, others = __objRest2(_b, ["size", "color"]);
  return /* @__PURE__ */ import_react11.default.createElement("svg", __spreadValues8({
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    width: `${size2}px`
  }, others), /* @__PURE__ */ import_react11.default.createElement("rect", {
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ import_react11.default.createElement("rect", {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ import_react11.default.createElement("rect", {
    x: "60",
    width: "15",
    height: "140",
    rx: "6"
  }, /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "y",
    begin: "0s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ import_react11.default.createElement("rect", {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ import_react11.default.createElement("rect", {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ import_react11.default.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
}

// node_modules/@mantine/core/esm/components/Loader/loaders/Oval.js
init_react();
var import_react12 = __toESM(require_react());
var __defProp9 = Object.defineProperty;
var __getOwnPropSymbols10 = Object.getOwnPropertySymbols;
var __hasOwnProp10 = Object.prototype.hasOwnProperty;
var __propIsEnum10 = Object.prototype.propertyIsEnumerable;
var __defNormalProp9 = (obj, key, value) => key in obj ? __defProp9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp10.call(b, prop))
      __defNormalProp9(a, prop, b[prop]);
  if (__getOwnPropSymbols10)
    for (var prop of __getOwnPropSymbols10(b)) {
      if (__propIsEnum10.call(b, prop))
        __defNormalProp9(a, prop, b[prop]);
    }
  return a;
};
var __objRest3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp10.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols10)
    for (var prop of __getOwnPropSymbols10(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum10.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Oval(_a) {
  var _b = _a, { size: size2, color } = _b, others = __objRest3(_b, ["size", "color"]);
  return /* @__PURE__ */ import_react12.default.createElement("svg", __spreadValues9({
    width: `${size2}px`,
    height: `${size2}px`,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color
  }, others), /* @__PURE__ */ import_react12.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ import_react12.default.createElement("g", {
    transform: "translate(2.5 2.5)",
    strokeWidth: "5"
  }, /* @__PURE__ */ import_react12.default.createElement("circle", {
    strokeOpacity: ".5",
    cx: "16",
    cy: "16",
    r: "16"
  }), /* @__PURE__ */ import_react12.default.createElement("path", {
    d: "M32 16c0-9.94-8.06-16-16-16"
  }, /* @__PURE__ */ import_react12.default.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 16 16",
    to: "360 16 16",
    dur: "1s",
    repeatCount: "indefinite"
  })))));
}

// node_modules/@mantine/core/esm/components/Loader/loaders/Dots.js
init_react();
var import_react13 = __toESM(require_react());
var __defProp10 = Object.defineProperty;
var __getOwnPropSymbols11 = Object.getOwnPropertySymbols;
var __hasOwnProp11 = Object.prototype.hasOwnProperty;
var __propIsEnum11 = Object.prototype.propertyIsEnumerable;
var __defNormalProp10 = (obj, key, value) => key in obj ? __defProp10(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues10 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp11.call(b, prop))
      __defNormalProp10(a, prop, b[prop]);
  if (__getOwnPropSymbols11)
    for (var prop of __getOwnPropSymbols11(b)) {
      if (__propIsEnum11.call(b, prop))
        __defNormalProp10(a, prop, b[prop]);
    }
  return a;
};
var __objRest4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp11.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols11)
    for (var prop of __getOwnPropSymbols11(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum11.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Dots(_a) {
  var _b = _a, { size: size2, color } = _b, others = __objRest4(_b, ["size", "color"]);
  return /* @__PURE__ */ import_react13.default.createElement("svg", __spreadValues10({
    width: `${size2}px`,
    height: `${size2 / 4}px`,
    viewBox: "0 0 120 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, others), /* @__PURE__ */ import_react13.default.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15"
  }, /* @__PURE__ */ import_react13.default.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ import_react13.default.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ import_react13.default.createElement("circle", {
    cx: "60",
    cy: "15",
    r: "9",
    fillOpacity: "0.3"
  }, /* @__PURE__ */ import_react13.default.createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ import_react13.default.createElement("animate", {
    attributeName: "fill-opacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ import_react13.default.createElement("circle", {
    cx: "105",
    cy: "15",
    r: "15"
  }, /* @__PURE__ */ import_react13.default.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ import_react13.default.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
}

// node_modules/@mantine/core/esm/components/Box/Box.js
init_react();
var import_react14 = __toESM(require_react());

// node_modules/@mantine/core/esm/components/Box/use-sx/use-sx.js
init_react();

// node_modules/@mantine/core/esm/components/Box/use-sx/get-system-styles/get-system-styles.js
init_react();
var SYSTEM_PROPS = {
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight"
};
var NEGATIVE_VALUES = ["-xs", "-sm", "-md", "-lg", "-xl"];
function isValidSizeValue(margin) {
  return typeof margin === "string" || typeof margin === "number";
}
function getSizeValue(margin, theme) {
  if (NEGATIVE_VALUES.includes(margin)) {
    return theme.fn.size({ size: margin.replace("-", ""), sizes: theme.spacing }) * -1;
  }
  return theme.fn.size({ size: margin, sizes: theme.spacing });
}
function getSystemStyles(systemStyles, theme) {
  const styles2 = {};
  if (isValidSizeValue(systemStyles.p)) {
    const value = getSizeValue(systemStyles.p, theme);
    styles2.padding = value;
  }
  if (isValidSizeValue(systemStyles.m)) {
    const value = getSizeValue(systemStyles.m, theme);
    styles2.margin = value;
  }
  if (isValidSizeValue(systemStyles.py)) {
    const value = getSizeValue(systemStyles.py, theme);
    styles2.paddingTop = value;
    styles2.paddingBottom = value;
  }
  if (isValidSizeValue(systemStyles.px)) {
    const value = getSizeValue(systemStyles.px, theme);
    styles2.paddingLeft = value;
    styles2.paddingRight = value;
  }
  if (isValidSizeValue(systemStyles.my)) {
    const value = getSizeValue(systemStyles.my, theme);
    styles2.marginTop = value;
    styles2.marginBottom = value;
  }
  if (isValidSizeValue(systemStyles.mx)) {
    const value = getSizeValue(systemStyles.mx, theme);
    styles2.marginLeft = value;
    styles2.marginRight = value;
  }
  Object.keys(SYSTEM_PROPS).forEach((property) => {
    if (isValidSizeValue(systemStyles[property])) {
      styles2[SYSTEM_PROPS[property]] = theme.fn.size({
        size: getSizeValue(systemStyles[property], theme),
        sizes: theme.spacing
      });
    }
  });
  return styles2;
}

// node_modules/@mantine/core/esm/components/Box/use-sx/use-sx.js
function extractSx(sx, theme) {
  return typeof sx === "function" ? sx(theme) : sx;
}
function useSx(sx, systemProps, className) {
  const theme = useMantineTheme();
  const { css, cx } = useCss();
  if (Array.isArray(sx)) {
    return cx(className, css(getSystemStyles(systemProps, theme)), sx.map((partial) => css(extractSx(partial, theme))));
  }
  return cx(className, css(extractSx(sx, theme)), css(getSystemStyles(systemProps, theme)));
}

// node_modules/@mantine/core/esm/components/Box/Box.js
var __defProp11 = Object.defineProperty;
var __getOwnPropSymbols12 = Object.getOwnPropertySymbols;
var __hasOwnProp12 = Object.prototype.hasOwnProperty;
var __propIsEnum12 = Object.prototype.propertyIsEnumerable;
var __defNormalProp11 = (obj, key, value) => key in obj ? __defProp11(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues11 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp12.call(b, prop))
      __defNormalProp11(a, prop, b[prop]);
  if (__getOwnPropSymbols12)
    for (var prop of __getOwnPropSymbols12(b)) {
      if (__propIsEnum12.call(b, prop))
        __defNormalProp11(a, prop, b[prop]);
    }
  return a;
};
var __objRest5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp12.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols12)
    for (var prop of __getOwnPropSymbols12(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum12.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Box = (0, import_react14.forwardRef)((_a, ref) => {
  var _b = _a, { className, component, style, sx } = _b, others = __objRest5(_b, ["className", "component", "style", "sx"]);
  const { systemStyles, rest } = extractSystemStyles(others);
  const Element2 = component || "div";
  return /* @__PURE__ */ import_react14.default.createElement(Element2, __spreadValues11({
    ref,
    className: useSx(sx, systemStyles, className),
    style
  }, rest));
});
Box.displayName = "@mantine/core/Box";

// node_modules/@mantine/core/esm/components/Loader/Loader.js
var __defProp12 = Object.defineProperty;
var __getOwnPropSymbols13 = Object.getOwnPropertySymbols;
var __hasOwnProp13 = Object.prototype.hasOwnProperty;
var __propIsEnum13 = Object.prototype.propertyIsEnumerable;
var __defNormalProp12 = (obj, key, value) => key in obj ? __defProp12(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues12 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp13.call(b, prop))
      __defNormalProp12(a, prop, b[prop]);
  if (__getOwnPropSymbols13)
    for (var prop of __getOwnPropSymbols13(b)) {
      if (__propIsEnum13.call(b, prop))
        __defNormalProp12(a, prop, b[prop]);
    }
  return a;
};
var __objRest6 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp13.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols13)
    for (var prop of __getOwnPropSymbols13(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum13.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var LOADER_SIZES = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58
};
var defaultProps = {
  size: "md"
};
function Loader(props) {
  const _a = useMantineDefaultProps("Loader", defaultProps, props), {
    size: size2 = "md",
    color,
    variant: variant2
  } = _a, others = __objRest6(_a, [
    "size",
    "color",
    "variant"
  ]);
  const theme = useMantineTheme();
  const defaultLoader = variant2 in LOADERS ? variant2 : theme.loader;
  const _color = color || theme.primaryColor;
  return /* @__PURE__ */ import_react15.default.createElement(Box, __spreadValues12({
    role: "presentation",
    component: LOADERS[defaultLoader] || LOADERS.bars,
    size: theme.fn.size({ size: size2, sizes: LOADER_SIZES }),
    color: _color in theme.colors ? theme.fn.themeColor(_color, theme.colorScheme === "dark" ? 4 : theme.fn.primaryShade("light")) : color
  }, others));
}
Loader.displayName = "@mantine/core/Loader";

// node_modules/@mantine/core/esm/components/Button/Button.js
var __defProp13 = Object.defineProperty;
var __getOwnPropSymbols14 = Object.getOwnPropertySymbols;
var __hasOwnProp14 = Object.prototype.hasOwnProperty;
var __propIsEnum14 = Object.prototype.propertyIsEnumerable;
var __defNormalProp13 = (obj, key, value) => key in obj ? __defProp13(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues13 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp14.call(b, prop))
      __defNormalProp13(a, prop, b[prop]);
  if (__getOwnPropSymbols14)
    for (var prop of __getOwnPropSymbols14(b)) {
      if (__propIsEnum14.call(b, prop))
        __defNormalProp13(a, prop, b[prop]);
    }
  return a;
};
var __objRest7 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp14.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols14)
    for (var prop of __getOwnPropSymbols14(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum14.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps2 = {
  size: "sm",
  type: "button",
  variant: "filled",
  loaderPosition: "left",
  gradient: { from: "blue", to: "cyan", deg: 45 }
};
var Button = (0, import_react16.forwardRef)((props, ref) => {
  const _a = useMantineDefaultProps("Button", defaultProps2, props), {
    className,
    size: size2,
    color,
    type,
    disabled,
    children,
    leftIcon,
    rightIcon,
    fullWidth,
    variant: variant2,
    radius: radius2,
    component,
    uppercase,
    compact,
    loading,
    loaderPosition,
    loaderProps,
    gradient,
    classNames,
    styles: styles2
  } = _a, others = __objRest7(_a, [
    "className",
    "size",
    "color",
    "type",
    "disabled",
    "children",
    "leftIcon",
    "rightIcon",
    "fullWidth",
    "variant",
    "radius",
    "component",
    "uppercase",
    "compact",
    "loading",
    "loaderPosition",
    "loaderProps",
    "gradient",
    "classNames",
    "styles"
  ]);
  const { classes, cx, theme } = Button_styles_default({
    radius: radius2,
    color,
    size: size2,
    fullWidth,
    compact,
    gradientFrom: gradient.from,
    gradientTo: gradient.to,
    gradientDeg: gradient.deg
  }, { classNames, styles: styles2, name: "Button" });
  const colors = theme.fn.variant({ color, variant: variant2 });
  const loader = /* @__PURE__ */ import_react16.default.createElement(Loader, __spreadValues13({
    color: colors.color,
    size: theme.fn.size({ size: size2, sizes: heights }) / 2
  }, loaderProps));
  return /* @__PURE__ */ import_react16.default.createElement(Box, __spreadValues13({
    component: component || "button",
    className: cx(classes[variant2], { [classes.loading]: loading }, classes.root, className),
    type,
    disabled: disabled || loading,
    ref,
    onTouchStart: () => {
    }
  }, others), /* @__PURE__ */ import_react16.default.createElement("div", {
    className: classes.inner
  }, (leftIcon || loading && loaderPosition === "left") && /* @__PURE__ */ import_react16.default.createElement("span", {
    className: cx(classes.icon, classes.leftIcon)
  }, loading && loaderPosition === "left" ? loader : leftIcon), /* @__PURE__ */ import_react16.default.createElement("span", {
    className: classes.label,
    style: { textTransform: uppercase ? "uppercase" : void 0 }
  }, children), (rightIcon || loading && loaderPosition === "right") && /* @__PURE__ */ import_react16.default.createElement("span", {
    className: cx(classes.icon, classes.rightIcon)
  }, loading && loaderPosition === "right" ? loader : rightIcon)));
});
Button.displayName = "@mantine/core/Button";

// node_modules/@mantine/core/esm/components/Notification/Notification.js
init_react();
var import_react21 = __toESM(require_react());

// node_modules/@mantine/core/esm/components/Notification/Notification.styles.js
init_react();
var useStyles3 = createStyles((theme, { color, radius: radius2 }, getRef2) => {
  const _radius = theme.fn.radius(radius2);
  const topBottom = Math.min(Math.max(_radius / 1.2, 4), 30);
  const colors = theme.fn.variant({ variant: "filled", color });
  return {
    closeButton: {},
    icon: {
      ref: getRef2("icon"),
      boxSizing: "border-box",
      marginRight: theme.spacing.md,
      width: 28,
      height: 28,
      borderRadius: 28,
      display: "flex",
      flex: "none",
      alignItems: "center",
      justifyContent: "center",
      color: theme.white
    },
    withIcon: {
      paddingLeft: theme.spacing.xs,
      "&::before": {
        display: "none"
      }
    },
    root: {
      boxSizing: "border-box",
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingLeft: 22,
      paddingRight: 5,
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      borderRadius: _radius,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      boxShadow: theme.shadows.lg,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]}`,
      "&::before": {
        content: "''",
        display: "block",
        position: "absolute",
        width: 6,
        top: topBottom,
        bottom: topBottom,
        left: 4,
        borderRadius: _radius,
        backgroundColor: colors.background
      },
      [`& .${getRef2("icon")}`]: {
        backgroundColor: colors.background,
        color: theme.white
      }
    },
    body: {
      flex: 1,
      overflow: "hidden",
      marginRight: 10
    },
    loader: {
      marginRight: theme.spacing.md
    },
    title: {
      lineHeight: 1.4,
      marginBottom: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[9]
    },
    description: {
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
      lineHeight: 1.4,
      overflow: "hidden",
      textOverflow: "ellipsis",
      "&:only-child": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
      }
    }
  };
});
var Notification_styles_default = useStyles3;

// node_modules/@mantine/core/esm/components/Text/Text.js
init_react();
var import_react17 = __toESM(require_react());

// node_modules/@mantine/core/esm/components/Text/Text.styles.js
init_react();
var __defProp14 = Object.defineProperty;
var __defProps6 = Object.defineProperties;
var __getOwnPropDescs6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols15 = Object.getOwnPropertySymbols;
var __hasOwnProp15 = Object.prototype.hasOwnProperty;
var __propIsEnum15 = Object.prototype.propertyIsEnumerable;
var __defNormalProp14 = (obj, key, value) => key in obj ? __defProp14(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues14 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp15.call(b, prop))
      __defNormalProp14(a, prop, b[prop]);
  if (__getOwnPropSymbols15)
    for (var prop of __getOwnPropSymbols15(b)) {
      if (__propIsEnum15.call(b, prop))
        __defNormalProp14(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps6 = (a, b) => __defProps6(a, __getOwnPropDescs6(b));
function getTextColor({ theme, color, variant: variant2 }) {
  if (color === "dimmed") {
    return theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6];
  }
  return color in theme.colors ? theme.colors[color][theme.colorScheme === "dark" ? 5 : 7] : variant2 === "link" ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 7] : color || "inherit";
}
function getLineClamp(lineClamp) {
  if (typeof lineClamp === "number") {
    return {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: lineClamp,
      WebkitBoxOrient: "vertical"
    };
  }
  return null;
}
var useStyles4 = createStyles((theme, {
  color,
  variant: variant2,
  size: size2,
  lineClamp,
  inline,
  inherit,
  underline,
  gradientDeg,
  gradientTo,
  gradientFrom,
  weight,
  transform,
  align
}) => {
  const colors = theme.fn.variant({
    variant: "gradient",
    gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg }
  });
  return {
    root: __spreadValues14(__spreadProps6(__spreadValues14(__spreadValues14(__spreadValues14({}, theme.fn.fontStyles()), theme.fn.focusStyles()), getLineClamp(lineClamp)), {
      color: getTextColor({ color, theme, variant: variant2 }),
      fontFamily: inherit ? "inherit" : theme.fontFamily,
      fontSize: inherit ? "inherit" : theme.fontSizes[size2],
      lineHeight: inherit ? "inherit" : inline ? 1 : theme.lineHeight,
      textDecoration: underline ? "underline" : "none",
      WebkitTapHighlightColor: "transparent",
      fontWeight: inherit ? "inherit" : weight,
      textTransform: transform,
      textAlign: align
    }), theme.fn.hover(variant2 === "link" && underline === void 0 ? {
      textDecoration: "underline"
    } : void 0)),
    gradient: {
      backgroundImage: colors.background,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  };
});
var Text_styles_default = useStyles4;

// node_modules/@mantine/core/esm/components/Text/Text.js
var __defProp15 = Object.defineProperty;
var __getOwnPropSymbols16 = Object.getOwnPropertySymbols;
var __hasOwnProp16 = Object.prototype.hasOwnProperty;
var __propIsEnum16 = Object.prototype.propertyIsEnumerable;
var __defNormalProp15 = (obj, key, value) => key in obj ? __defProp15(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues15 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp16.call(b, prop))
      __defNormalProp15(a, prop, b[prop]);
  if (__getOwnPropSymbols16)
    for (var prop of __getOwnPropSymbols16(b)) {
      if (__propIsEnum16.call(b, prop))
        __defNormalProp15(a, prop, b[prop]);
    }
  return a;
};
var __objRest8 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp16.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols16)
    for (var prop of __getOwnPropSymbols16(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum16.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps3 = {
  size: "md",
  variant: "text",
  gradient: { from: "blue", to: "cyan", deg: 45 },
  inline: false,
  inherit: false
};
var Text = (0, import_react17.forwardRef)((props, ref) => {
  const _a = useMantineDefaultProps("Text", defaultProps3, props), {
    className,
    component,
    size: size2 = "md",
    weight,
    transform,
    color,
    align,
    variant: variant2 = "text",
    lineClamp,
    gradient = { from: "blue", to: "cyan", deg: 45 },
    inline = false,
    inherit = false,
    underline,
    classNames,
    styles: styles2
  } = _a, others = __objRest8(_a, [
    "className",
    "component",
    "size",
    "weight",
    "transform",
    "color",
    "align",
    "variant",
    "lineClamp",
    "gradient",
    "inline",
    "inherit",
    "underline",
    "classNames",
    "styles"
  ]);
  const { classes, cx } = Text_styles_default({
    variant: variant2,
    color,
    size: size2,
    lineClamp,
    inline,
    inherit,
    underline,
    weight,
    transform,
    align,
    gradientFrom: gradient.from,
    gradientTo: gradient.to,
    gradientDeg: gradient.deg
  }, { classNames, styles: styles2, name: "Text" });
  return /* @__PURE__ */ import_react17.default.createElement(Box, __spreadValues15({
    ref,
    component: component || "div",
    className: cx(classes.root, { [classes.gradient]: variant2 === "gradient" }, className)
  }, others));
});
Text.displayName = "@mantine/core/Text";

// node_modules/@mantine/core/esm/components/ActionIcon/CloseButton/CloseButton.js
init_react();
var import_react20 = __toESM(require_react());

// node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.js
init_react();
var import_react18 = __toESM(require_react());

// node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.styles.js
init_react();
var __defProp16 = Object.defineProperty;
var __defProps7 = Object.defineProperties;
var __getOwnPropDescs7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols17 = Object.getOwnPropertySymbols;
var __hasOwnProp17 = Object.prototype.hasOwnProperty;
var __propIsEnum17 = Object.prototype.propertyIsEnumerable;
var __defNormalProp16 = (obj, key, value) => key in obj ? __defProp16(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues16 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp17.call(b, prop))
      __defNormalProp16(a, prop, b[prop]);
  if (__getOwnPropSymbols17)
    for (var prop of __getOwnPropSymbols17(b)) {
      if (__propIsEnum17.call(b, prop))
        __defNormalProp16(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps7 = (a, b) => __defProps7(a, __getOwnPropDescs7(b));
var sizes3 = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44
};
function getVariantStyles2({ variant: variant2, theme, color }) {
  if (variant2 === "hover" || variant2 === "transparent") {
    return __spreadValues16({
      border: "1px solid transparent",
      color: theme.fn.themeColor(color, theme.colorScheme === "dark" ? 4 : 7),
      backgroundColor: "transparent"
    }, theme.fn.hover(variant2 === "transparent" ? {} : {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.fn.themeColor(color, 0)
    }));
  }
  const colors = theme.fn.variant({ color, variant: variant2 });
  return __spreadValues16({
    backgroundColor: colors.background,
    color: colors.color,
    border: `1px solid ${colors.border}`
  }, theme.fn.hover({ backgroundColor: colors.hover }));
}
var useStyles5 = createStyles((theme, { color, size: size2, radius: radius2 }) => ({
  root: __spreadProps7(__spreadValues16(__spreadValues16({}, theme.fn.focusStyles()), theme.fn.fontStyles()), {
    position: "relative",
    appearance: "none",
    WebkitAppearance: "none",
    WebkitTapHighlightColor: "transparent",
    boxSizing: "border-box",
    height: theme.fn.size({ size: size2, sizes: sizes3 }),
    minHeight: theme.fn.size({ size: size2, sizes: sizes3 }),
    width: theme.fn.size({ size: size2, sizes: sizes3 }),
    minWidth: theme.fn.size({ size: size2, sizes: sizes3 }),
    borderRadius: theme.fn.radius(radius2),
    padding: 0,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:disabled": {
      color: theme.colors.gray[theme.colorScheme === "dark" ? 6 : 4],
      cursor: "not-allowed",
      backgroundColor: theme.fn.themeColor("gray", theme.colorScheme === "dark" ? 8 : 1),
      borderColor: theme.fn.themeColor("gray", theme.colorScheme === "dark" ? 8 : 1)
    },
    "&:not(:disabled):active": {
      transform: "translateY(1px)"
    }
  }),
  outline: getVariantStyles2({ theme, color, variant: "outline" }),
  filled: getVariantStyles2({ theme, color, variant: "filled" }),
  default: getVariantStyles2({ theme, color, variant: "default" }),
  light: getVariantStyles2({ theme, color, variant: "light" }),
  hover: getVariantStyles2({ theme, color, variant: "hover" }),
  transparent: getVariantStyles2({ theme, color, variant: "transparent" }),
  loading: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: -1,
      left: -1,
      right: -1,
      bottom: -1,
      backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.dark[7], 0.5) : "rgba(255, 255, 255, .5)",
      borderRadius: theme.fn.radius(radius2),
      cursor: "not-allowed"
    }
  }
}));
var ActionIcon_styles_default = useStyles5;

// node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.js
var __defProp17 = Object.defineProperty;
var __getOwnPropSymbols18 = Object.getOwnPropertySymbols;
var __hasOwnProp18 = Object.prototype.hasOwnProperty;
var __propIsEnum18 = Object.prototype.propertyIsEnumerable;
var __defNormalProp17 = (obj, key, value) => key in obj ? __defProp17(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues17 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp18.call(b, prop))
      __defNormalProp17(a, prop, b[prop]);
  if (__getOwnPropSymbols18)
    for (var prop of __getOwnPropSymbols18(b)) {
      if (__propIsEnum18.call(b, prop))
        __defNormalProp17(a, prop, b[prop]);
    }
  return a;
};
var __objRest9 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp18.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols18)
    for (var prop of __getOwnPropSymbols18(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum18.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps4 = {
  color: "gray",
  size: "md",
  variant: "hover",
  disabled: false,
  loading: false
};
var ActionIcon = (0, import_react18.forwardRef)((props, ref) => {
  const _a = useMantineDefaultProps("ActionIcon", defaultProps4, props), {
    className,
    color,
    children,
    radius: radius2,
    size: size2,
    variant: variant2,
    disabled,
    loaderProps,
    loading,
    component,
    styles: styles2,
    classNames
  } = _a, others = __objRest9(_a, [
    "className",
    "color",
    "children",
    "radius",
    "size",
    "variant",
    "disabled",
    "loaderProps",
    "loading",
    "component",
    "styles",
    "classNames"
  ]);
  const { classes, cx, theme } = ActionIcon_styles_default({ size: size2, radius: radius2, color }, { name: "ActionIcon", classNames, styles: styles2 });
  const colors = theme.fn.variant({ color, variant: "light" });
  const loader = /* @__PURE__ */ import_react18.default.createElement(Loader, __spreadValues17({
    color: colors.color,
    size: theme.fn.size({ size: size2, sizes: sizes3 }) - 12
  }, loaderProps));
  return /* @__PURE__ */ import_react18.default.createElement(Box, __spreadValues17({
    component: component || "button",
    className: cx(classes[variant2], classes.root, { [classes.loading]: loading }, className),
    type: "button",
    ref,
    disabled: disabled || loading
  }, others), loading ? loader : children);
});
ActionIcon.displayName = "@mantine/core/ActionIcon";

// node_modules/@mantine/core/esm/components/ActionIcon/CloseButton/CloseIcon.js
init_react();
var import_react19 = __toESM(require_react());
var __defProp18 = Object.defineProperty;
var __getOwnPropSymbols19 = Object.getOwnPropertySymbols;
var __hasOwnProp19 = Object.prototype.hasOwnProperty;
var __propIsEnum19 = Object.prototype.propertyIsEnumerable;
var __defNormalProp18 = (obj, key, value) => key in obj ? __defProp18(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues18 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp19.call(b, prop))
      __defNormalProp18(a, prop, b[prop]);
  if (__getOwnPropSymbols19)
    for (var prop of __getOwnPropSymbols19(b)) {
      if (__propIsEnum19.call(b, prop))
        __defNormalProp18(a, prop, b[prop]);
    }
  return a;
};
function CloseIcon(props) {
  return /* @__PURE__ */ import_react19.default.createElement("svg", __spreadValues18({
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ import_react19.default.createElement("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
CloseIcon.displayName = "@mantine/core/CloseIcon";

// node_modules/@mantine/core/esm/components/ActionIcon/CloseButton/CloseButton.js
var __defProp19 = Object.defineProperty;
var __getOwnPropSymbols20 = Object.getOwnPropertySymbols;
var __hasOwnProp20 = Object.prototype.hasOwnProperty;
var __propIsEnum20 = Object.prototype.propertyIsEnumerable;
var __defNormalProp19 = (obj, key, value) => key in obj ? __defProp19(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues19 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp20.call(b, prop))
      __defNormalProp19(a, prop, b[prop]);
  if (__getOwnPropSymbols20)
    for (var prop of __getOwnPropSymbols20(b)) {
      if (__propIsEnum20.call(b, prop))
        __defNormalProp19(a, prop, b[prop]);
    }
  return a;
};
var __objRest10 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp20.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols20)
    for (var prop of __getOwnPropSymbols20(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum20.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var iconSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24
};
var CloseButton = (0, import_react20.forwardRef)((_a, ref) => {
  var _b = _a, { iconSize, size: size2 = "md" } = _b, others = __objRest10(_b, ["iconSize", "size"]);
  const theme = useMantineTheme();
  const _iconSize = iconSize || theme.fn.size({ size: size2, sizes: iconSizes });
  return /* @__PURE__ */ import_react20.default.createElement(ActionIcon, __spreadValues19({
    size: size2,
    ref
  }, others), /* @__PURE__ */ import_react20.default.createElement(CloseIcon, {
    width: _iconSize,
    height: _iconSize
  }));
});
CloseButton.displayName = "@mantine/core/CloseButton";

// node_modules/@mantine/core/esm/components/Notification/Notification.js
var __defProp20 = Object.defineProperty;
var __defProps8 = Object.defineProperties;
var __getOwnPropDescs8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols21 = Object.getOwnPropertySymbols;
var __hasOwnProp21 = Object.prototype.hasOwnProperty;
var __propIsEnum21 = Object.prototype.propertyIsEnumerable;
var __defNormalProp20 = (obj, key, value) => key in obj ? __defProp20(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues20 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp21.call(b, prop))
      __defNormalProp20(a, prop, b[prop]);
  if (__getOwnPropSymbols21)
    for (var prop of __getOwnPropSymbols21(b)) {
      if (__propIsEnum21.call(b, prop))
        __defNormalProp20(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps8 = (a, b) => __defProps8(a, __getOwnPropDescs8(b));
var __objRest11 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp21.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols21)
    for (var prop of __getOwnPropSymbols21(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum21.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Notification = (0, import_react21.forwardRef)((props, ref) => {
  const _a = useMantineDefaultProps("Notification", {}, props), {
    className,
    color,
    radius: radius2,
    loading,
    disallowClose,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    classNames,
    styles: styles2
  } = _a, others = __objRest11(_a, [
    "className",
    "color",
    "radius",
    "loading",
    "disallowClose",
    "title",
    "icon",
    "children",
    "onClose",
    "closeButtonProps",
    "classNames",
    "styles"
  ]);
  const { classes, cx } = Notification_styles_default({ color, radius: radius2 }, { classNames, styles: styles2, name: "Notification" });
  const withIcon = icon || loading;
  return /* @__PURE__ */ import_react21.default.createElement(Box, __spreadValues20({
    className: cx(classes.root, { [classes.withIcon]: withIcon }, className),
    role: "alert",
    ref
  }, others), icon && !loading && /* @__PURE__ */ import_react21.default.createElement("div", {
    className: classes.icon
  }, icon), loading && /* @__PURE__ */ import_react21.default.createElement(Loader, {
    size: 28,
    color,
    className: classes.loader
  }), /* @__PURE__ */ import_react21.default.createElement("div", {
    className: classes.body
  }, title && /* @__PURE__ */ import_react21.default.createElement(Text, {
    className: classes.title,
    size: "sm",
    weight: 500
  }, title), /* @__PURE__ */ import_react21.default.createElement(Text, {
    color: "dimmed",
    className: classes.description,
    size: "sm"
  }, children)), !disallowClose && /* @__PURE__ */ import_react21.default.createElement(CloseButton, __spreadProps8(__spreadValues20({}, closeButtonProps), {
    iconSize: 16,
    color: "gray",
    onClick: onClose,
    variant: "hover",
    className: classes.closeButton
  })));
});
Notification.displayName = "@mantine/core/Notification";

// node_modules/@mantine/core/esm/index.js
init_react();

// node_modules/@mantine/core/esm/components/Transition/transitions.js
init_react();
var __defProp21 = Object.defineProperty;
var __defProps9 = Object.defineProperties;
var __getOwnPropDescs9 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols22 = Object.getOwnPropertySymbols;
var __hasOwnProp22 = Object.prototype.hasOwnProperty;
var __propIsEnum22 = Object.prototype.propertyIsEnumerable;
var __defNormalProp21 = (obj, key, value) => key in obj ? __defProp21(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues21 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp22.call(b, prop))
      __defNormalProp21(a, prop, b[prop]);
  if (__getOwnPropSymbols22)
    for (var prop of __getOwnPropSymbols22(b)) {
      if (__propIsEnum22.call(b, prop))
        __defNormalProp21(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps9 = (a, b) => __defProps9(a, __getOwnPropDescs9(b));
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(.9) translateY(10px)" },
  transitionProperty: "transform, opacity"
};
var transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: __spreadProps9(__spreadValues21({}, popIn), {
    common: { transformOrigin: "center center" }
  }),
  "pop-bottom-left": __spreadProps9(__spreadValues21({}, popIn), {
    common: { transformOrigin: "bottom left" }
  }),
  "pop-bottom-right": __spreadProps9(__spreadValues21({}, popIn), {
    common: { transformOrigin: "bottom right" }
  }),
  "pop-top-left": __spreadProps9(__spreadValues21({}, popIn), {
    common: { transformOrigin: "top left" }
  }),
  "pop-top-right": __spreadProps9(__spreadValues21({}, popIn), {
    common: { transformOrigin: "top right" }
  })
};

// node_modules/@mantine/core/esm/utils/filter-falsy-children/filter-falsy-children.js
init_react();
var import_react22 = __toESM(require_react());
function filterFalsyChildren(children) {
  return import_react22.Children.toArray(children).filter(Boolean);
}

// node_modules/@mantine/hooks/esm/index.js
init_react();

// node_modules/@mantine/hooks/esm/use-media-query/use-media-query.js
init_react();
var import_react23 = __toESM(require_react());
function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (initialValue !== void 0) {
    return initialValue;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue) {
  const [matches, setMatches] = (0, import_react23.useState)(getInitialValue(query, initialValue));
  const queryRef = (0, import_react23.useRef)();
  (0, import_react23.useEffect)(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches;
}

// node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.js
init_react();
var import_react24 = __toESM(require_react());
var useIsomorphicEffect = typeof document !== "undefined" ? import_react24.useLayoutEffect : import_react24.useEffect;

// node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.js
init_react();
var import_react26 = __toESM(require_react());

// node_modules/@mantine/hooks/esm/use-did-update/use-did-update.js
init_react();
var import_react25 = __toESM(require_react());
function useDidUpdate(fn, dependencies) {
  const mounted = (0, import_react25.useRef)(false);
  (0, import_react25.useEffect)(() => {
    if (mounted.current) {
      fn();
    } else {
      mounted.current = true;
    }
  }, dependencies);
}

// node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.js
function useFocusReturn({
  opened,
  transitionDuration,
  shouldReturnFocus = true
}) {
  const lastActiveElement = (0, import_react26.useRef)();
  const returnFocus = () => {
    var _a;
    if (lastActiveElement.current && "focus" in lastActiveElement.current && typeof lastActiveElement.current.focus === "function") {
      (_a = lastActiveElement.current) == null ? void 0 : _a.focus();
    }
  };
  useDidUpdate(() => {
    let timeout2 = -1;
    const clearFocusTimeout = (event) => {
      if (event.code === "Tab") {
        window.clearTimeout(timeout2);
      }
    };
    document.addEventListener("keydown", clearFocusTimeout);
    if (opened) {
      lastActiveElement.current = document.activeElement;
    } else if (shouldReturnFocus) {
      timeout2 = window.setTimeout(returnFocus, transitionDuration + 10);
    }
    return () => {
      window.clearTimeout(timeout2);
      document.removeEventListener("keydown", clearFocusTimeout);
    };
  }, [opened]);
  return returnFocus;
}

// node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.js
init_react();
var import_react27 = __toESM(require_react());

// node_modules/@mantine/hooks/esm/use-focus-trap/tabbable.js
init_react();
var TABBABLE_NODES = /input|select|textarea|button|object/;
var FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
function hidden(element) {
  if (false) {
    return false;
  }
  return element.style.display === "none";
}
function visible(element) {
  const isHidden = element.getAttribute("aria-hidden") || element.getAttribute("hidden") || element.getAttribute("type") === "hidden";
  if (isHidden) {
    return false;
  }
  let parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) {
      break;
    }
    if (hidden(parentElement)) {
      return false;
    }
    parentElement = parentElement.parentNode;
  }
  return true;
}
function getElementTabIndex(element) {
  let tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) {
    tabIndex = void 0;
  }
  return parseInt(tabIndex, 10);
}
function focusable(element) {
  const nodeName = element.nodeName.toLowerCase();
  const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
  const res = TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}
function tabbable(element) {
  const tabIndex = getElementTabIndex(element);
  const isTabIndexNaN = Number.isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
}
function findTabbableDescendants(element) {
  return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
}

// node_modules/@mantine/hooks/esm/use-focus-trap/scope-tab.js
init_react();
function scopeTab(node2, event) {
  const tabbable2 = findTabbableDescendants(node2);
  if (!tabbable2.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable2[event.shiftKey ? 0 : tabbable2.length - 1];
  const leavingFinalTabbable = finalTabbable === document.activeElement || node2 === document.activeElement;
  if (!leavingFinalTabbable) {
    return;
  }
  event.preventDefault();
  const target = tabbable2[event.shiftKey ? tabbable2.length - 1 : 0];
  if (target) {
    target.focus();
  }
}

// node_modules/@mantine/hooks/esm/use-focus-trap/create-aria-hider.js
init_react();
function createAriaHider(containerNode, selector = "body > :not(script)") {
  const rootNodes = Array.from(document.querySelectorAll(selector)).map((node2) => {
    if (node2.contains(containerNode)) {
      return void 0;
    }
    const ariaHidden = node2.getAttribute("aria-hidden");
    if (ariaHidden === null || ariaHidden === "false") {
      node2.setAttribute("aria-hidden", "true");
    }
    return { node: node2, ariaHidden };
  });
  return () => {
    rootNodes.forEach((item) => {
      if (!item) {
        return;
      }
      if (item.ariaHidden === null) {
        item.node.removeAttribute("aria-hidden");
      } else {
        item.node.setAttribute("aria-hidden", item.ariaHidden);
      }
    });
  };
}

// node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.js
function useFocusTrap(active = true) {
  const ref = (0, import_react27.useRef)();
  const restoreAria = (0, import_react27.useRef)(null);
  const setRef = (0, import_react27.useCallback)((node2) => {
    if (!active) {
      return;
    }
    if (restoreAria.current) {
      restoreAria.current();
    }
    if (node2) {
      const processNode = (_node) => {
        restoreAria.current = createAriaHider(_node);
        let focusElement = node2.querySelector("[data-autofocus]");
        if (!focusElement) {
          const children = Array.from(node2.querySelectorAll(FOCUS_SELECTOR));
          focusElement = children.find(tabbable) || children.find(focusable) || null;
          if (!focusElement && focusable(node2))
            focusElement = node2;
        }
        if (focusElement) {
          focusElement.focus();
        } else if (true) {
          console.warn("[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node", node2);
        }
      };
      setTimeout(() => {
        if (node2.ownerDocument) {
          processNode(node2);
        } else if (true) {
          console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", node2);
        }
      });
      ref.current = node2;
    } else {
      ref.current = null;
    }
  }, [active]);
  (0, import_react27.useEffect)(() => {
    if (!active) {
      return void 0;
    }
    const handleKeyDown = (event) => {
      if (event.key === "Tab" && ref.current) {
        scopeTab(ref.current, event);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);
  return setRef;
}

// node_modules/@mantine/hooks/esm/use-force-update/use-force-update.js
init_react();
var import_react28 = __toESM(require_react());
var reducer = (value) => (value + 1) % 1e6;
function useForceUpdate() {
  const [, update] = (0, import_react28.useReducer)(reducer, 0);
  return update;
}

// node_modules/@mantine/hooks/esm/utils/random-id/random-id.js
init_react();
function randomId() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}

// node_modules/@mantine/hooks/esm/use-queue/use-queue.js
init_react();
var import_react29 = __toESM(require_react());
function useQueue({ initialValues = [], limit }) {
  const [{ state, queue }, setState] = (0, import_react29.useState)({
    state: initialValues.slice(0, limit),
    queue: initialValues.slice(limit)
  });
  const add = (...items) => setState((current) => {
    const results = [...current.state, ...current.queue, ...items];
    return {
      state: results.slice(0, limit),
      queue: results.slice(limit)
    };
  });
  const update = (fn) => setState((current) => {
    const results = fn([...current.state, ...current.queue]);
    return {
      state: results.slice(0, limit),
      queue: results.slice(limit)
    };
  });
  const cleanQueue = () => setState((current) => ({ state: current.state, queue: [] }));
  return {
    state,
    queue,
    add,
    update,
    cleanQueue
  };
}

// node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.js
init_react();
function useReducedMotion(initialValue) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue);
}

// node_modules/@mantine/hooks/esm/use-scroll-lock/use-scroll-lock.js
init_react();
var import_react30 = __toESM(require_react());

// node_modules/@mantine/hooks/esm/use-scroll-lock/utils/get-lock-styles.js
init_react();

// node_modules/@mantine/hooks/esm/use-scroll-lock/utils/get-scroll-width.js
init_react();
function getScrollWidth() {
  if (typeof window === "undefined" || typeof document === "undefined")
    return 0;
  const paddingRight = parseInt(window.getComputedStyle(document.body).paddingRight, 10);
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return paddingRight + scrollbarWidth;
}

// node_modules/@mantine/hooks/esm/use-scroll-lock/utils/get-lock-styles.js
var getLockStyles = ({ disableBodyPadding }) => {
  const scrollWidth = disableBodyPadding ? null : getScrollWidth();
  const styles2 = `body {
        --removed-scroll-width: ${scrollWidth}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${scrollWidth ? "padding-right: var(--removed-scroll-width) !important;" : ""}
        `;
  return styles2;
};

// node_modules/@mantine/hooks/esm/use-scroll-lock/utils/inject-style-tag.js
init_react();
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}

// node_modules/@mantine/hooks/esm/use-scroll-lock/utils/insert-style-tag.js
init_react();
function insertStyleTag(tag) {
  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}

// node_modules/@mantine/hooks/esm/use-scroll-lock/utils/make-style-tag.js
init_react();
function makeStyleTag() {
  const tag = document.createElement("style");
  tag.type = "text/css";
  tag.setAttribute("mantine-scroll-lock", "");
  return tag;
}

// node_modules/@mantine/hooks/esm/use-scroll-lock/use-scroll-lock.js
function useScrollLock(lock, options = {
  disableBodyPadding: false
}) {
  const [scrollLocked, setScrollLocked] = (0, import_react30.useState)(lock || false);
  const scrollTop = (0, import_react30.useRef)(0);
  const { disableBodyPadding } = options;
  const stylesheet = (0, import_react30.useRef)(null);
  const lockScroll = () => {
    scrollTop.current = window.scrollY;
    const styles2 = getLockStyles({ disableBodyPadding });
    const sheet = makeStyleTag();
    injectStyles(sheet, styles2);
    insertStyleTag(sheet);
    stylesheet.current = sheet;
  };
  const unlockScroll = () => {
    if (!(stylesheet == null ? void 0 : stylesheet.current))
      return;
    stylesheet.current.parentNode.removeChild(stylesheet.current);
    stylesheet.current = null;
  };
  (0, import_react30.useEffect)(() => {
    if (scrollLocked) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return unlockScroll;
  }, [scrollLocked]);
  (0, import_react30.useEffect)(() => {
    if (lock !== void 0) {
      setScrollLocked(lock);
    }
  }, [lock]);
  (0, import_react30.useEffect)(() => {
    if (lock === void 0 && typeof window !== "undefined") {
      window.document.body.style.overflow === "hidden" && setScrollLocked(true);
    }
  }, [setScrollLocked]);
  return [scrollLocked, setScrollLocked];
}

// node_modules/@mantine/hooks/esm/use-uuid/use-uuid.js
init_react();
var import_react31 = __toESM(require_react());
function useUuid(staticId) {
  const [uuid, setUuid] = (0, import_react31.useState)("");
  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);
  return staticId || uuid;
}

// node_modules/@mantine/core/esm/components/Portal/Portal.js
init_react();
var import_react32 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var defaultProps5 = {
  zIndex: 1,
  position: "relative"
};
function Portal(props) {
  const { children, zIndex, target, className, position: position2 } = useMantineDefaultProps("Portal", defaultProps5, props);
  const theme = useMantineTheme();
  const [mounted, setMounted] = (0, import_react32.useState)(false);
  const ref = (0, import_react32.useRef)();
  useIsomorphicEffect(() => {
    setMounted(true);
    ref.current = !target ? document.createElement("div") : typeof target === "string" ? document.querySelector(target) : target;
    if (!target) {
      document.body.appendChild(ref.current);
    }
    return () => {
      !target && document.body.removeChild(ref.current);
    };
  }, [target]);
  if (!mounted) {
    return null;
  }
  return (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react32.default.createElement("div", {
    className,
    dir: theme.dir,
    style: { position: position2, zIndex }
  }, children), ref.current);
}
Portal.displayName = "@mantine/core/Portal";

// node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.js
init_react();
var __defProp22 = Object.defineProperty;
var __getOwnPropSymbols23 = Object.getOwnPropertySymbols;
var __hasOwnProp23 = Object.prototype.hasOwnProperty;
var __propIsEnum23 = Object.prototype.propertyIsEnumerable;
var __defNormalProp22 = (obj, key, value) => key in obj ? __defProp22(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues22 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp23.call(b, prop))
      __defNormalProp22(a, prop, b[prop]);
  if (__getOwnPropSymbols23)
    for (var prop of __getOwnPropSymbols23(b)) {
      if (__propIsEnum23.call(b, prop))
        __defNormalProp22(a, prop, b[prop]);
    }
  return a;
};
var transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return null;
    }
    return __spreadValues22(__spreadValues22(__spreadValues22({
      transitionProperty: transitions[transition].transitionProperty
    }, shared), transitions[transition].common), transitions[transition][transitionStatuses[state]]);
  }
  return __spreadValues22(__spreadValues22(__spreadValues22({
    transitionProperty: transition.transitionProperty
  }, shared), transition.common), transition[transitionStatuses[state]]);
}

// node_modules/@mantine/core/esm/components/Transition/use-transition.js
init_react();
var import_react33 = __toESM(require_react());
function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited
}) {
  const theme = useMantineTheme();
  const reduceMotion = useReducedMotion();
  const [transitionStatus, setStatus] = (0, import_react33.useState)(mounted ? "entered" : "exited");
  const [transitionDuration, setTransitionDuration] = (0, import_react33.useState)(reduceMotion ? 0 : duration);
  const timeoutRef = (0, import_react33.useRef)(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
    window.clearTimeout(timeoutRef.current);
    const _duration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(_duration);
    if (_duration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      const preStateTimeout = window.setTimeout(() => {
        typeof preHandler === "function" && preHandler();
        setStatus(shouldMount ? "entering" : "exiting");
      }, 10);
      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        typeof handler === "function" && handler();
        setStatus(shouldMount ? "entered" : "exited");
      }, _duration);
    }
  };
  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react33.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || theme.transitionTimingFunction
  };
}

// node_modules/@mantine/core/esm/components/Paper/Paper.js
init_react();
var import_react34 = __toESM(require_react());

// node_modules/@mantine/core/esm/components/Paper/Paper.styles.js
init_react();
var useStyles6 = createStyles((theme, { radius: radius2, shadow, withBorder }) => ({
  root: {
    outline: 0,
    WebkitTapHighlightColor: "transparent",
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxSizing: "border-box",
    borderRadius: theme.fn.radius(radius2),
    boxShadow: theme.shadows[shadow] || shadow || "none",
    border: withBorder ? `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]}` : void 0
  }
}));
var Paper_styles_default = useStyles6;

// node_modules/@mantine/core/esm/components/Paper/Paper.js
var __defProp23 = Object.defineProperty;
var __getOwnPropSymbols24 = Object.getOwnPropertySymbols;
var __hasOwnProp24 = Object.prototype.hasOwnProperty;
var __propIsEnum24 = Object.prototype.propertyIsEnumerable;
var __defNormalProp23 = (obj, key, value) => key in obj ? __defProp23(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues23 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp24.call(b, prop))
      __defNormalProp23(a, prop, b[prop]);
  if (__getOwnPropSymbols24)
    for (var prop of __getOwnPropSymbols24(b)) {
      if (__propIsEnum24.call(b, prop))
        __defNormalProp23(a, prop, b[prop]);
    }
  return a;
};
var __objRest12 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp24.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols24)
    for (var prop of __getOwnPropSymbols24(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum24.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps6 = {};
var Paper = (0, import_react34.forwardRef)((props, ref) => {
  const _a = useMantineDefaultProps("Paper", defaultProps6, props), { component, className, children, radius: radius2, withBorder, shadow } = _a, others = __objRest12(_a, ["component", "className", "children", "radius", "withBorder", "shadow"]);
  const { classes, cx } = Paper_styles_default({ radius: radius2, shadow, withBorder }, { name: "Paper" });
  return /* @__PURE__ */ import_react34.default.createElement(Box, __spreadValues23({
    component: component || "div",
    className: cx(classes.root, className),
    ref
  }, others), children);
});
Paper.displayName = "@mantine/core/Paper";

// node_modules/@mantine/core/esm/components/Group/Group.js
init_react();
var import_react35 = __toESM(require_react());

// node_modules/@mantine/core/esm/components/Group/Group.styles.js
init_react();
var POSITIONS = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between"
};
var useStyles7 = createStyles((theme, { spacing, position: position2, noWrap, direction, grow, align, count }) => ({
  root: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: direction,
    alignItems: align || (direction === "row" ? "center" : grow ? "stretch" : position2 === "apart" ? "flex-start" : POSITIONS[position2]),
    flexWrap: noWrap ? "nowrap" : "wrap",
    justifyContent: direction === "row" ? POSITIONS[position2] : void 0,
    gap: theme.fn.size({ size: spacing, sizes: theme.spacing })
  },
  child: {
    boxSizing: "border-box",
    maxWidth: grow && direction === "row" ? `calc(${100 / count}% - ${theme.fn.size({ size: spacing, sizes: theme.spacing }) - theme.fn.size({ size: spacing, sizes: theme.spacing }) / count}px)` : void 0,
    flexGrow: grow ? 1 : 0
  }
}));
var Group_styles_default = useStyles7;

// node_modules/@mantine/core/esm/components/Group/Group.js
var __defProp24 = Object.defineProperty;
var __getOwnPropSymbols25 = Object.getOwnPropertySymbols;
var __hasOwnProp25 = Object.prototype.hasOwnProperty;
var __propIsEnum25 = Object.prototype.propertyIsEnumerable;
var __defNormalProp24 = (obj, key, value) => key in obj ? __defProp24(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues24 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp25.call(b, prop))
      __defNormalProp24(a, prop, b[prop]);
  if (__getOwnPropSymbols25)
    for (var prop of __getOwnPropSymbols25(b)) {
      if (__propIsEnum25.call(b, prop))
        __defNormalProp24(a, prop, b[prop]);
    }
  return a;
};
var __objRest13 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp25.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols25)
    for (var prop of __getOwnPropSymbols25(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum25.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps7 = {
  position: "left",
  spacing: "md",
  direction: "row"
};
var Group = (0, import_react35.forwardRef)((props, ref) => {
  const _a = useMantineDefaultProps("Group", defaultProps7, props), {
    className,
    position: position2,
    align,
    children,
    noWrap,
    grow,
    spacing,
    direction,
    classNames,
    styles: styles2
  } = _a, others = __objRest13(_a, [
    "className",
    "position",
    "align",
    "children",
    "noWrap",
    "grow",
    "spacing",
    "direction",
    "classNames",
    "styles"
  ]);
  const filteredChildren = filterFalsyChildren(children);
  const { classes, cx } = Group_styles_default({
    align,
    grow,
    noWrap,
    spacing,
    position: position2,
    direction,
    count: filteredChildren.length
  }, { classNames, styles: styles2, name: "Group" });
  const items = filteredChildren.map((child) => {
    var _a2;
    if (typeof child === "object" && child !== null && "props" in child) {
      return import_react35.default.cloneElement(child, {
        className: cx(classes.child, (_a2 = child.props) == null ? void 0 : _a2.className)
      });
    }
    return child;
  });
  return /* @__PURE__ */ import_react35.default.createElement(Box, __spreadValues24({
    className: cx(classes.root, className),
    ref
  }, others), items);
});
Group.displayName = "@mantine/core/Group";

// node_modules/@mantine/core/esm/components/Portal/OptionalPortal.js
init_react();
var import_react36 = __toESM(require_react());
var __defProp25 = Object.defineProperty;
var __getOwnPropSymbols26 = Object.getOwnPropertySymbols;
var __hasOwnProp26 = Object.prototype.hasOwnProperty;
var __propIsEnum26 = Object.prototype.propertyIsEnumerable;
var __defNormalProp25 = (obj, key, value) => key in obj ? __defProp25(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues25 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp26.call(b, prop))
      __defNormalProp25(a, prop, b[prop]);
  if (__getOwnPropSymbols26)
    for (var prop of __getOwnPropSymbols26(b)) {
      if (__propIsEnum26.call(b, prop))
        __defNormalProp25(a, prop, b[prop]);
    }
  return a;
};
var __objRest14 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp26.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols26)
    for (var prop of __getOwnPropSymbols26(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum26.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function OptionalPortal(_a) {
  var _b = _a, { withinPortal = true, children } = _b, others = __objRest14(_b, ["withinPortal", "children"]);
  if (withinPortal) {
    return /* @__PURE__ */ import_react36.default.createElement(Portal, __spreadValues25({}, others), children);
  }
  return /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, children);
}
OptionalPortal.displayName = "@mantine/core/OptionalPortal";

// node_modules/@mantine/core/esm/components/Transition/GroupedTransition.js
init_react();
var import_react37 = __toESM(require_react());
function GroupedTransition({
  transitions: transitions2,
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction,
  onExit,
  onEntered,
  onEnter,
  onExited
}) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    duration,
    exitDuration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited
  });
  if (transitionDuration === 0) {
    return mounted ? /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, children({})) : null;
  }
  if (transitionStatus === "exited") {
    return null;
  }
  const transitionsStyles = Object.keys(transitions2).reduce((acc, transition) => {
    acc[transition] = getTransitionStyles({
      duration: transitions2[transition].duration,
      transition: transitions2[transition].transition,
      timingFunction: transitions2[transition].timingFunction || transitionTimingFunction,
      state: transitionStatus
    });
    return acc;
  }, {});
  return /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, children(transitionsStyles));
}
GroupedTransition.displayName = "@mantine/core/GroupedTransition";

// node_modules/@mantine/core/esm/components/Overlay/Overlay.js
init_react();
var import_react38 = __toESM(require_react());
var __defProp26 = Object.defineProperty;
var __defProps10 = Object.defineProperties;
var __getOwnPropDescs10 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols27 = Object.getOwnPropertySymbols;
var __hasOwnProp27 = Object.prototype.hasOwnProperty;
var __propIsEnum27 = Object.prototype.propertyIsEnumerable;
var __defNormalProp26 = (obj, key, value) => key in obj ? __defProp26(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues26 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp27.call(b, prop))
      __defNormalProp26(a, prop, b[prop]);
  if (__getOwnPropSymbols27)
    for (var prop of __getOwnPropSymbols27(b)) {
      if (__propIsEnum27.call(b, prop))
        __defNormalProp26(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps10 = (a, b) => __defProps10(a, __getOwnPropDescs10(b));
var __objRest15 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp27.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols27)
    for (var prop of __getOwnPropSymbols27(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum27.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps8 = {
  opacity: 0.6,
  color: "#fff",
  zIndex: getDefaultZIndex("modal"),
  radius: 0,
  blur: 0
};
var Overlay = (0, import_react38.forwardRef)((props, ref) => {
  const _a = useMantineDefaultProps("Overlay", defaultProps8, props), { opacity, blur, color, gradient, zIndex, component, radius: radius2, sx } = _a, others = __objRest15(_a, ["opacity", "blur", "color", "gradient", "zIndex", "component", "radius", "sx"]);
  const background = gradient ? { backgroundImage: gradient } : { backgroundColor: color };
  const baseStyles = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex
  };
  const innerOverlay = (otherProps) => /* @__PURE__ */ import_react38.default.createElement(Box, __spreadValues26({
    component: component || "div",
    ref,
    sx: [
      (theme) => __spreadProps10(__spreadValues26(__spreadValues26({}, background), baseStyles), {
        opacity,
        borderRadius: theme.fn.size({ size: radius2, sizes: theme.radius })
      }),
      ...Array.isArray(sx) ? sx : [sx]
    ]
  }, otherProps));
  if (blur) {
    return /* @__PURE__ */ import_react38.default.createElement(Box, __spreadValues26({
      sx: [
        () => __spreadProps10(__spreadValues26({}, baseStyles), {
          backdropFilter: `blur(${blur}px)`
        }),
        ...Array.isArray(sx) ? sx : [sx]
      ]
    }, others), innerOverlay());
  }
  return innerOverlay(others);
});
Overlay.displayName = "@mantine/core/Overlay";

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_react();
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@mantine/core/esm/components/Modal/Modal.styles.js
init_react();
var sizes4 = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
  full: "100%"
};
var useStyles8 = createStyles((theme, { overflow, size: size2, centered, zIndex }) => ({
  close: {},
  overlay: {},
  root: {
    position: "fixed",
    zIndex,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  inner: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.md}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: centered ? "center" : "flex-start"
  },
  title: {
    marginRight: theme.spacing.md,
    textOverflow: "ellipsis",
    display: "block",
    wordBreak: "break-word"
  },
  modal: {
    position: "relative",
    width: theme.fn.size({ sizes: sizes4, size: size2 }),
    outline: 0,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    marginTop: centered ? "auto" : void 0,
    marginBottom: centered ? "auto" : void 0,
    zIndex: 1,
    marginLeft: "calc(var(--removed-scroll-width, 0px) * -1)"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing.md,
    marginRight: -9
  },
  body: {
    maxHeight: overflow === "inside" ? "calc(100vh - 185px)" : null,
    overflowY: overflow === "inside" ? "auto" : null,
    wordBreak: "break-word"
  }
}));
var Modal_styles_default = useStyles8;

// node_modules/@mantine/core/esm/components/Modal/Modal.js
init_react();
var import_react39 = __toESM(require_react());
var __defProp27 = Object.defineProperty;
var __getOwnPropSymbols28 = Object.getOwnPropertySymbols;
var __hasOwnProp28 = Object.prototype.hasOwnProperty;
var __propIsEnum28 = Object.prototype.propertyIsEnumerable;
var __defNormalProp27 = (obj, key, value) => key in obj ? __defProp27(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues27 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp28.call(b, prop))
      __defNormalProp27(a, prop, b[prop]);
  if (__getOwnPropSymbols28)
    for (var prop of __getOwnPropSymbols28(b)) {
      if (__propIsEnum28.call(b, prop))
        __defNormalProp27(a, prop, b[prop]);
    }
  return a;
};
var __objRest16 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp28.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols28)
    for (var prop of __getOwnPropSymbols28(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum28.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps9 = {
  size: "md",
  transitionDuration: 250,
  overflow: "outside",
  transition: "pop",
  padding: "lg",
  shadow: "lg",
  closeOnClickOutside: true,
  closeOnEscape: true,
  trapFocus: true,
  withCloseButton: true,
  withinPortal: true,
  overlayBlur: 0,
  zIndex: getDefaultZIndex("modal")
};
function Modal(props) {
  const _a = useMantineDefaultProps("Modal", defaultProps9, props), {
    className,
    opened,
    title,
    onClose,
    children,
    withCloseButton,
    overlayOpacity,
    size: size2,
    transitionDuration,
    closeButtonLabel,
    overlayColor,
    overflow,
    transition,
    padding,
    shadow,
    radius: radius2,
    id,
    classNames,
    styles: styles2,
    closeOnClickOutside,
    trapFocus,
    closeOnEscape,
    centered,
    target,
    withinPortal,
    zIndex,
    overlayBlur,
    transitionTimingFunction
  } = _a, others = __objRest16(_a, [
    "className",
    "opened",
    "title",
    "onClose",
    "children",
    "withCloseButton",
    "overlayOpacity",
    "size",
    "transitionDuration",
    "closeButtonLabel",
    "overlayColor",
    "overflow",
    "transition",
    "padding",
    "shadow",
    "radius",
    "id",
    "classNames",
    "styles",
    "closeOnClickOutside",
    "trapFocus",
    "closeOnEscape",
    "centered",
    "target",
    "withinPortal",
    "zIndex",
    "overlayBlur",
    "transitionTimingFunction"
  ]);
  const baseId = useUuid(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const { classes, cx, theme } = Modal_styles_default({ size: size2, overflow, centered, zIndex }, { classNames, styles: styles2, name: "Modal" });
  const focusTrapRef = useFocusTrap(trapFocus && opened);
  const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme.colorScheme === "dark" ? 0.85 : 0.75;
  const [, lockScroll] = useScrollLock();
  const closeOnEscapePress = (event) => {
    if (!trapFocus && event.code === "Escape" && closeOnEscape) {
      onClose();
    }
  };
  (0, import_react39.useEffect)(() => {
    if (!trapFocus) {
      window.addEventListener("keydown", closeOnEscapePress);
      return () => window.removeEventListener("keydown", closeOnEscapePress);
    }
    return void 0;
  }, [trapFocus]);
  useFocusReturn({ opened, transitionDuration: 0, shouldReturnFocus: trapFocus });
  return /* @__PURE__ */ import_react39.default.createElement(OptionalPortal, {
    withinPortal,
    zIndex,
    target
  }, /* @__PURE__ */ import_react39.default.createElement(GroupedTransition, {
    onExited: () => lockScroll(false),
    onEntered: () => lockScroll(true),
    mounted: opened,
    duration: transitionDuration,
    exitDuration: transitionDuration,
    timingFunction: transitionTimingFunction,
    transitions: {
      modal: { duration: transitionDuration, transition },
      overlay: {
        duration: transitionDuration / 2,
        transition: "fade",
        timingFunction: "ease"
      }
    }
  }, (transitionStyles) => /* @__PURE__ */ import_react39.default.createElement(Box, __spreadValues27({
    id: baseId,
    className: cx(classes.root, className)
  }, others), /* @__PURE__ */ import_react39.default.createElement("div", {
    className: classes.inner,
    onKeyDownCapture: (event) => {
      var _a2;
      const shouldTrigger = ((_a2 = event.target) == null ? void 0 : _a2.getAttribute("data-mantine-stop-propagation")) !== "true";
      shouldTrigger && event.nativeEvent.code === "Escape" && closeOnEscape && onClose();
    },
    ref: focusTrapRef
  }, /* @__PURE__ */ import_react39.default.createElement(Paper, {
    className: classes.modal,
    shadow,
    p: padding,
    radius: radius2,
    role: "dialog",
    "aria-labelledby": titleId,
    "aria-describedby": bodyId,
    "aria-modal": true,
    tabIndex: -1,
    style: transitionStyles.modal
  }, (title || withCloseButton) && /* @__PURE__ */ import_react39.default.createElement("div", {
    className: classes.header
  }, /* @__PURE__ */ import_react39.default.createElement(Text, {
    id: titleId,
    className: classes.title
  }, title), withCloseButton && /* @__PURE__ */ import_react39.default.createElement(CloseButton, {
    iconSize: 16,
    onClick: onClose,
    "aria-label": closeButtonLabel,
    className: classes.close
  })), /* @__PURE__ */ import_react39.default.createElement("div", {
    id: bodyId,
    className: classes.body
  }, children)), /* @__PURE__ */ import_react39.default.createElement("div", {
    style: transitionStyles.overlay
  }, /* @__PURE__ */ import_react39.default.createElement(Overlay, {
    className: classes.overlay,
    sx: { position: "fixed" },
    zIndex: 0,
    onMouseDown: () => closeOnClickOutside && onClose(),
    blur: overlayBlur,
    color: overlayColor || (theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.black),
    opacity: _overlayOpacity
  }))))));
}
Modal.displayName = "@mantine/core/Modal";

// node_modules/@mantine/notifications/esm/events.js
init_react();
var import_react40 = __toESM(require_react());
var NOTIFICATIONS_EVENTS = {
  show: "mantine:show-notification",
  hide: "mantine:hide-notification",
  update: "mantine:update-notification",
  clean: "mantine:clean-notifications",
  cleanQueue: "mantine:clean-notifications-queue"
};
function createEvent(type, detail) {
  return new CustomEvent(type, { detail });
}
function showNotification(notification) {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.show, notification));
}
function useNotificationsEvents(ctx) {
  const events = {
    show: (event) => ctx.showNotification(event.detail),
    hide: (event) => ctx.hideNotification(event.detail),
    update: (event) => ctx.updateNotification(event.detail.id, event.detail),
    clean: ctx.clean,
    cleanQueue: ctx.cleanQueue
  };
  (0, import_react40.useEffect)(() => {
    Object.keys(events).forEach((event) => {
      window.addEventListener(NOTIFICATIONS_EVENTS[event], events[event]);
    });
    return () => {
      Object.keys(events).forEach((event) => {
        window.removeEventListener(NOTIFICATIONS_EVENTS[event], events[event]);
      });
    };
  }, []);
}

// node_modules/@mantine/notifications/esm/NotificationsProvider/NotificationsProvider.js
init_react();
var import_react47 = __toESM(require_react());

// node_modules/react-transition-group/esm/index.js
init_react();

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
init_react();

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_react();
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/react-transition-group/esm/Transition.js
init_react();
var import_prop_types2 = __toESM(require_prop_types());
var import_react42 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/react-transition-group/esm/config.js
init_react();
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
init_react();
var import_prop_types = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
  enter: import_prop_types.default.number,
  exit: import_prop_types.default.number,
  appear: import_prop_types.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  active: import_prop_types.default.string
}), import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  enterDone: import_prop_types.default.string,
  enterActive: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  exitDone: import_prop_types.default.string,
  exitActive: import_prop_types.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
init_react();
var import_react41 = __toESM(require_react());
var TransitionGroupContext_default = import_react41.default.createContext(null);

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom2.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom2.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node2 = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom2.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node2 || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node2, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return /* @__PURE__ */ import_react42.default.createElement(TransitionGroupContext_default.Provider, {
      value: null
    }, typeof children === "function" ? children(status, childProps) : import_react42.default.cloneElement(import_react42.default.Children.only(children), childProps));
  };
  return Transition2;
}(import_react42.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  nodeRef: import_prop_types2.default.shape({
    current: typeof Element === "undefined" ? import_prop_types2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types2.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.func.isRequired, import_prop_types2.default.element.isRequired]).isRequired,
  in: import_prop_types2.default.bool,
  mountOnEnter: import_prop_types2.default.bool,
  unmountOnExit: import_prop_types2.default.bool,
  appear: import_prop_types2.default.bool,
  enter: import_prop_types2.default.bool,
  exit: import_prop_types2.default.bool,
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  addEndListener: import_prop_types2.default.func,
  onEnter: import_prop_types2.default.func,
  onEntering: import_prop_types2.default.func,
  onEntered: import_prop_types2.default.func,
  onExit: import_prop_types2.default.func,
  onExiting: import_prop_types2.default.func,
  onExited: import_prop_types2.default.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/react-transition-group/esm/TransitionGroup.js
init_react();

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
init_react();
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types3 = __toESM(require_prop_types());
var import_react44 = __toESM(require_react());

// node_modules/react-transition-group/esm/utils/ChildMapping.js
init_react();
var import_react43 = __toESM(require_react());
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react43.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    import_react43.Children.map(children, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev2, next2) {
  prev2 = prev2 || {};
  next2 = next2 || {};
  function getValueForKey(key) {
    return key in next2 ? next2[key] : prev2[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev2) {
    if (prevKey in next2) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next2) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react43.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!(0, import_react43.isValidElement)(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react43.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = (0, import_react43.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = (0, import_react43.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react43.isValidElement)(prevChild)) {
      children[key] = (0, import_react43.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps10 = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node2) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node2);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ import_react44.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ import_react44.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ import_react44.default.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(import_react44.default.Component);
TransitionGroup.propTypes = true ? {
  component: import_prop_types3.default.any,
  children: import_prop_types3.default.node,
  appear: import_prop_types3.default.bool,
  enter: import_prop_types3.default.bool,
  exit: import_prop_types3.default.bool,
  childFactory: import_prop_types3.default.func
} : {};
TransitionGroup.defaultProps = defaultProps10;
var TransitionGroup_default = TransitionGroup;

// node_modules/@mantine/notifications/esm/Notifications.context.js
init_react();
var import_react45 = __toESM(require_react());
var NotificationsContext = (0, import_react45.createContext)(null);
NotificationsContext.displayName = "@mantine/notifications/NotificationsContext";

// node_modules/@mantine/notifications/esm/NotificationsProvider/get-position-styles/get-position-styles.js
init_react();
function getPositionStyles([vertical, horizontal], containerWidth, spacing) {
  const styles2 = {};
  vertical === "top" && (styles2.top = spacing);
  vertical === "bottom" && (styles2.bottom = spacing);
  horizontal === "left" && (styles2.left = spacing);
  horizontal === "right" && (styles2.right = spacing);
  horizontal === "center" && (styles2.left = "50%", styles2.transform = "translateX(-50%)");
  return styles2;
}
var get_position_styles_default = getPositionStyles;

// node_modules/@mantine/notifications/esm/NotificationsProvider/get-notification-state-styles/get-notification-state-styles.js
init_react();
var __defProp28 = Object.defineProperty;
var __getOwnPropSymbols29 = Object.getOwnPropertySymbols;
var __hasOwnProp29 = Object.prototype.hasOwnProperty;
var __propIsEnum29 = Object.prototype.propertyIsEnumerable;
var __defNormalProp28 = (obj, key, value) => key in obj ? __defProp28(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues28 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp29.call(b, prop))
      __defNormalProp28(a, prop, b[prop]);
  if (__getOwnPropSymbols29)
    for (var prop of __getOwnPropSymbols29(b)) {
      if (__propIsEnum29.call(b, prop))
        __defNormalProp28(a, prop, b[prop]);
    }
  return a;
};
var transforms = {
  left: "translateX(-100%)",
  right: "translateX(100%)",
  "top-center": "translateY(-100%)",
  "bottom-center": "translateY(100%)"
};
var noTransform = {
  left: "translateX(0)",
  right: "translateX(0)",
  "top-center": "translateY(0)",
  "bottom-center": "translateY(0)"
};
function getNotificationStateStyles({
  state,
  maxHeight,
  positioning,
  transitionDuration
}) {
  const [vertical, horizontal] = positioning;
  const property = horizontal === "center" ? `${vertical}-center` : horizontal;
  const commonStyles = {
    opacity: 0,
    maxHeight,
    transform: transforms[property],
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: "cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear",
    transitionProperty: "opacity, transform, max-height"
  };
  const inState = {
    opacity: 1,
    transform: noTransform[property]
  };
  const outState = {
    opacity: 0,
    maxHeight: 0,
    transform: transforms[property]
  };
  const transitionStyles = {
    entering: inState,
    entered: inState,
    exiting: outState,
    exited: outState
  };
  return __spreadValues28(__spreadValues28({}, commonStyles), transitionStyles[state]);
}
var get_notification_state_styles_default = getNotificationStateStyles;

// node_modules/@mantine/notifications/esm/NotificationContainer/NotificationContainer.js
init_react();
var import_react46 = __toESM(require_react());

// node_modules/@mantine/notifications/esm/NotificationContainer/get-auto-close/get-auto-close.js
init_react();
function getAutoClose(autoClose, notificationAutoClose) {
  if (typeof notificationAutoClose === "number") {
    return notificationAutoClose;
  }
  if (notificationAutoClose === false || autoClose === false) {
    return false;
  }
  return autoClose;
}
var get_auto_close_default = getAutoClose;

// node_modules/@mantine/notifications/esm/NotificationContainer/NotificationContainer.js
var __defProp29 = Object.defineProperty;
var __defProps11 = Object.defineProperties;
var __getOwnPropDescs11 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols30 = Object.getOwnPropertySymbols;
var __hasOwnProp30 = Object.prototype.hasOwnProperty;
var __propIsEnum30 = Object.prototype.propertyIsEnumerable;
var __defNormalProp29 = (obj, key, value) => key in obj ? __defProp29(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues29 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp30.call(b, prop))
      __defNormalProp29(a, prop, b[prop]);
  if (__getOwnPropSymbols30)
    for (var prop of __getOwnPropSymbols30(b)) {
      if (__propIsEnum30.call(b, prop))
        __defNormalProp29(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps11 = (a, b) => __defProps11(a, __getOwnPropDescs11(b));
var __objRest17 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp30.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols30)
    for (var prop of __getOwnPropSymbols30(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum30.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function NotificationContainer(_a) {
  var _b = _a, {
    notification,
    autoClose,
    onHide,
    innerRef
  } = _b, others = __objRest17(_b, [
    "notification",
    "autoClose",
    "onHide",
    "innerRef"
  ]);
  const _a2 = notification, { autoClose: notificationAutoClose } = _a2, notificationProps = __objRest17(_a2, ["autoClose"]);
  const autoCloseTimeout = get_auto_close_default(autoClose, notificationAutoClose);
  const hideTimeout = (0, import_react46.useRef)();
  const handleHide = () => {
    onHide(notification.id);
    window.clearTimeout(hideTimeout.current);
  };
  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current);
  };
  const handleDelayedHide = () => {
    if (typeof autoCloseTimeout === "number") {
      hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout);
    }
  };
  (0, import_react46.useEffect)(() => {
    if (typeof notification.onOpen === "function") {
      notification.onOpen(notification);
    }
  }, []);
  (0, import_react46.useEffect)(() => {
    handleDelayedHide();
    return cancelDelayedHide;
  }, [autoClose, notification.autoClose]);
  return /* @__PURE__ */ import_react46.default.createElement(Notification, __spreadProps11(__spreadValues29(__spreadValues29({}, notificationProps), others), {
    onClose: handleHide,
    onMouseEnter: cancelDelayedHide,
    onMouseLeave: handleDelayedHide,
    ref: innerRef
  }), notification.message);
}
NotificationContainer.displayName = "@mantine/notifications/NotificationContainer";
var NotificationContainer_default = NotificationContainer;

// node_modules/@mantine/notifications/esm/NotificationsProvider/NotificationsProvider.styles.js
init_react();
var useStyles9 = createStyles((theme) => ({
  notifications: {
    width: `calc(100% - ${theme.spacing.md * 2}px)`,
    boxSizing: "border-box",
    position: "fixed",
    zIndex: 1e3
  },
  notification: {
    "&:not(:first-of-type)": {
      marginTop: theme.spacing.sm
    }
  }
}));
var NotificationsProvider_styles_default = useStyles9;

// node_modules/@mantine/notifications/esm/NotificationsProvider/use-notifications-state/use-notifications-state.js
init_react();
var __defProp30 = Object.defineProperty;
var __defProps12 = Object.defineProperties;
var __getOwnPropDescs12 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols31 = Object.getOwnPropertySymbols;
var __hasOwnProp31 = Object.prototype.hasOwnProperty;
var __propIsEnum31 = Object.prototype.propertyIsEnumerable;
var __defNormalProp30 = (obj, key, value) => key in obj ? __defProp30(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues30 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp31.call(b, prop))
      __defNormalProp30(a, prop, b[prop]);
  if (__getOwnPropSymbols31)
    for (var prop of __getOwnPropSymbols31(b)) {
      if (__propIsEnum31.call(b, prop))
        __defNormalProp30(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps12 = (a, b) => __defProps12(a, __getOwnPropDescs12(b));
function useNotificationsState({ limit }) {
  const { state, queue, update, cleanQueue } = useQueue({
    initialValues: [],
    limit
  });
  const showNotification2 = (notification) => {
    const id = notification.id || randomId();
    update((notifications) => {
      if (notification.id && notifications.some((n) => n.id === notification.id)) {
        return notifications;
      }
      return [...notifications, __spreadProps12(__spreadValues30({}, notification), { id })];
    });
    return id;
  };
  const updateNotification2 = (id, notification) => update((notifications) => {
    const index = notifications.findIndex((n) => n.id === id);
    if (index === -1) {
      return notifications;
    }
    const newNotifications = [...notifications];
    newNotifications[index] = notification;
    return newNotifications;
  });
  const hideNotification2 = (id) => update((notifications) => notifications.filter((notification) => {
    if (notification.id === id) {
      typeof notification.onClose === "function" && notification.onClose(notification);
      return false;
    }
    return true;
  }));
  const clean = () => update(() => []);
  return {
    notifications: state,
    queue,
    showNotification: showNotification2,
    updateNotification: updateNotification2,
    hideNotification: hideNotification2,
    cleanQueue,
    clean
  };
}
var use_notifications_state_default = useNotificationsState;

// node_modules/@mantine/notifications/esm/NotificationsProvider/NotificationsProvider.js
var __defProp31 = Object.defineProperty;
var __getOwnPropSymbols32 = Object.getOwnPropertySymbols;
var __hasOwnProp32 = Object.prototype.hasOwnProperty;
var __propIsEnum32 = Object.prototype.propertyIsEnumerable;
var __defNormalProp31 = (obj, key, value) => key in obj ? __defProp31(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues31 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp32.call(b, prop))
      __defNormalProp31(a, prop, b[prop]);
  if (__getOwnPropSymbols32)
    for (var prop of __getOwnPropSymbols32(b)) {
      if (__propIsEnum32.call(b, prop))
        __defNormalProp31(a, prop, b[prop]);
    }
  return a;
};
var __objRest18 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp32.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols32)
    for (var prop of __getOwnPropSymbols32(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum32.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var POSITIONS2 = [
  "top-left",
  "top-right",
  "top-center",
  "bottom-left",
  "bottom-right",
  "bottom-center"
];
function NotificationsProvider(_a) {
  var _b = _a, {
    className,
    position: position2 = "bottom-right",
    autoClose = 4e3,
    transitionDuration = 250,
    containerWidth = 440,
    notificationMaxHeight = 200,
    limit = 5,
    zIndex = getDefaultZIndex("overlay"),
    style,
    children
  } = _b, others = __objRest18(_b, [
    "className",
    "position",
    "autoClose",
    "transitionDuration",
    "containerWidth",
    "notificationMaxHeight",
    "limit",
    "zIndex",
    "style",
    "children"
  ]);
  const forceUpdate = useForceUpdate();
  const refs = (0, import_react47.useRef)({});
  const previousLength = (0, import_react47.useRef)(0);
  const {
    notifications,
    queue,
    showNotification: showNotification2,
    updateNotification: updateNotification2,
    hideNotification: hideNotification2,
    clean,
    cleanQueue
  } = use_notifications_state_default({ limit });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  const { classes, cx, theme } = NotificationsProvider_styles_default();
  const positioning = (POSITIONS2.includes(position2) ? position2 : "bottom-right").split("-");
  const ctx = {
    notifications,
    queue,
    showNotification: showNotification2,
    hideNotification: hideNotification2,
    updateNotification: updateNotification2,
    clean,
    cleanQueue
  };
  useDidUpdate(() => {
    if (notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = notifications.length;
  }, [notifications]);
  useNotificationsEvents(ctx);
  const items = notifications.map((notification) => /* @__PURE__ */ import_react47.default.createElement(Transition_default, {
    key: notification.id,
    timeout: duration,
    onEnter: () => refs.current[notification.id].offsetHeight,
    nodeRef: { current: refs.current[notification.id] }
  }, (state) => /* @__PURE__ */ import_react47.default.createElement(NotificationContainer_default, {
    innerRef: (node2) => {
      refs.current[notification.id] = node2;
    },
    notification,
    onHide: hideNotification2,
    className: classes.notification,
    autoClose,
    sx: [
      __spreadValues31({}, get_notification_state_styles_default({
        state,
        positioning,
        transitionDuration: duration,
        maxHeight: notificationMaxHeight
      })),
      ...Array.isArray(notification.sx) ? notification.sx : [notification.sx]
    ]
  })));
  return /* @__PURE__ */ import_react47.default.createElement(NotificationsContext.Provider, {
    value: ctx
  }, /* @__PURE__ */ import_react47.default.createElement(Portal, {
    zIndex
  }, /* @__PURE__ */ import_react47.default.createElement(Box, __spreadValues31({
    className: cx(classes.notifications, className),
    style,
    sx: __spreadValues31({
      maxWidth: containerWidth
    }, get_position_styles_default(positioning, containerWidth, theme.spacing.md))
  }, others), /* @__PURE__ */ import_react47.default.createElement(TransitionGroup_default, null, items))), children);
}
NotificationsProvider.displayName = "@mantine/notifications/NotificationsProvider";

// node_modules/@mantine/notifications/esm/index.js
init_react();

// node_modules/@mantine/modals/esm/use-modals/use-modals.js
init_react();
var import_react49 = __toESM(require_react());

// node_modules/@mantine/modals/esm/context.js
init_react();
var import_react48 = __toESM(require_react());
var ModalsContext = (0, import_react48.createContext)(null);
ModalsContext.displayName = "@mantine/modals/ModalsContext";

// node_modules/@mantine/modals/esm/use-modals/use-modals.js
function useModals() {
  const ctx = (0, import_react49.useContext)(ModalsContext);
  if (!ctx) {
    throw new Error("[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component");
  }
  return ctx;
}

// node_modules/@mantine/modals/esm/ModalsProvider.js
init_react();
var import_react51 = __toESM(require_react());

// node_modules/@mantine/modals/esm/ConfirmModal.js
init_react();
var import_react50 = __toESM(require_react());
var __defProp32 = Object.defineProperty;
var __defProps13 = Object.defineProperties;
var __getOwnPropDescs13 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols33 = Object.getOwnPropertySymbols;
var __hasOwnProp33 = Object.prototype.hasOwnProperty;
var __propIsEnum33 = Object.prototype.propertyIsEnumerable;
var __defNormalProp32 = (obj, key, value) => key in obj ? __defProp32(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues32 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp33.call(b, prop))
      __defNormalProp32(a, prop, b[prop]);
  if (__getOwnPropSymbols33)
    for (var prop of __getOwnPropSymbols33(b)) {
      if (__propIsEnum33.call(b, prop))
        __defNormalProp32(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps13 = (a, b) => __defProps13(a, __getOwnPropDescs13(b));
function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels = { cancel: "", confirm: "" },
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children
}) {
  const { cancel: cancelLabel, confirm: confirmLabel } = labels;
  const ctx = useModals();
  const handleCancel = (event) => {
    typeof (cancelProps == null ? void 0 : cancelProps.onClick) === "function" && (cancelProps == null ? void 0 : cancelProps.onClick(event));
    typeof onCancel === "function" && onCancel();
    closeOnCancel && ctx.closeModal(id);
  };
  const handleConfirm = (event) => {
    typeof (confirmProps == null ? void 0 : confirmProps.onClick) === "function" && (confirmProps == null ? void 0 : confirmProps.onClick(event));
    typeof onConfirm === "function" && onConfirm();
    closeOnConfirm && ctx.closeModal(id);
  };
  return /* @__PURE__ */ import_react50.default.createElement(import_react50.default.Fragment, null, children && /* @__PURE__ */ import_react50.default.createElement(Box, {
    mb: "md"
  }, children), /* @__PURE__ */ import_react50.default.createElement(Group, __spreadValues32({
    position: "right"
  }, groupProps), /* @__PURE__ */ import_react50.default.createElement(Button, __spreadProps13(__spreadValues32({
    variant: "default"
  }, cancelProps), {
    onClick: handleCancel
  }), (cancelProps == null ? void 0 : cancelProps.children) || cancelLabel), /* @__PURE__ */ import_react50.default.createElement(Button, __spreadProps13(__spreadValues32({}, confirmProps), {
    onClick: handleConfirm
  }), (confirmProps == null ? void 0 : confirmProps.children) || confirmLabel)));
}

// node_modules/@mantine/modals/esm/reducer.js
init_react();
function modalsReducer(state, action) {
  switch (action.type) {
    case "OPEN": {
      return {
        current: action.payload,
        modals: [...state.modals, action.payload]
      };
    }
    case "CLOSE": {
      return {
        current: state.modals[state.modals.length - 2] || null,
        modals: state.modals.filter((m) => m.id !== action.payload)
      };
    }
    case "CLOSE_ALL": {
      return {
        current: state.current,
        modals: []
      };
    }
    default: {
      return state;
    }
  }
}

// node_modules/@mantine/modals/esm/ModalsProvider.js
var __defProp33 = Object.defineProperty;
var __defProps14 = Object.defineProperties;
var __getOwnPropDescs14 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols34 = Object.getOwnPropertySymbols;
var __hasOwnProp34 = Object.prototype.hasOwnProperty;
var __propIsEnum34 = Object.prototype.propertyIsEnumerable;
var __defNormalProp33 = (obj, key, value) => key in obj ? __defProp33(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues33 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp34.call(b, prop))
      __defNormalProp33(a, prop, b[prop]);
  if (__getOwnPropSymbols34)
    for (var prop of __getOwnPropSymbols34(b)) {
      if (__propIsEnum34.call(b, prop))
        __defNormalProp33(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps14 = (a, b) => __defProps14(a, __getOwnPropDescs14(b));
var __objRest19 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp34.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols34)
    for (var prop of __getOwnPropSymbols34(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum34.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function separateConfirmModalProps(props) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }
  const _a = props, {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels
  } = _a, others = __objRest19(_a, [
    "id",
    "children",
    "onCancel",
    "onConfirm",
    "closeOnConfirm",
    "closeOnCancel",
    "cancelProps",
    "confirmProps",
    "groupProps",
    "labels"
  ]);
  return {
    confirmProps: {
      id,
      children,
      onCancel,
      onConfirm,
      closeOnConfirm,
      closeOnCancel,
      cancelProps,
      confirmProps,
      groupProps,
      labels
    },
    modalProps: __spreadValues33({
      id
    }, others)
  };
}
function ModalsProvider({ children, modalProps, labels, modals }) {
  const [state, dispatch] = (0, import_react51.useReducer)(modalsReducer, { modals: [], current: null });
  const closeAll = (canceled) => {
    state.modals.forEach((modal) => {
      var _a, _b, _c, _d;
      if (modal.type === "confirm" && canceled) {
        (_b = (_a = modal.props) == null ? void 0 : _a.onCancel) == null ? void 0 : _b.call(_a);
      }
      (_d = (_c = modal.props) == null ? void 0 : _c.onClose) == null ? void 0 : _d.call(_c);
    });
    dispatch({ type: "CLOSE_ALL" });
  };
  const openModal = (props) => {
    const id = props.id || randomId();
    dispatch({
      type: "OPEN",
      payload: {
        id,
        type: "content",
        props
      }
    });
    return id;
  };
  const openConfirmModal = (props) => {
    const id = props.id || randomId();
    dispatch({
      type: "OPEN",
      payload: {
        id,
        type: "confirm",
        props
      }
    });
    return id;
  };
  const openContextModal = (modal, props) => {
    const id = props.id || randomId();
    dispatch({
      type: "OPEN",
      payload: {
        id,
        type: "context",
        props,
        ctx: modal
      }
    });
    return id;
  };
  const closeModal = (id, canceled) => {
    var _a, _b, _c, _d;
    if (state.modals.length <= 1) {
      closeAll(canceled);
      return;
    }
    const modal = state.modals.find((item) => item.id === id);
    if ((modal == null ? void 0 : modal.type) === "confirm" && canceled) {
      (_b = (_a = modal.props) == null ? void 0 : _a.onCancel) == null ? void 0 : _b.call(_a);
    }
    (_d = (_c = modal == null ? void 0 : modal.props) == null ? void 0 : _c.onClose) == null ? void 0 : _d.call(_c);
    dispatch({ type: "CLOSE", payload: modal.id });
  };
  const ctx = {
    modals: state.modals,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeAll
  };
  const getCurrentModal = () => {
    var _a;
    switch ((_a = state.current) == null ? void 0 : _a.type) {
      case "context": {
        const _b = state.current.props, { innerProps } = _b, rest = __objRest19(_b, ["innerProps"]);
        const ContextModal = modals[state.current.ctx];
        return {
          modalProps: rest,
          content: /* @__PURE__ */ import_react51.default.createElement(ContextModal, {
            innerProps,
            context: ctx,
            id: state.current.id
          })
        };
      }
      case "confirm": {
        const { modalProps: separatedModalProps, confirmProps: separatedConfirmProps } = separateConfirmModalProps(state.current.props);
        return {
          modalProps: separatedModalProps,
          content: /* @__PURE__ */ import_react51.default.createElement(ConfirmModal, __spreadProps14(__spreadValues33({}, separatedConfirmProps), {
            id: state.current.id,
            labels: state.current.props.labels || labels
          }))
        };
      }
      case "content": {
        const _c = state.current.props, { children: currentModalChildren } = _c, rest = __objRest19(_c, ["children"]);
        return {
          modalProps: rest,
          content: /* @__PURE__ */ import_react51.default.createElement(import_react51.default.Fragment, null, currentModalChildren)
        };
      }
      default: {
        return {
          modalProps: {},
          content: null
        };
      }
    }
  };
  const { modalProps: currentModalProps, content } = getCurrentModal();
  return /* @__PURE__ */ import_react51.default.createElement(ModalsContext.Provider, {
    value: ctx
  }, /* @__PURE__ */ import_react51.default.createElement(Modal, __spreadProps14(__spreadValues33(__spreadValues33({}, modalProps), currentModalProps), {
    opened: state.modals.length > 0,
    onClose: () => closeModal(state.current.id)
  }), content), children);
}

// node_modules/@mantine/modals/esm/index.js
init_react();

export {
  MantineProvider,
  Button,
  Notification,
  showNotification,
  NotificationsProvider,
  useModals,
  ModalsProvider
};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/_shared/chunk-LZFV2IVG.js.map
