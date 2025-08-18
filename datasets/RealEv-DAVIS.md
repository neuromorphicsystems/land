---
{
    "name": "RealEv-DAVIS",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Frame Reconstruction",
        "Camera Pose Estimation"
    ],
    "task": "High-speed Scene Reconstruction",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Website does not yet include download links",
        "dataset_links": []
    },
    "paper": {
        "title": "EF-3DGS: Event-Aided Free-Trajectory 3D Gaussian Splatting",
        "doi": "10.48550/arXiv.2410.15392",
        "authors": [
            "Bohao Liao",
            "Wei Zhai",
            "Zengyu Wan",
            "Tianzhu Zhang",
            "Yang Cao",
            "Zheng-Jun Zha"
        ],
        "abstract": "Scene reconstruction from casually captured videos has wide applications in real-world scenarios. With recent advancements in differentiable rendering techniques, several methods have attempted to simultaneously optimize scene representations (NeRF or 3DGS) and camera poses. Despite recent progress, existing methods relying on traditional camera input tend to fail in high-speed (or equivalently low-frame-rate) scenarios. Event cameras, inspired by biological vision, record pixel-wise intensity changes asynchronously with high temporal resolution, providing valuable scene and motion information in blind inter-frame intervals. In this paper, we introduce the event camera to aid scene construction from a casually captured video for the first time, and propose Event-Aided Free-Trajectory 3DGS, called EF-3DGS, which seamlessly integrates the advantages of event cameras into 3DGS through three key components. First, we leverage the Event Generation Model (EGM) to fuse events and frames, supervising the rendered views observed by the event stream. Second, we adopt the Contrast Maximization (CMax) framework in a piece-wise manner to extract motion information by maximizing the contrast of the Image of Warped Events (IWE), thereby calibrating the estimated poses. Besides, based on the Linear Event Generation Model (LEGM), the brightness information encoded in the IWE is also utilized to constrain the 3DGS in the gradient domain. Third, to mitigate the absence of color information of events, we introduce photometric bundle adjustment (PBA) to ensure view consistency across events and frames. We evaluate our method on the public Tanks and Temples benchmark and a newly collected real-world dataset, RealEv-DAVIS. Our project page is this https URL.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-06-14T11:34:30.315015"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2410.15392v2"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2410.15392"
        },
        {
            "type": "project_page",
            "url": "https://lbh666.github.io/ef-3dgs/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "4"
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2410.15392 [cs]",
        "year": 2024,
        "month": "oct",
        "author": "Liao, Bohao and Zhai, Wei and Wan, Zengyu and Zhang, Tianzhu and Cao, Yang and Zha, Zheng-Jun",
        "publisher": "arXiv",
        "urldate": "2024-12-02",
        "language": "en",
        "doi": "10.48550/arXiv.2410.15392",
        "url": "http://arxiv.org/abs/2410.15392",
        "shorttitle": "{EF}-{3DGS}",
        "title": "{EF}-{3DGS}: {Event}-{Aided} {Free}-{Trajectory} {3D} {Gaussian} {Splatting}",
        "type": "misc",
        "key": "liao_ef-3dgs_2024"
    }
}
---


### Dataset Structure 
- Contains 4 outdoor scenes
-