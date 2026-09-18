---
theme: scholarly
class: text-center
transition: slide-left
title: Welcome to Slidev
mdc: true
author: Dr. Ossama Nasser
exportFilename: "1"
layout: cover
addons:
  - slidev-component-progress
lineNumbers: "true"
---
# Computer Vision
## Lecture 1
### Introduction to Computer Vision
#### 2026-2027
---

# What is Computer Vision
- It is a field of artificial intelligence and computer science that focuses on enabling machines to interpret and understand the visual world. 
- By using digital images, videos, and other visual inputs, computer vision systems can process, analyze, and extract meaningful information, and then take action or make recommendations based on that information.
- The fundamental goal of computer vision is to bridge the gap between the raw data of pixels in an image and a high-level, contextual understanding of that data, thereby replicating and automating human visual perception.
> The field draws upon a range of disciplines, including signal processing, geometry, physics, applied mathematics, and increasingly, deep learning.
---

## Key Concepts and Distinctions
- **Computer Vision vs. Image Processing:**
	- While these fields are related, they are distinct.
	- Image processing involves transformations applied to images, such as noise reduction or contrast adjustment, **without** necessarily interpreting the semantic content.
	- Computer vision, by contrast, uses the outputs of image processing to perform higher-level inference and understand the meaning of the image.   
- **Role of Deep Learning:**
	- Modern computer vision has been dramatically transformed by deep learning and neural networks, which allow systems to learn complex hierarchical feature representations directly from large sets of labeled data.
	- This approach has substantially improved accuracy on key vision tasks.
---

## Applications of Computer Vision
- **Optical Character Recognition (OCR)**: reading handwritten postal codes on letters and automatic number plate recognition (ANPR)
- **Machine Inspection**: rapid parts inspection for quality assurance using stereo vision with specialized illumination to measure tolerances on aircraft wings or auto body parts or looking for defects in steel castings using X-ray vision
- **Retail**: object recognition for automated checkout lanes
- **3D Model Building (Photogrammetry)**: fully automated construction of 3D models from aerial photographs used in systems such as Bing Maps
- **Medical Imaging**: Analyzing medical images to detect fractions, tumors, ...etc.
- **Automotive Safety**: detecting unexpected obstacles such as pedestrians on the street, under conditions where active vision techniques such as radar or lidar do not work well
- **Object Tracking**: Allows to track a certain object (like car) through video file(s).
- **Motion Capture (MOCAP)**: using retro-reflective markers viewed from multiple cameras or other vision-based techniques to capture actors for computer animation

----

```yaml
hideInToc: true
```
## Applications of Computer Vision
- **Surveillance**: monitoring for intruders, analyzing highway traffic, and monitoring pools for drowning victims
- **Fingerprint Recognition and Biometrics**: for automatic access authentication as well as forensic applications
- **Civil Engineering**: To detect cracks in buildings, bridges, dams, roads and estimate the severity of said crack
- **Quality Assurance**: To check finished products against reference product making sure said products are within acceptable margins.
- **Face Detection**: To detect faces in pictures and matching them against a known database of faces and names