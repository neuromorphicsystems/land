---
{
    "name": "Jiang2019",
    "aliases": [],
    "year": 2019,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Pedestrian Detection"
    ],
    "description": "Pedestrian detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "None"
        ],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "Mixed Frame-/Event-Driven Fast Pedestrian Detection",
        "doi": "10.1109/ICRA.2019.8793924",
        "authors": [
            "Zhuangyi Jiang",
            "Pengfei Xia",
            "Kai Huang",
            "Walter Stechele",
            "Guang Chen",
            "Zhenshan Bing",
            "Alois Knoll"
        ],
        "abstract": "Pedestrian detection has attracted enormous research attention in the field of Intelligent Transportation System (ITS) due to that pedestrians are the most vulnerable traffic participants. So far, almost all pedestrian detection solutions are based on the conventional frame-based camera. However, they cannot perform very well in scenarios with bad light condition and high-speed motion. In this work, a Dynamic and Active Pixel Sensor (DAVIS), whose two channels concurrently output conventional gray-scale frames and asynchronous low-latency temporal contrast events of light intensity, was first used to detect pedestrians in a traffic monitoring scenario. Data from two camera channels were fed into Convolutional Neural Networks (CNNs) including three YOLOv3 models and three YOLO-tiny models to gather bounding boxes of pedestrians with respective confidence map. Furthermore, a confidence map fusion method combining the CNN-based detection results from both DAVIS channels was proposed to obtain higher accuracy. The experiments were conducted on a custom dataset collected on TUM campus. Benefiting from the high speed, low latency and wide dynamic range of the event channel, our method achieved higher frame rate and lower latency than those only using a conventional camera. Additionally, it reached higher average precision by using the fusion approach.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 68,
            "updated": "2025-06-13T11:17:03.045149"
        },
        {
            "source": "scholar",
            "count": 113,
            "updated": "2025-06-13T11:16:57.846178"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://mediatum.ub.tum.de/doc/1482163/1482163.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/8793924/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "total_duration": "14.4 seconds"
    },
    "bibtex": {
        "pages": "8332--8338",
        "year": 2019,
        "month": "may",
        "author": "Jiang, Zhuangyi and Xia, Pengfei and Huang, Kai and Stechele, Walter and Chen, Guang and Bing, Zhenshan and Knoll, Alois",
        "publisher": "IEEE",
        "booktitle": "2019 {International} {Conference} on {Robotics} and {Automation} ({ICRA})",
        "urldate": "2024-09-20",
        "language": "en",
        "doi": "10.1109/ICRA.2019.8793924",
        "url": "https://ieeexplore.ieee.org/document/8793924/",
        "isbn": "978-1-5386-6027-0",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Mixed {Frame}-/{Event}-{Driven} {Fast} {Pedestrian} {Detection}",
        "address": "Montreal, QC, Canada",
        "type": "inproceedings",
        "key": "jiang_mixed_2019"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/j.neucom.2016.09.085",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.23.91",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2014.2300479",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10593-2_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IVS.2005.1505106",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2437384",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2017.2759783",
            "source": "crossref"
        },
        {
            "doi": "10.1109/AICCSA.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298784",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2018.01.092",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IVS.2013.6629664",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.126",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2011.5981798",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.91",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.141",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.690",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2012.02.022",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00107",
            "source": "crossref"
        },
        {
            "title": "Discriminative local binary patterns for human detection in personal album",
            "source": "crossref"
        },
        {
            "title": "Ssd: Single shot multibox detector",
            "source": "crossref"
        },
        {
            "title": "Fast r-cnn",
            "source": "crossref"
        },
        {
            "title": "Faster r-cnn: Towards realtime object detection with region proposal networks",
            "source": "crossref"
        },
        {
            "title": "Online multi-object trackingby-clustering for intelligent transportation system with neuromorphic vision sensor",
            "source": "crossref"
        },
        {
            "title": "Vision-based pedestrian detection using haar-like features",
            "source": "crossref"
        },
        {
            "title": "Histograms of oriented gradients for human detection",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains a total of 14.4 seconds of data.
