"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadToDom = loadToDom;
var react_dom_1 = __importDefault(require("react-dom"));
var react_1 = __importDefault(require("react"));
/**
 * Button created by react
 */
var BasicButton = /** @class */ (function (_super) {
    __extends(BasicButton, _super);
    function BasicButton(prop) {
        var _this = _super.call(this, prop) || this;
        // detect when the text change
        _this.textChange = function (event) {
            _this.setState({ command: event.target.value });
        };
        _this.clickAction = function () {
            console.log('react button clicked!');
            if (_this.state.command) {
                window.mainProcessFunc(_this.state.command).then(function (res) {
                    _this.setState({ result: res });
                }).catch(function (err) {
                    _this.setState({ result: "error" });
                });
            }
        };
        _this.render = function () {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("input", { type: "text", name: "text", onChange: _this.textChange, value: _this.state.command, width: "300px" }),
                react_1.default.createElement("button", { onClick: _this.clickAction }, "Submit !!"),
                react_1.default.createElement("div", { id: "resultArea" }, _this.state.result)));
        };
        _this.state = { command: prop.init, result: "" };
        return _this;
    }
    return BasicButton;
}(react_1.default.Component));
// call from preload.ts
function loadToDom() {
    react_dom_1.default.render(react_1.default.createElement(BasicButton, { init: 'write command here' }), document.getElementById("main-content"));
}
