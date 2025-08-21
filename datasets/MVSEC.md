---
{
    "name": "MVSEC",
    "aliases": [],
    "year": 2018,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "VLP-16 PUCK LITE",
        "Skybotix integrated VI-sensor",
        "UBLOX NEO-M8N",
        "Vicon"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Stereo",
        "Autonomous Driving"
    ],
    "description": "Drone stereo vision",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": true,
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
                "url": "https://drive.google.com/drive/folders/1rwyRk26wtWeRgrAx_fgPc-ubUzTFThkV",
                "format": "ROSbag",
                "available": false
            }
        ],
        "size_gb": 112.0,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "The Multivehicle Stereo Event Camera Dataset -  An Event Camera Dataset for 3D Perception",
        "doi": "10.1109/LRA.2018.2800793",
        "authors": [
            "Alex Zihao Zhu",
            "Dinesh Thakur",
            "Tolga  Ozaslan",
            "Bernd Pfrommer",
            "Vijay Kumar",
            "Kostas Daniilidis"
        ],
        "abstract": "Event-based cameras are a new passive sensing modality with a number of bene\ufb01ts over traditional cameras, including extremely low latency, asynchronous data acquisition, high dynamic range, and very low power consumption. There has been a lot of recent interest and development in applying algorithms to use the events to perform a variety of three-dimensional perception tasks, such as feature tracking, visual odometry, and stereo depth estimation. However, there currently lacks the wealth of labeled data that exists for traditional cameras to be used for both testing and development. In this letter, we present a large dataset with a synchronized stereo pair event based camera system, carried on a handheld rig, \ufb02own by a hexacopter, driven on top of a car, and mounted on a motorcycle, in a variety of different illumination levels and environments. From each camera, we provide the event stream, grayscale images, and inertial measurement unit (IMU) readings. In addition, we utilize a combination of IMU, a rigidly mounted lidar system, indoor and outdoor motion capture, and GPS to provide accurate pose and depth images for each camera at up to 100 Hz. For comparison, we also provide synchronized grayscale images and IMU readings from a frame-based stereo camera system.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 275,
            "updated": "2024-10-26 12:54:08.010072"
        },
        {
            "source": "scholar",
            "count": 594,
            "updated": "2025-06-29T07:55:38.814567"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1801.10202"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8288670"
        },
        {
            "type": "project_page",
            "url": "https://daniilidis-group.github.io/mvsec/"
        }
    ],
    "full_name": "The Multivehicle Stereo Event Camera Dataset",
    "additional_metadata": {
        "stereo_baseline": "10 cm",
        "num_recordings": "14",
        "num_classes": "4",
        "stereo": false
    },
    "bibtex": {
        "pages": "2032--2039",
        "year": 2018,
        "month": "jul",
        "author": "Zhu, Alex Zihao and Thakur, Dinesh and Ozaslan, Tolga and Pfrommer, Bernd and Kumar, Vijay and Daniilidis, Kostas",
        "journal": "IEEE Robotics and Automation Letters",
        "urldate": "2023-09-05",
        "number": "3",
        "language": "en",
        "doi": "10.1109/LRA.2018.2800793",
        "url": "http://ieeexplore.ieee.org/document/8288670/",
        "shorttitle": "The {Multivehicle} {Stereo} {Event} {Camera} {Dataset}",
        "issn": "2377-3766, 2377-3774",
        "volume": "3",
        "title": "The {Multivehicle} {Stereo} {Event} {Camera} {Dataset}: {An} {Event} {Camera} {Dataset} for {3D} {Perception}",
        "type": "article",
        "key": "zhu_multivehicle_2018"
    }
}
---

### Dataset Structure

- Cameras had a baseline of 10 cm
- Default biases were used for the recordings
- Contains 14 sequences across 4 different types of recordings

### ROS Bag Data Format

Each sequence consists of a data ROS bag, with the following topics:

- **/davis/left/events** (dvs_msgs/EventArray) - Events from the left DAVIS camera.
- **/davis/left/image_raw** (sensor_msgs/Image) - Grayscale images from the left DAVIS camera.
- **/davis/left/imu** (sensor_msgs/Imu) - IMU readings from the left DAVIS camera.
- **/davis/right/events** (dvs_msgs/EventArray) - Events from the right DAVIS camera.
- **/davis/right/image_raw** (sensor_msgs/Image) - Grayscale images from the right DAVIS camera.
- **/davis/right/imu** (sensor_msgs/Imu) - IMU readings from the right DAVIS camera.
- **/velodyne_point_cloud** (sensor_msgs/PointCloud2) - Point clouds from the Velodyne (one per spin).
- **/visensor/left/image_raw** (sensor_msgs/Image) - Grayscale images from the left VI-Sensor camera.
- **/visensor/right/image_raw** (sensor_msgs/Image) - Grayscale images from the right VI-Sensor camera.
- **/visensor/imu** (sensor_msgs/Imu) - IMU readings from the VI-Sensor.
- **/visensor/cust_imu** (visensor_node/visensor_imu) - Full IMU readings from the VI-Sensor (including magnetometer, temperature and pressure).

Two sets of custom messages are used, dvs_msgs/EventArray from [rpg_dvs_ros](https://github.com/uzh-rpg/rpg_dvs_ros) and visensor_node/visensor_imu from [visensor_node](https://github.com/ethz-asl/visensor_node). The visensor_node package is optional if you do not need the extra IMU outputs (magnetometer, temperature and pressure.

In addition, each corresponding ground truth bag contains the following topics:

- **/davis/left/depth_image_raw** (sensor_msgs/Image) - Depth maps for the left DAVIS camera at a given timestamp (note, these images are saved using the CV_32FC1 format (i.e. floats).
- **/davis/left/depth_image_rect** (sensor_msgs/Image) - Rectified depth maps for the left DAVIS camera at a given timestamp (note, these images are saved using the CV_32FC1 format (i.e. floats).
- **/davis/left/blended_image_rect** (sensor_msgs/Image) - Visualization of all events from the left DAVIS that are 25ms from each left depth map superimposed on the depth map. This message gives a preview of what each sequence looks like.
- **/davis/left/odometry** (geometry_msgs/PoseStamped) - Pose output using [LOAM](https://www.ri.cmu.edu/publications/loam-lidar-odometry-and-mapping-in-real-time/). These poses are locally consistent, but may experience drift over time. Used to stitch point clouds together to generate depth maps.
- **/davis/left/pose** (geometry_msgs/PoseStamped) - Pose output using [Google Cartographer](https://google-cartographer-ros.readthedocs.io/en/latest/). These poses are globally loop closed, and can be assumed to have minimal drift. Note that these poses were optimized using Cartographer’s 2D mapping, which does **not** optimize over the height (Z axis). Pitch and roll are still optimized, however.
- **/davis/right/depth_image_raw** (sensor_msgs/Image) - Depth maps for the right DAVIS camera at a given timestamp.
- **/davis/right/depth_image_rect** (sensor_msgs/Image) - Rectified depth maps for the right DAVIS camera at a given timestamp.
- **/davis/right/blended_image_rect** (sensor_msgs/Image) - Visualization of all events from the right DAVIS that are 25ms from each right depth map superimposed on the depth map. This message gives a preview of what each sequence looks like.
