---
{
    "name": "Ev-Layout",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "FLIR BFS-U3 16S2C",
        "WHEELTEC N100"
    ],
    "category": "Visual Navigation",
    "tags": [
        "Indoor Layout Estimation",
        "SLAM",
        "Visual Navigation"
    ],
    "description": "Indoor Layout Estimation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Other"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://1drv.ms/f/s!AjtGtw9IBVWZhqomhu87JboTEKcQtA?e=gHZTQW",
                "format": "Other",
                "available": true
            }
        ],
        "size_gb": 300.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Ev-Layout: A Large-scale Event-based Multi-modal Dataset for Indoor Layout Estimation and Tracking",
        "doi": "10.48550/arXiv.2503.08370",
        "authors": [
            "Xucheng Guo",
            "Yiran Shen",
            "Xiaofang Xiao",
            "Yuanfeng Zhou",
            "Lin Wang"
        ],
        "abstract": "This paper presents Ev-Layout, a novel large-scale event-based multi-modal dataset designed for indoor layout estimation and tracking. Ev-Layout makes key contributions to the community by: Utilizing a hybrid data collection platform (with a head-mounted display and VR interface) that integrates both RGB and bio-inspired event cameras to capture indoor layouts in motion. Incorporating time-series data from inertial measurement units (IMUs) and ambient lighting conditions recorded during data collection to highlight the potential impact of motion speed and lighting on layout estimation accuracy. The dataset consists of 2.5K sequences, including over 771.3K RGB images and 10 billion event data points. Of these, 39K images are annotated with indoor layouts, enabling research in both event-based and video-based indoor layout estimation. Based on the dataset, we propose an event-based layout estimation pipeline with a novel event-temporal distribution feature module to effectively aggregate the spatio-temporal information from events. Additionally, we introduce a spatio-temporal feature fusion module that can be easily integrated into a transformer module for fusion purposes. Finally, we conduct benchmarking and extensive experiments on the Ev-Layout dataset, demonstrating that our approach significantly improves the accuracy of dynamic indoor layout estimation compared to existing event-based methods.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2503.08370"
        },
        {
            "type": "github_page",
            "url": "https://github.com/YouothIsServed/EV-Layout"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "bibtex": {
        "copyright": "Creative Commons Attribution Non Commercial Share Alike 4.0 International",
        "year": 2025,
        "publisher": "arXiv",
        "title": "Ev-Layout: A Large-scale Event-based Multi-modal Dataset for Indoor Layout Estimation and Tracking",
        "keywords": "Graphics (cs.GR), Computer Vision and Pattern Recognition (cs.CV), FOS: Computer and information sciences, FOS: Computer and information sciences",
        "author": "Guo, Xucheng and Shen, Yiran and Xiao, Xiaofang and Zhou, Yuanfeng and Wang, Lin",
        "url": "https://arxiv.org/abs/2503.08370",
        "doi": "10.48550/ARXIV.2503.08370",
        "type": "misc",
        "key": "https://doi.org/10.48550/arxiv.2503.08370"
    }
}
---

# Dataset Description

Raw_data contains multiple sessions, each session containing all data collected during one dynamic acquisition. It includes raw_events, images, imu, labeled_img, and illumination.

Raw_events: This folder contains raw event data captured by the prophesee EVK4, with a resolution of 1280x720 pixels.

Images: This folder contains image data captured by the FLIRBFS-U316S2C camera, with a resolution of 1280x720 pixels.

Imu: This folder contains IMU (Inertial Measurement Unit) data collected by the WHEELTEC N100.

Labeled_img: This folder includes a subset of images extracted from the Images folder, annotated using the labelme annotation tool.

Illumination: The folder contains information recorded by the illuminance sensors..