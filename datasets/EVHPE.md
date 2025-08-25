---
{
    "name": "EVHPE",
    "aliases": [
        "Prophesee-HP",
        "Davis-HP"
    ],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4",
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Head Pose Estimation",
        "Human Pose Recognition"
    ],
    "description": "Head Pose Estimation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://1drv.ms/f/c/a06ca2a7cf038490/ElpcSL34FKRKjMuROuSgY98BGbFDfG90DQfyXYXKnwSo1A?e=Fy7dUD",
                "format": "Unknown",
                "available": true
            }
        ],
        "size_gb": 102.1,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Head Pose Estimation: Benchmark and\u00a0Method",
        "doi": "10.1007/978-3-031-72633-0_11",
        "authors": [
            "Jiahui Yuan",
            "Hebei Li",
            "Yansong Peng",
            "Jin Wang",
            "Yuheng Jiang",
            "Yueyi Zhang",
            "Xiaoyan Sun"
        ],
        "abstract": "Head pose estimation (HPE) is crucial for various applications, including human-computer interaction, augmented reality, and driver monitoring. However, traditional RGB-based methods struggle in challenging conditions like sudden movement and extreme lighting. Event cameras, as a neuromorphic sensor, have the advantages of high temporal resolution and high dynamic range, offering a promising solution for HPE. However, the lack of paired event and head pose data hinders the full potential of event-based HPE. To address this, we introduce two large-scale, diverse event-based head pose datasets encompassing 282 sequences across different resolutions and scenarios. Furthermore, we propose the event-based HPE network, featuring two novel modules: the Event Spatial-Temporal Fusion (ESTF) module and the Event MotionPerceptual Attention (EMPA) module. The ESTF module effectively combines spatial and temporal information from the event streams, while the EMPA module captures crucial motion details across the scene using a large receptive field. We also propose a unified loss function to optimize the network using both angle and rotation matrix information. Extensive experiments demonstrate the superior performance of our network on both datasets, showcasing its effectiveness in handling HPE across various challenging scenarios. The datasets and code are available at https://github.com/Jiahui-Yuan-1/EVHPE.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-07-14T08:03:49.768271"
        },
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-07-14T08:03:49.373431"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02323.pdf"
        },
        {
            "type": "paper",
            "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02323.pdf"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Jiahui-Yuan-1/EVHPE"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "20",
        "num_subjects": "31",
        "num_recordings": "282"
    },
    "bibtex": {
        "pages": "191--208",
        "year": 2025,
        "editor": "Leonardis, Ale\u0161 and Ricci, Elisa and Roth, Stefan and Russakovsky, Olga and Sattler, Torsten and Varol, G\u00fcl",
        "author": "Yuan, Jiahui and Li, Hebei and Peng, Yansong and Wang, Jin and Jiang, Yuheng and Zhang, Yueyi and Sun, Xiaoyan",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer {Vision} \u2013 {ECCV} 2024",
        "doi": "10.1007/978-3-031-72633-0_11",
        "isbn": "978-3-031-72633-0",
        "title": "Event-{Based} {Head} {Pose} {Estimation}: {Benchmark} and {Method}",
        "address": "Cham",
        "type": "inproceedings",
        "key": "yuan_event-based_2025"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR46437.2021.00753",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.116",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV48630.2021.00123",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01352",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-23123-0_11",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.237",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00420",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP46576.2022.9897219",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2018.2866770",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.288.5469.1189",
            "source": "crossref"
        },
        {
            "doi": "10.24867/JGED-2016-1-005",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EMBC.2019.8857005",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00768",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP49359.2023.10222922",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.241",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG.2017.149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC.2006.1706816",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2021.3081873",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV.2014.54",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.416",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2015.2482819",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC.2007.4357803",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i2.25298",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00555",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2011.2180025",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01216",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.74",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2012.2230553",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2019.05.026",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00055",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00162",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00502",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01432",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00859",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.23",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01081",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains two datasets, one from a Gen4 sensor and one from a DAVIS346 sensor
- Both datasets
  - Contains 20 scenes
  - Contains 31 volunteers
  - Contains 282 sequences
