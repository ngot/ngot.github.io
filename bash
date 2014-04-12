#!/bin/sh

rake generate

cp -rf public/ ../temp

git add . --ignore-removal
git commit -am 'commit'
git checkout master

cp -rf ../temp/ ./
