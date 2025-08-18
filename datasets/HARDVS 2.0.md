---
{
    "name": "HARDVS 2.0",
    "aliases": [],
    "year": 2025,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Action Recognition"
    ],
    "task": "Human Action Recognition",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "Event-based data files are listed as \"To be updated\"",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1iw214Aj5ugN-arhuxjmfOw?pwd=1234",
                "format": "Unknown",
                "available": false
            }
        ],
        "size_gb": 228.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Human Activity Recognition using RGB-Event based Sensors: A Multi-modal Heat Conduction Model and A Benchmark Dataset",
        "doi": "10.48550/arXiv.2504.05830v1",
        "authors": [
            "Shiao Wang",
            "Xiao Wang",
            "Bo Jiang",
            "Lin Zhu",
            "Guoqi Li",
            "Yaowei Wang",
            "Yonghong Tian",
            "Jin Tang"
        ],
        "abstract": "Human Activity Recognition (HAR) primarily relied on traditional RGB cameras to achieve high-performance activity recognition. However, the challenging factors in real-world scenarios, such as insufficient lighting and rapid movements, inevitably degrade the performance of RGB cameras. To address these challenges, biologically inspired event cameras offer a promising solution to overcome the limitations of traditional RGB cameras. In this work, we rethink human activity recognition by combining the RGB and event cameras. The first contribution is the proposed large-scale multi-modal RGB-Event human activity recognition benchmark dataset, termed HARDVS 2.0, which bridges the dataset gaps. It contains 300 categories of everyday real-world actions with a total of 107,646 paired videos covering various challenging scenarios. Inspired by the physics-informed heat conduction model, we propose a novel multi-modal heat conduction operation framework for effective activity recognition, termed MMHCO-HAR. More in detail, given the RGB frames and event streams, we first extract the feature embeddings using a stem network. Then, multi-modal Heat Conduction blocks are designed to fuse the dual features, the key module of which is the multi-modal Heat Conduction Operation layer. We integrate RGB and event embeddings through a multi-modal DCT-IDCT layer while adaptively incorporating the thermal conductivity coefficient via FVEs into this module. After that, we propose an adaptive fusion module based on a policy routing strategy for high-performance classification. Comprehensive experiments demonstrate that our method consistently performs well, validating its effectiveness and robustness. The source code and benchmark dataset will be released on https://github.com/Event-AHU/HARDVS/tree/HARDVSv2",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2504.05830"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2504.05830"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/HARDVS/tree/HARDVSv2"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "300",
        "num_subjects": "5",
        "recording_duration": "5 seconds",
        "stereo": false
    },
    "bibtex": {
        "url": "https://arxiv.org/abs/2504.05830",
        "primaryclass": "cs.CV",
        "archiveprefix": "arXiv",
        "eprint": "2504.05830",
        "year": 2025,
        "author": "Shiao Wang and Xiao Wang and Bo Jiang and Lin Zhu and Guoqi Li and Yaowei Wang and Yonghong Tian and Jin Tang",
        "title": "Human Activity Recognition using RGB-Event based Sensors: A Multi-modal Heat Conduction Model and A Benchmark Dataset",
        "type": "misc",
        "key": "wang2025humanactivityrecognitionusing"
    }
}
---

### Dataset Structure

- Dataset contains 300 classes
- Dataset contains data from 5 people
- Recordings are 5 seconds in length

### Downloads

```
 [Event Images] 链接：https://pan.baidu.com/s/1OhlhOBHY91W2SwE6oWjDwA?pwd=1234    提取码：1234
  [Compact Event file] 链接：https://pan.baidu.com/s/1iw214Aj5ugN-arhuxjmfOw?pwd=1234 提取码：1234
  [RGB Event Images] 链接：https://pan.baidu.com/s/1w-z86PH7mGY0CqVBj_MpNA?pwd=1234 提取码：1234
  [Raw Event file] To be updated 
```
