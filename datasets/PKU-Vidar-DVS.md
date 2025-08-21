---
{
    "name": "PKU-Vidar-DVS",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Detection",
        "Beamsplitters",
        "High-Speed Video Reconstruction",
        "Low Light Reconstruction"
    ],
    "description": "Object detection",
    "dataset_properties": {
        "available_online": false,
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
                "url": "https://git.openi.org.cn/lijianing/PKU-Vidar-DVS/datasets",
                "format": "aedat",
                "available": false
            }
        ],
        "size_gb": 249.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Retinomorphic Object Detection in Asynchronous Visual Streams",
        "doi": "10.1609/aaai.v36i2.20021",
        "authors": [
            "Jianing Li",
            "Xiao Wang",
            "Lin Zhu",
            "Jia Li",
            "Tiejun Huang",
            "Yonghong Tian"
        ],
        "abstract": "Due to high-speed motion blur and challenging illumination, conventional frame-based cameras have encountered an important challenge in object detection tasks. Neuromorphic cameras that output asynchronous visual streams instead of intensity frames, by taking the advantage of high temporal resolution and high dynamic range, have brought a new perspective to address the challenge. In this paper, we propose a novel problem setting, retinomorphic object detection, which is the first trial that integrates foveal-like and peripheral-like visual streams. Technically, we first build a large-scale multimodal neuromorphic object detection dataset (i.e., PKU-Vidar-DVS) over 215.5k spatio-temporal synchronized labels. Then, we design temporal aggregation representations to preserve the spatio-temporal information from asynchronous visual streams. Finally, we present a novel bio-inspired unifying framework to fuse two sensing modalities via a dynamic interaction mechanism. Our experimental evaluation shows that our approach has significant improvements over the state-of-the-art methods with the single-modality, especially in high-speed motion and low-light scenarios. We hope that our work will attract further research into this newly identified, yet crucial research direction. Our dataset can be available at https://www.pkuml.org/resources/pku-vidar-dvs.html.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 11,
            "updated": "2025-06-29T07:49:37.051185"
        },
        {
            "source": "scholar",
            "count": 23,
            "updated": "2025-06-29T07:49:36.622841"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://cdn.aaai.org/ojs/20021/20021-13-24034-1-2-20220628.pdf"
        },
        {
            "type": "paper",
            "url": "https://ojs.aaai.org/index.php/AAAI/article/view/20021"
        },
        {
            "type": "project_page",
            "url": "http://lspkuml.pkuml.org/resources/pku-vidar-dvs.html"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "9",
        "num_recordings": "490",
        "average_duration": "5",
        "stereo": false
    },
    "bibtex": {
        "pages": "1332--1340",
        "year": 2022,
        "month": "jun",
        "author": "Li, Jianing and Wang, Xiao and Zhu, Lin and Li, Jia and Huang, Tiejun and Tian, Yonghong",
        "journal": "Proceedings of the AAAI Conference on Artificial Intelligence",
        "urldate": "2024-12-15",
        "number": "2",
        "language": "en",
        "doi": "10.1609/aaai.v36i2.20021",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/20021",
        "issn": "2374-3468, 2159-5399",
        "volume": "36",
        "title": "Retinomorphic {Object} {Detection} in {Asynchronous} {Visual} {Streams}",
        "type": "article",
        "key": "li_retinomorphic_2022"
    },
    "referenced_papers": []
}
---

### Dataset Structure

The PKU-Vidar-DVS dataset contains 9 indoor and outdoor challenging scenarios by considering velocity distribution, illumination change, category diversity, and object scale, etc.

A hybrid camera system was used to record 490 sequences including Vidar spikes and DVS events. In each sequence, approximately 5 seconds of data were acquired/

To provide bounding boxes from asynchronous visual streams, frames are reconstructed from Vidar spikes at 50 FPS. After spatio-temporal calibration, all labels are provided by a well-trained professional annotation team.
