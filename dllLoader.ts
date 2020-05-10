import * as ffi from 'ffi-napi';
import * as path from 'path';

type GoactronDll = {
    RunCommand(c:string): string;
}
 
function defineDllFunctions(): GoactronDll {
    let dllPath = path.resolve(__dirname,"goactron.dll");
    return ffi.Library(dllPath,{
        'RunCommand': ['string', ['string']]
    });
}

const dll: GoactronDll = defineDllFunctions();

// 外部に提供するAPI
export function dllMakeDirectory(name: string): string {
    return dll.RunCommand(name);
}