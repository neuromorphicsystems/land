---
{
    "name": "Real Night Sky Dataset",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "Rocket Lab ST-16RT2"
    ],
    "category": "Domain Specific Application",
    "tags": [
        "Space Datasets",
        "Star Tracking"
    ],
    "description": "Star-tracking Dataset with Ground Truth",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1hzxUKxIFhrNxCfS4zl6T9DN8EWTZOQui",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 2.6,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EBS-EKF: Accurate and High Frequency Event-based Star Tracking",
        "doi": "10.48550/arXiv.2503.20101",
        "authors": [
            "Albert W Reed",
            "Connor Hashemi",
            "Dennis Melamed",
            "Nitesh Menon",
            "Keigo Hirakawa",
            "Scott McCloskey"
        ],
        "abstract": "Event-based sensors (EBS) are a promising new technology for star tracking due to their low latency and power efficiency, but prior work has thus far been evaluated exclusively in simulation with simplified signal models. We propose a novel algorithm for event-based star tracking, grounded in an analysis of the EBS circuit and an extended Kalman filter (EKF). We quantitatively evaluate our method using real night sky data, comparing its results with those from a space-ready active-pixel sensor (APS) star tracker. We demonstrate that our method is an order-of-magnitude more accurate than existing methods due to improved signal modeling and state estimation, while providing more frequent updates and greater motion tolerance than conventional APS trackers. We provide all code and the first dataset of events synchronized with APS solutions.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-09-27T07:12:46.033955"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2503.20101"
        },
        {
            "type": "project_page",
            "url": "https://kitware.github.io/nest-project-page/"
        },
        {
            "type": "github_page",
            "url": "https://gitlab.kitware.com/nest-public/kw_ebs_star_tracking"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "bibtex": {
        "copyright": "Creative Commons Attribution 4.0 International",
        "year": 2025,
        "publisher": "arXiv",
        "title": "EBS-EKF: Accurate and High Frequency Event-based Star Tracking",
        "keywords": "Computer Vision and Pattern Recognition (cs.CV), FOS: Computer and information sciences, FOS: Computer and information sciences",
        "author": "Reed, Albert W and Hashemi, Connor and Melamed, Dennis and Menon, Nitesh and Hirakawa, Keigo and McCloskey, Scott",
        "url": "https://arxiv.org/abs/2503.20101",
        "doi": "10.48550/ARXIV.2503.20101",
        "type": "misc",
        "key": "https://doi.org/10.48550/arxiv.2503.20101"
    }
}
---

# Dataset Description