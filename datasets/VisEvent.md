---
{
    "name": "VisEvent",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Tracking",
        "Object Detection",
        "Object Classification",
        "Drone Detection"
    ],
    "description": "Object Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Baidu",
            "Dropbox"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Google Drive and OneDrive links no longer work for download",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1VhdORXT4OvG8TUESfDZHfw?pwd=AHUE",
                "format": "aedat",
                "available": true
            },
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fo/r406wsgll56fy0hhhwu62/AFo3cjXjSI4Dzjn5nlnXNW0?rlkey=ecgyd26j1ycfl1jbm4pwc3vbn&st=rzf95buf&dl=0",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 216.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "VisEvent: Reliable Object Tracking via Collaboration of Frame and Event Flows",
        "doi": "10.1109/TCYB.2023.3318601",
        "authors": [
            "Xiao Wang",
            "Jianing Li",
            "Lin Zhu",
            "Zhipeng Zhang",
            "Zhe Chen",
            "Xin Li",
            "Yaowei Wang",
            "Yonghong Tian",
            "Feng Wu"
        ],
        "abstract": "Different from visible cameras which record intensity images frame by frame, the biologically inspired event camera produces a stream of asynchronous and sparse events with much lower latency. In practice, visible cameras can better perceive texture details and slow motion, while event cameras can be free from motion blurs and have a larger dynamic range which enables them to work well under fast motion and low illumination (LI). Therefore, the two sensors can cooperate with each other to achieve more reliable object tracking. In this work, we propose a large-scale Visible-Event benchmark (termed VisEvent) due to the lack of a realistic and scaled dataset for this task. Our dataset consists of 820 video pairs captured under LI, high speed, and background clutter scenarios, and it is divided into a training and a testing subset, each of which contains 500 and 320 videos, respectively. Based on VisEvent, we transform the event flows into event images and construct more than 30 baseline methods by extending current single-modality trackers into dual-modality versions. More importantly, we further build a simple but effective tracking algorithm by proposing a cross-modality transformer, to achieve more effective feature fusion between visible and event data. Extensive experiments on the proposed VisEvent dataset, FE108, COESOT, and two simulated datasets (i.e., OTB-DVS and VOT-DVS), validated the effectiveness of our model. The dataset and source code have been released on: https://github.com/wangxiao5791509/VisEvent\\_SOT\\_Benchmark .",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 50,
            "updated": "2025-06-30T11:00:12.290169"
        },
        {
            "source": "scholar",
            "count": 152,
            "updated": "2025-06-30T11:00:11.586994"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2108.05015"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10284004"
        },
        {
            "type": "github_page",
            "url": "https://github.com/wangxiao5791509/VisEvent_SOT_Benchmark"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "820",
        "num_categories": "17"
    },
    "bibtex": {
        "pages": "1997--2010",
        "year": 2024,
        "month": "mar",
        "author": "Wang, Xiao and Li, Jianing and Zhu, Lin and Zhang, Zhipeng and Chen, Zhe and Li, Xin and Wang, Yaowei and Tian, Yonghong and Wu, Feng",
        "journal": "IEEE Transactions on Cybernetics",
        "urldate": "2024-04-13",
        "number": "3",
        "language": "en",
        "doi": "10.1109/TCYB.2023.3318601",
        "url": "https://ieeexplore.ieee.org/document/10284004/",
        "shorttitle": "{VisEvent}",
        "issn": "2168-2267, 2168-2275",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "54",
        "title": "{VisEvent}: {Reliable} {Object} {Tracking} via {Collaboration} of {Frame} and {Event} {Flows}",
        "type": "article",
        "key": "wang_visevent_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICCV48922.2021.01309",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01355",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2021.3083933",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2021.3056684",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58565-5_23",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3127492",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01261-8_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3208437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6625",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2020.3044287",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2759326",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3343031.3350975",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2018.2841516",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01280",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.465",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01225-0_6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00479",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19803-8_43",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00803",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2019.2895962",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2019.2905984",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2017.8296605",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCYB.2019.2936503",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCYB.2018.2886580",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCYB.2018.2884007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2021.3103063",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2020.09.011",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.knosys.2018.12.011",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2956703",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3041332",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2019.2898567",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2019.2959256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCYB.2022.3189688",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tcyb.2023.3238170",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00511",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00937",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00521-015-1848-5",
            "source": "crossref"
        },
        {
            "doi": "10.1049/trit.2019.0107",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00943",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41467-022-30964-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00441",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00628",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00860",
            "source": "crossref"
        },
        {
            "doi": "10.48550/ARXIV.1706.03762",
            "source": "crossref"
        },
        {
            "doi": "10.18653/v1/D19-1514",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00813",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2957464",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01219-9_35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00279",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2014.2345390",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00515",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2010.5539960",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-33765-9_50",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298823",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v33i01.33018666",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-48881-3_56",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6944",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00935",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00721",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00661",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58589-1_46",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00472",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58592-1_13",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00670",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20047-2_33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01028",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01324",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2014.2388226",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00276",
            "source": "crossref"
        },
        {
            "title": "DashNet: A hybrid artificial and spiking neural network for high-speed object tracking",
            "source": "crossref"
        },
        {
            "title": "Effects of blur and deblurring to visual object tracking",
            "source": "crossref"
        },
        {
            "title": "Long-term object tracking with a moving event camera",
            "source": "crossref"
        },
        {
            "title": "High-speed event camera tracking",
            "source": "crossref"
        },
        {
            "title": "HASTE: Multi-hypothesis asynchronous speeded-up tracking of events",
            "source": "crossref"
        },
        {
            "title": "Learning graph-embedded key-event back-tracing for object tracking in event clouds",
            "source": "crossref"
        },
        {
            "title": "Revisiting color-event based tracking: A unified network, dataset, and metric",
            "source": "crossref"
        },
        {
            "title": "ImageNet classification with deep convolutional neural networks",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 820 recordings
- Contains 17 different types of recordings

### Comparison Table

The following table was extracted from the paper:

| Datasets                       | Year | No. Videos | No. Frames | Resolution | N0. Attributes | Aim        |
| ------------------------------ | ---- | ---------- | ---------- | ---------- | -------------- | ---------- |
| \[[VOT-DVS]\] (\[[DVSACT16]\]) | 2016 | 60         |            | 240 × 180  |                | Eval       |
| \[[TD-DVS]\] (\[[DVSACT16]\])  | 2016 |            |            | 240 × 180  |                | Eval       |
| \[[ULSTER]\]                   | 2016 | 1          |            | 240 × 180  |                | Eval       |
| \[[EED]\]                      | 2018 | 7          |            | 240 × 180  |                | Eval       |
| \[[FE108]\]                    | 2021 | 108        | 208,672    | 346 × 260  |                | Train/Eval |
| VisEvent                       | 2023 | 820        | 371,127    | 346 × 260  | 17             | Train/Eval |
