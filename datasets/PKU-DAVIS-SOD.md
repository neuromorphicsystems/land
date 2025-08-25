---
{
    "name": "PKU-DAVIS-SOD",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Pedestrian Detection",
        "Object Detection",
        "Vehicle Detection",
        "Event Frame Fusion"
    ],
    "description": "Multimodal object detection dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://git.openi.org.cn/LiDianze/PKU-DAVIS-SOD/datasets",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 84.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "SODFormer -  Streaming Object Detection with Transformer Using Events and Frames",
        "doi": "10.1109/TPAMI.2023.3298925",
        "authors": [
            "Dianze Li",
            "Yonghong Tian",
            "Jianing Li"
        ],
        "abstract": "DAVIS camera, streaming two complementary sensing modalities of asynchronous events and frames, has gradually been used to address major object detection challenges (e.g., fast motion blur and low-light). However, how to effectively leverage rich temporal cues and fuse two heterogeneous visual streams remains a challenging endeavor. To address this challenge, we propose a novel streaming object detector with Transformer, namely SODFormer, which first integrates events and frames to continuously detect objects in an asynchronous manner. Technically, we first build a large-scale multimodal neuromorphic object detection dataset (i.e., PKU-DAVIS-SOD) over 1080.1 k manual labels. Then, we design a spatiotemporal Transformer architecture to detect objects via an end-to-end sequence prediction problem, where the novel temporal Transformer module leverages rich temporal cues from two visual streams to improve the detection performance. Finally, an asynchronous attention-based fusion module is proposed to integrate two heterogeneous sensing modalities and take complementary advantages from each end, which can be queried at any time to locate objects and break through the limited output frequency from synchronized frame-based fusion strategies. The results show that the proposed SODFormer outperforms four state-of-the-art methods and our eight baselines by a significant margin. We also show that our unifying framework works well even in cases where the conventional frame-based camera fails, e.g., high-speed motion and low-light conditions. Our dataset and code can be available at https://github.com/dianzl/SODFormer",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 5,
            "updated": "2024-10-26 12:52:38.763105"
        },
        {
            "source": "scholar",
            "count": 37,
            "updated": "2025-06-21T18:04:02.121295"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2308.04047"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10195232"
        },
        {
            "type": "project_page",
            "url": "https://www.pkuml.org/research/pku-davis-sod-dataset.html"
        },
        {
            "type": "github_page",
            "url": "https://github.com/dianzl/SODFormer"
        }
    ],
    "full_name": "PKU DAVIS Stream Object Detector (SOD)",
    "additional_metadata": {
        "num_recordings": "220",
        "num_classes": "3",
        "stereo": false
    },
    "bibtex": {
        "pages": "14020--14037",
        "year": 2023,
        "month": "nov",
        "author": "Li, Dianze and Tian, Yonghong and Li, Jianing",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-12-11",
        "number": "11",
        "language": "en",
        "doi": "10.1109/TPAMI.2023.3298925",
        "url": "https://ieeexplore.ieee.org/document/10195232/",
        "shorttitle": "{SODFormer}",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "45",
        "title": "{SODFormer}: {Streaming} {Object} {Detection} {With} {Transformer} {Using} {Events} and {Frames}",
        "type": "article",
        "key": "li_sodformer_2023"
    }
}
---

### Dataset Structure

- Contains 220 recordings
- Contains 3 different types of labelled objects

### Comparison Table

| Dataset                      | Year | Venue | Resolution | Modality       | Classes | Boxes   | Label  | Frequency | High-speed | Low-light |
| ---------------------------- | ---- | ----- | ---------- | -------------- | ------- | ------- | ------ | --------- | ---------- | --------- |
| PKU-DDD17-CAR                | 2019 | ICME  | 346×260    | Events, Frames | 1       | 3155    | Manual | 1 Hz      | N          | Y         |
| \[[Jiang2019]\]              | 2019 | ICRA  | 240x180    | Events, Frames | 1       | 9203    | Manual | 1 Hz      | N          | N         |
| \[[Chen2019]\]               | 2019 | FNR   | 240x180    | Events         | 1       | 28109   | Manual | 1 Hz      | N          | N         |
| \[[ADD]\]                    | 2020 | arXiv | 304X240    | Events         | 2       | 255k    | Pseudo | 1, 4 Hz   | N          | Y         |
| \[[1Mpx Detection Dataset]\] | 2020 | NIPS  | 1280×720   | Events         | 3       | 25M     | Pseudo | 60 Hz     | N          | Y         |
| DAD                          | 2021 | ICIP  | 346×260    | Events, Frames | 1       | 6427    | Manual | 1 Hz      | N          | Y         |
| \[[PKU-DAVIS-SOD]\]          | 2022 | Ours  | 346×260    | Events, Frames | 3       | 1080.1k | Manual | 25 Hz     | Y          | Y         |
