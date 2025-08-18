---
{
    "name": "RobotEvt",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Visual Navigation",
    "subcategory": [
        "Visual Odometry",
        "Camera Pose Estimation"
    ],
    "task": "Visual Odometry in place of contrast maximisation",
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
                "url": "https://drive.google.com/drive/folders/1uhnCR2iDIEZhVNmL-2a-FWmo1J-Ip_vv",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 0.571,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Spatiotemporal Registration for Event-based Visual Odometry",
        "doi": "10.1109/CVPR46437.2021.00490",
        "authors": [
            "Daqi Liu",
            "Alvaro Parra",
            "Tat-Jun Chin"
        ],
        "abstract": "A useful application of event sensing is visual odometry, especially in settings that require high-temporal resolution. The state-of-the-art method of contrast maximisation recovers the motion from a batch of events by maximising the contrast of the image of warped events. However, the cost scales with image resolution and the temporal resolution can be limited by the need for large batch sizes to yield suf\ufb01cient structure in the contrast image1. In this work, we propose spatiotemporal registration as a compelling technique for event-based rotational motion estimation. We theoretically justify the approach and establish its fundamental and practical advantages over contrast maximisation. In particular, spatiotemporal registration also produces feature tracks as a by-product, which directly supports an ef\ufb01cient visual odometry pipeline with graph-based optimisation for motion averaging. The simplicity of our visual odometry pipeline allows it to process more than 1 M events/second. We also contribute a new event dataset for visual odometry, where motion sequences with large velocity variations were acquired using a high-precision robot arm2.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 29,
            "updated": "2025-06-12T16:41:25.882384"
        },
        {
            "source": "scholar",
            "count": 39,
            "updated": "2025-06-12T16:41:25.702678"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2103.05955"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9578468"
        },
        {
            "type": "github_page",
            "url": "https://github.com/liudaqikk/RobotEvt"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "4935--4944",
        "year": 2021,
        "month": "jun",
        "author": "Liu, Daqi and Parra, Alvaro and Chin, Tat-Jun",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPR46437.2021.00490",
        "url": "https://ieeexplore.ieee.org/document/9578468/",
        "isbn": "978-1-66544-509-2",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Spatiotemporal {Registration} for {Event}-based {Visual} {Odometry}",
        "address": "Nashville, TN, USA",
        "type": "inproceedings",
        "key": "liu_spatiotemporal_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/EBCCSP.2016.7605086",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01258",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58574-7_4",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58558-7_10",
            "source": "crossref"
        },
        {
            "doi": "10.1111/j.1365-2818.2011.03565.x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093607",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2015.7139876",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639",
            "source": "crossref"
        },
        {
            "doi": "10.3389/frobt.2017.00073",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197133",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00638",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2693984",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.imavis.2004.05.007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.2002.1047997",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00208",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2009.5117867",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-662-03427-9_1",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2849882",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV.2018.00080",
            "source": "crossref"
        },
        {
            "doi": "10.1023/B:VISI.0000011205.11775.fd",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197374",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2017.7989517",
            "source": "crossref"
        },
        {
            "doi": "10.1137/1007077",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906882",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Universal robots",
            "source": "crossref"
        },
        {
            "title": "Real-time 3d reconstruction and 6-dof tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "Event-based star tracking via multiresolution progressive hough transforms",
            "source": "crossref"
        },
        {
            "title": "Unsupervised depth learning in challenging indoor video: Weak rectification to rescue",
            "source": "crossref"
        },
        {
            "title": "Method for registration of 3-d shapes",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of depth and ego-motion from video",
            "source": "crossref"
        },
        {
            "title": "Event-based stereo visual odometry",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of dense optical flow, depth and egomotion from sparse event data",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure

The RobotEvt dataset contains sequences under different motion models, speeds and brightness from a static scene, specifically

- 4 motion models: PureRot - pure rotation; ParRot partial rotation; PureTranslate - pure translation and FullMod - full rigid motion model.
- 3 speeds: Fast - maximum speed of the robot arm (1m/s); Mid - 75% of the maximum speed and Slow - 50% of the maximum speed.
- 2 brightness conditions: On and Off means bright and dark conditions, respectively.

Events, raw images and IMU measurements are stored in the [rosbag](http://wiki.ros.org/rosbag) file.

- **dvs/events**: event information (timestamp x y polarity).
- **dvs/images**: raw images at fix rate.
- **dvs/imu**: IMU measurement at fix rate.

Ground truth are provided with a txt file, where the poses are represented using rotation matrix and translation. One pose per line (timestamp r11 r12 r13 r21 r22 r23 r31 r32 r33 t1 t2 t3) .

calibration of camera is provided with a txt file (calib.txt), where the first four digits represent the camera intrinic (fx fy cx cy) and the rest digits represent the distortion model.