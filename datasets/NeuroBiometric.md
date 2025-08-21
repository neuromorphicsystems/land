---
{
    "name": "NeuroBiometric",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Blink Detection"
    ],
    "description": "Face Detection / Eye Blink detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Weiyun"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Requires a QQ or WeChat account in order to download the data",
        "dataset_links": [
            {
                "name": "Weiyun",
                "url": "https://share.weiyun.com/LoMK32g7",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 11.8,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "NeuroBiometric: An eye blink based biometric authentication system using an event-based neuromorphic vision sensor",
        "doi": "10.1109/JAS.2020.1003483",
        "authors": [
            "Guang Chen",
            "Fa Wang",
            "Xiaoding Yuan",
            "Zhijun Li",
            "Zichen Liang",
            "Alois Knoll"
        ],
        "abstract": "The rise of the Internet and identity authentication systems has brought convenience to people\u02bc s lives but has also introduced the potential risk of privacy leaks. Existing biometric authentication systems based on explicit and static features bear the risk of being attacked by mimicked data. This work proposes a highly efficient biometric authentication system based on transient eye blink signals that are precisely captured by a neuromorphic vision sensor with microsecond-level temporal resolution. The neuromorphic vision sensor only transmits the local pixel-level changes induced by the eye blinks when they occur, which leads to advantageous characteristics such as an ultra-low latency response. We first propose a set of effective biometric features describing the motion, speed, energy and frequency signal of eye blinks based on the microsecond temporal resolution of event densities. We then train the ensemble model and non-ensemble model with our NeuroBiometric dataset for biometrics authentication. The experiments show that our system is able to identify and verify the subjects with the ensemble model at an accuracy of 0.948 and with the non-ensemble model at an accuracy of 0.925. The low false positive rates ( about 0.002 ) and the highly dynamic features are not only hard to reproduce but also avoid recording visible characteristics of a user\u02bc s appearance. The proposed system sheds light on a new path towards safer authentication using neuromorphic vision sensors.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 19,
            "updated": "2025-06-14T14:52:33.636582"
        },
        {
            "source": "scholar",
            "count": 25,
            "updated": "2025-06-14T14:52:32.977096"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/9272708"
        },
        {
            "type": "github_page",
            "url": "https://github.com/ispc-lab/NeuroBiometrics"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_subjects": "45",
        "size_compressed": "11.8 Gb",
        "file_format": "aedat"
    },
    "bibtex": {
        "pages": "206--218",
        "year": 2021,
        "month": "jan",
        "author": "Chen, Guang and Wang, Fa and Yuan, Xiaoding and Li, Zhijun and Liang, Zichen and Knoll, Alois",
        "journal": "IEEE/CAA Journal of Automatica Sinica",
        "urldate": "2024-08-13",
        "number": "1",
        "language": "en",
        "doi": "10.1109/JAS.2020.1003483",
        "url": "https://ieeexplore.ieee.org/document/9272708/",
        "shorttitle": "{NeuroBiometric}",
        "issn": "2329-9266, 2329-9274",
        "volume": "8",
        "title": "{NeuroBiometric}: {An} eye blink based biometric authentication system using an event-based neuromorphic vision sensor",
        "type": "article",
        "key": "chen_neurobiometric_2021"
    },
    "referenced_papers": []
}
---

### Dataset structure

The dataset contains 45, with 480 seconds of data per subject captured over 4 blinking sessions. The dataset was collected in an indoor environment during daytime, with an average light intensity of 1200 Lux.

The compressed size of the database is 11.8 Gb. The dataset is hosted on Weiyun, an online file sharing tool that requires either a `WeChat` or `QQ` account to download the file. The data is distributed as a single zip file. The files are stored as aedat files.
