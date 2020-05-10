package main

import (
	"C"
	"log"
	"os"
)

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
func InfoLog(str *C.char) int {
	defer func() { // something wrong with log
		if err := recover(); err != nil {
			log.Panicln(`Error log Write Error.`)
		}
	}()
	text := C.GoString(str)
	log.Println(text)
	writeLog(text)
	return 0
}

func RunTest() string {
	cs := C.CString("pointer")
	writeLog(C.GoString(cs))
	return C.GoString(RunCommand(C.CString(`test`)))
}
