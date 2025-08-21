---
{
    "name": "Koizumi2024",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Human Pose Recognition",
        "Augmented"
    ],
    "description": "Person localization and size estimation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Paper describes the method for augmenting the DHP19 Dataset",
        "dataset_links": []
    },
    "paper": {
        "title": "Event-based Robust 3D Pose Estimation Using Time Series Data",
        "doi": "10.1109/AIC61668.2024.10731089",
        "authors": [
            "Kakeru Koizumi",
            "Hiroshi Watanabe"
        ],
        "abstract": "Event cameras are vision sensors that detect asynchronous changes in luminance for each pixel. They are effective for 3D pose estimation in poorly illuminated environments since they have a wider dynamic range than conventional RGB cameras. Hence, they are expected to be used as surveillance cameras for detecting suspicious persons, especially at night. However, practical applications are hindered by the high cost of event cameras and the difficulty of their synchronization. To address the limited widespread use of event cameras, we ensure practicality by implementing monocular pose estimation. Common methods for event-based pose estimation involve creating a frame that combines a set number of asynchronous events. With these methods, only changes in motion can be captured due to the nature of event cameras. This makes estimation unstable since information on joints that do not move is not collected. Therefore, we propose a stable pose estimation method that accumulates event information by incorporating past time series data. In addition, datasets for event-based pose estimation, especially those consisting of raw event data, are rare and lack diversity. To overcome the lack of data, we use data augmentation to create a robust event dataset for person localization and size estimation. Incorporating past time series data along with data augmentation enhances the versatility and accuracy of event-based monocular pose estimation.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-12T16:34:24.959827"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10731089"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "connected_datasets": [
        "DHP19"
    ],
    "bibtex": {
        "pages": "1223--1227",
        "year": 2024,
        "month": "jul",
        "author": "Koizumi, Kakeru and Watanabe, Hiroshi",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE} 3rd {World} {Conference} on {Applied} {Intelligence} and {Computing} ({AIC})",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/AIC61668.2024.10731089",
        "url": "https://ieeexplore.ieee.org/document/10731089/",
        "isbn": "9798350384598",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event-based {Robust} {3D} {Pose} {Estimation} {Using} {Time} {Series} {Data}",
        "address": "Gwalior, India",
        "type": "inproceedings",
        "key": "koizumi_event-based_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/tpami.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/jssc.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DICTA56598.2022.10034617",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00426",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605233",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00420",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2023.110048",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV.2017.00064",
            "source": "crossref"
        },
        {
            "doi": "10.1109/wacv.2019.00162",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00150",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "title": "3D Pose Estimation Using Time Series Data in Event-based Video",
            "source": "crossref"
        },
        {
            "title": "Advanced Graphics Programming Using OpenGL, The Morgan Kaufmann Series in Computer Graphics",
            "source": "crossref"
        },
        {
            "title": "Convolutional lstm network: A machine learning approach for precipitation nowcasting",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Augmented version of the \[[DHP19]\] dataset
