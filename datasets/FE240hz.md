---
{
    "name": "FE240hz",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Object Tracking"
    ],
    "task": "Object Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Baidu",
            "OneDrive"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://1drv.ms/u/s!AoopRFuuZ7xohQQXwMMykKC592mq?e=1mtVeU",
                "format": "aedat",
                "available": true
            },
            {
                "name": "OneDrive",
                "url": "https://1drv.ms/u/s!AoopRFuuZ7xohQQXwMMykKC592mq?e=1mtVeU",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 34.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Object Tracking by Jointly Exploiting Frame and Event Domain",
        "doi": "10.1109/ICCV48922.2021.01280",
        "authors": [
            "Jiqing Zhang",
            "Xin Yang",
            "Yingkai Fu",
            "Xiaopeng Wei",
            "Baocai Yin",
            "Bo Dong"
        ],
        "abstract": "Inspired by the complementarity between conventional frame-based and bio-inspired event-based cameras, we propose a multi-modal based approach to fuse visual cues from the frame- and event-domain to enhance the single object tracking performance, especially in degraded conditions (e.g., scenes with high dynamic range, low light, and fastmotion objects). The proposed approach can effectively and adaptively combine meaningful information from both domains. Our approach\u2019s effectiveness is enforced by a novel designed cross-domain attention schemes, which can effectively enhance features based on self- and cross-domain attention schemes; The adaptiveness is guarded by a specially designed weighting scheme, which can adaptively balance the contribution of the two domains. To exploit event-based visual cues in single-object tracking, we construct a largescale frame-event-based dataset, which we subsequently employ to train a novel frame-event fusion based model. Extensive experiments show that the proposed approach outperforms state-of-the-art frame-based tracking methods by at least 10.4\\% and 11.9\\% in terms of representative success rate and precision rate, respectively. Besides, the effectiveness of each key component of our approach is evidenced by our thorough ablation study.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 73,
            "updated": "2025-06-08T13:11:44.525534"
        },
        {
            "source": "scholar",
            "count": 121,
            "updated": "2025-06-08T13:11:43.692266"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2109.09052"
        },
        {
            "type": "paper",
            "url": "https://www.computer.org/csdl/proceedings-article/iccv/2021/281200n3023/1BmG5DYE4p2"
        },
        {
            "type": "project_page",
            "url": "https://zhangjiqing.com/dataset/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "50"
    },
    "connected_datasets": [
        "FE108"
    ],
    "bibtex": {
        "pages": "13023--13032",
        "year": 2021,
        "month": "oct",
        "author": "Zhang, Jiqing and Yang, Xin and Fu, Yingkai and Wei, Xiaopeng and Yin, Baocai and Dong, Bo",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{CVF} {International} {Conference} on {Computer} {Vision} ({ICCV})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/ICCV48922.2021.01280",
        "url": "https://ieeexplore.ieee.org/document/9710163/",
        "isbn": "978-1-66542-812-5",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Object {Tracking} by {Jointly} {Exploiting} {Frame} and {Event} {Domain}",
        "address": "Montreal, QC, Canada",
        "type": "inproceedings",
        "key": "Zhang2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPRW.2012.6238892",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00306",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00279",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00626",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.465",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS40897.2019.8968520",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00935",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.12307",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01261-8_49",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00630",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3343031.3350928",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00670",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00480",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.733",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00721",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58565-5_23",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00741",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593380",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00628",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.29.145",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6625",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00371-021-02237-9",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6944",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00709",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2013.36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3054886",
            "source": "crossref"
        },
        {
            "title": "Pytorch: An imperative style, high-performance deep learning library",
            "source": "crossref"
        },
        {
            "title": "Event-based asynchronous sparse convolutional networks",
            "source": "crossref"
        },
        {
            "title": "Robust collaborative discriminative learning for rgb-infrared tracking",
            "source": "crossref"
        },
        {
            "title": "Online rgb-d tracking via detection-learning-segmentation",
            "source": "crossref"
        },
        {
            "title": "Vicon motion capture",
            "source": "crossref"
        },
        {
            "title": "How to make an rgbd tracker?",
            "source": "crossref"
        },
        {
            "title": "Acquisition of localization confidence for accurate object detection",
            "source": "crossref"
        },
        {
            "title": "Hots: a hierarchy of event-based time-surfaces for pattern recognition",
            "source": "crossref"
        },
        {
            "title": "The visual object tracking vot2015 challenge results",
            "source": "crossref"
        },
        {
            "title": "Real-time visual-inertial odometry for event cameras using keyframe-based nonlinear optimization",
            "source": "crossref"
        },
        {
            "title": "Atom: Accurate tracking by overlap max-imization",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "Fully-convolutional siamese networks for object tracking",
            "source": "crossref"
        },
        {
            "title": "Know your surroundings: Exploiting scene information for object tracking",
            "source": "crossref"
        },
        {
            "title": "Deeper and wider siamese networks for real-time visual tracking",
            "source": "crossref"
        },
        {
            "title": "Multi-domain collaborative feature representation for robust visual object tracking",
            "source": "crossref"
        },
        {
            "title": "Learning multi-task correlation particle filters for visual tracking",
            "source": "crossref"
        },
        {
            "title": "Multi-modal fusion for end-to-end rgb-t tracking",
            "source": "crossref"
        },
        {
            "title": "Robust fusion of color and depth data for rgb-d target tracking using adaptive range-invariant depth models and spatio-temporal consistency constraints",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- The FE240hz dataset is an extension of the \[[FE108]\] dataset
- 50 classes

Training dataset (21 Gb):
https://1drv.ms/u/s!AoopRFuuZ7xogQuDIXSnSJf1NEBU?e=bwEVAA

Testing dataset (13 Gb)
https://1drv.ms/u/s!AoopRFuuZ7xogQhvXQrRl2m2b86S?e=gb1l9G

21 class original dataset: (train and test) dataset:
http://fe108.dluticcd.com/%C2%A0https://1drv.ms/u/s!AoopRFuuZ7xohQQXwMMykKC592mq?e=1mtVeU
