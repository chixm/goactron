"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ffi = __importStar(require("ffi-napi"));
var path = __importStar(require("path"));
function defineDllFunctions() {
    var dllPath = path.resolve(__dirname, "goactron.dll");
    return ffi.Library(dllPath, {
        'RunCommand': ['string', ['string']],
        'InfoLog': ['int', ['string']]
    });
}
var dll = defineDllFunctions();
// 外部に提供するAPI
function dllMakeDirectory(name) {
    return dll.RunCommand(name);
}
exports.dllMakeDirectory = dllMakeDirectory;
function writeLog(text) {
    return dll.InfoLog(text);
}
exports.writeLog = writeLog;
