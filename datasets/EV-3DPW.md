---
{
    "name": "EV-3DPW",
    "aliases": [
        "DHP19EPC"
    ],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "ESIM",
        "DVS-Voltmeter"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Human Pose Recognition",
        "Human Action Recognition"
    ],
    "description": "Human pose estimation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "The dataset link provides steps to reproduce the DHP19EPC dataset, and not the EV-3DPW dataset described in the paper.",
        "dataset_links": []
    },
    "paper": {
        "title": "Exploring event-based human pose estimation with 3D event representations",
        "doi": "10.1016/j.cviu.2024.104189",
        "authors": [
            "Xiaoting Yin",
            "Hao Shi",
            "Jiaan Chen",
            "Ze Wang",
            "Yaozu Ye",
            "Kailun Yang",
            "Kaiwei Wang"
        ],
        "abstract": "Human pose estimation is a fundamental and appealing task in computer vision. Although traditional cameras are commonly applied, their reliability decreases in scenarios under high dynamic range or heavy motion blur, where event cameras offer a robust solution. Predominant event-based methods accumulate events into frames, ignoring the asynchronous and high temporal resolution that is crucial for distinguishing distinct actions. To address this issue and to unlock the 3D potential of event information, we introduce two 3D event representations: the Rasterized Event Point Cloud (RasEPC) and the Decoupled Event Voxel (DEV). The RasEPC aggregates events within concise temporal slices at identical positions, preserving their 3D attributes along with statistical information, thereby significantly reducing memory and computational demands. Meanwhile, the DEV representation discretizes events into voxels and projects them across three orthogonal planes, utilizing decoupled event attention to retrieve 3D cues from the 2D planes. Furthermore, we develop and release EV-3DPW, a synthetic event-based dataset crafted to facilitate training and quantitative analysis in outdoor scenes. Our methods are tested on the DHP19 public dataset, MMHPSD dataset, and our EV-3DPW dataset, with further qualitative validation via a derived driving scene dataset EV-JAAD and an outdoor collection vehicle. Our code and dataset have been made publicly available at https://github.com/MasterHow/EventPointPose.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-06-03T12:04:28.204208"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2311.04591"
        },
        {
            "type": "paper",
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S1077314224002704?via%3Dihub"
        },
        {
            "type": "github_page",
            "url": "https://github.com/MasterHow/EventPointPose"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "3DPW dataset",
        "sensor_resolution": "346 x 260",
        "stereo": false
    },
    "bibtex": {
        "pages": "104189",
        "year": 2024,
        "month": "dec",
        "author": "Yin, Xiaoting and Shi, Hao and Chen, Jiaan and Wang, Ze and Ye, Yaozu and Yang, Kailun and Wang, Kaiwei",
        "journal": "Computer Vision and Image Understanding",
        "urldate": "2024-10-13",
        "language": "en",
        "doi": "10.1016/j.cviu.2024.104189",
        "url": "https://linkinghub.elsevier.com/retrieve/pii/S1077314224002704",
        "issn": "10773142",
        "volume": "249",
        "title": "Exploring event-based human pose estimation with {3D} event representations",
        "type": "article",
        "key": "Yin2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2022.3172212",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC.2019.8917118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS45731.2020.9181247",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV57658.2022.00023",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV48630.2021.00360",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00798",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01444",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV50981.2020.00063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00890",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3524497",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2015.7353481",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.609",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2017.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00150",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2023.110048",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00810",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00855",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.214",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01249-6_37",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3326362",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2019.00199",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.511",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3377325.3377505",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WF-IoT48130.2020.9221355",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_29",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3140819",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00502",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.12328",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2020.2990082",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2021.3134828",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00363",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01595",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCP51581.2021.9466265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01081",
            "source": "crossref"
        },
        {
            "title": "Time-ordered recent event (TORE) volumes for event cameras",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "DVS-voltmeter: Stochastic process-based event simulator for dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "Recent advances of monocular 2d and 3d human pose estimation: a deep learning perspective",
            "source": "crossref"
        },
        {
            "title": "Voxel-based multi-scale transformer network for event stream processing",
            "source": "crossref"
        },
        {
            "title": "A temporal densely connected recurrent network for event-based human pose estimation",
            "source": "crossref"
        },
        {
            "title": "Dynamic graph CNN for learning on point clouds",
            "source": "crossref"
        },
        {
            "title": "VMV-GCN: Volumetric multi-view based graph CNN for event stream classification",
            "source": "crossref"
        },
        {
            "title": "Hierarchical soft quantization for skeleton-based human action recognition",
            "source": "crossref"
        },
        {
            "title": "Exploring event-driven dynamic context for accident scene segmentation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- The EV-3DPW dataset is a converted version of the 3DPW dataset. The dataset is cropped and converted to a resolution of 346 x 260 pixels, to simulate the output of a DAVIS346.
- The steps to produce the DHP19 dataset used in this paper can be found at https://github.com/MasterHow/EventPointPose/blob/main/DHP19EPC/DHP19EPC.md.
-
- Also produced the EV-JAAD dataset (derived from the driving scene dataset JAAD)
