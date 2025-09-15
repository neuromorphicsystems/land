---
{
    "name": "EventSTR",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Scene Text Recognition"
    ],
    "description": "Visual Text Recognition Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Dropbox",
            "Baidu"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1XN8MfK1cKrqaSOo3e2oD3A?pwd=2l7c",
                "format": "Binary",
                "available": true
            },
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fo/s31llbv7bshz2xj4mf2gm/AFP1AGDcSoY0mk-fcyfL7jw?rlkey=p25w7366lzex7qe3pdgz96ec4&st=afcymd0x&dl=0",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 169.02,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EventSTR: A Benchmark Dataset and Baselines for Event Stream based Scene Text Recognition",
        "doi": "10.48550/arXiv.2502.09020",
        "authors": [
            "Xiao Wang",
            "Jingtao Jiang",
            "Dong Li",
            "Futian Wang",
            "Lin Zhu",
            "Yaowei Wang",
            "Yongyong Tian",
            "Jin Tang"
        ],
        "abstract": "Mainstream Scene Text Recognition (STR) algorithms are developed based on RGB cameras which are sensitive to challenging factors such as low illumination, motion blur, and cluttered backgrounds. In this paper, we propose to recognize the scene text using bio-inspired event cameras by collecting and annotating a large-scale benchmark dataset, termed EventSTR. It contains 9,928 high-definition (1280 * 720) event samples and involves both Chinese and English characters. We also benchmark multiple STR algorithms as the baselines for future works to compare. In addition, we propose a new event-based scene text recognition framework, termed SimC-ESTR. It first extracts the event features using a visual encoder and projects them into tokens using a Q-former module. More importantly, we propose to augment the vision tokens based on a memory mechanism before feeding into the large language models. A similarity-based error correction mechanism is embedded within the large language model to correct potential minor errors fundamentally based on contextual information. Extensive experiments on the newly proposed EventSTR dataset and two simulation STR datasets fully demonstrate the effectiveness of our proposed model. We believe that the dataset and algorithmic model can innovatively propose an event-based STR task and are expected to accelerate the application of event cameras in various industries. The source code and pre-trained models will be released on https://github.com/Event-AHU/EventSTR",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-09-15T08:01:53.956751"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2502.09020"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/EventSTR"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "bibtex": {
        "copyright": "arXiv.org perpetual, non-exclusive license",
        "year": 2025,
        "publisher": "arXiv",
        "title": "EventSTR: A Benchmark Dataset and Baselines for Event Stream based Scene Text Recognition",
        "keywords": "Computer Vision and Pattern Recognition (cs.CV), Artificial Intelligence (cs.AI), FOS: Computer and information sciences, FOS: Computer and information sciences",
        "author": "Wang, Xiao and Jiang, Jingtao and Li, Dong and Wang, Futian and Zhu, Lin and Wang, Yaowei and Tian, Yongyong and Tang, Jin",
        "url": "https://arxiv.org/abs/2502.09020",
        "doi": "10.48550/ARXIV.2502.09020",
        "type": "misc",
        "key": "https://doi.org/10.48550/arxiv.2502.09020"
    }
}
---

# Dataset Description

The datasetis an annotated large-scale benchmark dataset, termed EventSTR. It contains 9,928 high-definition (1280 × 720) event samples and involves both Chinese and English characters