#!/bin/bash

man=0
woman=0

echo -n "Input man Age : "
read man
echo -n "Input Woman Age : "
read woman

if [ $man -gt $woman ];
then
	echo old man
elif [ $woman -eq $man ];
then
	echo same age
else
	echo old woman
fi
