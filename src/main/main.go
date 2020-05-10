package main

import "C"
import "os"

/** Goのルールでmainは必須 */
func main() {
	Setup()
}

//export RunCommand
func RunCommand(str *C.char) *C.char {
	cs := C.GoString(str)
	os.Mkdir(cs, os.ModeDir)
	return C.CString(cs + `Directory Created`)
}

//export InfoLog
func InfoLog(str *C.char) int64 {
	text := C.GoString(str)
	writeLog(text)
	return 0
}

func RunTest() string {
	writeLog(`test logging`)
	return C.GoString(RunCommand(C.CString(`test`)))
}
