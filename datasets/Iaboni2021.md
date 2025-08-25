---
{
    "name": "Iaboni2021",
    "aliases": [],
    "year": 2021,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Object Tracking",
        "Object Detection"
    ],
    "description": "Detection and tracking of ground robots",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Github"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Github",
                "url": "https://github.com/radlab-sketch/radvision/tree/master/data",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 0.025,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Event Camera Based Real-Time Detection and Tracking of Indoor Ground Robots",
        "doi": "10.1109/ACCESS.2021.3133533",
        "authors": [
            "Craig Iaboni",
            "Himanshu Patel",
            "Deepan Lobo",
            "Ji-Won Choi",
            "Pramod Abichandani"
        ],
        "abstract": "This paper presents a real-time method to detect and track multiple mobile ground robots using event cameras. The method uses density-based spatial clustering of applications with noise (DBSCAN) to detect the robots and a single k-dimensional ( k\u2212d ) tree to accurately keep track of them as they move in an indoor arena. Robust detections and tracks are maintained in the face of event camera noise and lack of events (due to robots moving slowly or stopping). An off-the-shelf RGB camera-based tracking system was used to provide ground truth. Experiments including up to 4 robots are performed to study the effect of i) varying DBSCAN parameters, ii) the event accumulation time, iii) the number of robots in the arena, iv) the speed of the robots, v) variation in ambient light conditions on the detection and tracking performance, and vi) the effect of alternative clustering algorithms on detection performance. The experimental results showed 100% detection and tracking fidelity in the face of event camera noise and robots stopping for tests involving up to 3 robots (and upwards of 93% for 4 robots). When the lighting conditions were varied, a graceful degradation in detection and tracking fidelity was observed.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 25,
            "updated": "2025-06-16T11:43:58.850446"
        },
        {
            "source": "scholar",
            "count": 34,
            "updated": "2025-06-16T11:43:58.677993"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2102.11916"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/9641792"
        },
        {
            "type": "github_page",
            "url": "https://github.com/radlab-sketch/radvision"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "166588--166602",
        "year": 2021,
        "author": "Iaboni, Craig and Patel, Himanshu and Lobo, Deepan and Choi, Ji-Won and Abichandani, Pramod",
        "journal": "IEEE Access",
        "urldate": "2024-11-29",
        "language": "en",
        "doi": "10.1109/ACCESS.2021.3133533",
        "url": "https://ieeexplore.ieee.org/document/9641792/",
        "issn": "2169-3536",
        "copyright": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "volume": "9",
        "title": "Event {Camera} {Based} {Real}-{Time} {Detection} and {Tracking} of {Indoor} {Ground} {Robots}",
        "type": "article",
        "key": "iaboni_event_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.3389/fnbot.2019.00010",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-22750-0_13",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00223",
            "source": "crossref"
        },
        {
            "doi": "10.2352/ISSN.2470-1173.2019.13.COIMG-127",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2012.6385837",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCONS.2018.8663169",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CCDC49329.2020.9164608",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2020.2985815",
            "source": "crossref"
        },
        {
            "doi": "10.1002/widm.1310",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2020.2976481",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2012.2198930",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2009.5117867",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00135",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605233",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2019.05.024",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00176",
            "source": "crossref"
        },
        {
            "doi": "10.3390/electronics7110304",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2919301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696456",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197341",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-1-4615-2724-4_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2019.2928127",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2723372.2737792",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2009.2039888",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3068335",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSMC.2016.2616343",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2006.158",
            "source": "crossref"
        },
        {
            "doi": "10.1109/HPCA47549.2020.00024",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197530",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2019.2898117",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10846-017-0483-z",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.982903",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759345",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364911410755",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10514-015-9491-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICADIWT.2014.6814687",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-14364-4_90",
            "source": "crossref"
        },
        {
            "doi": "10.1145/361002.361007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2002.1017616",
            "source": "crossref"
        },
        {
            "doi": "10.5220/0005045703740381",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-37456-2_14",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIT.1982.1056489",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.1000236",
            "source": "crossref"
        },
        {
            "doi": "10.1145/304181.304187",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2011.2180025",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793924",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2015.7168370",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC.2006.1706816",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2308551",
            "source": "crossref"
        },
        {
            "title": "Long-term object tracking with a moving event camera",
            "source": "crossref"
        },
        {
            "title": "Evaluating multiple object tracking performance: The CLEAR MOT metrics",
            "source": "crossref"
        },
        {
            "title": "How an optimized DBSCAN implementation reduces execution-time and memory-requirements for large data-sets",
            "source": "crossref"
        },
        {
            "title": "Asynchronous event-based visual shape tracking for stable haptic feedback in microrobotics",
            "source": "crossref"
        },
        {
            "title": "Event-based vision for high-speed robotics",
            "source": "crossref"
        },
        {
            "title": "Dynamic clustering for tracking evolving environments",
            "source": "crossref"
        },
        {
            "title": "A fast ICP algorithm for 3-D human body motion tracking",
            "source": "crossref"
        },
        {
            "title": "Novel perception algorithmic framework for object identification and tracking in autonomous navigation",
            "source": "crossref"
        },
        {
            "title": "Simultaneous mosaicing and tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "A density-based algorithm for discovering clusters in large spatial databases with noise",
            "source": "crossref"
        },
        {
            "title": "Agglomerative hierarchical clustering algorithm&#x2014;A review",
            "source": "crossref"
        },
        {
            "title": "4.1 A 640&#x00D7; 480 dynamic vision sensor with a 9?m pixel and 300Meps address-event representation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
