#!/bin/bash

go mod init
go mod tidy
go mod download
go mod vendor
cp -rvf ${GOPATH}/src/github.com/kris-nova/bjorno vendor/github.com/kris-nova/bjorno