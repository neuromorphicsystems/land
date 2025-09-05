---
{
    "name": "Gouda2023",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Flow Cytometry"
    ],
    "description": "Flow cytometry Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/7804830",
                "format": "Binary",
                "doi": "10.5281/zenodo.7804830",
                "available": true
            }
        ],
        "size_gb": 9.7,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Flow cytometry with event-based vision and spiking neuromorphic hardware",
        "doi": "10.1109/CVPRW59228.2023.00435",
        "authors": [
            "Steven Abreu",
            "Muhammed Gouda",
            "Alessio Lugnan",
            "Peter Bienstman"
        ],
        "abstract": "Imaging flow cytometry systems play a critical role in the identification and characterization of large populations of cells or micro-particles. Such systems typically leverage deep artificial neural networks to classify samples. Here we show that an event-based camera and neuromorphic processor can be used in a flow cytometry setup to solve a binary particle classification task with less memory usage, and promising improvements in latency and energy scaling. To reduce the complexity of the spiking neural network, we combine the event-based camera with a free-space optical setup which acts as a non-linear high-dimensional feature map that is computed at the speed of light before the event-based camera receives the signal. We demonstrate, for the first time, a spiking neural network running on neuromorphic hardware for a fully event-based flow cytometry pipeline with 98.45% testing accuracy. Our best artificial neural network on frames of the same data reaches only 97.51%, establishing a neuromorphic advantage also in classification accuracy. We further show that our system will scale favorably to more complex classification tasks. We pave the way for real-time classification with throughput of up to 1,000 samples per second and open up new possibilities for online and on-chip learning in flow cytometry applications.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 6,
            "updated": "2025-09-05T08:28:21.185172"
        },
        {
            "source": "scholar",
            "count": 14,
            "updated": "2025-09-05T08:28:22.882661"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10208946"
        },
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2023W/EventVision/papers/Abreu_Flow_Cytometry_With_Event-Based_Vision_and_Spiking_Neuromorphic_Hardware_CVPRW_2023_paper.pdf"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSTQE.2023.3244040",
            "source": "crossref"
        },
        {
            "doi": "10.1093/bioinformatics/btr095",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41598-020-77765-w",
            "source": "crossref"
        },
        {
            "doi": "10.1002/0471722731",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2019.00686",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s42256-023-00650-4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP56922.2022.9845595",
            "source": "crossref"
        },
        {
            "title": "Training a spiking neural network on an event-based label-free flow cytometry dataset",
            "source": "crossref"
        },
        {
            "title": "Neuromorphic-Enabled Event-Based Deep Imaging Flow Cytometry",
            "source": "crossref"
        },
        {
            "title": "SLAYER: Spike Layer Error Reassignment in Time",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "4139\u20134147",
        "month": "jun",
        "year": 2023,
        "author": "Abreu, Steven and Gouda, Muhammed and Lugnan, Alessio and Bienstman, Peter",
        "publisher": "IEEE",
        "booktitle": "2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)",
        "doi": "10.1109/cvprw59228.2023.00435",
        "url": "http://dx.doi.org/10.1109/CVPRW59228.2023.00435",
        "title": "Flow cytometry with event-based vision and spiking neuromorphic hardware",
        "type": "inproceedings",
        "key": "Abreu_2023"
    }
}
---

# Dataset Description

Two different classes of spherical microparticles (class A of diameter 16 μm and class B of diameter 20 μm) were used (purchased from PolyAn GmbH based in Germany).

Four separate experiments for each class of microparticles were run, where each experiment ran for Texp ≈ 60s for a total of 480 seconds of data per class. 

The accumulation time for a single particle is Tacc ≈ 1ms. Therefore, we have around 6,000 samples per experiment, or 24,000 samples in total per class.