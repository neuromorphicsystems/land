---
{
    "name": "The Event-Based Camera Dataset",
    "aliases": [],
    "year": 2017,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "ESIM",
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "tags": [
        "Object Detection",
        "3D Pose Estimation",
        "Visual Odometry",
        "SLAM"
    ],
    "description": "Simulator Development",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
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
                "url": "https://rpg.ifi.uzh.ch/davis_data.html",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 19.97,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "The event-camera dataset and simulator: Event-based data for pose estimation, visual odometry, and SLAM",
        "doi": "10.1177/0278364917691115",
        "authors": [
            "Elias Mueggler",
            "Henri Rebecq",
            "Guillermo Gallego",
            "Tobi Delbruck",
            "Davide Scaramuzza"
        ],
        "abstract": "New vision sensors, such as the dynamic and active-pixel vision sensor (DAVIS), incorporate a conventional global-shutter camera and an event-based sensor in the same pixel array. These sensors have great potential for high-speed robotics and computer vision because they allow us to combine the bene\ufb01ts of conventional cameras with those of event-based sensors: low latency, high temporal resolution, and very high dynamic range. However, new algorithms are required to exploit the sensor characteristics and cope with its unconventional output, which consists of a stream of asynchronous brightness changes (called \u201cevents\u201d) and synchronous grayscale frames. For this purpose, we present and release a collection of datasets captured with a DAVIS in a variety of synthetic and real environments, which we hope will motivate research on new algorithms for high-speed and high-dynamic-range robotics and computer-vision applications. In addition to globalshutter intensity images and asynchronous events, we provide inertial measurements and ground-truth camera poses from a motion-capture system. The latter allows comparing the pose accuracy of ego-motion estimation algorithms quantitatively. All the data are released both as standard text \ufb01les and binary \ufb01les (i.e. rosbag). This paper provides an overview of the available data and describes a simulator that we release open-source to create synthetic event-camera data.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 475,
            "updated": "2025-07-09T09:51:01.590801"
        },
        {
            "source": "scholar",
            "count": 784,
            "updated": "2025-07-09T09:51:01.312109"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/1610.08336"
        },
        {
            "type": "paper",
            "url": "https://journals.sagepub.com/doi/10.1177/0278364917691115"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/davis_data.html"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "142--149",
        "year": 2017,
        "month": "feb",
        "author": "Mueggler, Elias and Rebecq, Henri and Gallego, Guillermo and Delbruck, Tobi and Scaramuzza, Davide",
        "journal": "The International Journal of Robotics Research",
        "urldate": "2023-10-06",
        "number": "2",
        "language": "en",
        "doi": "10.1177/0278364917691115",
        "url": "http://journals.sagepub.com/doi/10.1177/0278364917691115",
        "shorttitle": "The event-camera dataset and simulator",
        "issn": "0278-3649, 1741-3176",
        "volume": "36",
        "title": "The event-camera dataset and simulator: {Event}-based data for pose estimation, visual odometry, and {SLAM}",
        "type": "article",
        "key": "mueggler_event-camera_2017"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865714",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639.",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.63",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143.",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/70.34770",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-39402-7_14",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2016.7487657",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

We provide all datasets in two formats: text files and binary files (rosbag). While their content is identical, some of them are better suited for particular applications. For prototyping, inspection, and testing we recommend to use the text files, since they can be loaded easily using Python or Matlab. The binary [rosbag](http://wiki.ros.org/rosbag) files are intended for users familiar with the [Robot Operating System (ROS)](http://ros.org/) and for applications that are intended to be executed on a real system. The format is the one used by the [RPG DVS ROS](https://github.com/uzh-rpg/rpg_dvs_ros) driver. The details about both format follows below.

#### Text Files

The format of the text files is as follows.

- **events.txt:** One event per line (timestamp x y polarity)
- **images.txt:** One image reference per line (timestamp filename)
- **images/00000001.png:** Images referenced from images.txt
- **imu.txt:** One measurement per line (timestamp ax ay az gx gy gz)
- **groundtruth.txt:** One ground truth measurements per line (timestamp px py pz qx qy qz qw)
- **calib.txt:** Camera parameters (fx fy cx cy k1 k2 p1 p2 k3)

#### Binary Files (rosbag)

The rosbag files contain the events using [dvs_msgs/EventArray](https://github.com/uzh-rpg/rpg_dvs_ros/blob/master/dvs_msgs/msg/EventArray.msg) message types. The images, camera calibration, and IMU measurements use the standard [sensor_msgs/Image](http://docs.ros.org/api/sensor_msgs/html/msg/Image.html), [sensor_msgs/CameraInfo](http://docs.ros.org/api/sensor_msgs/html/msg/CameraInfo.html), and [sensor_msgs/Imu](http://docs.ros.org/api/sensor_msgs/html/msg/Imu.html) message types, respectively. Ground truth is provided as [geometry_msgs/PoseStamped](http://docs.ros.org/api/geometry_msgs/html/msg/PoseStamped.html) message type.

### DAVIS Dataset Download Table

| File URL                                                      | Size       |
| ------------------------------------------------------------- | ---------- |
| https://rpg.ifi.uzh.ch/datasets/davis/shapes_rotation.bag     | 370.77 MB  |
| https://rpg.ifi.uzh.ch/datasets/davis/shapes_translation.bag  | 299.24 MB  |
| https://rpg.ifi.uzh.ch/datasets/davis/shapes_6dof.bag         | 306.68 MB  |
| https://rpg.ifi.uzh.ch/datasets/davis/poster_rotation.bag     | 2.14 GB    |
| https://rpg.ifi.uzh.ch/datasets/davis/poster_translation.bag  | 1.30 GB    |
| https://rpg.ifi.uzh.ch/datasets/davis/poster_6dof.bag         | 1.71 GB    |
| https://rpg.ifi.uzh.ch/datasets/davis/boxes_rotation.bag      | 2.34 GB    |
| https://rpg.ifi.uzh.ch/datasets/davis/boxes_translation.bag   | 1.45 GB    |
| https://rpg.ifi.uzh.ch/datasets/davis/boxes_6dof.bag          | 1.70 GB    |
| https://rpg.ifi.uzh.ch/datasets/davis/hdr_poster.bag          | 1.34 GB    |
| https://rpg.ifi.uzh.ch/datasets/davis/hdr_boxes.bag           | 1.52 GB    |
| https://rpg.ifi.uzh.ch/datasets/davis/outdoors_walking.bag    | 1001.16 MB |
| https://rpg.ifi.uzh.ch/datasets/davis/outdoors_running.bag    | 1.33 GB    |
| https://rpg.ifi.uzh.ch/datasets/davis/dynamic_rotation.bag    | 967.56 MB  |
| https://rpg.ifi.uzh.ch/datasets/davis/dynamic_translation.bag | 525.04 MB  |
| https://rpg.ifi.uzh.ch/datasets/davis/dynamic_6dof.bag        | 791.26 MB  |
| https://rpg.ifi.uzh.ch/datasets/davis/calibration.bag         | 351.37 MB  |
| https://rpg.ifi.uzh.ch/datasets/davis/office_zigzag.bag       | 107.19 MB  |
| https://rpg.ifi.uzh.ch/datasets/davis/office_spiral.bag       | 89.03 MB   |
| https://rpg.ifi.uzh.ch/datasets/davis/urban.bag               | 78.87 MB   |
| https://rpg.ifi.uzh.ch/datasets/davis/slider_close.bag        | 57.44 MB   |
| https://rpg.ifi.uzh.ch/datasets/davis/slider_far.bag          | 48.99 MB   |
| https://rpg.ifi.uzh.ch/datasets/davis/slider_hdr_close.bag    | 48.20 MB   |
| https://rpg.ifi.uzh.ch/datasets/davis/slider_hdr_far.bag      | 36.23 MB   |
| https://rpg.ifi.uzh.ch/datasets/davis/slider_depth.bag        | 17.31 MB   |
| https://rpg.ifi.uzh.ch/datasets/davis/simulation_3planes.bag  | 102.36 MB  |
| https://rpg.ifi.uzh.ch/datasets/davis/simulation_3walls.bag   | 68.06 MB   |

#### Plots

We provide various plots for each dataset for a quick inspection. The plots are available inside a ZIP file and contain, if available, the following quantities:

- the event rate (in events/s). In spite of the sensor being asynchronous, and therefore does not have a well-defined event rate, we provide a measurement of such a quantity by computing the rate of events using intervals of fixed duration (1 ms),
- the IMU linear acceleration (in m/s²) along each axis, in the camera frame,
- the IMU gyroscopic measurement (angular velocity, in degrees/s) in the camera frame,
- the ground truth pose of the camera (position and orientation), in the frame of the motion-capture system,
- the ground truth pose of the camera (position and orientation), with respect to the first camera pose, i.e., in the camera frame.

The orientation is provided using Euler angles, according to the ZYX convention (default of MATLAB).
