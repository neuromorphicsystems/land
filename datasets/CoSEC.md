---
{
    "name": "CoSEC",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "FLIR Blackfly S USB3",
        "Velodyne VLP-32C",
        "InertialLabs INS-D-E1"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Beamsplitters",
        "Autonomous Driving",
        "Stereo"
    ],
    "description": "Stereo Autonomous Driving Dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "No download link in paper. No associated project page or Github repository.",
        "dataset_links": [],
        "size_gb": 0.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "CoSEC: A Coaxial Stereo Event Camera Dataset for Autonomous Driving",
        "doi": "10.48550/arXiv.2408.08500",
        "authors": [
            "Shihan Peng",
            "Hanyu Zhou",
            "Hao Dong",
            "Zhiwei Shi",
            "Haoyue Liu",
            "Yuxing Duan",
            "Yi Chang",
            "Luxin Yan"
        ],
        "abstract": "Conventional frame camera is the mainstream sensor of the autonomous driving scene perception, while it is limited in adverse conditions, such as low light. Event camera with high dynamic range has been applied in assisting frame camera for the multimodal fusion, which relies heavily on the pixel-level spatial alignment between various modalities. Typically, existing multimodal datasets mainly place event and frame cameras in parallel and directly align them spatially via warping operation. However, this parallel strategy is less effective for multimodal fusion, since the large disparity exacerbates spatial misalignment due to the large event-frame baseline. We argue that baseline minimization can reduce alignment error between event and frame cameras. In this work, we introduce hybrid coaxial event-frame devices to build the multimodal system, and propose a coaxial stereo event camera (CoSEC) dataset for autonomous driving. As for the multimodal system, we first utilize the microcontroller to achieve time synchronization, and then spatially calibrate different sensors, where we perform intra- and inter-calibration of stereo coaxial devices. As for the multimodal dataset, we filter LiDAR point clouds to generate depth and optical flow labels using reference depth, which is further improved by fusing aligned event and frame data in nighttime conditions. With the help of the coaxial device, the proposed dataset can promote the all-day pixel-level multimodal fusion. Moreover, we also conduct experiments to demonstrate that the proposed dataset can improve the performance and generalization of the multimodal fusion.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-09-13T12:38:03.416087"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2408.08500"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "128",
        "total_duration": "753 seconds"
    },
    "bibtex": {
        "copyright": "arXiv.org perpetual, non-exclusive license",
        "year": 2024,
        "publisher": "arXiv",
        "title": "CoSEC: A Coaxial Stereo Event Camera Dataset for Autonomous Driving",
        "keywords": "Computer Vision and Pattern Recognition (cs.CV), FOS: Computer and information sciences, FOS: Computer and information sciences",
        "author": "Peng, Shihan and Zhou, Hanyu and Dong, Hao and Shi, Zhiwei and Liu, Haoyue and Duan, Yuxing and Chang, Yi and Yan, Luxin",
        "url": "https://arxiv.org/abs/2408.08500",
        "doi": "10.48550/ARXIV.2408.08500",
        "type": "misc",
        "key": "https://doi.org/10.48550/arxiv.2408.08500"
    }
}
---

# Dataset Structure

### Table

#### Train

| Time  | Area    | Sequences | Duration (s) |
|-------|---------|-----------|--------------|
| Day   | City    | 11        | 320          |
|       | Campus  | 12        | 338          |
|       | Park    | 11        | 314          |
|       | Suburbs | 15        | 411          |
|       | Village | 9         | 269          |
|       | **Total Day** | **58** | **1652**     |
| Night | City    | 9         | 253          |
|       | Campus  | 10        | 287          |
|       | Park    | 8         | 231          |
|       | Suburbs | 12        | 334          |
|       | Village | 5         | 148          |
|       | **Total Night** | **44** | **1253**     |

**Total Train**  
Sequences: **102**  
Duration (s): **2905**

---

#### Test

| Time  | Area    | Sequences | Duration (s) |
|-------|---------|-----------|--------------|
| Day   | City    | 2         | 58           |
|       | Campus  | 3         | 94           |
|       | Park    | 3         | 84           |
|       | Suburbs | 5         | 138          |
|       | Village | 2         | 57           |
|       | **Total Day** | **15** | **431**      |
| Night | City    | 2         | 61           |
|       | Campus  | 2         | 66           |
|       | Park    | 2         | 56           |
|       | Suburbs | 3         | 85           |
|       | Village | 2         | 54           |
|       | **Total Night** | **11** | **322**      |

**Total Test**  
Sequences: **26**  
Duration (s): **753**

---

### Grand Total  
Sequences: **128**  
Duration (s): **3658** seconds.