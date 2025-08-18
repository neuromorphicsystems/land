---
{
    "name": "Ev-PointOdyssey",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVS-Voltmeter"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "TAP"
    ],
    "task": "Tracking Any Point",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Project page does not have a dataset link",
        "dataset_links": []
    },
    "paper": {
        "title": "Event-Based Tracking Any Point with Motion-Augmented Temporal Consistency",
        "doi": "10.48550/arXiv.2412.01300",
        "authors": [
            "Han Han",
            "Wei Zhai",
            "Yang Cao",
            "Bin Li",
            "Zheng-jun Zha"
        ],
        "abstract": "Tracking Any Point (TAP) plays a crucial role in motion analysis. Video-based approaches rely on iterative local matching for tracking, but they assume linear motion during the blind time between frames, which leads to target point loss under large displacements or nonlinear motion. The high temporal resolution and motion blur-free characteristics of event cameras provide continuous, fine-grained motion information, capturing subtle variations with microsecond precision. This paper presents an event-based framework for tracking any point, which tackles the challenges posed by spatial sparsity and motion sensitivity in events through two tailored modules. Specifically, to resolve ambiguities caused by event sparsity, a motion-guidance module incorporates kinematic features into the local matching process. Additionally, a variable motion aware module is integrated to ensure temporally consistent responses that are insensitive to varying velocities, thereby enhancing matching precision. To validate the effectiveness of the approach, an event dataset for tracking any point is constructed by simulation, and is applied in experiments together with two real-world datasets. The experimental results show that the proposed method outperforms existing SOTA methods. Moreover, it achieves 150\\% faster processing with competitive model parameters.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-04T13:29:23.676491"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2412.01300v1"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2412.01300"
        },
        {
            "type": "project_page",
            "url": "https://hh-xiaohu.github.io/Ev-TAP/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "PointOdyssey",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2412.01300 [cs]",
        "year": 2024,
        "month": "dec",
        "author": "Han, Han and Zhai, Wei and Cao, Yang and Li, Bin and Zha, Zheng-jun",
        "publisher": "arXiv",
        "urldate": "2024-12-10",
        "language": "en",
        "doi": "10.48550/arXiv.2412.01300",
        "url": "http://arxiv.org/abs/2412.01300",
        "title": "Event-{Based} {Tracking} {Any} {Point} with {Motion}-{Augmented} {Temporal} {Consistency}",
        "type": "misc",
        "key": "Han2024"
    }
}
---

### Dataset Structure

- Converted from the PointOdyssey
-
