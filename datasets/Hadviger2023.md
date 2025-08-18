---
{
    "name": "Hadviger2023",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer"
    ],
    "other_sensors": [
        "FLIR Blackfly S GigE",
        "OptiTrack"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Visual Odometry",
        "SLAM",
        "Autonomous Driving",
        "Stereo Datasets"
    ],
    "task": "Stereo matching and Localisation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "SharePoint"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "Dataset link on project page no longer works",
        "dataset_links": [
            {
                "name": "SharePoint",
                "url": "https://ferhr-my.sharepoint.com/:f:/g/personal/ahadviger_fer_hr/Ei07eV6fgYJJrj9vP8LWng0B4t09SaDseHldHHJOQxPE3w?e=wheyRn",
                "format": "ROSbag",
                "available": false
            }
        ]
    },
    "paper": {
        "title": "Stereo Visual Localization Dataset Featuring Event Cameras",
        "doi": "10.1109/ECMR59166.2023.10256407",
        "authors": [
            "Antea Hadviger",
            "Vlaho-Josip \u0160tironja",
            "Igor Cvi\u0161i\u0107",
            "Ivan Markovi\u0107",
            "Sacha Vra\u017ei\u0107",
            "Ivan Petrovi\u0107"
        ],
        "abstract": "Visual odometry and SLAM methods are facing increasingly complex scenarios and novel solutions are needed to offer more accurate and reliable results in challenging environments. Standard cameras are challenged under low light conditions or very high-speed motion, as they suffer from motion blur and operate at a limited frame rate. These problems can be alleviated by using event cameras - asynchronous visual sensors that offer complementary advantages compared to standard cameras, as they do not suffer from motion blur and support high dynamic range. Although there are a number of existing datasets intended for visual odometry and SLAM that contain event data, most of them are collected using monocular sensors and limited either in terms of camera resolution or ground truth availability. Our work aims to complement this by further supporting the development of robust stereo visual odometry and SLAM algorithms, allowing to exploit both event data and intensity images. We provide both indoor sequences with 6-DoF motion and outdoor vehicle driving sequences that additionally contain 3D lidar data. All sequences contain data from a synchronized high-resolution stereo event and standard cameras, whereas ground truth trajectories are provided by either a motion capture system or a highly accurate GNSS/INS and AHRS that combines the fibre-optic gyro IMU with a dual antenna RTK GNSS receiver.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 4,
            "updated": "2025-06-02T14:54:31.342568"
        },
        {
            "source": "scholar",
            "count": 6,
            "updated": "2025-06-02T14:54:30.508643"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10256407"
        },
        {
            "type": "project_page",
            "url": "https://bitbucket.org/unizg-fer-lamor/event-dataset/src/master/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": true
    },
    "bibtex": {
        "pages": "1--6",
        "year": 2023,
        "month": "sep",
        "author": "Hadviger, Antea and \u0160tironja, Vlaho-Josip and Cvi\u0161i\u0107, Igor and Markovi\u0107, Ivan and Vra\u017ei\u0107, Sacha and Petrovi\u0107, Ivan",
        "publisher": "IEEE",
        "booktitle": "2023 {European} {Conference} on {Mobile} {Robots} ({ECMR})",
        "urldate": "2024-10-17",
        "language": "en",
        "doi": "10.1109/ECMR59166.2023.10256407",
        "url": "https://ieeexplore.ieee.org/document/10256407/",
        "isbn": "9798350307047",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Stereo {Visual} {Localization} {Dataset} {Featuring} {Event} {Cameras}",
        "address": "Coimbra, Portugal",
        "type": "inproceedings",
        "key": "Hadviger2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICRA.2019.8793887",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC45102.2020.9294515",
            "source": "crossref"
        },
        {
            "doi": "10.1177/02783649922066213",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2011.5979561",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696514",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3186770",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9636728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3061364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3168335",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364915620033",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6248074",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2012.6385773",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3187826",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2023.3269950",
            "source": "crossref"
        },
        {
            "title": "Ddd17: End-to-end davis driving dataset",
            "source": "crossref"
        },
        {
            "title": "Event-based simultaneous localization and mapping: A comprehensive survey",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "Spatiotemporal multi sensor calibration via gaussian processes moving target tracking",
            "source": "crossref"
        },
        {
            "title": "Vivid++: Vision for visibility dataset",
            "source": "crossref"
        },
        {
            "title": "Pl-evio: Robust monocular event-based visual inertial odometry with point and line features",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

## ROS Topics

| Topic           | Description                 |
| --------------- | --------------------------- |
| /cam0/events    | left camera events          |
| /cam0/image_raw | left camera standard image  |
| /cam0/imu       | left camera IMU             |
| /cam1/events    | right camera events         |
| /cam1/image_raw | right camera standard image |
| /cam1/imu       | right camera IMU            |
| /an_device/Pose | ground truth pose (outdoor) |
| /optitrack/pose | ground truth pose (indoor)  |
