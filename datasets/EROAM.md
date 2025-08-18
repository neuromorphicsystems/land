---
{
    "name": "EROAM",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer"
    ],
    "other_sensors": [
        "Livox Avia LiDAR"
    ],
    "category": "Visual Navigation",
    "subcategory": [
        "SLAM",
        "Camera Pose Estimation"
    ],
    "task": "Odometry and mapping",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "Data will be available after publication. Update: Data is now available from the Project Page.",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://transgp-my.sharepoint.com/:f:/g/personal/wl_xing_transgp_hk/Evz6VVBEYcVPrK5qhRBF1sIB-defWjkdOtLevZ0Oqe1JbA",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 360.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EROAM: Event-based Camera Rotational Odometry and Mapping in Real-time",
        "doi": "10.48550/arXiv.2411.11004",
        "authors": [
            "Wanli Xing",
            "Shijie Lin",
            "Linhan Yang",
            "Zeqing Zhang",
            "Yanjun Du",
            "Maolin Lei",
            "Yipeng Pan",
            "Jia Pan"
        ],
        "abstract": "This paper presents EROAM, a novel event-based rotational odometry and mapping system that achieves real-time, accurate camera rotation estimation. Unlike existing approaches that rely on event generation models or contrast maximization, EROAM employs a spherical event representation by projecting events onto a unit sphere and introduces Event Spherical Iterative Closest Point (ES-ICP), a novel geometric optimization framework designed specifically for event camera data. The spherical representation simplifies rotational motion formulation while enabling continuous mapping for enhanced spatial resolution. Combined with parallel point-to-line optimization, EROAM achieves efficient computation without compromising accuracy. Extensive experiments on both synthetic and real-world datasets show that EROAM significantly outperforms state-of-the-art methods in terms of accuracy, robustness, and computational efficiency. Our method maintains consistent performance under challenging conditions, including high angular velocities and extended sequences, where other methods often fail or show significant drift. Additionally, EROAM produces high-quality panoramic reconstructions with preserved fine structural details.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-09T08:28:16.017622"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2411.11004"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2411.11004"
        },
        {
            "type": "project_page",
            "url": "https://wlxing1901.github.io/eroam/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/wlxing1901/eroam"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Robotics",
        "note": "arXiv:2411.11004 [cs]",
        "year": 2024,
        "month": "nov",
        "author": "Xing, Wanli and Lin, Shijie and Yang, Linhan and Zhang, Zeqing and Du, Yanjun and Lei, Maolin and Pan, Yipeng and Pan, Jia",
        "publisher": "arXiv",
        "urldate": "2024-11-26",
        "language": "en",
        "doi": "10.48550/arXiv.2411.11004",
        "url": "http://arxiv.org/abs/2411.11004",
        "shorttitle": "{EROAM}",
        "title": "{EROAM}: {Event}-based {Camera} {Rotational} {Odometry} and {Mapping} in {Real}-time",
        "type": "misc",
        "key": "Xing2024"
    }
}
---

### Dataset Structure
