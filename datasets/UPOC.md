---
{
    "name": "UPOC",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "tags": [
        "Monitor Conversion",
        "Centroiding"
    ],
    "description": "Unresolved Point-Object Centroiding Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "IEEE Dataport",
            "Google Drive"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "Dataset is also available on Google Drive on request.",
        "dataset_links": [
            {
                "name": "IEEE Dataport",
                "url": "https://ieee-dataport.org/documents/ebs-unresolved-point-object-centroiding-dataset",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 27.6,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Centroiding Point-Objects With Event Cameras",
        "doi": "10.1109/TPAMI.2025.3604385",
        "authors": [
            "Connor Hashemi",
            "Dennis Melamed",
            "Albert W. Reed",
            "Nitesh Menon",
            "Keigo Hirakawa",
            "Scott McCloskey"
        ],
        "abstract": "Event-based sensors (EBS), with their low latency and high dynamic range, are a promising means for tracking unresolved point-objects. Conventional EBS centroiding methods assume the generated events follow a Gaussian distribution and require long event streams (>1s) for accurate localization. However, these assumptions are inadequate for centroiding unresolved objects, since the EBS circuitry causes non-Gaussian event distributions, and because using long event streams negates the low-latency advantage of EBS. In this work, we derive a closed-form spatiotemporal event distribution that accounts for these non-Gaussian effects and relaxes the long-time window requirement. Using Fisher analysis, we show that the spatial distribution of events in short time windows (\u226420 ms) contains sufficient information for accurately estimating both position and velocity. To validate our analysis, we create the first EBS dataset of unresolved point-objects with subpixel ground truth using a high-speed monitor. We demonstrate that a small LSTM network can estimate an object's position within 1pixel and velocity within \u00b117% using only 5ms of event data, outperforming traditional approaches. These improvements enable accurate and quick centroiding of fast and dim objects, and we publish all code and data to support future research.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-09-27T07:03:05.369312"
        }
    ],
    "links": [
        {
            "type": "github_page",
            "url": "https://gitlab.kitware.com/nest-public/ebs-datadriven-centroiding"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/11153510"
        }
    ],
    "full_name": "Unresolved Point-Object Centroiding (UPOC)",
    "additional_metadata": {},
    "referenced_papers": [],
    "bibtex": {
        "pages": "1\u201310",
        "year": 2025,
        "author": "Hashemi, Connor and Melamed, Dennis and Reed, Albert W. and Menon, Nitesh and Hirakawa, Keigo and McCloskey, Scott",
        "publisher": "Institute of Electrical and Electronics Engineers (IEEE)",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "doi": "10.1109/tpami.2025.3604385",
        "url": "http://dx.doi.org/10.1109/TPAMI.2025.3604385",
        "issn": "1939-3539",
        "title": "Centroiding Point-Objects With Event Cameras",
        "type": "article",
        "key": "Hashemi_2025"
    }
}
---

# Dataset Description