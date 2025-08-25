---
{
    "name": "MTevent",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer"
    ],
    "other_sensors": [
        "Vicon",
        "IDS uEye"
    ],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "Object Detection",
        "3D Pose Estimation"
    ],
    "description": "6D Pose Estimation and Moving Object Detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "HuggingFace"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "HuggingFace",
                "url": "https://huggingface.co/datasets/anas-gouda/MTevent",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 417.3,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "MTevent: A Multi-Task Event Camera Dataset for 6D Pose Estimation and Moving Object Detection",
        "doi": "10.48550/arXiv.2505.11282v2",
        "authors": [
            "Shrutarv Awasthi",
            "Anas Gouda",
            "Sven Franke",
            "J\u00e9r\u00f4me Rutinowski",
            "Frank Hoffmann",
            "Moritz Roidl"
        ],
        "abstract": "Mobile robots are reaching unprecedented speeds, with platforms like Unitree B2, and Fraunhofer O3dyn achieving maximum speeds between 5 and 10 m/s. However, effectively utilizing such speeds remains a challenge due to the limitations of RGB cameras, which suffer from motion blur and fail to provide real-time responsiveness. Event cameras, with their asynchronous operation, and low-latency sensing, offer a promising alternative for high-speed robotic perception. In this work, we introduce MTevent, a dataset designed for 6D pose estimation and moving object detection in highly dynamic environments with large detection distances. Our setup consists of a stereo-event camera and an RGB camera, capturing 75 scenes, each on average 16 seconds, and featuring 16 unique objects under challenging conditions such as extreme viewing angles, varying lighting, and occlusions. MTevent is the first dataset to combine high-speed motion, long-range perception, and real-world object interactions, making it a valuable resource for advancing event-based vision in robotics. To establish a baseline, we evaluate the task of 6D pose estimation using NVIDIA's FoundationPose on RGB images, achieving an Average Recall of 0.22 with ground-truth masks, highlighting the limitations of RGB-based approaches in such dynamic settings. With MTevent, we provide a novel resource to improve perception models and foster further research in high-speed robotic vision. The dataset is available for download this https URL",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2505.11282"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2505.11282"
        },
        {
            "type": "github_page",
            "url": "https://github.com/shrutarv/MTevent_toolkit/tree/main"
        }
    ],
    "full_name": "Multi-Task Event Camera Dataset",
    "additional_metadata": {
        "num_recordings": "75",
        "average_duration": "16",
        "num_classes": "16",
        "stereo": true
    },
    "bibtex": {
        "url": "https://arxiv.org/abs/2505.11282",
        "primaryclass": "cs.CV",
        "archiveprefix": "arXiv",
        "eprint": "2505.11282",
        "year": 2025,
        "author": "Shrutarv Awasthi and Anas Gouda and Sven Franke and J\u00e9r\u00f4me Rutinowski and Frank Hoffmann and Moritz Roidl",
        "title": "MTevent: A Multi-Task Event Camera Dataset for 6D Pose Estimation and Moving Object Detection",
        "type": "misc",
        "key": "awasthi2025mteventmultitaskeventcamera"
    }
}
---

### Dataset Structure

This dataset was captured using a setup consists of a stereo-event camera and an RGB camera, capturing 75 scenes, each on average 16 seconds, and featuring 16 unique objects under challenging conditions such as extreme viewing angles, varying lighting, and occlusions

### Comparison Table

| Dataset        | Environment      | Independently Moving Objects (IMO) | IMO Pose | Distance to Objects | Ground Truth    |
| -------------- | ---------------- | ---------------------------------- | -------- | ------------------- | --------------- |
| M3ED           | Indoor + Outdoor | Pedestrians, Cars                  | ✓        | Large               | Lidar + RTK     |
| EViMO2         | Indoor           | Household Objects                  | ✓        | Small               | MoCAP           |
| EDAT24         | Indoor           | Small Manufacturing Objects        | N/A      | Small               | N/A             |
| DSEC           | Indoor + Outdoor | Pedestrians, Cars                  | ✓        | Large               | RTK GPS + LIDAR |
| EED            | Indoor           | UAVs                               | ✗        | N/A                 | Manual          |
| E-Pose         | Indoor           | Objects are Static                 | ✓        | Small               | ZED Mini Camera |
| MTevent (ours) | Indoor           | 16 Objects (Fig. 3)                | ✓        | Varying             | MoCap           |

