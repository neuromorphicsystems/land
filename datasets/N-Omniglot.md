---
{
    "name": "N-Omniglot",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "tags": [
        "Monitor Conversion",
        "Handwritten Characters",
        "One-shot Learning"
    ],
    "description": "Few-shot learning Dataset (SNN training dataset)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Figshare"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Figshare",
                "url": "https://figshare.com/articles/dataset/N-Omniglot/16821427",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 9.13,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "N-Omniglot, a large-scale neuromorphic dataset for spatio-temporal sparse few-shot learning",
        "doi": "10.1038/s41597-022-01851-z",
        "authors": [
            "Yang Li",
            "Yiting Dong",
            "Dongcheng Zhao",
            "Yi Zeng"
        ],
        "abstract": "Few-shot learning (learning with a few samples) is one of the most important cognitive abilities of the human brain. However, the current artificial intelligence systems meet difficulties in achieving this ability. Similar challenges also exist for biologically plausible spiking neural networks (SNNs). Datasets for traditional few-shot learning domains provide few amounts of temporal information. And the absence of neuromorphic datasets has hindered the development of few-shot learning for SNNs. Here, to the best of our knowledge, we provide the first neuromorphic dataset for few-shot learning using SNNs: N-Omniglot, based on the Dynamic Vision Sensor. It contains 1,623 categories of handwritten characters, with only 20 samples per class. N-Omniglot eliminates the need for a neuromorphic dataset for SNNs with high spareness and tremendous temporal coherence. Additionally, the dataset provides a powerful challenge and a suitable benchmark for developing SNNs algorithms in the few-shot learning domain due to the chronological information of strokes. We also provide the improved nearest neighbor, convolutional network, SiameseNet, and meta-learning algorithm in the\u00a0spiking version for verification.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 9,
            "updated": "2025-06-30 11:13:41.398230"
        },
        {
            "source": "scholar",
            "count": 17,
            "updated": "2025-06-30T11:14:03.945957"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2112.13230v2"
        },
        {
            "type": "paper",
            "url": "https://www.nature.com/articles/s41597-022-01851-z#article-info"
        },
        {
            "type": "project_page",
            "url": "https://www.brain-cog.network/dataset/N-Omniglot/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Brain-Cog-Lab/N-Omniglot"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "746",
        "year": 2022,
        "month": "dec",
        "author": "Li, Yang and Dong, Yiting and Zhao, Dongcheng and Zeng, Yi",
        "journal": "Scientific Data",
        "urldate": "2024-04-13",
        "number": "1",
        "language": "en",
        "doi": "10.1038/s41597-022-01851-z",
        "url": "https://www.nature.com/articles/s41597-022-01851-z",
        "issn": "2052-4463",
        "volume": "9",
        "title": "N-{Omniglot}, a large-scale neuromorphic dataset for spatio-temporal sparse few-shot learning",
        "type": "article",
        "key": "li_n-omniglot_2022"
    }
}
---

### Dataset Structure

The dataset contains 1623 characters in 50 languages, and each character consists of an aedata4 file and a CSV file.

Each aedata4 file contains 20 samples with the form of (timestamp, x, y, polarity), and CSV file marks the beginning and ending timestamps. Files’ names mean the sequence number of related character.

For more information of how the dataset was created, please refer to the paper.
