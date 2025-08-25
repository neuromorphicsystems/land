---
{
    "name": "EvDET200K",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Detection"
    ],
    "description": "Object detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Dropbox",
            "Baidu"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fo/2x3qf8bcwd6qb4f70fnda/AL2ULrSzZuVgpVlH8RTqhsY?rlkey=hh7k0lqg1tru4iisi0vo12y6x&e=1&st=nz4b3c13&dl=0",
                "format": "Unknown",
                "available": true
            },
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1HfkDyVv_dV_lbJGX0cQEVg?pwd=ahue",
                "format": "Unknown",
                "available": true
            }
        ],
        "size_gb": 315.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Object Detection using Event Camera: A MoE Heat Conduction based Detector and A New Benchmark Dataset",
        "doi": "10.48550/arXiv.2412.06647",
        "authors": [
            "Xiao Wang",
            "Yu Jin",
            "Wentao Wu",
            "Wei Zhang",
            "Lin Zhu",
            "Bo Jiang",
            "Yonghong Tian"
        ],
        "abstract": "Object detection in event streams has emerged as a cutting-edge research area, demonstrating superior performance in low-light conditions, scenarios with motion blur, and rapid movements. Current detectors leverage spiking neural networks, Transformers, or convolutional neural networks as their core architectures, each with its own set of limitations including restricted performance, high computational overhead, or limited local receptive fields. This paper introduces a novel MoE (Mixture of Experts) heat conduction-based object detection algorithm that strikingly balances accuracy and computational efficiency. Initially, we employ a stem network for event data embedding, followed by processing through our innovative MoE-HCO blocks. Each block integrates various expert modules to mimic heat conduction within event streams. Subsequently, an IoU-based query selection module is utilized for efficient token extraction, which is then channeled into a detection head for the final object detection process. Furthermore, we are pleased to introduce EvDET200K, a novel benchmark dataset for event-based object detection. Captured with a high-definition Prophesee EVK4-HD event camera, this dataset encompasses 10 distinct categories, 200,000 bounding boxes, and 10,054 samples, each spanning 2 to 5 seconds. We also provide comprehensive results from over 15 state-of-the-art detectors, offering a solid foundation for future research and comparison. The source code of this paper will be released on: https://github.com/Event-AHU/OpenEvDET",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 6,
            "updated": "2025-06-15T10:36:24.790258"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2412.06647"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2412.06647"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/OpenEvDET"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "200000",
        "num_classes": "10",
        "stereo": false
    },
    "bibtex": {
        "url": "https://arxiv.org/abs/2412.06647",
        "primaryclass": "cs.CV",
        "archiveprefix": "arXiv",
        "eprint": "2412.06647",
        "year": 2024,
        "author": "Xiao Wang and Yu Jin and Wentao Wu and Wei Zhang and Lin Zhu and Bo Jiang and Yonghong Tian",
        "title": "Object Detection using Event Camera: A MoE Heat Conduction based Detector and A New Benchmark Dataset",
        "type": "misc",
        "key": "wang2024EvDET200K"
    }
}
---

### Dataset Structure

EvDET200K, a novel benchmark dataset for event-based object detection. Captured with a high-definition Prophesee EVK4-HD event camera, this dataset encompasses 10 distinct categories, 200,000 bounding boxes, and 10,054 samples, each spanning 2 to 5 seconds.

The dataset contains 200000 objects from 10 classes

### Dataset files

```
EvDET200K
├── Event_raw
│   ├── labels.zip (7.52 MB)
│   ├── train
│   │   ├── train_a.zip (60.82 GB)
│   │   ├── train_b.zip (34.99 GB)
│   │   ├── train_c.zip (44.3 GB)
│   │   └── train_d.zip (44.46 GB)
│   ├── test
│   │   ├── test_a.zip (49.41 GB)
│   │   └── test_b.zip (44.92 GB)
│   └── val
│       └── val.zip (30.39 GB)
└── Event_frame
    ├── annotations.zip (8.26 GB)
    └── data
        ├── test.zip (1.67 GB)
        ├── train.zip (3.35 GB)
        └── val.zip (596.67 MB)

```

### Comparison Table

| **Dataset**                  | **Year** | **Sensor**        | **Resolution** | **Scale** | **Bbox** | **Duration** | **Class** | **Real** | **Clear Weather** | **Raining Weather** | **Day time** | **Night time** | **Multi-scene** | **Multi-motion** |
| ---------------------------- | -------- | ----------------- | -------------- | --------- | -------- | ------------ | --------- | -------- | ----------------- | ------------------- | ------------ | -------------- | --------------- | ---------------- |
| \[[N-Caltech101]\]           | 2015     | Simulator         |                | 9000      | 9K       | 1-10s        | 101       | N        | N                 | N                   | Y            | N              | Y               | N                |
| \[[SEVD]\]                   | 2024     | Simulator         |                |           | 9M       | 2-30m        | 6         | N        | N                 | Y                   | Y            | Y              | Y               | N                |
| \[[DDD17]\]                  | 2017     | DAVIS 346B        | 346x260px      | 36        |          | 1-50m        | 7         | Y        | Y                 | Y                   | Y            | Y              | Y               | N                |
| \[[DDD20]\]                  | 2020     | DAVIS 346B        | 346x260px      | 216       |          | 1-50m        | 7         | Y        | Y                 | N                   | Y            | Y              | Y               | N                |
| \[[ADD]\]                    | 2020     | Prophesee Gen1    | 304x240px      | 2357      | 255K     | 30-120s      | 2         | Y        | Y                 | N                   | Y            | N              | Y               | N                |
| \[[1Mpx Detection Dataset]\] | 2020     | Prophesee Gen2    | 1280×720рx     | 929       | 25M      | 30-120s      | 3         | Y        | Y                 | N                   | Y            | N              | Y               | N                |
| \[[DSEC]\]                   | 2021     | Prophesee Gen3.1  | 640×480px      | 60        | 390K     | 1-30m        | 8         | Y        | Y                 | N                   | Y            | Y              | N               | N                |
| \[[EvDET200K ]\]             | 2024     | Prophesee EVK4-HD | 1280×720рx     | 10054     | 200K     | 2-5s         | 10        | Y        | Y                 | Y                   | Y            | Y              | Y               | Y                |

^2d054e
