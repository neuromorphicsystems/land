---
{
    "name": "CIFAR10-DVS",
    "aliases": [],
    "year": 2017,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVS128"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Classification Datasets",
        "Monitor Conversion"
    ],
    "task": "Object Classification",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": true,
        "distribution_methods": [
            "Figshare"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "Dataset contains scripts to convert the data to Matlab format",
        "dataset_links": [
            {
                "name": "Figshare",
                "url": "https://figshare.com/s/d03a91081824536f12a8",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 7.81,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "CIFAR10-DVS -  An Event-Stream Dataset for Object Classification",
        "doi": "10.3389/fnins.2017.00309",
        "authors": [
            "Hongmin Li",
            "Hanchao Liu",
            "Xiangyang Ji",
            "Guoqi Li",
            "Luping Shi"
        ],
        "abstract": "Neuromorphic vision research requires high-quality and appropriately challenging event-stream datasets to support continuous improvement of algorithms and methods. However, creating event-stream datasets is a time-consuming task, which needs to be recorded using the neuromorphic cameras. Currently, there are limited event-stream datasets available. In this work, by utilizing the popular computer vision dataset CIFAR-10, we converted 10,000 frame-based images into 10,000 event streams using a dynamic vision sensor (DVS), providing an event-stream dataset of intermediate dif\ufb01culty in 10 different classes, named as \u201cCIFAR10-DVS.\u201d The conversion of event-stream dataset was implemented by a repeated closed-loop smooth (RCLS) movement of frame-based images. Unlike the conversion of frame-based images by moving the camera, the image movement is more realistic in respect of its practical applications. The repeated closed-loop image movement generates rich local intensity changes in continuous time which are quantized by each pixel of the DVS camera to generate events. Furthermore, a performance benchmark in event-driven object classi\ufb01cation is provided based on state-of-the-art classi\ufb01cation algorithms. This work provides a large event-stream dataset and an initial benchmark for comparison, which may boost algorithm developments in even-driven pattern recognition and object classi\ufb01cation.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 229,
            "updated": "2024-10-26 12:53:55.914285"
        },
        {
            "source": "scholar",
            "count": 630,
            "updated": "2025-06-15T08:58:18.754825"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2017.00309/full"
        },
        {
            "type": "project_page",
            "url": "https://figshare.com/articles/dataset/CIFAR10-DVS_New/4724671/2"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "10",
        "num_recordings": "10000",
        "stereo": false
    },
    "bibtex": {
        "pages": "309",
        "year": 2017,
        "month": "may",
        "author": "Li, Hongmin and Liu, Hanchao and Ji, Xiangyang and Li, Guoqi and Shi, Luping",
        "journal": "Frontiers in Neuroscience",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.3389/fnins.2017.00309",
        "url": "http://journal.frontiersin.org/article/10.3389/fnins.2017.00309/full",
        "shorttitle": "{CIFAR10}-{DVS}",
        "issn": "1662-453X",
        "volume": "11",
        "title": "{CIFAR10}-{DVS}: {An} {Event}-{Stream} {Dataset} for {Object} {Classification}",
        "type": "article",
        "key": "li_cifar10-dvs_2017"
    }
}
---

### Dataset Description

A single 128x128 pixel DVS sensor was placed in front of a 24" LCD monitor. Images of CIFAR-10 were upscaled to 512 * 512 through bicubic interpolation, and displayed on the LCD monitor with circulating smooth movement. A total of 10,000 event-stream recordings in 10 classes(airplane, automobile, bird, cat, deer, dog, frog, horse, ship, truck) with 1000 recordings per classes were obtained.

### Dataset Structure

- Converted from a subset the CIFAR10 dataset
- Contains 10 classes
- Contains in total 10000 recordings
- Converted using a real camera pointed at a monitor (Repeated Closed-Loop Smooth motion)

### Dataset Files

| File Name      | Size      | URL                                            |
| -------------- | --------- | ---------------------------------------------- |
| airplane.zip   | 712.45 MB | https://figshare.com/ndownloader/files/7712788 |
| automobile.zip | 925.22 MB | https://figshare.com/ndownloader/files/7712791 |
| bird.zip       | 725.52 MB | https://figshare.com/ndownloader/files/7712794 |
| cat.zip        | 804.21 MB | https://figshare.com/ndownloader/files/7712812 |
| deer.zip       | 742.23 MB | https://figshare.com/ndownloader/files/7712815 |
| dog.zip        | 805.48 MB | https://figshare.com/ndownloader/files/7712818 |
| ship.zip       | 708.01 MB | https://figshare.com/ndownloader/files/7712836 |
| truck.zip      | 906.10 MB | https://figshare.com/ndownloader/files/7712839 |
| frog.zip       | 780.89 MB | https://figshare.com/ndownloader/files/7712842 |
| horse.zip      | 886.22 MB | https://figshare.com/ndownloader/files/7712851 |
| README.txt     | 1.23 kB   | https://figshare.com/ndownloader/files/7713487 |
