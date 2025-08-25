---
{
    "name": "N-CARS",
    "aliases": [],
    "year": 2018,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "ATIS"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Object Classification",
        "Object Detection"
    ],
    "description": "Driving Task",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "Form submission required to access dataset",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://kdrive.infomaniak.com/app/share/975517/eb418265-0d5a-43a7-b87e-b3d785f17292/files/147",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 0.29,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "HATS -  Histograms of Averaged Time Surfaces for Robust Event-Based Object Classification",
        "doi": "10.1109/CVPR.2018.00186",
        "authors": [
            "Amos Sironi",
            "Manuele Brambilla",
            "Nicolas Bourdis",
            "Xavier Lagorce",
            "Ryad Benosman"
        ],
        "abstract": "Event-based cameras have recently drawn the attention of the Computer Vision community thanks to their advantages in terms of high temporal resolution, low power consumption and high dynamic range, compared to traditional frame-based cameras. These properties make event-based cameras an ideal choice for autonomous vehicles, robot navigation or UAV vision, among others. However, the accuracy of event-based object classi\ufb01cation algorithms, which is of crucial importance for any reliable system working in real-world conditions, is still far behind their framebased counterparts. Two main reasons for this performance gap are: 1. The lack of effective low-level representations and architectures for event-based object classi\ufb01cation and 2. The absence of large real-world event-based datasets. In this paper we address both problems. First, we introduce a novel event-based feature representation together with a new machine learning architecture. Compared to previous approaches, we use local memory units to ef\ufb01ciently leverage past temporal information and build a robust eventbased representation. Second, we release the \ufb01rst large real-world event-based dataset for object classi\ufb01cation. We compare our method to the state-of-the-art with extensive experiments, showing better classi\ufb01cation performance and real-time computation.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 261,
            "updated": "2024-10-26 12:52:58.013379"
        },
        {
            "source": "scholar",
            "count": 565,
            "updated": "2025-06-30T10:56:55.267897"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1803.07913"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8578284"
        },
        {
            "type": "project_page",
            "url": "https://www.prophesee.ai/2018/03/13/dataset-n-cars/"
        }
    ],
    "full_name": "",
    "bibtex": {
        "pages": "1731--1740",
        "year": 2018,
        "month": "jun",
        "author": "Sironi, Amos and Brambilla, Manuele and Bourdis, Nicolas and Lagorce, Xavier and Benosman, Ryad",
        "publisher": "IEEE",
        "booktitle": "2018 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition}",
        "urldate": "2023-10-07",
        "language": "en",
        "doi": "10.1109/CVPR.2018.00186",
        "url": "https://ieeexplore.ieee.org/document/8578284/",
        "shorttitle": "{HATS}",
        "isbn": "978-1-5386-6420-9",
        "title": "{HATS}: {Histograms} of {Averaged} {Time} {Surfaces} for {Robust} {Event}-{Based} {Object} {Classification}",
        "address": "Salt Lake City, UT, USA",
        "type": "inproceedings",
        "key": "sironi_hats_2018"
    }
}
---

## Dataset Structure

The N-CARS dataset consist of 12,336 car samples and 11,693 non-car samples
