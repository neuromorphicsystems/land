---
{
    "name": "UCF-Crime-DVS",
    "aliases": [],
    "year": 2025,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Anomaly Detection",
        "Monitor Conversion"
    ],
    "task": "Video Anomaly Detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1b0xSVk0tzdq19WNGSDY_og?pwd=5d8g",
                "format": "Numpy",
                "available": false
            }
        ],
        "size_gb": 515.84,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "UCF-Crime-DVS: A Novel Event-Based Dataset for Video Anomaly Detection with Spiking Neural Networks",
        "doi": "10.48550/arXiv.2503.12905v1",
        "authors": [
            "Yuanbin Qian",
            "Shuhan Ye",
            "Chong Wang",
            "Xiaojie Cai",
            "Jiangbo Qian",
            "Jiafei Wu"
        ],
        "abstract": "Video anomaly detection plays a significant role in intelligent surveillance systems. To enhance model's anomaly recognition ability, previous works have typically involved RGB, optical flow, and text features. Recently, dynamic vision sensors (DVS) have emerged as a promising technology, which capture visual information as discrete events with a very high dynamic range and temporal resolution. It reduces data redundancy and enhances the capture capacity of moving objects compared to conventional camera. To introduce this rich dynamic information into the surveillance field, we created the first DVS video anomaly detection benchmark, namely UCF-Crime-DVS. To fully utilize this new data modality, a multi-scale spiking fusion network (MSF) is designed based on spiking neural networks (SNNs). This work explores the potential application of dynamic information from event data in video anomaly detection. Our experiments demonstrate the effectiveness of our framework on UCF-Crime-DVS and its superior performance compared to other models, establishing a new baseline for SNN-based weakly supervised video anomaly detection.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-14T00:32:04.079491"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2503.12905v1"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2503.12905v1"
        },
        {
            "type": "github_page",
            "url": "https://github.com/YBQian-Roy/UCF-Crime-DVS"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "1900",
        "num_classes": "13",
        "source_dataset": "UCFCrime dataset",
        "stereo": false
    },
    "bibtex": {
        "annote": "Comment: Accepted by AAAI 2025",
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Neural and Evolutionary Computing",
        "note": "arXiv:2503.12905 [cs]",
        "year": 2025,
        "month": "mar",
        "author": "Qian, Yuanbin and Ye, Shuhan and Wang, Chong and Cai, Xiaojie and Qian, Jiangbo and Wu, Jiafei",
        "publisher": "arXiv",
        "urldate": "2025-04-06",
        "language": "en",
        "doi": "10.48550/arXiv.2503.12905",
        "url": "http://arxiv.org/abs/2503.12905",
        "shorttitle": "{UCF}-{Crime}-{DVS}",
        "title": "{UCF}-{Crime}-{DVS}: {A} {Novel} {Event}-{Based} {Dataset} for {Video} {Anomaly} {Detection} with {Spiking} {Neural} {Networks}",
        "type": "misc",
        "key": "qian_ucf-crime-dvs_2025"
    }
}
---


### Dataset Structure

- Contains 1900 event streams
- Contains 13 anomaly classes, aligned with the original UCFCrime dataset (Sultani, Chen, and Shah 2018)