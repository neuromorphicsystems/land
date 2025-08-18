---
{
    "name": "SpikeCityPCL",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Spike Camera"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "HDR Video Reconstruction",
        "High-speed Object Tracking"
    ],
    "task": "High-speed object tracking and video reconstruction",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Github LFS"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Github LFS",
                "url": "https://openi.pcl.ac.cn/BDIP/SpikeCityPCL",
                "format": "Unknown",
                "available": false
            }
        ],
        "size_gb": 0.656,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "High-speed and High-quality Vision Reconstruction of Spike Camera with Spike Stability Theorem",
        "doi": "10.48550/arXiv.2412.11639",
        "authors": [
            "Wei Zhang",
            "Weiquan Yan",
            "Yun Zhao",
            "Wenxiang Cheng",
            "Gang Chen",
            "Huihui Zhou",
            "Yonghong Tian"
        ],
        "abstract": "Neuromorphic vision sensors, such as the dynamic vision sensor (DVS) and spike camera, have gained increasing attention in recent years. The spike camera can detect fine textures by mimicking the fovea in the human visual system, and output a high-frequency spike stream. Real-time high-quality vision reconstruction from the spike stream can build a bridge to high-level vision task applications of the spike camera. To realize high-speed and high-quality vision reconstruction of the spike camera, we propose a new spike stability theorem that reveals the relationship between spike stream characteristics and stable light intensity. Based on the spike stability theorem, two parameter-free algorithms are designed for the real-time vision reconstruction of the spike camera. To demonstrate the performances of our algorithms, two datasets (a public dataset PKU-Spike-High-Speed and a newly constructed dataset SpikeCityPCL) are used to compare the reconstruction quality and speed of various reconstruction methods. Experimental results show that, compared with the current state-of-the-art (SOTA) reconstruction methods, our reconstruction methods obtain the best tradeoff between the reconstruction quality and speed. Additionally, we design the FPGA implementation method of our algorithms to realize the real-time (running at 20,000 FPS) visual reconstruction. Our work provides new theorem and algorithm foundations for the real-time edge-end vision processing of the spike camera.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-15T11:12:08.516023"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2412.11639"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2412.11639"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "248",
        "sensor_resolution": "400 \u00d7 250",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Electrical Engineering and Systems Science - Image and Video Processing",
        "note": "arXiv:2412.11639 [cs]",
        "year": 2024,
        "month": "dec",
        "author": "Zhang, Wei and Yan, Weiquan and Zhao, Yun and Cheng, Wenxiang and Chen, Gang and Zhou, Huihui and Tian, Yonghong",
        "publisher": "arXiv",
        "urldate": "2024-12-26",
        "language": "en",
        "doi": "10.48550/arXiv.2412.11639",
        "url": "http://arxiv.org/abs/2412.11639",
        "title": "High-speed and {High}-quality {Vision} {Reconstruction} of {Spike} {Camera} with {Spike} {Stability} {Theorem}",
        "type": "misc",
        "key": "zhang_high-speed_2024"
    }
}
---

### Dataset Structure

- Contains 248 different recordings
- Camera resolution is 400 × 250
