---
{
    "name": "M3ED",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "Ouster OS1-64 LiDAR",
        "OVC 3b",
        "UBlox ZED-F9P"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "SLAM",
        "Visual Odometry",
        "Driving"
    ],
    "description": "Multi-robot, multi sensor dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://m3ed.io/sequences/",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 3000.0,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "M3ED: Multi-Robot, Multi-Sensor, Multi-Environment Event Dataset",
        "doi": "10.1109/CVPRW59228.2023.00419",
        "authors": [
            "Kenneth Chaney",
            "Fernando Cladera",
            "Ziyun Wang",
            "Anthony Bisulco",
            "M. Ani Hsieh",
            "Christopher Korpela",
            "Vijay Kumar",
            "Camillo J. Taylor",
            "Kostas Daniilidis"
        ],
        "abstract": "We present M3ED, the first multi-sensor event camera dataset focused on high-speed dynamic motions in robotics applications. M3ED provides high-quality synchronized and labeled data from multiple platforms, including ground vehicles, legged robots, and aerial robots, operating in challenging conditions such as driving along off-road trails, navigating through dense forests, and performing aggressive flight maneuvers. Our dataset also covers demanding operational scenarios for event cameras, such as scenes with high egomotion and multiple independently moving objects. The sensor suite used to collect M3ED includes highresolution stereo event cameras (1280\u00d7720), grayscale imagers, an RGB imager, a high-quality IMU, a 64-beam LiDAR, and RTK localization. This dataset aims to accelerate the development of event-based algorithms and methods for edge cases encountered by autonomous systems in dynamic environments.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 27,
            "updated": "2025-06-22T14:41:32.729511"
        },
        {
            "source": "scholar",
            "count": 55,
            "updated": "2025-06-22T14:41:31.900892"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2023W/EventVision/papers/Chaney_M3ED_Multi-Robot_Multi-Sensor_Multi-Environment_Event_Dataset_CVPRW_2023_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10209006"
        },
        {
            "type": "project_page",
            "url": "https://m3ed.io"
        },
        {
            "type": "github_page",
            "url": "https://github.com/daniilidis-group/m3ed"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "11",
        "stereo": true
    },
    "bibtex": {
        "pages": "4016--4023",
        "year": 2023,
        "month": "jun",
        "author": "Chaney, Kenneth and Cladera, Fernando and Wang, Ziyun and Bisulco, Anthony and Hsieh, M. Ani and Korpela, Christopher and Kumar, Vijay and Taylor, Camillo J. and Daniilidis, Kostas",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} {Workshops} ({CVPRW})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPRW59228.2023.00419",
        "url": "https://ieeexplore.ieee.org/document/10209006/",
        "shorttitle": "{M3ED}",
        "isbn": "9798350302493",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{M3ED}: {Multi}-{Robot}, {Multi}-{Sensor}, {Multi}-{Environment} {Event} {Dataset}",
        "address": "Vancouver, BC, Canada",
        "type": "inproceedings",
        "key": "chaney_m3ed_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1145/1275808.1276407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC45102.2020.9294515",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3179507",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9636728",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913491297",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3152830",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.abg5810",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MM.2021.3134744",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS40897.2019.8968520",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01205",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19830-4_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794472",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.abm5954",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3186770",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696514",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "title": "DDD17: End-to-end DAVIS driving dataset",
            "source": "crossref"
        },
        {
            "title": "Ess: Learning event-based semantic segmentation from still images",
            "source": "crossref"
        },
        {
            "title": "Internimage: Exploring large-scale vision foundation models with deformable convolutions",
            "source": "crossref"
        },
        {
            "title": "EVIMO2: An Event Camera Dataset for Motion Segmentation, Optical Flow, Structure from Motion, and Visual Inertial Odometry in Indoor Scenes with Monocular or Stereo Algorithms",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 11 different classes.