### File Sizes

| Filename    | Size     |
| ----------- | -------- |
| scene1.zip  | 2.31 GB  |
| scene2.zip  | 2.10 GB  |
| scene3.zip  | 3.40 GB  |
| scene4.zip  | 4.86 GB  |
| scene5.zip  | 1.84 GB  |
| scene6.zip  | 1.86 GB  |
| scene7.zip  | 2.74 GB  |
| scene8.zip  | 2.61 GB  |
| scene9.zip  | 1.85 GB  |
| scene10.zip | 3.59 GB  |
| scene11.zip | 2.48 GB  |
| scene12.zip | 2.07 GB  |
| scene13.zip | 1.67 GB  |
| scene14.zip | 2.04 GB  |
| scene15.zip | 1.73 GB  |
| scene16.zip | 1.87 GB  |
| scene17.zip | 6.16 GB  |
| scene18.zip | 2.05 GB  |
| scene19.zip | 2.89 GB  |
| scene20.zip | 2.71 GB  |
| scene21.zip | 3.65 GB  |
| scene22.zip | 3.41 GB  |
| scene23.zip | 0.73 GB  |
| scene24.zip | 0.64 GB  |
| scene25.zip | 0.51 GB  |
| scene26.zip | 7.09 GB  |
| scene27.zip | 6.32 GB  |
| scene28.zip | 7.78 GB  |
| scene29.zip | 7.54 GB  |
| scene30.zip | 6.71 GB  |
| scene31.zip | 11.00 GB |
| scene32.zip | 8.03 GB  |
| scene33.zip | 9.89 GB  |
| scene34.zip | 8.93 GB  |
| scene35.zip | 3.37 GB  |
| scene36.zip | 6.17 GB  |
| scene37.zip | 3.33 GB  |
| scene38.zip | 3.92 GB  |
| scene39.zip | 4.50 GB  |
| scene40.zip | 9.88 GB  |
| scene41.zip | 8.00 GB  |
| scene42.zip | 10.70 GB |
| scene43.zip | 4.74 GB  |
| scene44.zip | 5.18 GB  |
| scene45.zip | 3.31 GB  |
| scene46.zip | 3.24 GB  |
| scene47.zip | 12.60 GB |
| scene48.zip | 4.24 GB  |
| scene49.zip | 2.77 GB  |
| scene50.zip | 5.03 GB  |
| scene51.zip | 4.70 GB  |
| scene52.zip | 2.62 GB  |
| scene53.zip | 14.30 GB |
| scene54.zip | 5.63 GB  |
| scene55.zip | 2.82 GB  |
| scene56.zip | 9.62 GB  |
| scene57.zip | 2.11 GB  |
| scene58.zip | 7.65 GB  |
| scene59.zip | 13.60 GB |
| scene60.zip | 6.50 GB  |
| scene61.zip | 5.09 GB  |
| scene62.zip | 10.40 GB |
| scene63.zip | 1.98 GB  |
| scene64.zip | 2.57 GB  |
| scene65.zip | 4.43 GB  |
| scene66.zip | 4.71 GB  |
| scene67.zip | 6.68 GB  |
| scene68.zip | 5.96 GB  |
| scene69.zip | 4.58 GB  |
| scene70.zip | 2.54 GB  |
| scene71.zip | 3.77 GB  |
| scene72.zip | 2.05 GB  |
| scene73.zip | 2.72 GB  |
| scene74.zip | 4.23 GB  |
| scene75.zip | 3.10 GB  |
