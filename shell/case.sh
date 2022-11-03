#!/bin/bash

if [ $# -eq 0 ]; then
	echo "Enter the contry name"
else
	case "$1" in
		ko)
			echo "Seoul" ;;
		us)
			echo "Washington" ;;
		cn)
			echo "Beijing" ;;
		jp)
			echo "Tokyo" ;;
		*)
			echo "$1 not have list"
	esac
fi
