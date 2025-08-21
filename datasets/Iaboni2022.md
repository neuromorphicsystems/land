---
{
    "name": "Iaboni2022",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Object Tracking",
        "Drone Detection"
    ],
    "description": "Multi-object quadcopter detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Dataset contains images of rendered event-based data",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://app.box.com/s/riqokalggzfth68tiywh1heetibo7fjc",
                "format": "Numpy",
                "available": false
            }
        ],
        "size_gb": 0.025,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Event-Based Motion Capture System for Online Multi-Quadrotor Localization and Tracking",
        "doi": "10.3390/s22093240",
        "authors": [
            "Craig Iaboni",
            "Deepan Lobo",
            "Ji-Won Choi",
            "Pramod Abichandani"
        ],
        "abstract": "Motion capture systems are crucial in developing multi-quadrotor systems due to their ability to provide fast and accurate ground truth measurements for tracking and control. This paper presents the implementation details and experimental validation of a relatively low-cost motion-capture system for multi-quadrotor motion planning using an event camera. The real-time, multi-quadrotor detection and tracking tasks are performed using a deep learning network You-Only-Look-Once (YOLOv5) and a k-dimensional (k-d) tree, respectively. An optimization-based decentralized motion planning algorithm is implemented to demonstrate the effectiveness of this motion capture system. Extensive experimental evaluations were performed to (1) compare the performance of four deep-learning algorithms for high-speed multi-quadrotor detection on event-based data, (2) study precision, recall, and F1 scores as functions of lighting conditions and camera motion, and (3) investigate the scalability of this system as a function of the number of quadrotors flying in the arena. Comparative analysis of the deep learning algorithms on a consumer-grade GPU demonstrates a 4.8\u00d7 to 12\u00d7 sampling/inference rate advantage that YOLOv5 provides over representative one- and two-stage detectors and a 1.14\u00d7 advantage over YOLOv4. In terms of precision and recall, YOLOv5 performed 15% to 18% and 27% to 41% better than representative state-of-the-art deep learning networks. Graceful detection and tracking performance degradation was observed in the face of progressively darker ambient light conditions. Despite severe camera motion, YOLOv5 precision and recall values of 94% and 98% were achieved, respectively. Finally, experiments involving up to six indoor quadrotors demonstrated the scalability of this approach. This paper also presents the first open-source event camera dataset in the literature, featuring over 10,000 fully annotated images of multiple quadrotors operating in indoor and outdoor environments.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 14,
            "updated": "2025-07-02T20:53:53.980742"
        },
        {
            "source": "scholar",
            "count": 18,
            "updated": "2025-07-02T20:53:53.687012"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.mdpi.com/1424-8220/22/9/3240"
        },
        {
            "type": "github_page",
            "url": "https://github.com/radlab-sketch/event-quadrotor-mocap?tab=readme-ov-file"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "3240",
        "year": 2022,
        "month": "apr",
        "author": "Iaboni, Craig and Lobo, Deepan and Choi, Ji-Won and Abichandani, Pramod",
        "journal": "Sensors",
        "urldate": "2024-11-29",
        "number": "9",
        "language": "en",
        "doi": "10.3390/s22093240",
        "url": "https://www.mdpi.com/1424-8220/22/9/3240",
        "issn": "1424-8220",
        "copyright": "https://creativecommons.org/licenses/by/4.0/",
        "volume": "22",
        "title": "Event-{Based} {Motion} {Capture} {System} for {Online} {Multi}-{Quadrotor} {Localization} and {Tracking}",
        "type": "article",
        "key": "iaboni_event-based_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ACCESS.2021.3115711",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICUAS.2019.8798352",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759748",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3152702",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cja.2021.04.021",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s17071591",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s21041137",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759345",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s21103558",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s22030773",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISMAR50242.2020.00034",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2021.3133533",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10514-013-9349-9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2857477",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197341",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00010",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s21041475",
            "source": "crossref"
        },
        {
            "doi": "10.1002/widm.1310",
            "source": "crossref"
        },
        {
            "doi": "10.1049/trit.2019.0107",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793924",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.03.019",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BioCAS49922.2021.9644652",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0816-y",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1145/361002.361007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794246",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3048875",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.2587105",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app11167240",
            "source": "crossref"
        },
        {
            "title": "Implementation of Decentralized Reinforcement Learning-Based Multi-Quadrotor Flocking",
            "source": "crossref"
        },
        {
            "title": "A distributed approach for lidar-based relative state estimation of multi-UAV in GPS-denied environments",
            "source": "crossref"
        },
        {
            "title": "The event-camera dataset and simulator: Event-based data for pose estimation, visual odometry, and SLAM",
            "source": "crossref"
        },
        {
            "title": "The multivehicle stereo event camera dataset: An event camera dataset for 3D perception",
            "source": "crossref"
        },
        {
            "title": "Event Camera Based Real-Time Detection and Tracking of Indoor Ground Robots",
            "source": "crossref"
        },
        {
            "title": "Towards a swarm of agile micro quadrotors",
            "source": "crossref"
        },
        {
            "title": "Agile Coordination and Assistive Collision Avoidance for Quadrotor Swarms Using Virtual Structures",
            "source": "crossref"
        },
        {
            "title": "Multi-Cue Event Information Fusion for Pedestrian Detection With Neuromorphic Vision Sensors",
            "source": "crossref"
        },
        {
            "title": "Neuromorphic vision: From sensors to event-based algorithms",
            "source": "crossref"
        },
        {
            "title": "Object tracking on event cameras with offline\u2013online learning",
            "source": "crossref"
        },
        {
            "title": "Real-time face & eye tracking and blink detection using event cameras",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of a hierarchical spiking neural network for optical flow estimation: From events to global motion perception",
            "source": "crossref"
        },
        {
            "title": "Self-supervised learning of event-based optical flow with spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "ImageNet Large Scale Visual Recognition Challenge",
            "source": "crossref"
        },
        {
            "title": "Converting Static Image Datasets to Spiking Neuromorphic Datasets Using Saccades",
            "source": "crossref"
        },
        {
            "title": "Multidimensional binary search trees used for associative searching",
            "source": "crossref"
        },
        {
            "title": "Autonomous Quadrotor Flight Despite Rotor Failure With Onboard Vision Sensors: Frames vs. Events",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
