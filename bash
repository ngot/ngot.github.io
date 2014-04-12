#!/bin/sh

rake generate

cp -rf public/ ../ngot_temp

git add . --ignore-removal
git commit -am 'commit'
git push origin source
git checkout master

cp -rf ../ngot_temp/ ./
rm -rf ../ngot_temp

git add . --ignore-removal
git commit -am 'generate'
git push origin master
git checkout source
