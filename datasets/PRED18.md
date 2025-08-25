---
{
    "name": "PRED18 (Formerly PRED16)",
    "aliases": [
        "PRED16"
    ],
    "year": 2018,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "tags": [
        "Robotics",
        "Object Tracking",
        "Closed Loop Control"
    ],
    "description": "Predator/Prey tracking dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://libdrive.ethz.ch/index.php/s/0IHvPqMZCwaZDIG",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 307.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Steering a predator robot using a mixed frame/event-driven convolutional neural network",
        "doi": "10.1109/EBCCSP.2016.7605233",
        "authors": [
            "Diederik Paul Moeys",
            "Federico Corradi",
            "Emmett Kerr",
            "Philip Vance",
            "Gautham Das",
            "Daniel Neil",
            "Dermot Kerr",
            "Tobi Delbruck"
        ],
        "abstract": "This paper describes the application of a Convolutional Neural Network (CNN) in the context of a predator/prey scenario. The CNN is trained and run on data from a Dynamic and Active Pixel Sensor (DAVIS) mounted on a Summit XL robot (the predator), which follows another one (the prey). The CNN is driven by both conventional image frames and dynamic vision sensor \"frames\" that consist of a constant number of DAVIS ON and OFF events. The network is thus \"data driven\" at a sample rate proportional to the scene activity, so the effective sample rate varies from 15 Hz to 240 Hz depending on the robot speeds. The network generates four outputs: steer right, left, center and non-visible. After off-line training on labeled data, the network is imported on the on-board Summit XL robot which runs jAER and receives steering directions in real time. Successful results on closed-loop trials, with accuracies up to 87\\% or 92\\% (depending on evaluation criteria) are reported. Although the proposed approach discards the precise DAVIS event timing, it offers the significant advantage of compatibility with conventional deep learning technology without giving up the advantage of datadriven computing.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 82,
            "updated": "2025-07-12T08:11:31.077815"
        },
        {
            "source": "scholar",
            "count": 146,
            "updated": "2025-07-12T08:11:30.623910"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/1606.09433"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/7605233"
        },
        {
            "type": "project_page",
            "url": "https://docs.google.com/document/d/e/2PACX-1vQ8HzlVv1ZzUEIfCUfUOUazXi__cacsCMU3LTqECrZk3-8nlyDCe2V29CHh20-cr42j8DrrMkFZGd14/pub"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1--8",
        "year": 2016,
        "month": "jun",
        "author": "Moeys, Diederik Paul and Corradi, Federico and Kerr, Emmett and Vance, Philip and Das, Gautham and Neil, Daniel and Kerr, Dermot and Delbruck, Tobi",
        "publisher": "IEEE",
        "booktitle": "2016 {Second} {International} {Conference} on {Event}-based {Control}, {Communication}, and {Signal} {Processing} ({EBCCSP})",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.1109/EBCCSP.2016.7605233",
        "url": "http://ieeexplore.ieee.org/document/7605233/",
        "isbn": "978-1-5090-4196-1",
        "title": "Steering a predator robot using a mixed frame/event-driven convolutional neural network",
        "address": "Krakow, Poland",
        "type": "inproceedings",
        "key": "moeys_steering_2016"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ISCAS.2010.5537907",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2647868.2654889",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7527520",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "title": "jAER Open Source Project",
            "source": "crossref"
        },
        {
            "title": "Adam: A Method for Stochastic Optimization",
            "source": "crossref"
        },
        {
            "title": "Striving for Simplicity: The All Convolutional Net",
            "source": "crossref"
        },
        {
            "title": "VISUALISE Project Predator-Prey Robot Synchronized Arena + jAER Video 2016 03 23 063147 - YouTube",
            "source": "crossref"
        },
        {
            "title": "VISUALISE Project Predator Prey CNN activity 2016 03 24 070136 - YouTube",
            "source": "crossref"
        },
        {
            "title": "ALVINN: An Autonomous Land Vehicle in a Neural Network",
            "source": "crossref"
        },
        {
            "title": "Off-Road Obstacle Avoidance through End-to-End Learning",
            "source": "crossref"
        },
        {
            "title": "Mobile Robot SUMMIT XL",
            "source": "crossref"
        },
        {
            "title": "A Machine Learning Approach to Visual Perceptionof Forest Trails for Mobile Robots",
            "source": "crossref"
        },
        {
            "title": "ROS.org | Powering the world's robots",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
