---
{
    "name": "CEAR",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "DVXplorer"
    ],
    "other_sensors": [
        "RealSense D445",
        "Velodyne VLP-16 LiDAR",
        "OptiTrack"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Object Tracking",
        "Robot Tracking"
    ],
    "task": "Tracking of quadruped robots",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://daroslab.github.io/cear/Downloads/",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 1491.61,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "CEAR: Comprehensive Event Camera Dataset for Rapid Perception of Agile Quadruped Robots",
        "doi": "10.1109/LRA.2024.3426373",
        "authors": [
            "Shifan Zhu",
            "Zixun Xiong",
            "Donghyun Kim"
        ],
        "abstract": "When legged robots perform agile movements, traditional RGB cameras often produce blurred images, posing a challenge for rapid perception. Event cameras have emerged as a promising solution for capturing rapid perception and coping with challenging lighting conditions thanks to their low latency, high temporal resolution, and high dynamic range. However, integrating event cameras into agile-legged robots is still largely unexplored. To bridge this gap, we introduce CEAR, a dataset comprising data from an event camera, an RGB-D camera, an IMU, a LiDAR, and joint encoders, all mounted on a dynamic quadruped, Mini Cheetah robot. This comprehensive dataset features more than 100 sequences from real-world environments, encompassing various indoor and outdoor environments, different lighting conditions, a range of robot gaits (e.g., trotting, bounding, pronking), as well as acrobatic movements like backflip. To our knowledge, this is the first event camera dataset capturing the dynamic and diverse quadruped robot motions under various setups, developed to advance research in rapid perception for quadruped robots.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-07-11T08:08:51.462445"
        },
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-07-11T08:08:51.087902"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2404.04698"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10592643"
        },
        {
            "type": "project_page",
            "url": "https://daroslab.github.io/cear/"
        }
    ],
    "full_name": "Comprehensive Event camera dataset for rapid perception of Agile quadruped Robots (CEAR)",
    "additional_metadata": {
        "num_recordings": "106",
        "stereo": false
    },
    "bibtex": {
        "pages": "8999--9006",
        "year": 2024,
        "month": "oct",
        "author": "Zhu, Shifan and Xiong, Zixun and Kim, Donghyun",
        "journal": "IEEE Robotics and Automation Letters",
        "urldate": "2024-12-01",
        "number": "10",
        "language": "en",
        "doi": "10.1109/LRA.2024.3426373",
        "url": "https://ieeexplore.ieee.org/document/10592643/",
        "shorttitle": "{CEAR}",
        "issn": "2377-3766, 2377-3774",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "9",
        "title": "{CEAR}: {Comprehensive} {Event} {Camera} {Dataset} for {Rapid} {Perception} of {Agile} {Quadruped} {Robots}",
        "type": "article",
        "key": "zhu_cear_2024"
    },
    "referenced_papers": []
}
---


### Dataset Structure 



- Contains 106 sequences including 50 indoor, 40 outdoor, and 16 backflip sequences.
- Dataset size:
	- Indoor Sequences: The total size of the indoor sequences is 375.78 GB.
	- Outdoor Sequences: The total size of the outdoor sequences is 1085.85 GB.
	- Backflip Sequences: The total size of the backflip sequences is 39.98 GB.
	- The total size of all the download links in the provided web pages is 1491.61 Gb.