---
{
    "name": "Powerline Dataset",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "Matrix Vision MLC200wG Bluefox"
    ],
    "category": "Domain Specific Application",
    "subcategory": [
        "Flying Datasets",
        "Line segmentation"
    ],
    "task": "Powerline Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://download.ifi.uzh.ch/rpg/powerline_tracking_dataset/",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 27.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Powerline Tracking with Event Cameras",
        "doi": "10.1109/IROS51168.2021.9636824",
        "authors": [
            "Alexander Dietsche",
            "Giovanni Cioffi",
            "Javier Hidalgo-Carrio",
            "Davide Scaramuzza"
        ],
        "abstract": "Autonomous inspection of powerlines with quadrotors is challenging. Flights require persistent perception to keep a close look at the lines. We propose a method that uses event cameras to robustly track powerlines. Event cameras are inherently robust to motion blur, have low latency, and high dynamic range. Such properties are advantageous for autonomous inspection of powerlines with drones, where fast motions and challenging illumination conditions are ordinary. Our method identi\ufb01es lines in the stream of events by detecting planes in the spatio-temporal signal, and tracks them through time. The implementation runs onboard and is capable of detecting multiple distinct lines in real time with rates of up to 320 thousand events per second. The performance is evaluated in real-world \ufb02ights along a powerline. The tracker is able to persistently track the powerlines, with a mean lifetime of the line 10\u00d7 longer than existing approaches.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 23,
            "updated": "2025-07-14T09:30:25.421678"
        },
        {
            "source": "scholar",
            "count": 33,
            "updated": "2025-07-14T09:30:25.161187"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2108.00515"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9636824"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/line_tracking_with_event_cameras"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "6990--6997",
        "year": 2021,
        "month": "sep",
        "author": "Dietsche, Alexander and Cioffi, Giovanni and Hidalgo-Carrio, Javier and Scaramuzza, Davide",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{RSJ} {International} {Conference} on {Intelligent} {Robots} and {Systems} ({IROS})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/IROS51168.2021.9636824",
        "url": "https://ieeexplore.ieee.org/document/9636824/",
        "isbn": "978-1-66541-714-3",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Powerline {Tracking} with {Event} {Cameras}",
        "address": "Prague, Czech Republic",
        "type": "inproceedings",
        "key": "dietsche_powerline_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/LRA.2021.3061404",
            "source": "crossref"
        },
        {
            "doi": "10.5201/ipol.2012.gjmr-lsd",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341208",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2018.00004",
            "source": "crossref"
        },
        {
            "doi": "10.1145/361237.361242",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593739",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2018.8461133",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3048875",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197530",
            "source": "crossref"
        },
        {
            "title": "Asynchronous event-based line tracking for time-to-contact maneuvers in uas",
            "source": "crossref"
        },
        {
            "title": "Hough2map&#x2013;iterative event-based hough transform for high-speed railway mapping",
            "source": "crossref"
        },
        {
            "title": "Lsd: a line segment detector",
            "source": "crossref"
        },
        {
            "title": "Fast event-based corner detection",
            "source": "crossref"
        },
        {
            "title": "Perception-aware planning",
            "source": "crossref"
        },
        {
            "title": "Danmarks dronestrategi: Danish strategy for drone technology development and use",
            "source": "crossref"
        },
        {
            "title": "Drone industry insights - drones in the energy industry: The energy drone operator benchmark",
            "source": "crossref"
        }
    ]
}
---


### Dataset Description 

The dataset recorded onboard a manually piloted quadrotor tracking powerlines. The quadrotor was equipped with an iniVation Dynamic and Active Vision Sensor (DAVIS) 346 event camera. The camera resolution was 346 × 260 pixel. A Matrix Vision MLC200wG Bluefox camera was also mounted to record higher quality standard frames than those provided by the DAVIS camera