---
{
    "name": "SLT",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Space Datasets"
    ],
    "task": "Lunar Terrain Navigation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/13218780",
                "format": "Binary",
                "available": true,
                "doi": "10.5281/zenodo.13218780"
            }
        ],
        "size_gb": 89.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Synthetic Lunar Terrain: A Multimodal Open Dataset for Training and Evaluating Neuromorphic Vision Algorithms",
        "doi": "10.48550/arXiv.2408.16971",
        "authors": [
            "Marcus M\u00e4rtens",
            "Kevin Farries",
            "John Culton",
            "Tat-Jun Chin"
        ],
        "abstract": "Synthetic Lunar Terrain (SLT) is an open dataset collected from an analogue test site for lunar missions, featuring synthetic craters in a high-contrast lighting setup. It includes several side-by-side captures from event-based and conventional RGB cameras, supplemented with a high-resolution 3D laser scan for depth estimation. The event-stream recorded from the neuromorphic vision sensor of the event-based camera is of particular interest as this emerging technology provides several unique advantages, such as high data rates, low energy consumption and resilience towards scenes of high dynamic range. SLT provides a solid foundation to analyse the limits of RGB-cameras and potential advantages or synergies in utilizing neuromorphic visions with the goal of enabling and improving lunar specific applications like rover navigation, landing in cratered environments or similar.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 0,
            "updated": "2025-01-06 10:30:56.983664"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2408.16971"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2408.16971"
        },
        {
            "type": "project_page",
            "url": "https://zenodo.org/records/13218780"
        }
    ],
    "full_name": "Synthetic Lunar Terrain",
    "additional_metadata": {
        "num_recordings": "42"
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2408.16971 [cs]",
        "year": 2024,
        "month": "aug",
        "author": "M\u00e4rtens, Marcus and Farries, Kevin and Culton, John and Chin, Tat-Jun",
        "publisher": "arXiv",
        "urldate": "2024-10-07",
        "language": "en",
        "doi": "10.48550/arXiv.2408.16971",
        "url": "http://arxiv.org/abs/2408.16971",
        "shorttitle": "Synthetic {Lunar} {Terrain}",
        "title": "Synthetic {Lunar} {Terrain}: {A} {Multimodal} {Open} {Dataset} for {Training} and {Evaluating} {Neuromorphic} {Vision} {Algorithms}",
        "type": "misc",
        "key": "martens_synthetic_2024"
    }
}
---


### Dataset Structure 

**Synthetic Lunar Terrain (SLT)** is a dataset based on a reconstruction of a typical **cratered lunar surface landscape** at the [EXTERRES Laboratory](https://set.adelaide.edu.au/atcsr/space-research/exterres-laboratory) at University of Adelaide, Roseworthy Campus. On a surface area of **3.6m x 4.8m**, multiple synthetic craters with different sizes and geometries were sculpted into **lunar regolith simulant**. A **9kW metal-halide lamp** illuminated the scene, providing high contrast drop-shadows from the rims of craters and similar surface features that are characteristic for the Earth's moon.

The purpose of this dataset is to provide multimodal recordings of visual information to develop and test algorithms on a hardware analogue of the moon rather than relying on computer simulations. In particular, comparisons between **neuromorphic vision sensors** like **event-based cameras** and imaging with **conventional monocular cameras** are at the core of this work. For this purpose, an event-based camera (Gen4 Prophesee with Prophesee-Sony IMX636 sensor) was mounted downward-pointing next to a optical camera (Basler a2A1920-160ucPRO with Sony IMX392 sensor) on an extendable rod which was moved above the surface in a slow and continuous sweep. In total, SLT consists of camera recordings from 21 different positions/settings, with clockwise and anti-clockwise motions under varying, extreme lighting conditions.

The event-stream and grayscale image data can be further referenced via a detailed **3D point cloud** obtained by a FARO Focus S70 3D Scanner. This 3D Scan was post-processed, realigned and resampled into a 3D point cloud of **~6.25M points,** with a surface density of **1.862 p/mm²**, providing a ground-truth for the crater geometries.

In detail, SLT contains the following:

- eventbased.zip:
    - **42 camera orbits** in the binary **EVT 3.0** format ([Prophesee docs](https://docs.prophesee.ai/stable/data/encoding_formats/evt3.html)) 
    - corresponding **.mp4** event-frame video rendering for visualization purposes (33.333ms accumulation time at 30FPS)
    - corresponding **.bias** file containing settings used during recording
- code.zip:
    - Standalone C++ code of the **metavision EVT3-to-RAW file decoder**, allowing to convert the binary EVT 3.0 format into a plaintext **.csv** that includes
        - the coordinates of the event-pixel,
        - the polarity change,
        - and the time-stamp of the event.
    - This code is an unmodified redistribution from the [Metavision SDK](https://www.prophesee.ai/metavision-intelligence/), version 4.6.0, released by Prophesee under Apache License 2.0.
-  optical.zip:
    - **42 image sequences** in **.tif** format (LZW, 1920x1200px, 8bit, grayscale)
        - Length of image sequences varies between about 300 to 700 images per sequence
- 3d_scan.zip:
    - **SLT3d_scan.ply:** 3D point cloud of the scene Stanford Polygon File Format
    - **SLT3d_scan.xyz:** 3D point cloud with plaintext x y z coordinates, white-space separated
- cratermap.png:
    - Annotations of **130 different surface features** that have been manually identified as crater-like with approximate x,y-coordinates.
- positionmap.png:
    - Illustration of the different positions from which the rod was moved over the scene (not to scale).
- sample.zip:
    - A sample containing 1 event-camera orbit with the corresponding image sequence (for convenience only, to test the dataset without the need to download it's entirety)

The global coordinate frame of this dataset puts the origin at the centre of the scene. The shorter side of the terrain is roughly aligned with the x-axis, the longer side with the y-axis. The z-axis represents height/depth (compare with **cratermap.png**). The different conditions (compare with **positionmap.png**) from which the data was taken are encoded as follows:

- **A1, ..., A9** refer to the left side of the scene (negative x)
- **B1, ..., B9** refer to the right side of the scene (positive x)
- **S1, S2, S3** and **S4** describe special lighting conditions and/or parameter settings
- **CW** refers to a "clockwise" sweeping of the camera-rod, relative to the position
- **ACW** refers to an "anti-clockwise" sweeping of the camera-rod, relative to the position

The light from the metal-halide lamp was directed through a small opening, shining along the positive y-axis. In some of the setups, an obstacle was placed between the surface and the opening, blocking out part of the light to create a light-dark separator on the surface, emulating the **terminator** on the Moon between it's day and night side, resulting in highly contrastive images.