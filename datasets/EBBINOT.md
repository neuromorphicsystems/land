---
{
    "name": "EBBINOT",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CeleX-4",
        "DAVIS240"
    ],
    "other_sensors": [
        "ZED Stereo"
    ],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Traffic Monitoring",
        "Vehicle Detection"
    ],
    "task": "Traffic monitoring",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/4574759",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 8.6,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EBBINNOT: A Hardware-Efficient Hybrid Event-Frame Tracker for Stationary Dynamic Vision Sensors",
        "doi": "10.1109/JIOT.2022.3178120",
        "authors": [
            "Vivek Mohan",
            "Deepak Singla",
            "Tarun Pulluri",
            "Andres Ussa",
            "Pradeep Kumar Gopalakrishnan",
            "Pao-Sheng Sun",
            "Bharath Ramesh",
            "Arindam Basu"
        ],
        "abstract": "As an alternative sensing paradigm, dynamic vision sensors (DVSs) have been recently explored to tackle scenarios where conventional sensors result in high data rate and processing time. This article presents a hybrid event-frame approach for detecting and tracking objects recorded by a stationary neuromorphic sensor, thereby exploiting the sparse DVS output in a low-power setting for traffic monitoring. Specifically, we propose a hardware-efficient processing pipeline that optimizes memory and computational needs that enable long-term battery-powered usage for Internet of Things applications. To exploit the background removal property of a static DVS, we propose an event-based binary image creation that signals presence or absence of events in a frame duration. This reduces memory requirement and enables the usage of simple algorithms like median filtering and connected component labeling for denoise and region proposal (RP), respectively. To overcome the fragmentation issue, a YOLO-inspired neural network-based detector and classifier to merge fragmented RPs has been proposed. Finally, a new overlap-based tracker was implemented, exploiting overlap between detections and tracks is proposed with heuristics to overcome occlusion. The proposed pipeline is evaluated with more than 5 h of traffic recording spanning three different locations on two different neuromorphic sensors (DVS and CeleX) and demonstrates similar performance. Compared to existing event-based feature trackers, our method provides similar accuracy while needing \u22486\u00d7 less computes. To the best of our knowledge, this is the first time a stationary DVS-based traffic monitoring solution is extensively compared to simultaneously recorded RGB frame-based methods while showing tremendous promise by outperforming state-of-the-art deep learning solutions. The traffic data set is publicly made available at: https://nusneuromorphic.github.io/dataset/index.html .",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 10,
            "updated": "2025-07-11T08:05:23.362667"
        },
        {
            "source": "scholar",
            "count": 16,
            "updated": "2025-07-11T08:05:22.933320"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2006.00422"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9782692"
        },
        {
            "type": "project_page",
            "url": "https://nusneuromorphic.github.io/dataset/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "4",
        "stereo": true
    },
    "bibtex": {
        "pages": "20902--20917",
        "year": 2022,
        "month": "nov",
        "author": "Mohan, Vivek and Singla, Deepak and Pulluri, Tarun and Ussa, Andres and Gopalakrishnan, Pradeep Kumar and Sun, Pao-Sheng and Ramesh, Bharath and Basu, Arindam",
        "journal": "IEEE Internet of Things Journal",
        "urldate": "2024-12-15",
        "number": "21",
        "language": "en",
        "doi": "10.1109/JIOT.2022.3178120",
        "url": "https://ieeexplore.ieee.org/document/9782692/",
        "shorttitle": "{EBBINNOT}",
        "issn": "2327-4662, 2372-2541",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "9",
        "title": "{EBBINNOT}: {A} {Hardware}-{Efficient} {Hybrid} {Event}-{Frame} {Tracker} for {Stationary} {Dynamic} {Vision} {Sensors}",
        "type": "article",
        "key": "mohan_ebbinnot_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JETCAS.2018.2816339",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1111/j.1365-2818.2011.03565.x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2759326",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605233",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050397",
            "source": "crossref"
        },
        {
            "doi": "10.1016/B978-044451020-4/50031-1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2006.874722",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCP48234.2019.8959552",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2006.1628877",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2005.1406476",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICSMC.2004.1400815",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2010.2101613",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2785272",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00082",
            "source": "crossref"
        },
        {
            "doi": "10.1049/trit.2019.0107",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS45731.2020.9180506",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2352401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2017.8206226",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2919301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2020.3009687",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1162/NECO_a_00720",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-67190-1_11",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8594119",
            "source": "crossref"
        },
        {
            "doi": "10.1109/A-SSCC53895.2021.9634734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IGSC54211.2021.9651650",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-60939-9_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MC.2018.157113521",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TENSYMP50017.2020.9230778",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DSPWS.2006.265448",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC.2008.4732575",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC.2009.5309875",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00841",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2017.7989517",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SOCC46988.2019.1570553690",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41586-019-1424-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865163",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BIOROB.2016.7523452",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.1254642",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050403",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00160",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2019.2928127",
            "source": "crossref"
        },
        {
            "doi": "10.1098/rstb.2016.0113",
            "source": "crossref"
        },
        {
            "doi": "10.1073/pnas.1701003114",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_15",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.01047",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2017.04.018",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46448-0_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.726791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.685",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00142",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00441",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00135",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2015.79",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2019.8662398",
            "source": "crossref"
        },
        {
            "doi": "10.23919/VLSIC.2017.8008536",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2017.7870351",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2932301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.2969183",
            "source": "crossref"
        },
        {
            "title": "Long-term object tracking with a moving event camera",
            "source": "crossref"
        },
        {
            "title": "PRED18: Dataset and further experiments with DAVIS event camera in predator-prey robot chasing",
            "source": "crossref"
        },
        {
            "title": "YOLOv3: An incremental improvement",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Event-based features selection and tracking from intertwined estimation of velocity and generative contours",
            "source": "crossref"
        },
        {
            "title": "ZynqNet: An FPGA-accelerated embedded convolutional neural network",
            "source": "crossref"
        },
        {
            "title": "DashNet: A hybrid artificial and spiking neural network for high-speed object tracking",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical flow algorithm for dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "A low-power end-to-end hybrid neuromorphic framework for surveillance applications",
            "source": "crossref"
        },
        {
            "title": "Comparative study on connected component labeling algorithms for embedded video processing systems",
            "source": "crossref"
        },
        {
            "title": "YOLO9000: Better, faster, stronger",
            "source": "crossref"
        },
        {
            "title": "Comparison of learning algorithms for handwritten digit recognition",
            "source": "crossref"
        },
        {
            "title": "You only look once: Unified, real-time object detection",
            "source": "crossref"
        },
        {
            "title": "YOLO-LITE: A real-time object detection algorithm Optimized for non-GPU computers",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Dataset contains 4 different classes
