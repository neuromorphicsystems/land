---
{
    "name": "REveL",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "Blickfeld Cube1 LiDAR"
    ],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "RGB",
        "Lidar"
    ],
    "task": "Robust Perception for Assistive Robotics",
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
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1E98yzxjnRoS2HcutR3BNrYvAW0l2k5x1",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 216.0,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Towards Robust Perception for Assistive Robotics: An RGB-Event-LiDAR Dataset and Multi-Modal Detection Pipeline",
        "doi": "10.1109/CASE59546.2024.10711832",
        "authors": [
            "Adam Scicluna",
            "Cedric Le Gentil",
            "Sheila Sutjipto",
            "Gavin Paul"
        ],
        "abstract": "The increasing adoption of human-robot interaction presents opportunities for technology to positively impact lives, particularly those with visual impairments, through applications such as guide-dog-like assistive robotics. We present a pipeline exploring the perception and \"intelligent disobedience\" required by such a system. A dataset of two people moving in and out of view has been prepared to compare RGB-based and event-based multi-modal dynamic object detection using LiDAR data for 3D position localisation. Our analysis highlights challenges in accurate 3D localisation using 2D image-LiDAR fusion, indicating the need for further refinement. Compared to the performance of the frame-based detection algorithm utilised (YOLOv4), current cutting-edge event-based detection models appear limited to contextual scenarios, such as for automotive platforms. This is highlighted by weak precision and recall over varying confidence and Intersection over Union (IoU) thresholds when using frame-based detections as a ground truth. Therefore, we have publicly released this dataset to the community, containing RGB, event, point cloud and Inertial Measurement Unit (IMU) data along with ground truth poses for the two people in the scene to fill a gap in the current landscape of publicly available datasets and provide a means to assist in the development of safer and more robust algorithms in the future: https://uts-ri.github.io/revel/.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-16T09:41:29.140613"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2408.13394"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10711832"
        },
        {
            "type": "project_page",
            "url": "https://uts-ri.github.io/revel/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "920--925",
        "year": 2024,
        "month": "aug",
        "author": "Scicluna, Adam and Le Gentil, Cedric and Sutjipto, Sheila and Paul, Gavin",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE} 20th {International} {Conference} on {Automation} {Science} and {Engineering} ({CASE})",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/CASE59546.2024.10711832",
        "url": "https://ieeexplore.ieee.org/document/10711832/",
        "shorttitle": "Towards {Robust} {Perception} for {Assistive} {Robotics}",
        "isbn": "9798350358513",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Towards {Robust} {Perception} for {Assistive} {Robotics}: {An} {RGB}-{Event}-{LiDAR} {Dataset} and {Multi}-{Modal} {Detection} {Pipeline}",
        "address": "Bari, Italy",
        "type": "inproceedings",
        "key": "scicluna_towards_2024-1"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/j.tvjl.2011.09.010",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.robot.2022.104104",
            "source": "crossref"
        },
        {
            "doi": "10.5555/2999134.2999257",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2577031",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICARCV.2016.7838630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.91",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-020-01316-z",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-009-0275-4",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913491297",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.169",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46448-0_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.343",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.322",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197133",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01205",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01334",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2023.3277281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2022.3154537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00116",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00466",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3098789",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2016.7533003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341164",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2017.8296962",
            "source": "crossref"
        },
        {
            "title": "Facts + stats",
            "source": "crossref"
        },
        {
            "title": "Yolov4: Optimal speed and accuracy of object detection",
            "source": "crossref"
        },
        {
            "title": "Pelee: A real-time object detection system on mobile devices",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "A large scale event-based detection dataset for automotive",
            "source": "crossref"
        },
        {
            "title": "Connecting the dots for real-time lidar-based object detection with yolo",
            "source": "crossref"
        },
        {
            "title": "Simple online and realtime tracking with a deep association metric",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

There are two folders for each session in which data was collected.
Note that the calibration parameter values vary across sessions.

Within each session directory is:

- Calibration data (for the session)
- Calibration yaml file with:
  - Transformation from the vicon marker to the camera frame 'T_v_c'
  - Transformation from the camera frame to the lidar frame 'T_c_l'
  - Camera Intrinsic Matrix 'K'
  - Camera Distortion Parameters
- Data directories (as zip files)

Inside each data directory after extraction is:
\- ROSBag
\- Undistorted RGB images from ROSBag
\- Labels for undistorted RGB images in YOLO format
\- Class list for labels

Labels correspond to the image file of the same name. The name of each label/image file is the ROS header timestamp for the image message in the ROSBag.

Images are labelled by the colour of the helmet worn by the person.
For session 1 (dynamic), class 0 will be 'green-helmet' and class 1 will be 'yellow-helmet'
For session 2 (the rest), class 0 will be 'orange-helmet' and class 1 will be 'yellow-helmet'
