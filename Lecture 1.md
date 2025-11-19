---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# apply any unocss classes to the current slide
class: 'text-center'
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
transition: slide-left
title: Welcome to Slidev
mdc: true
---
# [[Lecture 1]]
## Introduction to Computer Vision
Dr. Ossama Nasser

2025-2026

---
## What is Computer Vision
- As humans, we perceive the three-dimensional structure of the world around us with apparent ease.
- In computer vision, we try to do the same thing, describe the world that we see in one or more images and to reconstruct its properties, such as shape, illumination, and color distributions
---
## The Application of Computer Vision
- **Optical character recognition (OCR)**: reading handwritten postal codes on letters and automatic number plate recognition (ANPR)
- **Machine inspection**: rapid parts inspection for quality assurance using stereo vision with specialized illumination to measure tolerances on aircraft wings or auto body parts or looking for defects in steel castings using X-ray vision
- **Retail**: object recognition for automated checkout lanes
- **3D model building (photogrammetry)**: fully automated construction of 3D models from aerial photographs used in systems such as Bing Maps
- **Medical imaging**: registering pre-operative and intra-operative imagery or performing long-term studies of people’s brain morphology as they age
- **Automotive safety**: detecting unexpected obstacles such as pedestrians on the street, under conditions where active vision techniques such as radar or lidar do not work well
---
## The Application of Computer Vision
- **Match move**: merging computer-generated imagery (CGI) with live action footage by tracking feature points in the source video to estimate the 3D camera motion and shape of the environment
- **Motion capture (mocap)**: using retro-reflective markers viewed from multiple cameras or other vision-based techniques to capture actors for computer animation
- **Surveillance**: monitoring for intruders, analyzing highway traffic, and monitoring pools for drowning victims
- **Fingerprint recognition and biometrics**: for automatic access authentication as well as forensic applications
---
## Image Representation
- In computers, images are represented as multidimensional matrix
- The size of the matrix depends on:
	- The size of the image
	- The color system used
---
### Image Representation: Size of Image
- Image sizes is about width and height
- The amount of pixels in image
- In computer vision the more the pixels the more the calculation and the longer the time to reach results
- To solve this problem, we reduce the amount of data we need to process, through methods like Segmentation (coming later)
---
### Image Representation: Color System
- In computers there are various color systems
- Each one is used for different reasons and feature:
	- Some are more suitable to view, others are better for print
	- Some describe colors, others describe various features about colors
---
### Image Representation: Color System
- Some color systems:
	- RGB
	- CMYK
	- HSV
	- YUV
	- LAB
### Image Representation: Color System
	
