---
{
    "name": "BlinkFlow",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Custom Simulator"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Optical Flow"
    ],
    "task": "Optical Flow",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "HuggingFace"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "HuggingFace",
                "url": "https://huggingface.co/datasets/BlinkVision/BlinkVision_train/tree/main",
                "format": "Unknown",
                "available": true
            }
        ],
        "size_gb": 1635.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "BlinkFlow: A Dataset to Push the Limits of Event-Based Optical Flow Estimation",
        "doi": "10.1109/IROS55552.2023.10341802",
        "authors": [
            "Yijin Li",
            "Zhaoyang Huang",
            "Shuo Chen",
            "Xiaoyu Shi",
            "Hongsheng Li",
            "Hujun Bao",
            "Zhaopeng Cui",
            "Guofeng Zhang"
        ],
        "abstract": "Event cameras provide high temporal precision, low data rates, and high dynamic range visual perception, which are well-suited for optical flow estimation. While data-driven optical flow estimation has obtained great success in RGB cameras, its generalization performance is seriously hindered in event cameras mainly due to the limited and biased training data. In this paper, we present a novel simulator, BlinkSim, for the fast generation of large-scale data for event-based optical flow. BlinkSim incorporates a configurable rendering engine alongside an event simulation suite. By leveraging the wealth of current 3D assets, the rendering engine enables us to automatically build up thousands of scenes with different objects, textures, and motion patterns and render very high-frequency images for realistic event data simulation. Based on BlinkSim, we construct a large training dataset and evaluation benchmark BlinkFlow that contains sufficient, diversiform, and challenging event data with optical flow ground truth. Experiments show that BlinkFlow improves the generalization performance of state-of-the-art methods by more than 40% on average and up to 90%. Moreover, we further propose an Event-based optical Flow transFormer (E-FlowFormer) architecture. Powered by our BlinkFlow, E-FlowFormer outperforms the SOTA methods by up to 91% on the MVSEC dataset and 14% on the DSEC dataset and presents the best generalization performance. The source code and data are available at https://zju3dv.github.io/blinkflow/.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 11,
            "updated": "2025-06-15T09:11:09.916705"
        },
        {
            "source": "scholar",
            "count": 42,
            "updated": "2025-06-15T09:11:09.775274"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2303.07716"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10341802/"
        },
        {
            "type": "project_page",
            "url": "https://zju3dv.github.io/blinkflow/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/eugenelyj/blinkvision_benchmark"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "3881--3888",
        "keywords": "Cameras, Benchmark testing, Estimation, Rendering (computer graphics), Training, Training data, Transformers",
        "year": 2023,
        "author": "Li, Yijin and Huang, Zhaoyang and Chen, Shuo and Shi, Xiaoyu and Li, Hongsheng and Bao, Hujun and Cui, Zhaopeng and Zhang, Guofeng",
        "booktitle": "2023 {IEEE}/{RSJ} {International} {Conference} on {Intelligent} {Robots} and {Systems} ({IROS})",
        "doi": "10.1109/IROS55552.2023.10341802",
        "title": "{BlinkFlow}: {A} {Dataset} to {Push} the {Limits} of {Event}-{Based} {Optical} {Flow} {Estimation}",
        "type": "inproceedings",
        "key": "li_blinkflow_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2020.2986748",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2023.1160034",
            "source": "crossref"
        },
        {
            "doi": "10.21105/joss.04901",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i1.19931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.316",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9811809",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
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
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19790-1_40",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0097-8493(00)00130-8",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58526-6_22",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19769-7_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00097",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_34",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.438",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00048",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01705",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00176",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00160",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3048875",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58536-5_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341801",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.544",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.15607/rss.2018.xiv.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "title": "Context-TAP: Tracking Any Point Demands Spatial Context Features",
            "source": "crossref"
        },
        {
            "title": "ShapeNet: An Information-rich 3D Model Repository",
            "source": "crossref"
        },
        {
            "title": "Twins: Revisiting the Design of Spatial Attention in Vision Transformers",
            "source": "crossref"
        },
        {
            "title": "Adaptive Time-Slice Block-Matching Optical Flow Algorithm for Dynamic Vision Sensors",
            "source": "crossref"
        },
        {
            "title": "ESIM: An Open Event Camera Simulator",
            "source": "crossref"
        },
        {
            "title": "Videoflow: Exploiting Temporal Cues for Multi-frame Optical Flow Estimation",
            "source": "crossref"
        },
        {
            "title": "Attention is all you need",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure

The paper and associates project page provide the code for a simulator that generates the data. The paper also introduces a benchmark dataset. https://www.blinkvision.org/download.html, which includes a dataset that can be downloaded.

### Comparison Table

| **Dataset**     | **Motion Pattern** | **Dynamic Object** | **Occlusion** | **Training Frames** | **Training Scenes** | **Test Scenes** | **Resolution** |
| --------------- | ------------------ | ------------------ | ------------- | ------------------- | ------------------- | --------------- | -------------- |
| [[DVSFLOW16]]   | Rotation           | N                  | N             | -                   | -                   | 5               | 240 x 180      |
| [[DVSMOTION20]] | Rotation           | N                  | N             | -                   | -                   | 4               | 260 x 346      |
| [[MVSEC]]       | Drone              | N                  | N             | 3k                  | 1                   | 4               | 260 × 346      |
| [[DSEC]]        | Car                | N                  | N             | 8k                  | 18                  | 7               | 640 × 480      |
| [[BlinkFlow]]   | Random             | Y                  | Y             | 33k                 | 3362                | 225             | 640 × 480      |