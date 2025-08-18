---
{
    "name": "Yin-Yang",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Spike"
    ],
    "sensors": [
        "Other"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "subcategory": [
        "SNN Training"
    ],
    "task": "Back-propagation and Deep Learning Benchmark",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Github repository contains code to produce the dataset",
        "dataset_links": []
    },
    "paper": {
        "title": "The Yin-Yang dataset",
        "doi": "10.1145/3517343.3517380",
        "authors": [
            "Laura Kriener",
            "Julian G\u00f6ltz",
            "Mihai A. Petrovici"
        ],
        "abstract": "The Yin-Yang dataset was developed for research on biologically plausible error backpropagation and deep learning in spiking neural networks. It serves as an alternative to classic deep learning datasets, especially in early-stage prototyping scenarios for both network models and hardware platforms, for which it provides several advantages. First, it is smaller and therefore faster to learn, thereby being better suited for small-scale exploratory studies in both software simulations and hardware prototypes. Second, it exhibits a very clear gap between the accuracies achievable using shallow as compared to deep neural networks. Third, it is easily transferable between spatial and temporal input domains, making it interesting for different types of classification scenarios.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 3,
            "updated": "2025-06-15T19:30:21.305692"
        },
        {
            "source": "scholar",
            "count": 37,
            "updated": "2025-06-15T19:30:21.181246"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2102.08211"
        },
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/pdf/10.1145/3517343.3517380"
        },
        {
            "type": "github_page",
            "url": "https://github.com/lkriener/yin_yang_data_set?tab=readme-ov-file"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "107--111",
        "year": 2022,
        "month": "mar",
        "author": "Kriener, Laura and G\u00f6ltz, Julian and Petrovici, Mihai A.",
        "publisher": "ACM",
        "booktitle": "Neuro-{Inspired} {Computational} {Elements} {Conference}",
        "urldate": "2024-12-08",
        "language": "en",
        "doi": "10.1145/3517343.3517380",
        "url": "https://dl.acm.org/doi/10.1145/3517343.3517380",
        "isbn": "978-1-4503-9559-5",
        "title": "The {Yin}-{Yang} dataset",
        "address": "Virtual Event USA",
        "type": "inproceedings",
        "key": "kriener_yin-yang_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ISCAS45731.2020.9180741",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s42256-021-00388-x",
            "source": "crossref"
        },
        {
            "doi": "10.7554/eLife.22901",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.726791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2019.8702500",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2017.7966124",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2017.7966125",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41598-021-91786-z",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

This deep learning dataset was developed for research on biologically plausible error-backpropagation and deep learning in spiking neural networks. It serves as an alternative to e.g. the MNIST dataset providing the following advantages:

- **Very clear gap between the accuracies reached by a linear classifier/shallow network, a deep neural network and a deep network with frozen lower weights**
- Smaller and therefore faster to train
- Symmetric input design allows successful training of neuron models without intrinsic bias