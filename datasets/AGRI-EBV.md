---
{
    "name": "AGRI-EBV",
    "aliases": [
        "agri-ebv-winter-summer"
    ],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Visual Odometry",
        "Robotics"
    ],
    "description": "Visual Odometry",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "IEEE Dataport"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "Size includes all ground truth and supporting videos",
        "dataset_links": [
            {
                "name": "IEEE Dataport",
                "url": "https://ieee-dataport.org/open-access/agri-ebv-winter-summer",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 505.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "An Event-based Vision Dataset for Visual Navigation Tasks in Agricultural Environments",
        "doi": "10.1109/ICRA48506.2021.9561741",
        "authors": [
            "Andrejs Zujevs",
            "Mihails Pudzs",
            "Vitalijs Osadcuks",
            "Arturs Ardavs",
            "Maris Galauskis",
            "Janis Grundspenkis"
        ],
        "abstract": "A new generation of computer vision, namely event-based or neuromorphic vision, provides a new paradigm for capturing visual data and the way such data is processed. Due to a highly novel type of visual sensors used in event-based vision, only a few datasets aimed at visual navigation tasks are publicly available.In this paper, we present and describe the first event-based vision dataset intended to cover visual navigation tasks for mobile robots navigating in different types of agricultural environment. The dataset might open new opportunities for the evaluation of existing and creation of new event-based visual navigation methods for use in agricultural scenes that contain a lot of vegetation, animals, and patterned objects.The new dataset was created using our own custom-designed Sensor Bundle, which was installed on a mobile robot platform. During data acquisition sessions, the platform was manually controlled. The Sensor Bundle consists of a dynamic vision sensor, a LIDAR, an RGB-D camera, and environmental sensors.In total, 21 data sequences in 12 different scenarios for the autumn season are publicly available. Each data sequence is accompanied by a video demonstrating its content and a detailed description, including known issues. The new dataset is mostly designed for Visual Odometry tasks; however, it also includes loop-closures for applying event-based visual SLAM methods.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 7,
            "updated": "2025-07-14T07:44:00.131196"
        },
        {
            "source": "scholar",
            "count": 13,
            "updated": "2025-07-14T07:43:59.706509"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9561741"
        },
        {
            "type": "github_page",
            "url": "https://github.com/AgriEBV"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "21"
    },
    "bibtex": {
        "pages": "13769--13775",
        "year": 2021,
        "month": "may",
        "author": "Zujevs, Andrejs and Pudzs, Mihails and Osadcuks, Vitalijs and Ardavs, Arturs and Galauskis, Maris and Grundspenkis, Janis",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE} {International} {Conference} on {Robotics} and {Automation} ({ICRA})",
        "urldate": "2024-09-11",
        "language": "en",
        "doi": "10.1109/ICRA48506.2021.9561741",
        "url": "https://ieeexplore.ieee.org/document/9561741/",
        "isbn": "978-1-72819-077-8",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "An {Event}-based {Vision} {Dataset} for {Visual} {Navigation} {Tasks} in {Agricultural} {Environments}",
        "address": "Xi'an, China",
        "type": "inproceedings",
        "key": "zujevs_event-based_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICRA.2014.6906882",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6248074",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-010-0390-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2012.6385773",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2004.1315094",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2849882",
            "source": "crossref"
        },
        {
            "doi": "10.1002/(SICI)1097-4563(199704)14:4<231::AID-ROB2>3.3.CO;2-1",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58558-7_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197316",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2016.7487258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8594299",
            "source": "crossref"
        },
        {
            "doi": "10.1177/1729881419841532",
            "source": "crossref"
        },
        {
            "title": "A naturalistic open source movie for optical flow evaluation",
            "source": "crossref"
        },
        {
            "title": "A Dataset for Visual Navigation with Neuromorphic Methods",
            "source": "crossref"
        },
        {
            "title": "DDD17: End-To-End DAVIS Driving Dataset",
            "source": "crossref"
        },
        {
            "title": "ESIM: an Open Event Camera Simulator",
            "source": "crossref"
        },
        {
            "title": "Clock-based time synchronization for an event-based camera dataset acquisition platform",
            "source": "crossref"
        },
        {
            "title": "Real-Time 3D Reconstruction and 6-DoF Tracking with an Event Camera",
            "source": "crossref"
        },
        {
            "title": "Obstacle Avoidance and Navigation in the Real World by a Seeing Robot Rover",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Dataset contains 21 sequences of agricultural scenes in autumn.
- There is an additional set of summer recordings

In total, there are 11 data sequences in 6 different scenarios for the winter season and 31 data sequences in 14 different scenarios for the spring/summer season. Each data sequence is accompanied by a video demonstrating its content and a detailed description, including known issues

### Raw format data

The archive `<..sequence_id..>_data.tar.gz` contains the following files and folders:

- `./meta-data/` - all the useful information about the sequence
- `./meta-data/meta-data.md` - detailed information about the sequence, sensors, files, and data formats
- `./meta-data/cad_model.pdf` - sensors placement
- `./meta-data/<...>_timeconvs.json` - coefficients for timestamp conversion formulas
- `./meta-data/ground-truth/` - movement ground-truth data, calculated using 3 different Lidar-SLAM algorithms (Cartographer, HDL-Graph, LeGo-LOAM)
- `./meta-data/calib-params/` - intrinsic and extrinsic calibration parameters
- `./recording/` - main sequence
- `./recording/dvs/` - DVS events and IMU data
- `./recording/lidar/` - Lidar point clouds and IMU data
- `./recording/realsense/` - Realsense camera RGB, Depth frames, and IMU data
- `./recording/sensorboard/` - environmental sensors data (temperature, humidity, air pressure)

### Dataset Files

| Name                          | Time    | Attempt No. | No. Events |
| ----------------------------- | ------- | ----------- | ---------- |
| Forest                        | 205 sec | 1           | 305M       |
| Forest                        | 211 sec | 2           | 318M       |
| Green meadow                  | 111 sec | 1           | 289M       |
| Green meadow                  | 115 sec |             | 271M       |
| Winter rapeseed field         | 187 sec | 1           | 38M        |
| Winter rapeseed field         | 167 sec | 2           | 36M        |
| Plantation                    | 189 sec | 1           | 48M        |
| Plantation                    | 194 sec |             | 51M        |
| Plantation (water\*)          | 337 sec | 1           | 99M        |
| Cattle farm                   | 209 sec | 1           | 36M        |
| Cattle farm                   | 201 sec |             | 44M        |
| Cattle farm feed table        | 149 sec | 1           | 16M        |
| Cattle farm feed table        | 137 sec |             | 19M        |
| Cliff or ditch edge with sand | 102 sec | 1           | 16M        |
| Cliff or ditch edge with sand | 122 sec | 2           | 29M        |
| Young pines                   | 139 sec | 1           | 32M        |
| Winter cereal field           | 184 sec | 1           | 24M        |
| Winter cereal field           | 175 sec | 2           | 17M        |
| Field with a cow              | 270 sec | 1           | 63M        |
| Field with a cow              | 271 sec | 2           | 179M       |
| Asphalt road (dark\*)         | 155 sec | 1           | 4M         |
