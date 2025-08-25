---
{
    "name": "Bullying10K",
    "aliases": [],
    "year": 2023,
    "modalities": [
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
    "description": "Bullying detection",
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
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Figshare",
                "url": "https://figshare.com/articles/dataset/Bullying10k/19160663",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 255.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Bullying10K -  A Large-Scale Neuromorphic Dataset towards Privacy-Preserving Bullying Recognition",
        "doi": "10.5555/3666122.3666215",
        "authors": [
            "Yiting Dong",
            "Yang Li",
            "Dongcheng Zhao",
            "Guobin Shen",
            "Yi Zeng"
        ],
        "abstract": "The prevalence of violence in daily life poses significant threats to individuals' physical and mental well-being. Using surveillance cameras in public spaces has proven effective in proactively deterring and preventing such incidents. However, concerns regarding privacy invasion have emerged due to their widespread deployment.To address the problem, we leverage Dynamic Vision Sensors (DVS) cameras to detect violent incidents and preserve privacy since it captures pixel brightness variations instead of static imagery. We introduce the Bullying10K dataset, encompassing various actions, complex movements, and occlusions from real-life scenarios. It provides three benchmarks for evaluating different tasks: action recognition, temporal action localization, and pose estimation. With 10,000 event segments, totaling 12 billion events and 255 GB of data, Bullying10K contributes significantly by balancing violence detection and personal privacy persevering. And it also poses a challenge to the neuromorphic dataset. It will serve as a valuable resource for training and developing privacy-protecting video systems. The Bullying10K opens new possibilities for innovative approaches in these domains.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 12,
            "updated": "2025-01-06 17:33:36.921545"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2306.11546"
        },
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/abs/10.5555/3666122.3666215"
        },
        {
            "type": "project_page",
            "url": "https://www.brain-cog.network/dataset/Bullying10k/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Brain-Cog-Lab/Bullying10K"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_subjects": "25",
        "num_recordings": "10000",
        "num_classes": "10",
        "file_format": "numpy"
    },
    "bibtex": {
        "pages": "1923--1937",
        "year": 2023,
        "editor": "Oh, A. and Neumann, T. and Globerson, A. and Saenko, K. and Hardt, M. and Levine, S.",
        "author": "Dong, Yiting and Li, Yang and Zhao, Dongcheng and Shen, Guobin and Zeng, Yi",
        "publisher": "Curran Associates, Inc.",
        "booktitle": "Advances in {Neural} {Information} {Processing} {Systems}",
        "doi": "10.5555/3666122.3666215",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2023/file/05ffe69463062b7f9fb506c8351ffdd7-Paper-Datasets_and_Benchmarks.pdf",
        "volume": "36",
        "title": "{Bullying10K}: {A} {Large}-{Scale} {Neuromorphic} {Dataset} towards {Privacy}-{Preserving} {Bullying} {Recognition}",
        "type": "inproceedings",
        "key": "dong_bullying10k_2023"
    }
}
---

### Dataset Structure

Bullying10K is a privacy-preserving dataset designed for bullying Recognition. It was captured using a DVS (Dynamic Vision Sensor) camera and includes 10,000 samples, comprising a total of 12 billion events.

- Dataset captured with 2 DAVIS346 sensors
- Two lighting conditions
- 25 subjects recorded
- 10000 recordings
- 10 different action types
- Data stored in numpy files
