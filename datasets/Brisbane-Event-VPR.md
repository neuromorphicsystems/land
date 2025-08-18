---
{
    "name": "Brisbane-Event-VPR",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour"
    ],
    "other_sensors": [],
    "category": "Visual Navigation",
    "subcategory": [
        "Visual Place Recognition"
    ],
    "task": "Visual Place Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/4302805",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 88.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Visual Place Recognition With Ensembles of Temporal Windows",
        "doi": "10.1109/lra.2020.3025505",
        "authors": [
            "Tobias Fischer",
            "Michael Milford"
        ],
        "abstract": "Event cameras are bio-inspired sensors capable of providing a continuous stream of events with low latency, and high dynamic range. As a single event only carries limited information about the brightness change at a particular pixel, events are commonly accumulated into spatio-temporal windows for further processing. However, the optimal window length varies depending on the scene, camera motion, the task being performed, and other factors. In this research, we develop a novel ensemble-based scheme for combining temporal windows of varying lengths that are processed in parallel. For applications where the increased computational requirements of this approach are not practical, we also introduce a new \u201capproximate\u201d ensemble scheme that achieves signi\ufb01cant computational ef\ufb01ciencies without unduly compromising the original performance gains provided by the ensemble approach. We demonstrate our ensemble scheme on the visual place recognition (VPR) task, introducing a new Brisbane-Event-VPR dataset with annotated recordings captured using a DAVIS346 color event camera. We show that our proposed ensemble scheme signi\ufb01cantly outperforms all the single-window baselines, and conventional modelbased ensembles, irrespective of the image reconstruction, and feature extraction methods used in the VPR pipeline, and evaluate which ensemble combination technique performs best. These results demonstrate the signi\ufb01cant bene\ufb01ts of ensemble schemes for event camera processing in the VPR domain, and may have relevance to other related processes, including feature tracking, visual-inertial odometry, and steering prediction in driving.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 42,
            "updated": "2025-06-12T09:27:03.399445"
        },
        {
            "source": "scholar",
            "count": 66,
            "updated": "2025-06-12T09:27:03.163954"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2006.02826v2"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9201344"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Tobias-Fischer/ensemble-event-vpr"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "location": "Brookfield and Kenmore Hills (Brisbane)",
        "route_length": "8km",
        "num_loops": "6",
        "file_format": "rosbags",
        "stereo": false
    },
    "bibtex": {
        "pages": "6924--6931",
        "year": 2020,
        "month": "oct",
        "author": "Fischer, Tobias and Milford, Michael",
        "journal": "IEEE Robotics and Automation Letters",
        "urldate": "2024-04-13",
        "number": "4",
        "language": "en",
        "doi": "10.1109/LRA.2020.3025505",
        "url": "https://ieeexplore.ieee.org/document/9201344/",
        "issn": "2377-3766, 2377-3774",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "5",
        "title": "Event-{Based} {Visual} {Place} {Recognition} {With} {Ensembles} of {Temporal} {Windows}",
        "type": "article",
        "key": "fischer_event-based_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794178",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco.1991.3.1.79",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-1-4419-9326-7_1",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01249-6_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCDS.2016.2624705",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2015.2496823",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2012.6224623",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO.2012.6491077",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00210",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7168734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2015.7139876",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2711011",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00057",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00897",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "title": "U-Net: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "A large scale event-based detection dataset for automotive",
            "source": "crossref"
        },
        {
            "title": "Reducing the sim-to-real gap for event cameras",
            "source": "crossref"
        },
        {
            "title": "Towards visual slam with event-based cameras",
            "source": "crossref"
        },
        {
            "title": "DDD17: End-to-end davis driving dataset",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 



- Used the same bias values as [[DDD17]] dataset. Note paper states that this led to better results than the biases used in the [[CED]] dataset. This is proof that sharing bias values leads to better datasets #discussion
-  Recorded in the Brookfield and Kenmore Hills (Brisbane)
- Route length is approximately 8km
- The dataset contains 6 loops of the route.
- Data is stored in rosbags

The dataset contains six sequences of recordings. For each recording, four files are made available:

1. A rosbag (*.bag) file with the following contents:
    - /dvs/events (type: dvs_msgs/EventArray) with the event stream, see https://github.com/uzh-rpg/rpg_dvs_ros)
    - /dvs/camera_info (type: sensor_msgs/CameraInfo) with the camera info of the DAVIS frame camera
    - /dvs/image_raw (type: sensor_msgs/Image) with the DAVIS frame camera images
    - /dvs/imu (sensor_msgs/Imu) with the IMU data of the event camera
        
2. An associated *_hot_pixels.txt file that contains the hot pixels for that recording (detected with https://github.com/cedric-scheerlinck/dvs_tools/tree/master/dvs_hot_pixel_filter)
    
3. The recordings using a frame-based consumer camera (*.mp4 files)
    
4. Associated GPS information (*.nmea) files recorded using the consumer camera - synchronized with the mp4 files.
    
Note that the timestamps of the event files and frame-based camera files do not match as they were not synchronized during recording time. Please see the associated code repository (https://github.com/Tobias-Fischer/ensemble-event-vpr) for the correct mappings and time offsets between the event recordings and frame-based recordings.

The code repository also contains code to match GPS data between different traverses.

Source: https://zenodo.org/records/4302805