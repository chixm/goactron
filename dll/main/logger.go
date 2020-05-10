package main

import (
	"log"
	"os"

	logrus "github.com/sirupsen/logrus"
)

var isSetUp = false

//Setup : sets up logging to file
func Setup() {
	if isSetUp {
		return
	}
	logrus.Info(`Logger SetUp`)
	file, err := os.OpenFile("logrus.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0777)
	if err != nil {
		log.Fatal(`Failed to open log file.`)
		return
	}
	isSetUp = true
	logrus.SetOutput(file)
}

func writeLog(text string) {
	Setup()
	log.Println(text)
	logrus.Info(text)
}
