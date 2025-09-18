---
{
    "name": "E-4DGS",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "4D Reconstruction"
    ],
    "description": "Mult-camera 360 degree dataset for 4D reconstruction",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Paper states that the dataset will be available on the project page, which is not yet live.",
        "dataset_links": [],
        "size_gb": 0.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "E-4DGS: High-Fidelity Dynamic Reconstruction from the Multi-view Event Cameras",
        "doi": "10.48550/arXiv.2508.09912",
        "authors": [
            "Chaoran Feng",
            "Zhenyu Tang",
            "Wangbo Yu",
            "Yatian Pang",
            "Yian Zhao",
            "Jianbin Zhao",
            "Li Yuan",
            "Yonghong Tian"
        ],
        "abstract": "Novel view synthesis and 4D reconstruction techniques predominantly rely on RGB cameras, thereby inheriting inherent limitations such as the dependence on adequate lighting, susceptibility to motion blur, and a limited dynamic range. Event cameras, offering advantages of low power, high temporal resolution and high dynamic range, have brought a new perspective to addressing the scene reconstruction challenges in high-speed motion and",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2508.09912"
        },
        {
            "type": "github_page",
            "url": "https://github.com/SuperFCR/E-4DGS"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "bibtex": {
        "copyright": "Creative Commons Attribution Non Commercial Share Alike 4.0 International",
        "year": 2025,
        "publisher": "arXiv",
        "title": "E-4DGS: High-Fidelity Dynamic Reconstruction from the Multi-view Event Cameras",
        "keywords": "Computer Vision and Pattern Recognition (cs.CV), FOS: Computer and information sciences, FOS: Computer and information sciences",
        "author": "Feng, Chaoran and Tang, Zhenyu and Yu, Wangbo and Pang, Yatian and Zhao, Yian and Zhao, Jianbin and Yuan, Li and Tian, Yonghong",
        "url": "https://arxiv.org/abs/2508.09912",
        "doi": "10.48550/ARXIV.2508.09912",
        "type": "misc",
        "key": "https://doi.org/10.48550/arxiv.2508.09912"
    }
}
---

Dataset Properties


The authors manually created eight synthetic scenes with six viewpoints arranged in a 360-degree configuration around the object or scene. Each scene is designed as a center-focus setup, with an object placed at the center. For these scenes, we render six dynamic scenarios at a resolution of 346 × 260 in Blender at 3000 FPS with the BlenderNeRF add-on. 

Six moving viewpoints are uniformly distributed around the object in a spherical spiral motion at a constant height. Event streams are generated using the v2e framework.

Additionally, leveraging the camera trajectory data, blurry images are simulated by integrating RGB frames over the exposure time, with varying degrees of motion blur—mild, medium, and strong.
Six viewpoints are used for training and set the `llffhold` value to 8 for testing. For event-only dynamic reconstruction, RGB frames are converted to grayscale for evaluation, with event streams used exclusively as input. In the event-RGB fusion dynamic reconstruction, full-resolution color images are used in conjunction with event slices as input modalities.
