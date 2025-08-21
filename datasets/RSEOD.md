---
{
    "name": "RSEOD",
    "aliases": [],
    "year": 2025,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Flying",
        "Remote Sensing"
    ],
    "description": "Remote Sensing Dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "No dataset link in the paper or the Github repository",
        "dataset_links": []
    },
    "paper": {
        "title": "ESVT: Event-based Streaming Vision Transformer for Challenging Object Detection",
        "doi": "10.1109/TGRS.2025.3527474",
        "authors": [
            "Shilong Jing",
            "Guangsha Guo",
            "Xianda Xu",
            "Yuchen Zhao",
            "Hechong Wang",
            "Hengyi Lv",
            "Yang Feng",
            "Yisa Zhang"
        ],
        "abstract": "Object detection is a crucial task in the field of remote sensing. Currently, frame-based algorithms have demonstrated impressive performance. However, research on remote sensing applying event cameras has not yet been conducted. Meanwhile, there are still three issues to address: 1) Remote sensing targets are often disrupted by complex backgrounds, resulting in poor detection performance, especially in extremely challenging environments (e.g., low-light, motion blur, and occlusion scenarios). 2) Mainstream deep learning neural networks primarily employ discrete random sampling training strategies, which limits the system to leverage continuous temporal information. 3) The distribution shift problem arising from uneven data in streaming training poses challenges for temporal object detection. In this work, we provide the Remote Sensing Event-based Object Detection Dataset (RSEOD), which is the first remote sensing dataset utilizing event cameras while including various intractable scenarios, providing a novel perspective for object detection in challenging scenarios. Additionally, we innovatively propose an event-based streaming training strategy that utilizes asynchronous event streams to address detection challenges caused by prolonged occlusion and out-of-focus. Moreover, we introduce a reversible normalization criterion (RevNorm) to eliminate non-stationary information in temporal data, proposing a Streaming Bidirectional Feature Pyramid Network (SBFPN) to facilitate recursive data transmission along the temporal dimension. Extensive experiments on the RSEOD Dataset demonstrate that our method achieves 38.1% mAP@0.5:0.95 and 55.8% mAP@0.5, outperforming all other state-of-the-art object detection approaches (e.g., YOLOv8, YOLOv10, YOLOv11, DINO, RTDETR, RTDETRv2, SODFormer). The dataset and code are released at https://github.com/Jushl/ESVT.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-07-12T09:13:42.293972"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-07-12T09:13:42.002087"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10835753"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Jushl/ESVT"
        }
    ],
    "full_name": "Remote Sensing Event-based Object Detection Dataset (RSEOD)",
    "additional_metadata": {
        "num_recordings": "10000",
        "num_classes": "5",
        "stereo": false
    },
    "bibtex": {
        "pages": "1--1",
        "year": 2025,
        "author": "Jing, Shilong and Guo, Guangsha and Xu, Xianda and Zhao, Yuchen and Wang, Hechong and Lv, Hengyi and Feng, Yang and Zhang, Yisa",
        "journal": "IEEE Transactions on Geoscience and Remote Sensing",
        "urldate": "2025-01-14",
        "language": "en",
        "doi": "10.1109/TGRS.2025.3527474",
        "url": "https://ieeexplore.ieee.org/document/10835753/",
        "shorttitle": "{ESVT}",
        "issn": "0196-2892, 1558-0644",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "{ESVT}: {Event}-based {Streaming} {Vision} {Transformer} for {Challenging} {Object} {Detection}",
        "type": "article",
        "key": "jing_esvt_2025"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41586-024-07409-w",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.adi0591",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.adg3679",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.91",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.81",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58452-8_13",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3298925",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01334",
            "source": "crossref"
        },
        {
            "doi": "10.48550/ARXIV.1706.03762",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.00539",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.01605",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2019.00242",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP42928.2021.9506561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TGRS.2024.3487191",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TGRS.2024.3488054",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TGRS.2024.3485682",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TGRS.2024.3424281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TGRS.2023.3270324",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00860",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00935",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2577031",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.1804.02767",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.2209.02976",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3162962",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "A critical review of recurrent neural networks for sequence learning",
            "source": "crossref"
        },
        {
            "title": "Griffin: Mixing gated linear recurrences with local attention for efficient language models",
            "source": "crossref"
        },
        {
            "title": "Encoding recurrence into transformers",
            "source": "crossref"
        },
        {
            "title": "ITransformer: Inverted transformers are effective for time series forecasting",
            "source": "crossref"
        },
        {
            "title": "YOLOv10: Real-time end-to-end object detection",
            "source": "crossref"
        },
        {
            "title": "YOLOv11: An overview of the key architectural enhancements",
            "source": "crossref"
        },
        {
            "title": "DINO: DETR with improved DeNoising anchor boxes for end-to-end object detection",
            "source": "crossref"
        },
        {
            "title": "RT-DETRv2: Improved baseline with Bag-of-Freebies for real-time detection transformer",
            "source": "crossref"
        },
        {
            "title": "A large scale event-based detection dataset for automotive",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "DINO-tracker: Taming DINO for self-supervised point tracking in a single video",
            "source": "crossref"
        },
        {
            "title": "Deformable DETR: Deformable transformers for end-to-end object detection",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains over 10000 streams.
- Contains 5 different classes
