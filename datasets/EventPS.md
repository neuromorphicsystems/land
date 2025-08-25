---
{
    "name": "EventPS",
    "aliases": [
        "DiLiGenT-Ev"
    ],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4",
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "Stereo",
        "Depth Estimation"
    ],
    "description": "Real-Time Photometric Stereo",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Github LFS"
        ],
        "file_formats": [
            "Other"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Github LFS",
                "url": "https://codeberg.org/ybh1998/EventPS",
                "format": "Other",
                "available": true
            }
        ]
    },
    "paper": {
        "title": "EventPS: Real-Time Photometric Stereo Using an Event Camera",
        "doi": "10.1109/CVPR52733.2024.00917",
        "authors": [
            "Bohan Yu",
            "Jieji Ren",
            "Jin Han",
            "Feishi Wang",
            "Jinxiu Liang",
            "Boxin Shi"
        ],
        "abstract": "Photometric stereo is a well-established technique to estimate the surface normal of an object. However, the requirement of capturing multiple high dynamic range images under different illumination conditions limits the speed and real-time applications. This paper introduces EventPS, a novel approach to real-time photometric stereo using an event camera. Capitalizing on the exceptional temporal resolution, dynamic range, and low bandwidth characteristics of event cameras, EventPS estimates surface nor-mal only from the radiance changes, significantly enhancing data efficiency. EventPS seamlessly integrates with both optimization-based and deep-learning-based photo-metric stereo techniques to offer a robust solution for non-Lambertian surfaces. Extensive experiments validate the effectiveness and efficiency of EventPS compared to frame-based counterparts. Our algorithm runs at over 30 fps in real-world scenarios, unleashing the potential of EventPS in time-sensitive and high-speed downstream applications. 1 1 Code available: https://codeberg.org/ybh1998/EventPS",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 7,
            "updated": "2025-06-23T12:09:49.904786"
        },
        {
            "source": "scholar",
            "count": 20,
            "updated": "2025-06-23T12:09:48.937453"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Yu_EventPS_Real-Time_Photometric_Stereo_Using_an_Event_Camera_CVPR_2024_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10655016"
        },
        {
            "type": "project_page",
            "url": "https://www.ybh1998.space/eventps-real-time-photometric-stereo-using-an-event-camera/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "5",
        "stereo": true
    },
    "bibtex": {
        "pages": "9602--9611",
        "year": 2024,
        "month": "jun",
        "author": "Yu, Bohan and Ren, Jieji and Han, Jin and Wang, Feishi and Liang, Jinxiu and Shi, Boxin",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-23",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.00917",
        "url": "https://ieeexplore.ieee.org/document/10655016/",
        "shorttitle": "{EventPS}",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{EventPS}: {Real}-{Time} {Photometric} {Stereo} {Using} an {Event} {Camera}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "yu_eventps_2024"
    },
    "referenced_papers": []
}
---

### Dataset Structure

- Contains three different sub-datasets:
  - A synthetic dataset converted from the Blobby dataset and the Sculpture dataset using ESIM
  - DiLiGenT-Ev, which is a conversion of the DiLiGenT dataset using ESIM in which the out-most border light directions examples are used
  - A real dataset containing data recorded from 5 real-world objects
