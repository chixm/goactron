package main

import "C"
import "os"

/** Goのルールでmainは必須 */
func main() {
}

//export RunCommand
func RunCommand(str *C.char) *C.char {
	cs := C.GoString(str)
	os.Mkdir(cs, os.ModeDir)
	return C.CString(cs + `Directory Created`)
}

func RunTest() string {
	return C.GoString(RunCommand(C.CString(`test`)))
}
