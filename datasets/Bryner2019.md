---
{
    "name": "Bryner2019",
    "aliases": [],
    "year": 2019,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Visual Navigation",
    "tags": [
        "Camera Pose Estimation"
    ],
    "description": "Camera Pose Estimation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
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
                "url": "https://rpg.ifi.uzh.ch/direct_event_camera_tracking/index.html",
                "format": "ROSbag",
                "available": false
            }
        ],
        "size_gb": 9.57,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Event-based, Direct Camera Tracking from a Photometric 3D Map using Nonlinear Optimization",
        "doi": "10.1109/ICRA.2019.8794255",
        "authors": [
            "Samuel Bryner",
            "Guillermo Gallego",
            "Henri Rebecq",
            "Davide Scaramuzza"
        ],
        "abstract": "Event cameras are novel bio-inspired vision sensors that output pixel-level intensity changes, called \u201cevents\u201d, instead of traditional video images. These asynchronous sensors naturally respond to motion in the scene with very low latency (in the order of microseconds) and have a very high dynamic range. These features, along with a very low power consumption, make event cameras an ideal sensor for fast robot localization and wearable applications, such as AR/VR and gaming. Considering these applications, we present a method to track the 6-DOF pose of an event camera in a known environment, which we contemplate to be described by a photometric 3D map (i.e., intensity plus depth information) built via classic dense 3D reconstruction algorithms. Our approach uses the raw events, directly, without intermediate features, within a maximumlikelihood framework to estimate the camera motion that best explains the events via a generative model. We successfully evaluate the method using both simulated and real data, and show improved results over the state of the art. We release the datasets to the public to foster reproducibility and research in this topic.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 67,
            "updated": "2025-06-09T09:27:08.683793"
        },
        {
            "source": "scholar",
            "count": 102,
            "updated": "2025-06-09T09:27:07.847185"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://rpg.ifi.uzh.ch/docs/ICRA19_Bryner.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8794255"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/direct_event_camera_tracking/index.html"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/direct_event_camera_tracker"
        }
    ],
    "full_name": "",
    "bibtex": {
        "pages": "325--331",
        "year": 2019,
        "month": "may",
        "author": "Bryner, Samuel and Gallego, Guillermo and Rebecq, Henri and Scaramuzza, Davide",
        "publisher": "IEEE",
        "booktitle": "2019 {International} {Conference} on {Robotics} and {Automation} ({ICRA})",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.1109/ICRA.2019.8794255",
        "url": "https://ieeexplore.ieee.org/document/8794255/",
        "isbn": "978-1-5386-6027-0",
        "title": "Event-based, {Direct} {Camera} {Tracking} from a {Photometric} {3D} {Map} using {Nonlinear} {Optimization}",
        "address": "Montreal, QC, Canada",
        "type": "inproceedings",
        "key": "Bryner2019"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-54413-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2008.113",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2833152",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2017.7951488",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2015.XI.036",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10851-014-0528-x",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10851-009-0161-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2015.XI.001",
            "source": "crossref"
        },
        {
            "title": "Eventbased 3D SLAM with a depth-augmented dynamic vision sensor",
            "source": "crossref"
        },
        {
            "title": "A 640x480 dynamic vision sensor with a 9um pixel and 300Meps address-event representation",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        }
    ]
}
---

### Dataset Description

These are the datasets used in the ICRA'19 paper _"Event-based, Direct Camera Tracking from a Photometric 3D Map using Nonlinear Optimization"_. Every dataset consists of one or more trajectories of an event camera (stored as a rosbag) and corresponding photometric map in the form of a point cloud for real data and a textured mesh for simulated scenes. All datasets contain ground truth provided by a motion capture system (for indoor recordings), [SVO](https://rpg.ifi.uzh.ch/svo2.html) (for outdoor ones) or the simulator itself.

The respective calibration data is provided as well (both the raw data used for calibration as well as the resulting intrinsic and extrinsic parameters).

The rosbag files contain the events using [dvs_msgs/EventArray](https://github.com/uzh-rpg/rpg_dvs_ros/blob/master/dvs_msgs/msg/EventArray.msg) message types. The images, camera calibration, and IMU measurements use the standard [sensor_msgs/Image](http://docs.ros.org/api/sensor_msgs/html/msg/Image.html), [sensor_msgs/CameraInfo](http://docs.ros.org/api/sensor_msgs/html/msg/CameraInfo.html), and [sensor_msgs/Imu](http://docs.ros.org/api/sensor_msgs/html/msg/Imu.html) message types, respectively. Ground truth poses are provided as [geometry_msgs/PoseStamped](http://docs.ros.org/api/geometry_msgs/html/msg/PoseStamped.html) message type.

Source: https://rpg.ifi.uzh.ch/direct_event_camera_tracking/index.html
