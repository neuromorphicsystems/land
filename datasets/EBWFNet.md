---
{
    "name": "EBWFNet",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Adaptive Optics",
        "Wavefront Sensing"
    ],
    "description": "Wavefront sensing",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Github"
        ],
        "file_formats": [
            "Matlab"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Github",
                "url": "https://github.com/mgrose31/EBWFNet/tree/main/Data_DISTRIBUTE",
                "format": "Matlab",
                "available": true
            }
        ],
        "size_gb": 1.16,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Convolutional neural network for improved event-based Shack-Hartmann wavefront reconstruction",
        "doi": "10.1364/AO.520652",
        "authors": [
            "Mitchell Grose",
            "Jason D. Schmidt",
            "Keigo Hirakawa"
        ],
        "abstract": "Shack-Hartmann wavefront sensing is a technique for measuring wavefront aberrations, whose use in adaptive optics relies on fast position tracking of an array of spots. These sensors conventionally use frame-based cameras operating at a fixed sampling rate to report pixel intensities, even though only a fraction of the pixels have signal. Prior in-lab experiments have shown feasibility of event-based cameras for Shack-Hartmann wavefront sensing (SHWFS), asynchronously reporting the spot locations as log intensity changes at a microsecond time scale. In our work, we propose a convolutional neural network (CNN) called event-based wavefront network (EBWFNet) that achieves highly accurate estimation of the spot centroid position in real time. We developed a custom Shack-Hartmann wavefront sensing hardware with a common aperture for the synchronized frame- and event-based cameras so that spot centroid locations computed from the frame-based camera may be used to train/test the event-CNN-based centroid position estimation method in an unsupervised manner. Field testing with this hardware allows us to conclude that the proposed EBWFNet achieves sub-pixel accuracy in real-world scenarios with substantial improvement over the state-of-the-art event-based SHWFS. An ablation study reveals the impact of data processing, CNN components, and training cost function; and an unoptimized MATLAB implementation is shown to run faster than 800\u00a0Hz on a single GPU.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 6,
            "updated": "2025-06-12T08:55:32.385796"
        },
        {
            "source": "scholar",
            "count": 5,
            "updated": "2025-06-12T08:55:32.227977"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://opg.optica.org/ao/abstract.cfm?uri=ao-63-16-E35"
        },
        {
            "type": "github_page",
            "url": "https://github.com/mgrose31/EBWFNet"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "E35--E47",
        "keywords": "Adaptive optics, Deformable mirrors, Neural networks, Optical systems, Wave front sensing, Wavefront aberrations",
        "note": "Publisher: Optica Publishing Group",
        "year": 2024,
        "month": "jun",
        "author": "Grose, Mitchell and Schmidt, Jason D. and Hirakawa, Keigo",
        "journal": "Appl. Opt.",
        "number": "16",
        "doi": "10.1364/AO.520652",
        "url": "https://opg.optica.org/ao/abstract.cfm?URI=ao-63-16-E35",
        "volume": "63",
        "title": "Convolutional neural network for improved event-based {Shack}-{Hartmann} wavefront reconstruction",
        "type": "article",
        "key": "grose_convolutional_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1364/JOSA.67.000390",
            "source": "crossref"
        },
        {
            "doi": "10.1086/662632",
            "source": "crossref"
        },
        {
            "doi": "10.1046/j.1365-8711.2002.05847.x",
            "source": "crossref"
        },
        {
            "doi": "10.1364/OE.409682",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1364/JOSA.67.000370",
            "source": "crossref"
        },
        {
            "doi": "10.1117/3.866274",
            "source": "crossref"
        },
        {
            "doi": "10.1364/AO.48.001812",
            "source": "crossref"
        },
        {
            "doi": "10.1364/AO.427038",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2352401",
            "source": "crossref"
        },
        {
            "doi": "10.1364/AO.45.000383",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3172212",
            "source": "crossref"
        },
        {
            "doi": "10.1364/AO.43.005796",
            "source": "crossref"
        },
        {
            "doi": "10.1111/j.1365-2966.2006.10661.x",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.857742",
            "source": "crossref"
        },
        {
            "doi": "10.1364/AO.34.002081",
            "source": "crossref"
        },
        {
            "doi": "10.1364/JOSA.56.001372",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1117/3.626196",
            "source": "crossref"
        },
        {
            "doi": "10.1364/AO.12.001785",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.1503.02531",
            "source": "crossref"
        },
        {
            "doi": "10.1364/AO.520652",
            "source": "crossref"
        },
        {
            "title": "Inceptive event time-surfaces for object classification using neuromorphic cameras",
            "source": "crossref"
        },
        {
            "title": "Development and analysis of a waffle constrained reconstructor (WCR) for fried geometry adaptive optics systems",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
