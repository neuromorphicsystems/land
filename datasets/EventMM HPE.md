---
{
    "name": "EventMM HPE",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "Vicon",
        "LUCID ATLAS10"
    ],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Pose Recognition"
    ],
    "task": "Human pose estimation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "No dataset link in the paper or the Github repository",
        "dataset_links": []
    },
    "paper": {
        "title": "Adaptive Vision Transformer for Event-Based Human Pose Estimation",
        "doi": "10.1145/3664647.3681401",
        "authors": [
            "Nannan Yu",
            "Tao Ma",
            "Jiqing Zhang",
            "Yuji Zhang",
            "Qirui Bao",
            "Xiaopeng Wei",
            "Xin Yang"
        ],
        "abstract": "Event-based human pose estimation has gained popularity due to the benefits of high temporal resolution and high dynamic range offered by event cameras. The inherent spatial sparsity of event data makes discarding less significant regions a straightforward and effective way to decrease the computation. However, implementing this operation in CNNs poses a challenge, as it disrupts the regularity of dense convolutional workload. In this paper, we propose an adaptive vision transformer, a novel efficient backbone for human pose estimation with event cameras. Specifically, we present two adaptive patch and token sampling approaches based on the characteristics of events, thereby reducing the computational load while still achieving comparable performance. Firstly, we design an adaptive patch sampling scheme to eliminate inactivity patches by assessing the entropy of the events before they are inputted into the transformer. Secondly, we further propose an adaptive token reduction strategy to selectively remove less informative tokens in transformer layers through a dynamic token pruning algorithm. To exploit event-based visual cues in human pose estimation tasks, we construct a large-scale frame-event-based dataset, dubbed Event Multi Movement HPE (EventMM HPE). The dataset provides annotation frequencies up to 240 Hz. Extensive experiments demonstrate that our proposed approach outperforms existing state-of-the-art methods in estimation accuracy. The source code and dataset are available at https://github.com/doublemanyu/Adaptive-Vision-Transformer-for-Event-Based-HPE.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-07-12T09:33:29.999100"
        },
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-07-12T09:33:29.703392"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/10.1145/3664647.3681401"
        },
        {
            "type": "github_page",
            "url": "https://github.com/doublemanyu/Adaptive-Vision-Transformer-for-Event-Based-Human-Pose-Estimation"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "76",
        "num_subjects": "7",
        "num_classes": "21",
        "stereo": false
    },
    "bibtex": {
        "pages": "2833--2841",
        "year": 2024,
        "month": "oct",
        "author": "Yu, Nannan and Ma, Tao and Zhang, Jiqing and Zhang, Yuji and Bao, Qirui and Wei, Xiaopeng and Yang, Xin",
        "publisher": "ACM",
        "booktitle": "Proceedings of the 32nd {ACM} {International} {Conference} on {Multimedia}",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1145/3664647.3681401",
        "url": "https://dl.acm.org/doi/10.1145/3664647.3681401",
        "isbn": "9798400706868",
        "title": "Adaptive {Vision} {Transformer} for {Event}-{Based} {Human} {Pose} {Estimation}",
        "address": "Melbourne VIC Australia",
        "type": "inproceedings",
        "key": "yu_adaptive_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00742",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00543",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV57658.2022.00023",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2023.3326683",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3300741",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01334",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11704-019-8266-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01112",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00198",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01112",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/240",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01216",
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
            "doi": "10.1007/s44267-023-00020-z",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3220938",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_29",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01159",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-023-01959-8",
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
            "doi": "10.1109/ICCV.1999.791289",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01081",
            "source": "crossref"
        },
        {
            "title": "Vitpose: Simple vision transformer baselines for human pose estimation",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

	The EventMM HPE dataset is recorded by the Prophesee EVK3 GEN4.1 event camera, with a 1280×720 pixels dynamic vision sensor (DVS). The simultaneous RGB images are recorded by a high-frame-rate camera LUCID ATLAS10 at 120FPS. The Vicon motion capture system with a high sampling rate (up to 330Hz) and sub-millimeter precision, records the 3D coordinates of the subject’s 17 marked joints, which are identified by markers located on the head, neck, spine, left/right shoulders and left/right feet. The synchronization method for all three devices is the same as in DHP19

- Contains 76 recordings from 7 subjects
- Contains 21 different classes


### Dataset Comparison

| Dataset         | Actions | Scenes  | Resolution | Frames | Annotation rate |
| --------------- | ------- | ------- | ---------- | ------ | --------------- |
| [[DHP19]]       | 33      | Indoor  | 344X260    | 87k    | 100Hz           |
| [[EventHPE]]    | 12      | Indoor  | 1280x800   | 240k   | 15Hz            |
| [[CDEHP]]       | 25      | Outdoor | 1280x800   | 82k    | 60Hz            |
| [[EventMM HPE]] | 21      | Indoor  | 1280X720   | 1,296k | 240Hz           |