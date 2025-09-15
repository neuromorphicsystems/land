---
{
    "name": "Bee Swarm Dataset",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Tracking",
        "Object Detection",
        "Wildlife Monitor"
    ],
    "description": "Bee Swarm Tracking Dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": [],
        "size_gb": 0.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Asynchronous Multi-Object Tracking with an Event Camera",
        "doi": "10.1109/ICRA55743.2025.11127984",
        "authors": [
            "Angus Apps",
            "Ziwei Wang",
            "Vladimir Perejogin",
            "Timothy L. Molloy",
            "Robert Mahony"
        ],
        "abstract": "Events cameras are ideal sensors for enabling robots to detect and track objects in highly dynamic environments due to their low latency output, high temporal resolution, and high dynamic range. In this paper, we present the Asynchronous Event Multi-Object Tracking (AEMOT) algorithm for detecting and tracking multiple objects by processing individual raw events asynchronously. AEMOT detects salient event blob features by identifying regions of consistent optical flow using a novel Field of Active Flow Directions built from the Surface of Active Events. Detected features are tracked as candidate objects using the recently proposed Asynchronous Event Blob (AEB) tracker in order to construct small intensity patches of each candidate object. A novel learnt validation stage promotes or discards candidate objects based on classification of their intensity patches, with promoted objects having their position, velocity, size, and orientation estimated at their event rate. We evaluate AEMOT on a new Bee Swarm Dataset, where it tracks dozens of small bees with precision and recall performance exceeding that of alternative event-based detection and tracking algorithms by over 37%. Source code and the labelled event Bee Swarm Dataset will be open sourced. 11https://github.com/angus-apps/AEMOT",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-09-14T16:00:07.385733"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-09-14T16:00:07.790013"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/11127984"
        },
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2505.08126"
        },
        {
            "type": "project_page",
            "url": "https://github.com/angus-apps/AEMOT"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1007/978-3-642-20144-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2019.2898117",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.artint.2020.103448",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00348-011-1207-y",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58526-6_3",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9196877",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00223",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3187826",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9981451",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV.2018.00080",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.34.164",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2024.3454410",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2010.5543810",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593380",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759610",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01334",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2023.3269780",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3311534",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "794\u2013800",
        "month": "may",
        "year": 2025,
        "author": "Apps, Angus and Wang, Ziwei and Perejogin, Vladimir and Molloy, Timothy L. and Mahony, Robert",
        "publisher": "IEEE",
        "booktitle": "2025 IEEE International Conference on Robotics and Automation (ICRA)",
        "doi": "10.1109/icra55743.2025.11127984",
        "url": "http://dx.doi.org/10.1109/ICRA55743.2025.11127984",
        "title": "Asynchronous Multi-Object Tracking with an Event Camera",
        "type": "inproceedings",
        "key": "Apps_2025"
    }
}
---

# Dataset Description

The Bee Swarm Dataset contains a short recording of an active bee swarm where hundreds of bees fly in all directions. In general, bees only occupy a few pixels at a time and due to the windy weather conditions, there are very active trees in the lower section of the image that provide challenging background activity. The data was recorded with a Prophesee EVK4 HD event camera with standard bias configuration. The Bee Swarm Dataset is a 5 second recording (approximately 5 million events) with an average event rate of 1Me/s. The dataset has been manually labelled to assign each event to the corresponding bee or the background, and is subject to human error. Caution has been taken to avoid false labelling of background as bees, resulting in some unlabelled (difficult to detect) bees. On average, there are approximately 80 labelled bees in the image plane, ranging between 70 and 110 throughout the dataset.