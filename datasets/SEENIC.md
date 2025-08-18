---
{
    "name": "SEENIC",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "V2E",
        "DVXplorer"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Satellite Pose Estimation",
        "Space Datasets"
    ],
    "task": "Satellite Pose Estimation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/7370076",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 4.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Towards Bridging the Space Domain Gap for Satellite Pose Estimation using Event Sensing",
        "doi": "10.1109/ICRA48891.2023.10160531",
        "authors": [
            "Mohsi Jawaid",
            "Ethan Elms",
            "Yasir Latif",
            "Tat-Jun Chin"
        ],
        "abstract": "Deep models trained using synthetic data require domain adaptation to bridge the gap between the simulation and target environments. State-of-the-art domain adaptation methods often demand sufficient amounts of (unlabelled) data from the target domain. However, this need is difficult to fulfil when the target domain is an extreme environment, such as space. In this paper, our target problem is close proximity satellite pose estimation, where it is costly to obtain images of satellites from actual rendezvous missions. We demonstrate that event sensing offers a promising solution to generalise from the simulation to the target domain under stark illumination differences. Our main contribution is an event-based satellite pose estimation technique, trained purely on synthetic event data with basic data augmentation to improve robustness against practical (noisy) event sensors. Underpinning our method is a novel dataset with carefully calibrated ground truth, comprising of real event data obtained by emulating satellite rendezvous scenarios in the lab under drastic lighting conditions. Results on the dataset showed that our event-based satellite pose estimation method, trained only on synthetic data without adaptation, could generalise to the target domain effectively.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 16,
            "updated": "2025-06-13T11:35:47.090095"
        },
        {
            "source": "scholar",
            "count": 34,
            "updated": "2025-06-13T11:35:46.464736"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://doi.org/10.48550/arXiv.2209.11945"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10160531"
        },
        {
            "type": "project_page",
            "url": "https://zenodo.org/records/7370076"
        }
    ],
    "full_name": "Spacecraft posE Estimation with NeuromorphIC vision (SEENIC)",
    "bibtex": {
        "pages": "11866--11873",
        "year": 2023,
        "month": "may",
        "author": "Jawaid, Mohsi and Elms, Ethan and Latif, Yasir and Chin, Tat-Jun",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE} {International} {Conference} on {Robotics} and {Automation} ({ICRA})",
        "urldate": "2023-11-15",
        "language": "en",
        "doi": "10.1109/ICRA48891.2023.10160531",
        "url": "https://ieeexplore.ieee.org/document/10160531/",
        "isbn": "9798350323658",
        "title": "Towards {Bridging} the {Space} {Domain} {Gap} for {Satellite} {Pose} {Estimation} using {Event} {Sensing}",
        "address": "London, United Kingdom",
        "type": "inproceedings",
        "key": "jawaid_towards_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPRW.2018.00271",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.888718",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2012.6272143",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2018.05.083",
            "source": "crossref"
        },
        {
            "doi": "10.1109/70.34770",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAES.2020.2989063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.106",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01561",
            "source": "crossref"
        },
        {
            "doi": "10.1017/S096249291700006X",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00584",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00229",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.paerosci.2017.07.001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/AERO.2018.8396425",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00208",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV57658.2022.00023",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.imavis.2020.103898",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00343",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASE.2021.3064065",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-58347-1_1",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3529446.3529465",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3187826",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRCA55033.2022.9828933",
            "source": "crossref"
        },
        {
            "title": "SPEED+: Next-generation dataset for spacecraft pose estimation across domain gap",
            "source": "crossref"
        },
        {
            "title": "The OpenCV Library",
            "source": "crossref"
        },
        {
            "title": "OSAM-1 decommissioning orbit design",
            "source": "crossref"
        },
        {
            "title": "Pose estimation for non-cooperative rendezvous using neural networks",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Faster r-cnn: Towards real-time object detection with region proposal networks",
            "source": "crossref"
        },
        {
            "title": "Cnn-based pose estimation system for close-proximity operations around uncooperative spacecraft",
            "source": "crossref"
        },
        {
            "title": "Camera models",
            "source": "crossref"
        },
        {
            "title": "Spark: spacecraft recognition leveraging knowledge of space environment",
            "source": "crossref"
        },
        {
            "title": "Autonomous rendezvous, capture and in-space assembly: past, present and future",
            "source": "crossref"
        },
        {
            "title": "Video to events: Bringing modern computer vision closer to event cameras",
            "source": "crossref"
        },
        {
            "title": "Real-time pose estimation for event cameras with stacked spatial lstm networks",
            "source": "crossref"
        },
        {
            "title": "Neuromorphic event-based 3d pose estimation",
            "source": "crossref"
        },
        {
            "title": "Neuromorphic computing and sensing in space",
            "source": "crossref"
        },
        {
            "title": "Deep learning on monocular object pose detection and tracking: A comprehensive overview",
            "source": "crossref"
        },
        {
            "title": "The event-camera dataset and simulator: Event-based data for pose estimation, visual odometry, and SLAM",
            "source": "crossref"
        },
        {
            "title": "Syn2real: A new benchmark forsynthetic-to-real visual domain adaptation",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure