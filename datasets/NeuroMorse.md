---
{
    "name": "NeuroMorse",
    "aliases": [],
    "year": 2025,
    "modality": [
        "Spike"
    ],
    "sensors": [
        "Other"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "subcategory": [
        "Classification Datasets"
    ],
    "task": "Morse Code Classification Task",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://doi.org/10.5281/zenodo.12702379",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 1.8,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "NeuroMorse: A Temporally Structured Dataset For Neuromorphic Computing",
        "doi": "10.1088/2634-4386/add36c",
        "authors": [
            "Ben Walters",
            "Yeshwanth Bethi",
            "Taylor Kergan",
            "Binh Nguyen",
            "Amirali Amirsoleimani",
            "Jason K Eshraghian",
            "Saeed Afshar",
            "Mostafa Rahimi Azghadi"
        ],
        "abstract": "Neuromorphic engineering aims to advance computing by mimicking the brain's efficient processing, where data is encoded as asynchronous temporal events. This eliminates the need for a synchronisation clock and minimises power consumption when no data is present. However, many benchmarks for neuromorphic algorithms primarily focus on spatial features, neglecting the temporal dynamics that are inherent to most sequence-based tasks. This gap may lead to evaluations that fail to fully capture the unique strengths and characteristics of neuromorphic systems. In this paper, we present NeuroMorse, a temporally structured dataset designed for benchmarking neuromorphic learning systems. NeuroMorse converts the top 50 words in the English language into temporal Morse code spike sequences. Despite using only two input spike channels for Morse dots and dashes, complex information is encoded through temporal patterns in the data. The proposed benchmark contains feature hierarchy at multiple temporal scales that test the capacity of neuromorphic algorithms to decompose input patterns into spatial and temporal hierarchies. We demonstrate that our training set is challenging to categorise using a linear classifier and that identifying keywords in the test set is difficult using conventional methods. The NeuroMorse dataset is available at Zenodo, with our accompanying code on GitHub at https://github.com/Ben-E-Walters/NeuroMorse.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-23T12:07:55.483432"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2502.20729"
        },
        {
            "type": "paper",
            "url": "https://iopscience.iop.org/article/10.1088/2634-4386/add36c"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Ben-E-Walters/NeuroMorse"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "journal": "Neuromorphic Computing and Engineering",
        "title": "NeuroMorse: a temporally structured dataset for neuromorphic computing",
        "author": "Walters, Ben and Bethi, Yeshwanth and Kergan, Taylor and Nguyen, Binh and Amirsoleimani, Amirali and Eshraghian, Jason K and Afshar, Saeed and Rahimi Azghadi, Mostafa",
        "pages": "027001",
        "number": "2",
        "volume": "5",
        "publisher": "IOP Publishing",
        "month": "may",
        "year": 2025,
        "url": "https://dx.doi.org/10.1088/2634-4386/add36c",
        "doi": "10.1088/2634-4386/add36c",
        "type": "article",
        "key": "Walters_2025"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/j.neunet.2023.10.044",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.asoc.2024.111392",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2021.608567",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41467-025-56739-4",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2022.873935",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s42256-019-0097-1",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2022.813555",
            "source": "crossref"
        },
        {
            "doi": "10.1088/2634-4386/ad962f",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2012.2211477",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.3044364",
            "source": "crossref"
        },
        {
            "doi": "10.5281/zenodo.3854034)",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.267326",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2022.951164",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00309",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2022.3200699",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2023.3308088",
            "source": "crossref"
        },
        {
            "title": "EMNIST: extending MNIST to handwritten letters",
            "source": "crossref"
        },
        {
            "title": "Learning multiple layers of features from tiny images",
            "source": "crossref"
        },
        {
            "title": "A low power, fully event-based gesture recognition system",
            "source": "crossref"
        },
        {
            "title": "Graph-based object classification for neuromorphic vision sensing",
            "source": "crossref"
        },
        {
            "title": "Nonhuman primate reaching with multichannel sensorimotor cortex electrophysiology",
            "source": "crossref"
        },
        {
            "title": "Multilingual spoken words corpus",
            "source": "crossref"
        },
        {
            "title": "Training spiking neural networks using lessons from deep learning",
            "source": "crossref"
        },
        {
            "title": "ImageNet: a large-scale hierarchical image database",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

NeuroMorse is a neuromorphic dataset that emphasises temporal hierarchical features. This dataset only contains two channels representing 'dots' and 'dashes' from Morse code. The training set consists of the top 50 most common words in the english language converted into Morse spike sequences, whilst the test set is a corpus of 50,441 Wikipedia articles converted into Morse spike sequences. The goal is to identify instances in the test set where classes in the training set appear.

The dataset contains code to produce both the clean and the noisy version of the dataset.
