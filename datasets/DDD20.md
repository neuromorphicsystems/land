---
{
    "name": "DDD20",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Autonomous Driving"
    ],
    "task": "Driving Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
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
                "url": "https://www.research-collection.ethz.ch/handle/20.500.11850/707895",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 1300.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "DDD20 End-to-End Event Camera Driving Dataset: Fusing Frames and Events with Deep Learning for Improved Steering Prediction",
        "doi": "10.1109/ITSC45102.2020.9294515",
        "authors": [
            "Yuhuang Hu",
            "Jonathan Binas",
            "Daniel Neil",
            "Shih-Chii Liu",
            "Tobi Delbruck"
        ],
        "abstract": "Neuromorphic event cameras are useful for dynamic vision problems under difficult lighting conditions. To enable studies of using event cameras in automobile driving applications, this paper reports a new end-to-end driving dataset called DDD20. The dataset was captured with a DAVIS camera that concurrently streams both dynamic vision sensor (DVS) brightness change events and active pixel sensor (APS) intensity frames. DDD20 is the longest event camera end-to-end driving dataset to date with 51h of DAVIS event+frame camera and vehicle human control data collected from 4000 km of highway and urban driving under a variety of lighting conditions. Using DDD20, we report the first study of fusing brightness change events and intensity frame data using a deep learning approach to predict the instantaneous human steering wheel angle. Over all day and night conditions, the explained variance for human steering prediction from a Resnet-32 is significantly better from the fused DVS+APS frames (0.88) than using either DVS (0.67) or APS (0.77) data alone.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 49,
            "updated": "2025-06-12T09:21:27.317482"
        },
        {
            "source": "scholar",
            "count": 100,
            "updated": "2025-06-12T09:21:27.163430"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2005.08605"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9294515"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/davis-driving-dataset-2020/home"
        }
    ],
    "full_name": "DAVIS Driving Dataset 2020 (DDD20)",
    "additional_metadata": {
        "total_duration": "51 hours",
        "total_distance": "4000 km",
        "location": "USA",
        "file_format": "HDF5 format"
    },
    "bibtex": {
        "pages": "1--6",
        "year": 2020,
        "month": "sep",
        "author": "Hu, Yuhuang and Binas, Jonathan and Neil, Daniel and Liu, Shih-Chii and Delbruck, Tobi",
        "publisher": "IEEE",
        "booktitle": "2020 {IEEE} 23rd {International} {Conference} on {Intelligent} {Transportation} {Systems} ({ITSC})",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/ITSC45102.2020.9294515",
        "url": "https://ieeexplore.ieee.org/document/9294515/",
        "shorttitle": "{DDD20} {End}-to-{End} {Event} {Camera} {Driving} {Dataset}",
        "isbn": "978-1-72814-149-7",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "{DDD20} {End}-to-{End} {Event} {Camera} {Driving} {Dataset}: {Fusing} {Frames} and {Events} with {Deep} {Learning} for {Improved} {Steering} {Prediction}",
        "address": "Rhodes, Greece",
        "type": "inproceedings",
        "key": "hu_ddd20_2020-1"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/IVS.2017.7995742",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.660",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.336",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO.2011.6181669",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605233",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.376",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.350",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1002/rob.21918",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364916679498",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6248074",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.312",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00210",
            "source": "crossref"
        },
        {
            "title": "BDD100k: A diverse driving video database with scalable annotation tooling",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Faster R-CNN: Towards real-time object detection with region proposal networks",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical ?ow algorithm for Dynamic Vision Sensors",
            "source": "crossref"
        },
        {
            "title": "A large scale event-based detection dataset for automotive",
            "source": "crossref"
        },
        {
            "title": "Learning to drive using inverse reinforcement learning and deep Q-networks",
            "source": "crossref"
        },
        {
            "title": "Learning a driving simulator",
            "source": "crossref"
        },
        {
            "title": "End to end learning for self-driving cars",
            "source": "crossref"
        },
        {
            "title": "ALVINN: An autonomous land vehicle in a neural network",
            "source": "crossref"
        },
        {
            "title": "DDD17: End-to-end DAVIS driving dataset",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 
- Contains over 51 hours of driving data
- Collected over 4000 km in USA
- Data is stored in HDF5 format