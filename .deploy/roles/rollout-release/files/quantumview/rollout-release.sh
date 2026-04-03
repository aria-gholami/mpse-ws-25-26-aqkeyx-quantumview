#!/bin/bash

docker compose pull quantumview
docker compose pull cms
docker compose -p 'quantumview-deployment' down
docker compose -p 'quantumview-deployment' up -d