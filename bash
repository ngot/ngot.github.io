#!/bin/sh

rake generate

cp -rf public/ ../temp

git add . --ignore-removal