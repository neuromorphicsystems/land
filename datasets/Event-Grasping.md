---
{
    "name": "Event-Grasping",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Robotics",
        "Grasping"
    ],
    "task": "Robotic grasping detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1frAvxFjjhBzhhNd2SeDKN1R6E417jD3L/view?usp=sharing)",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 0.416,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Robotic Grasping Detection With Neuromorphic Vision Sensor and Event-Grasping Dataset",
        "doi": "10.3389/fnbot.2020.00051",
        "authors": [
            "Bin Li",
            "Hu Cao",
            "Zhongnan Qu",
            "Yingbai Hu",
            "Zhenke Wang",
            "Zichen Liang"
        ],
        "abstract": "Robotic grasping plays an important role in the field of robotics. The current state-of-the-art robotic grasping detection systems are usually built on the conventional vision, such as the RGB-D camera. Compared to traditional frame-based computer vision, neuromorphic vision is a small and young community of research. Currently, there are limited event-based datasets due to the troublesome annotation of the asynchronous event stream. Annotating large scale vision datasets often takes lots of computation resources, especially when it comes to troublesome data for video-level annotation. In this work, we consider the problem of detecting robotic grasps in a moving camera view of a scene containing objects. To obtain more agile robotic perception, a neuromorphic vision sensor (Dynamic and Active-pixel Vision Sensor, DAVIS) attaching to the robot gripper is introduced to explore the potential usage in grasping detection. We construct a robotic grasping dataset named Event-Grasping dataset with 91 objects. A spatial-temporal mixed particle filter (SMP Filter) is proposed to track the LED-based grasp rectangles, which enables video-level annotation of a single grasp rectangle per object. As LEDs blink at high frequency, the Event-Grasping dataset is annotated at a high frequency of 1 kHz. Based on the Event-Grasping dataset, we develop a deep neural network for grasping detection that considers the angle learning problem as classification instead of regression. The method performs high detection accuracy on our Event-Grasping dataset with 93% precision at an object-wise level split. This work provides a large-scale and well-annotated dataset and promotes the neuromorphic vision applications in agile robot.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 23,
            "updated": "2025-06-24T06:01:33.250549"
        },
        {
            "source": "scholar",
            "count": 31,
            "updated": "2025-06-24T06:01:32.362746"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/2004.13652"
        },
        {
            "type": "paper",
            "url": "https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2020.00051/full"
        },
        {
            "type": "github_page",
            "url": "https://github.com/HuCaoFighting/DVS-GraspingDataSet"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_categories": "91",
        "stereo": false
    },
    "bibtex": {
        "pages": "51",
        "year": 2020,
        "month": "oct",
        "author": "Li, Bin and Cao, Hu and Qu, Zhongnan and Hu, Yingbai and Wang, Zhenke and Liang, Zichen",
        "journal": "Frontiers in Neurorobotics",
        "urldate": "2024-12-14",
        "language": "en",
        "doi": "10.3389/fnbot.2020.00051",
        "url": "https://www.frontiersin.org/article/10.3389/fnbot.2020.00051/full",
        "issn": "1662-5218",
        "volume": "14",
        "title": "Event-{Based} {Robotic} {Grasping} {Detection} {With} {Neuromorphic} {Vision} {Sensor} and {Event}-{Grasping} {Dataset}",
        "type": "article",
        "key": "li_event-based_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/78.978374",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v33i01.33018085",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2347207",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364914555720",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00422-006-0068-6",
            "source": "crossref"
        },
        {
            "doi": "10.1155/2018/4815383",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2020.2985815",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00010",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913491297",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2011.5980145",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2017.8202237",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364914549607",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46448-0_2",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364919859066",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2015.7139361",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO49542.2019.8961711",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2908281",
            "source": "crossref"
        },
        {
            "title": "A tutorial on particle filters for online nonlinear/non-Gaussian bayesian tracking",
            "source": "crossref"
        },
        {
            "title": "Densely supervised grasp detector (DSGD)",
            "source": "crossref"
        },
        {
            "title": "Contour motion estimation for asynchronous event-driven cameras",
            "source": "crossref"
        },
        {
            "title": "\u201cRobotic grasping and contact: a review,\u201d",
            "source": "crossref"
        },
        {
            "title": "The Yale human grasping dataset: grasp, object, and task data in household and machine shop environments",
            "source": "crossref"
        },
        {
            "title": "A review of the integrate-and-fire neuron model: I. Homogeneous synaptic input",
            "source": "crossref"
        },
        {
            "title": "\u201cLow-latency localization by active led markers tracking using a dynamic vision sensor,\u201d",
            "source": "crossref"
        },
        {
            "title": "Neuromorphic vision based multivehicle detection and tracking for intelligent transportation system",
            "source": "crossref"
        },
        {
            "title": "Event-based neuromorphic vision for autonomous driving: a paradigm shift for bio-inspired visual sensing and perception",
            "source": "crossref"
        },
        {
            "title": "Multi-cue event information fusion for pedestrian detection with neuromorphic vision sensors",
            "source": "crossref"
        },
        {
            "title": "Pseudo-labels for supervised learning on event-based data",
            "source": "crossref"
        },
        {
            "title": "Deep grasp: detection and localization of grasps with deep neural networks",
            "source": "crossref"
        },
        {
            "title": "\u201cImagenet: a large-scale hierarchical image database,\u201d",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: a survey",
            "source": "crossref"
        },
        {
            "title": "Vision meets robotics: the KITTI dataset",
            "source": "crossref"
        },
        {
            "title": "\u201cEfficient grasping from rgbd images: learning using a new rectangle representation,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cLow-latency visual odometry using event-based feature tracks,\u201d",
            "source": "crossref"
        },
        {
            "title": "Antipodal robotic grasping using generative residual convolutional neural network",
            "source": "crossref"
        },
        {
            "title": "Robotic grasp detection using deep convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "Deep learning for detecting robotic grasps",
            "source": "crossref"
        },
        {
            "title": "\u201cMicrosoft coco: common objects in context,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cCombined frame- and event-based detection and tracking,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cSSD: single shot multibox detector,\u201d",
            "source": "crossref"
        },
        {
            "title": "Learning robust, real-time, reactive robotic grasping",
            "source": "crossref"
        },
        {
            "title": "\u201cFast event-based corner detection,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cReal-time grasp detection using convolutional neural networks,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cVery deep convolutional networks for large-scale image recognition,\u201d",
            "source": "crossref"
        },
        {
            "title": "Efficient fully convolution neural network for generating pixel wise robotic grasps with high resolution images",
            "source": "crossref"
        },
        {
            "title": "Multi-object grasping detection with hierarchical feature fusion",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset consist of 91 objects
