---
{
    "name": "VECSL",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "",
    "tags": [
        "Sign Language",
        "Hand Pose Detection"
    ],
    "description": "Chinese Sign Language Dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "No download links are present on the linked Github page.",
        "dataset_links": [],
        "size_gb": 0.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Sign Language Translation using Frame and Event Stream: Benchmark Dataset and Algorithms",
        "doi": "10.48550/arXiv.2503.06484",
        "authors": [
            "Xiao Wang",
            "Yuehang Li",
            "Fuling Wang",
            "Bo Jiang",
            "Yaowei Wang",
            "Yonghong Tian",
            "Jin Tang",
            "Bin Luo"
        ],
        "abstract": "Accurate sign language understanding serves as a crucial communication channel for individuals with disabilities. Current sign language translation algorithms predominantly rely on RGB frames, which may be limited by fixed frame rates, variable lighting conditions, and motion blur caused by rapid hand movements. Inspired by the recent successful application of event cameras in other fields, we propose to leverage event streams to assist RGB cameras in capturing gesture data, addressing the various challenges mentioned above. Specifically, we first collect a large-scale RGB-Event sign language translation dataset using the DVS346 camera, termed VECSL, which contains 15,676 RGB-Event samples, 15,191 glosses, and covers 2,568 Chinese characters. These samples were gathered across a diverse range of indoor and outdoor environments, capturing multiple viewing angles, varying light intensities, and different camera motions. Due to the absence of benchmark algorithms for comparison in this new task, we retrained and evaluated multiple state-of-the-art SLT algorithms, and believe that this benchmark can effectively support subsequent related research. Additionally, we propose a novel RGB-Event sign language translation framework (i.e., M$^2$-SLT) that incorporates fine-grained micro-sign and coarse-grained macro-sign retrieval, achieving state-of-the-art results on the proposed dataset. Both the source code and dataset will be released on https://github.com/Event-AHU/OpenESL.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-09-15T07:16:22.944262"
        }
    ],
    "links": [
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/OpenESL"
        },
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2503.06484"
        }
    ],
    "full_name": "Vision Event Chinese Sign Language (VECSL)",
    "additional_metadata": {
        "language": "Chinese"
    },
    "bibtex": {
        "copyright": "arXiv.org perpetual, non-exclusive license",
        "year": 2025,
        "publisher": "arXiv",
        "title": "Sign Language Translation using Frame and Event Stream: Benchmark Dataset and Algorithms",
        "keywords": "Computer Vision and Pattern Recognition (cs.CV), Artificial Intelligence (cs.AI), Neural and Evolutionary Computing (cs.NE), FOS: Computer and information sciences, FOS: Computer and information sciences",
        "author": "Wang, Xiao and Li, Yuehang and Wang, Fuling and Jiang, Bo and Wang, Yaowei and Tian, Yonghong and Tang, Jin and Luo, Bin",
        "url": "https://arxiv.org/abs/2503.06484",
        "doi": "10.48550/ARXIV.2503.06484",
        "type": "misc",
        "key": "https://doi.org/10.48550/arxiv.2503.06484"
    }
}
---

# Dataset Description

The dataset comprises 15,676 sign language videos containing 15,191 unique glosses and 2,568 annotated Chinese characters.