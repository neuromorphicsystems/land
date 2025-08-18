---
{
    "name": "PokerEvent",
    "aliases": [],
    "year": 2025,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Object Classification"
    ],
    "task": "Object Classification",
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
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1vQnHZUqQ1o58SajvtE-uHw?pwd=AHUE",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fo/w658kwhfi3qa8naul3eeb/h?rlkey=zjn4b69wa1e3mhid8p6hh8v75&dl=0",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 178.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "SSTFormer: Bridging Spiking Neural Network and Memory Support Transformer for Frame-Event based Recognition",
        "doi": "10.1109/TCDS.2025.3568833",
        "authors": [
            "Xiao Wang",
            "Yao Rong",
            "Zongzhen Wu",
            "Lin Zhu",
            "Bo Jiang",
            "Jin Tang",
            "Yonghong Tian"
        ],
        "abstract": "Event camera-based pattern recognition is a newly arising research topic in recent years. Current researchers usually transform the event streams into images, graphs, or voxels, and adopt deep neural networks for event-based classification. Although good performance can be achieved on simple event recognition datasets, however, their results may be still limited due to the following two issues. Firstly, they adopt spatial sparse event streams for recognition only, which may fail to capture the color and detailed texture information well. Secondly, they adopt either Spiking Neural Networks (SNN) for energy-efficient recognition with suboptimal results, or Artificial Neural Networks (ANN) for energy-intensive, high-performance recognition. However, seldom of them consider achieving a balance between these two aspects. In this paper, we formally propose to recognize patterns by fusing RGB frames and event streams simultaneously and propose a new RGB frame-event recognition framework to address the aforementioned issues. The proposed method contains four main modules, i.e., memory support Transformer network for RGB frame encoding, spiking neural network for raw event stream encoding, multi-modal bottleneck fusion module for RGB-Event feature aggregation, and prediction head. Due to the scarce of RGB-Event based classification dataset, we also propose a large-scale PokerEvent dataset which contains 114 classes, and 27102 frame-event pairs recorded using a DVS346 event camera. Extensive experiments on two RGB-Event based classification datasets fully validated the effectiveness of our proposed framework. We hope this work will boost the development of pattern recognition by fusing RGB frames and event streams. Both our dataset and source code of this work will be released at https://github.com/Event-AHU/SSTFormer.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 2,
            "updated": "2025-06-10T10:48:53.345564"
        },
        {
            "source": "scholar",
            "count": 25,
            "updated": "2025-06-10T10:48:53.053427"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2308.04369"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/11000281"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/SSTFormer"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "114",
        "stereo": false
    },
    "bibtex": {
        "url": "https://arxiv.org/abs/2308.04369",
        "primaryclass": "cs.CV",
        "archiveprefix": "arXiv",
        "eprint": "2308.04369",
        "year": 2024,
        "author": "Xiao Wang and Zongzhen Wu and Yao Rong and Lin Zhu and Bo Jiang and Jin Tang and Yonghong Tian",
        "title": "SSTFormer: Bridging Spiking Neural Network and Memory Support Transformer for Frame-Event based Recognition",
        "type": "misc",
        "key": "wang2024sstformerbridgingspikingneural"
    },
    "referenced_papers": []
}
---

### Dataset Structure

- Contains 114 classes
-
