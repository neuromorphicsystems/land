---
{
    "name": "HARDVS",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Human Action Recognition"
    ],
    "description": "Human Activity Recognition",
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
            "Unknown"
        ],
        "availability_comment": "Raw event-based data files not currently uploaded or available",
        "dataset_links": []
    },
    "paper": {
        "title": "HARDVS -  Revisiting Human Activity Recognition with Dynamic Vision Sensors",
        "doi": "10.1609/aaai.v38i6.28372",
        "authors": [
            "Xiao Wang",
            "Zongzhen Wu",
            "Bo Jiang",
            "Zhimin Bao",
            "Lin Zhu",
            "Guoqi Li",
            "Yaowei Wang",
            "Yonghong Tian"
        ],
        "abstract": "The main streams of human activity recognition (HAR) algorithms are developed based on RGB cameras which usually suffer from illumination, fast motion, privacy preservation, and large energy consumption. Meanwhile, the biologically inspired event cameras attracted great interest due to their unique features, such as high dynamic range, dense temporal but sparse spatial resolution, low latency, low power, etc. As it is a newly arising sensor, even there is no realistic large-scale dataset for HAR. Considering its great practical value, in this paper, we propose a large-scale benchmark dataset to bridge this gap, termed HARDVS, which contains 300 categories and more than 100K event sequences. We evaluate and report the performance of multiple popular HAR algorithms, which provide extensive baselines for future works to compare. More importantly, we propose a novel spatial-temporal feature learning and fusion framework, termed ESTF, for event stream based human activity recognition. It first projects the event streams into spatial and temporal embeddings using StemNet, then, encodes and fuses the dual-view representations using Transformer networks. Finally, the dual features are concatenated and fed into a classification head for activity prediction. Extensive experiments on multiple datasets fully validated the effectiveness of our model. Both the dataset and source code will be released at https://github.com/Event-AHU/HARDVS.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 2,
            "updated": "2024-10-26 12:53:49.586432"
        },
        {
            "source": "scholar",
            "count": 47,
            "updated": "2025-06-14T00:30:03.870642"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ojs.aaai.org/index.php/AAAI/article/view/28372"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/HARDVS"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "100000",
        "num_classes": "300",
        "num_subjects": "5"
    },
    "bibtex": {
        "pages": "5615--5623",
        "year": 2024,
        "month": "mar",
        "author": "Wang, Xiao and Wu, Zongzhen and Jiang, Bo and Bao, Zhimin and Zhu, Lin and Li, Guoqi and Wang, Yaowei and Tian, Yonghong",
        "journal": "Proceedings of the AAAI Conference on Artificial Intelligence",
        "urldate": "2024-08-26",
        "number": "6",
        "language": "en",
        "doi": "10.1609/aaai.v38i6.28372",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/28372",
        "shorttitle": "{HARDVS}",
        "issn": "2374-3468, 2159-5399",
        "volume": "38",
        "title": "{HARDVS}: {Revisiting} {Human} {Activity} {Recognition} with {Dynamic} {Vision} {Sensors}",
        "type": "article",
        "key": "wang_hardvs_2024"
    }
}
---

### Dataset Structure

The dataset contains 100000 recordings across 300 actions. The dataset contains data from 5 people

There is also a smaller version of the dataset, which has code to support it on `SpikingJelly` ([hardvs.py](https://github.com/fangwei123456/spikingjelly/blob/master/spikingjelly/datasets/hardvs.py))
