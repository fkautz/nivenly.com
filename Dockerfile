FROM golang:latest
WORKDIR /go/src/github.com/kris-nova/nivenly.com
COPY app app
COPY main.go main.go
COPY go.mod go.mod
COPY go.sum go.sum
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /nivenly


FROM alpine:latest
RUN apk add nmap nmap-scripts
RUN apk --no-cache add ca-certificates
COPY public /public
COPY --from=0 /nivenly /nivenly
CMD ["/nivenly"]