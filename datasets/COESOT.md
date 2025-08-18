---
{
    "name": "COESOT",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Colour Sensors",
        "Object Tracking"
    ],
    "task": "Single Object Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/12XDlKABlz3lDkJJEDvsu9A",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 266.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Revisiting Color-Event based Tracking -  A Unified Network, Dataset, and Metric",
        "doi": "10.48550/arXiv.2211.11010",
        "authors": [
            "Chuanming Tang",
            "Xiao Wang",
            "Ju Huang",
            "Bo Jiang",
            "Lin Zhu",
            "Jianlin Zhang",
            "Yaowei Wang",
            "Yonghong Tian"
        ],
        "abstract": "Combining the Color and Event cameras (also called Dynamic Vision Sensors, DVS) for robust object tracking is a newly emerging research topic in recent years. Existing color-event tracking framework usually contains multiple scattered modules which may lead to low efficiency and high computational complexity, including feature extraction, fusion, matching, interactive learning, etc. In this paper, we propose a single-stage backbone network for Color-Event Unified Tracking (CEUTrack), which achieves the above functions simultaneously. Given the event points and RGB frames, we first transform the points into voxels and crop the template and search regions for both modalities, respectively. Then, these regions are projected into tokens and parallelly fed into the unified Transformer backbone network. The output features will be fed into a tracking head for target object localization. Our proposed CEUTrack is simple, effective, and efficient, which achieves over 75 FPS and new SOTA performance. To better validate the effectiveness of our model and address the data deficiency of this task, we also propose a generic and large-scale benchmark dataset for color-event tracking, termed COESOT, which contains 90 categories and 1354 video sequences. Additionally, a new evaluation metric named BOC is proposed in our evaluation toolkit to evaluate the prominence with respect to the baseline methods. We hope the newly proposed method, dataset, and evaluation metric provide a better platform for color-event-based tracking. The dataset, toolkit, and source code will be released on https://github.com/Event-AHU/COESOT",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 30,
            "updated": "2025-01-06 16:00:53.715634"
        },
        {
            "source": "scholar",
            "count": 44,
            "updated": "2025-06-18T08:26:55.315212"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2211.11010"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2211.11010"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/COESOT"
        }
    ],
    "full_name": "Color-Event camera based Single Object Tracking (COESOT)",
    "additional_metadata": {
        "num_recordings": "1354",
        "num_classes": "90",
        "num_categories": "17",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Artificial Intelligence, Computer Science - Computer Vision and Pattern Recognition, Computer Science - Neural and Evolutionary Computing",
        "note": "arXiv:2211.11010 [cs]",
        "year": 2024,
        "month": "jan",
        "author": "Tang, Chuanming and Wang, Xiao and Huang, Ju and Jiang, Bo and Zhu, Lin and Zhang, Jianlin and Wang, Yaowei and Tian, Yonghong",
        "publisher": "arXiv",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.48550/arXiv.2211.11010",
        "url": "http://arxiv.org/abs/2211.11010",
        "shorttitle": "Revisiting {Color}-{Event} based {Tracking}",
        "title": "Revisiting {Color}-{Event} based {Tracking}: {A} {Unified} {Network}, {Dataset}, and {Metric}",
        "type": "misc",
        "key": "tang_revisiting_2024"
    }
}
---

### Dataset Structure

- Contains more than 1354 sequences
- Contains 90 different classes
- Contains 17 different types of recordings
