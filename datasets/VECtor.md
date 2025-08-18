---
{
    "name": "VECtor",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [
        "FLIR Grasshopper 3",
        "Azure Kinect",
        "OptiTrack",
        "FARO Focus Laser Scanner",
        "XSens MTi-30 AHRS"
    ],
    "category": "Visual Navigation",
    "subcategory": [
        "SLAM",
        "Visual Odometry",
        "Visual Place Recognition"
    ],
    "task": "SLAM",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
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
                "url": "https://star-datasets.github.io/vector/download/",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 16.5,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "VECtor: A Versatile Event-Centric Benchmark for Multi-Sensor SLAM",
        "doi": "10.1109/LRA.2022.3186770",
        "authors": [
            "Ling Gao",
            "Yuxuan Liang",
            "Jiaqi Yang",
            "Shaoxun Wu",
            "Chenyu Wang",
            "Jiaben Chen",
            "Laurent Kneip"
        ],
        "abstract": "Event cameras have recently gained in popularity as they hold strong potential to complement regular cameras in situations of high dynamics or challenging illumination. An important problem that may bene\ufb01t from the addition of an event camera is given by Simultaneous Localization And Mapping (SLAM). However, in order to ensure progress on event-inclusive multi-sensor SLAM, novel benchmark sequences are needed. Our contribution is the \ufb01rst complete set of benchmark datasets captured with a multi-sensor setup containing an event-based stereo camera, a regular stereo camera, multiple depth sensors, and an inertial measurement unit. The setup is fully hardware-synchronized and underwent accurate extrinsic calibration. All sequences come with ground truth data captured by highly accurate external reference devices such as a motion capture system. Individual sequences include both small and large-scale environments, and cover the speci\ufb01c challenges targeted by dynamic vision sensors.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 51,
            "updated": "2025-06-27T06:43:08.930354"
        },
        {
            "source": "scholar",
            "count": 78,
            "updated": "2025-06-27T06:43:08.009183"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2207.01404"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9809788"
        },
        {
            "type": "project_page",
            "url": "https://star-datasets.github.io/vector/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "synchronisation_method": "hardware",
        "stereo": true
    },
    "bibtex": {
        "pages": "8217--8224",
        "year": 2022,
        "month": "jul",
        "author": "Gao, Ling and Liang, Yuxuan and Yang, Jiaqi and Wu, Shaoxun and Wang, Chenyu and Chen, Jiaben and Kneip, Laurent",
        "journal": "IEEE Robotics and Automation Letters",
        "urldate": "2023-09-05",
        "number": "3",
        "language": "en",
        "doi": "10.1109/LRA.2022.3186770",
        "url": "https://ieeexplore.ieee.org/document/9809788/",
        "shorttitle": "{VECtor}",
        "issn": "2377-3766, 2377-3774",
        "volume": "7",
        "title": "{VECtor}: {A} {Versatile} {Event}-{Centric} {Benchmark} for {Multi}-{Sensor} {SLAM}",
        "type": "article",
        "key": "gao_vector_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793887",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2012.6385773",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913491297",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364915620033",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906882",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3168335",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48506.2021.9561741",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9636728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2016.7487258",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2014.X.007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2849882",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696514",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2012.6225005",
            "source": "crossref"
        },
        {
            "doi": "10.1177/02783649922066213",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9340849",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3075644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2853729",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341176",
            "source": "crossref"
        },
        {
            "title": "A 240 10mw 12us latency sparse-output vision sensor for mobile applications",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

- Makes use of hardware synchronisation.

#### Data Format
The data sequences are stored in two different formats (rosbag files and text files) with identical content. All rosbag files are compressed in [bz2 format](https://wiki.ros.org/rosbag/Commandline), and can be easily decompressed by using the [bag merger function in MPL dataset toolbox](https://github.com/mgaoling/mpl_dataset_toolbox#bag-merger).

- **/prophesee/left/events** ([prophesee_event_msgs/EventArray](https://github.com/prophesee-ai/prophesee_ros_wrapper/blob/master/prophesee_event_msgs/msg/EventArray.msg)): Events from the left event camera.
- **/prophesee/right/events** ([prophesee_event_msgs/EventArray](https://github.com/prophesee-ai/prophesee_ros_wrapper/blob/master/prophesee_event_msgs/msg/EventArray.msg)): Events from the right event camera.
- **/camera/left/image_mono** ([sensor_msgs/Image](http://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/Image.html)): Grayscale images from the left regular camera.
- **/camera/right/image_mono** ([sensor_msgs/Image](http://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/Image.html)): Grayscale images from the right regular camera.
- **/kinect/depth_image** ([sensor_msgs/Image](http://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/Image.html)): Depth images from the RGB-D sensor.
- **/ouster/point_cloud** ([sensor_msgs/PointCloud2](http://docs.ros.org/en/lunar/api/sensor_msgs/html/msg/PointCloud2.html)): Point clouds from the LiDAR.
- **/imu/data** ([sensor_msgs/Imu](http://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/Imu.html)): Full 9-axis readings from the IMU.
- **/gt/pose** ([geometry_msgs/PoseStamped](http://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/PoseStamped.html)): Ground truth signals.
    
- **left_event.hdf5** ([DSEC format](https://dsec.ifi.uzh.ch/data-format/)): Events from the left event camera stored in hdf5 format.
- **right_event.hdf5** ([DSEC format](https://dsec.ifi.uzh.ch/data-format/)): Events from the right event camera stored in hdf5 format.
- **left_camera.zip**: Grayscale images with their exposure time from the left regular camera.
- **right_camera.zip**: Grayscale images with their exposure time from the right regular camera.
- **kinect_depth.zip**: Depth images from the RGB-D sensor.
- **lidar.zip**: Point clouds from the LiDAR.
- **imu.txt**: Full 9-axis readings from the IMU.
- **gt.txt** ([TUM format](https://vision.in.tum.de/data/datasets/rgbd-dataset/file_formats)): Alternative ground truth signals for quantitative evaluation.