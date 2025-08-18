---
{
    "name": "eTraM",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Autonomous Driving",
        "Traffic Monitoring",
        "Vehicle Detection"
    ],
    "task": "Traffic monitoring",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "SharePoint"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "Data is provided in multiple different formats and has a sign-up form",
        "dataset_links": []
    },
    "paper": {
        "title": "eTraM: Event-based Traffic Monitoring Dataset",
        "doi": "10.1109/CVPR52733.2024.02136",
        "authors": [
            "Aayush Atul Verma",
            "Bharatesh Chakravarthi",
            "Arpitsinh Vaghela",
            "Hua Wei",
            "Yezhou Yang"
        ],
        "abstract": "Event cameras, with their high temporal and dynamic range and minimal memory usage, have found applications in various fields. However, their potential in static traffic monitoring remains largely unexplored. To facilitate this exploration, we present eTraM - a first-of-itskind, fully event-based traffic monitoring dataset. eTraM offers 10 hr of data from different traffic scenarios in various lighting and weather conditions, providing a comprehensive overview of real-world situations. Providing 2M bounding box annotations, it covers eight distinct classes of traffic participants, ranging from vehicles to pedestrians and micro-mobility. eTraM\u2019s utility has been assessed using state-of-the-art methods for traffic participant detection, including RVT, RED, and YOLOv8. We quantitatively evaluate the ability of event-based models to generalize on nighttime and unseen scenes. Our findings substantiate the compelling potential of leveraging event cameras for traffic monitoring, opening new avenues for research and application. eTraM is available at https: //eventbasedvision.github.io/eTraM .",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 12,
            "updated": "2025-07-02T20:48:06.062484"
        },
        {
            "source": "crossref",
            "count": 4,
            "updated": "2025-07-02T20:48:06.368557"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2403.19976"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10655280"
        },
        {
            "type": "project_page",
            "url": "https://eventbasedvision.github.io/eTraM"
        },
        {
            "type": "github_page",
            "url": "https://github.com/eventbasedvision/eTraM"
        }
    ],
    "full_name": "",
    "bibtex": {
        "pages": "22637--22646",
        "year": 2024,
        "month": "jun",
        "author": "Verma, Aayush Atul and Chakravarthi, Bharatesh and Vaghela, Arpitsinh and Wei, Hua and Yang, Yezhou",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-14",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.02136",
        "url": "https://ieeexplore.ieee.org/document/10655280/",
        "shorttitle": "{eTraM}",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{eTraM}: {Event}-{Based} {Traffic} {Monitoring} {Dataset}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "verma_etram_2024-1"
    },
    "referenced_papers": []
}
---

### Dataset Structure

eTraM encompasses three distinct traffic monitoring scenes with 5 hrs of intersection, 3 hrs of roadway, and 2 hr of local street data sequences. Data for each scene is collected at multiple locations. For instance, the intersection scene contains data from 2 four-way, threeway, daytime, nighttime, and twilight data totaling up to 10 hr of data with 5 hrs of daytime and nighttime data. eTraM contains 2M instances of 2D bounding box annotations for traffic participant detection. These annotations additionally include object IDs, making it possible to evaluate multi-object tracking, as shown in the supplementary material. The annotation classes encompass a range of traffic participants, from various vehicles (cars, trucks, buses, and trams) to pedestrians and micro-mobility (bikes, bicycles, and wheelchairs).
