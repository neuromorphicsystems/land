---
{
    "name": "EventVOT",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Drone Detection",
        "Object Tracking"
    ],
    "task": "Object Tracking",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Baidu",
            "Dropbox"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://www.dropbox.com/scl/fo/fv2e3i0ytrjt14ylz81dx/h?rlkey=6c2wk2z7phmbiwqpfhhe29i5p&dl=0",
                "format": "CSV",
                "available": false
            },
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fo/fv2e3i0ytrjt14ylz81dx/h?rlkey=6c2wk2z7phmbiwqpfhhe29i5p&dl=0",
                "format": "CSV",
                "available": false
            }
        ],
        "size_gb": 249.2,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Event Stream-Based Visual Object Tracking: A High-Resolution Benchmark Dataset and A Novel Baseline",
        "doi": "10.1109/CVPR52733.2024.01821",
        "authors": [
            "Xiao Wang",
            "Shiao Wang",
            "Chuanming Tang",
            "Lin Zhu",
            "Bo Jiang",
            "Yonghong Tian",
            "Jin Tang"
        ],
        "abstract": "Tracking with bio-inspired event cameras has garnered increasing interest in recent years. Existing works either utilize aligned RGB and event data for accurate tracking or directly learn an event-based tracker. The former incurs higher inference costs while the latter may be susceptible to the impact of noisy events or sparse spatial resolution. In this paper, we propose a novel hierarchical knowledge distillation framework that can fully utilize multimodal / multi-view information during training to facilitate knowledge transfer, enabling us to achieve high-speed and low-latency visual tracking during testing by using only event signals. Specifically, a teacher Transformer-based multimodal tracking framework is first trained by feeding the RGB frame and event stream simultaneously. Then, we design a new hierarchical knowledge distillation strategy which includes pairwise similarity, feature representation, and response maps-based knowledge distillation to guide the learning of the student Transformer network. In particular, since existing event-based tracking datasets are all low-resolution (346 \u00d7 260), we propose the first large-scale high-resolution (1280 \u00d7 720) dataset named EventVOT. It contains 1141 videos and covers a wide range of categories such as pedestrians, vehicles, UAVs, ping pong, etc. Ex-tensive experiments on both low-resolution (FE240hz, Vi-sEvent, COESOT), and our newly proposed high-resolution EventVOT dataset fully validated the effectiveness of our proposed method.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 13,
            "updated": "2025-06-16T19:50:17.576866"
        },
        {
            "source": "scholar",
            "count": 52,
            "updated": "2025-06-16T19:50:17.391471"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2309.14611"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10655615"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/EventVOT_Benchmark"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "19",
        "num_recordings": "1141",
        "stereo": false
    },
    "bibtex": {
        "pages": "19248--19257",
        "year": 2024,
        "month": "jun",
        "author": "Wang, Xiao and Wang, Shiao and Tang, Chuanming and Zhu, Lin and Jiang, Bo and Tian, Yonghong and Tang, Jin",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-08",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.01821",
        "url": "https://ieeexplore.ieee.org/document/10655615/",
        "shorttitle": "Event {Stream}-{Based} {Visual} {Object} {Tracking}",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event {Stream}-{Based} {Visual} {Object} {Tracking}: {A} {High}-{Resolution} {Benchmark} {Dataset} and {A} {Novel} {Baseline}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "wang_event_2024-1"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/978-3-319-48881-3_56",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00628",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58592-1_13",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20047-2_22",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3343031.3350975",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2022.05.064",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00803",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00670",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s44267-023-00033-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01324",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr42600.2020.00721",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3077136",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20047-2_9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2019.2950508",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2018.2841516",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01264-9_45",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00935",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00853",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.465",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3127492",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3474085.3475387",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.158",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.2989544",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00162",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00142",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s44267-023-00002-1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/iccv48922.2021.01028",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20047-2_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01280",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00860",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00943",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58589-1_46",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01309",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2022.3177215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr52729.2023.00918",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.02015",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2021.08.025",
            "source": "crossref"
        },
        {
            "title": "Atom: Accurate tracking by overlap max-imization",
            "source": "crossref"
        },
        {
            "title": "Revisiting color-event based tracking: A unified network, dataset, and metric",
            "source": "crossref"
        },
        {
            "title": "Visev-ent: Reliable object tracking via collaboration of frame and event flows",
            "source": "crossref"
        },
        {
            "title": "Learning graph-embedded key-event back-tracing for object tracking in event clouds",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 19 different classes of recording
- Contains 1141 videos.

| **Datasets**   | **Year** | **#Videos** | **#Frames** | **#Class** | **#Att** | **#Resolution** | **Aim**      | **Absent** | **Frame** | **Reality** | **Public** |
| -------------- | -------- | ----------- | ----------- | ---------- | -------- | --------------- | ------------ | ---------- | --------- | ----------- | ---------- |
| VOT-DVS        | 2016     | 60          | N/A         | N/A        | N/A      | 240 × 180       | Eval         | N          | N         | N           | Y          |
| TD-DVS         | 2016     | 77          | N/A         | N/A        | N/A      | 240 × 180       | Eval         | N          | N         | N           | Y          |
| \[[ULSTER]\]   | 2016     | 1           | 9,000       | N/A        | N/A      | 240 × 180       | Eval         | N          | N         | Y           | N          |
| \[[EED]\]      | 2018     | 7           | 234         | N/A        | N/A      | 240 × 180       | Eval         | N          | N         | Y           | Y          |
| \[[FE108]\]    | 2021     | 108         | 208,672     | 21         | 4        | 346 × 260       | Train & Eval | N          | N         | Y           | Y          |
| \[[VisEvent]\] | 2021     | 820         | 371,127     | N/A        | 17       | 346 × 260       | Train & Eval | Y          | Y         | Y           | Y          |
| \[[COESOT]\]   | 2022     | 1354        | 478,721     | 90         | 17       | 346 × 260       | Train & Eval | Y          | Y         | Y           | Y          |
| \[[EventVOT]\] | 2023     | 1141        | 569,359     | 19         | 14       | 1280 x 720      | Train & Eval | Y          | N         | Y           | Y          |
