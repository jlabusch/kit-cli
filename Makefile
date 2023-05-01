IMAGE=kit-cli
SHELL:=/bin/bash

build:
	docker build -t $(IMAGE) .

clean:
	docker rmi $(IMAGE)
