---
{
    "name": "CeleX-HAR",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CeleX-V"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Action Recognition"
    ],
    "task": "Human Activity Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "Matlab"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1yvJje7DqIn8qT9fmQMbeeQ?pwd=wsad",
                "format": "Matlab",
                "available": true
            }
        ],
        "size_gb": 377.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event Stream based Human Action Recognition: A High-Definition Benchmark Dataset and Algorithms",
        "doi": "10.48550/arXiv.2408.09764",
        "authors": [
            "Xiao Wang",
            "Shiao Wang",
            "Pengpeng Shao",
            "Bo Jiang",
            "Lin Zhu",
            "Yonghong Tian"
        ],
        "abstract": "Human Action Recognition (HAR) stands as a pivotal research domain in both computer vision and artificial intelligence, with RGB cameras dominating as the preferred tool for investigation and innovation in this field. However, in real-world applications, RGB cameras encounter numerous challenges, including light conditions, fast motion, and privacy concerns. Consequently, bio-inspired event cameras have garnered increasing attention due to their advantages of low energy consumption, high dynamic range, etc. Nevertheless, most existing event-based HAR datasets are low resolution (346 \u00d7 260). In this paper, we propose a largescale, high-definition (1280 \u00d7 800) human action recognition dataset based on the CeleX-V event camera, termed CeleX-HAR. It encompasses 150 commonly occurring action categories, comprising a total of 124,625 video sequences. Various factors such as multi-view, illumination, action speed, and occlusion are considered when recording these data. To build a more comprehensive benchmark dataset, we report over 20 mainstream HAR models for future works to compare. In addition, we also propose a novel Mamba vision backbone network for event stream based HAR, termed EVMamba, which equips the spatial plane multi-directional scanning and novel voxel temporal scanning mechanism. By encoding and mining the spatiotemporal information of event streams, our EVMamba has achieved favorable results across multiple datasets. Both the dataset and source code will be released.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 2,
            "updated": "2025-01-06 19:23:08.251744"
        },
        {
            "source": "scholar",
            "count": 5,
            "updated": "2025-07-09T09:56:39.303837"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2408.09764"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2408.09764"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/CeleX-HAR"
        }
    ],
    "full_name": "CeleX Human Action Recognition (HAR) dataset",
    "additional_metadata": {
        "sensor_resolution": "1280x800",
        "num_classes": "150",
        "num_recordings": "124625",
        "recording_duration": "3 seconds",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Artificial Intelligence, Computer Science - Computer Vision and Pattern Recognition, Computer Science - Neural and Evolutionary Computing",
        "note": "arXiv:2408.09764 [cs]",
        "year": 2024,
        "month": "aug",
        "author": "Wang, Xiao and Wang, Shiao and Shao, Pengpeng and Jiang, Bo and Zhu, Lin and Tian, Yonghong",
        "publisher": "arXiv",
        "urldate": "2024-08-23",
        "language": "en",
        "doi": "10.48550/arXiv.2408.09764",
        "url": "http://arxiv.org/abs/2408.09764",
        "shorttitle": "Event {Stream} based {Human} {Action} {Recognition}",
        "title": "Event {Stream} based {Human} {Action} {Recognition}: {A} {High}-{Definition} {Benchmark} {Dataset} and {Algorithms}",
        "type": "misc",
        "key": "wang_event_2024"
    }
}
---

### Dataset Structure

The data was captured using a CeleX-V with a resolution of1280x800 pixels. It contains 150 classes and 124625 sequences. Data is recorded from multiple views, with both static and dynamic cameras. Each sequence is 3 seconds each, on average.
