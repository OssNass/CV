#!/bin/bash


magick -compress JPEG -quality 85 $1/*.png $1/res.pdf
