---
{
    "name": "N-LSA64",
    "aliases": [],
    "year": 2024.0,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Sign Language",
        "Hand Pose Detection"
    ],
    "description": "Argentinian Sign Language Dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "No download links could be found in the paper.",
        "dataset_links": [],
        "size_gb": 0.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Spike-SLR: An Energy-efficient Parallel Spiking Transformer for Event-based Sign Language Recognition",
        "doi": "",
        "authors": [
            "Xinxu Lin",
            "Mingxuan Liu",
            "Kezhuo Liu",
            "Hong Chen"
        ],
        "abstract": "Event-based cameras are suitable for sign language recognition (SLR) by providing movement perception with highly dynamic range, high temporal resolution, high power efficiency and low latency. Spike Neural Networks (SNNs) are naturally suited to deal with the asynchronous and sparse data from the event cameras due to their spike-based event-driven paradigm, with less power consumption compared to artificial neural networks. In this paper, we introduce spiking transformer into event-based SLR by proposing a model named Spike-SLR, which includes two novel blocks: a spike soft-attention block, which enables model to focus on regions with high spike rates, reducing the impact of noise to improve the accuracy and a parallel spike transformer block with simplified spiking self-attention mechanism, increasing computational efficiency. On SL-Animals-DVS-4sets and SL-Animals-DVS-3sets, Spike-SLR achieves the accuracy of 89.47% and 90.06%, outperforming the state-of-the-art (SOTA) model by 1.35% and 2.61%, respectively. Besides, Spike-SLR only need 0.03mJ to process a sequence of event frames, achieving a 99.27% reduction in power consumption compared to the SOTA model.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "paper",
            "url": "https://hal.science/hal-04572397/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "language": "Argentinian",
        "source_dataset": "LSA64"
    },
    "bibtex": {
        "hal_version": "v2",
        "hal_id": "hal-04572397",
        "keywords": "Sign language recognition ; Transformer ; Spiking neural networks ; Event-based Vision",
        "month": "nov",
        "year": 2024,
        "organization": "{The British Machine Vision Association and Society for Pattern Recognition}",
        "address": "Glasgow, United Kingdom",
        "booktitle": "{35th British Machine Vision Conference 2024}",
        "url": "https://hal.science/hal-04572397",
        "author": "Lin, Xinxu and Liu, Mingxuan and Liu, Kezhuo and Chen, Hong",
        "title": "{Spike-SLR: An Energy-efficient Parallel Spiking Transformer for Event-based Sign Language Recognition}",
        "type": "inproceedings",
        "key": "lin:hal-04572397"
    }
}
---

# Dataset Description

The dataset contains 3200 DVS videos in which 10 non-expert subjects performed 5 repetitions of 64 different types of sign language.