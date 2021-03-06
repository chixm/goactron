import * as ffi from 'ffi-napi';
import * as path from 'path';

type GoactronDll = {
    RunCommand(c:string): string;
    InfoLog(c:string): number;
}
 
function defineDllFunctions(): GoactronDll {
    let dllPath = path.resolve(__dirname,"goactron.dll");
    return ffi.Library(dllPath,{
        'RunCommand': ['string', ['string']],
        'InfoLog': ['int', ['string']]
    });
}

const dll: GoactronDll = defineDllFunctions();

// 外部に提供するAPI
export function dllMakeDirectory(name: string): string {
    return dll.RunCommand(name);
}

export function writeLog(text: string):number{
    return dll.InfoLog(text);
}