---
{
    "name": "evTikTok",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Video Generation"
    ],
    "description": "Animation of human motion from static images",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "HuggingFace"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "HuggingFace",
                "url": "https://huggingface.co/datasets/potentialming/EvHumanMotion",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 9.1,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EvAnimate: Event-conditioned Image-to-Video Generation for Human Animation",
        "doi": "10.48550/arXiv.2503.18552v2",
        "authors": [
            "Qiang Qu",
            "Ming Li",
            "Xiaoming Chen",
            "Tongliang Liu"
        ],
        "abstract": "Conditional human animation traditionally animates static reference images using pose-based motion cues extracted from video data. However, these video-derived cues often suffer from low temporal resolution, motion blur, and unreliable performance under challenging lighting conditions. In contrast, event cameras inherently provide robust and high temporal-resolution motion information, offering resilience to motion blur, low-light environments, and exposure variations. In this paper, we propose EvAnimate, the first method leveraging event streams as robust and precise motion cues for conditional human image animation. Our approach is fully compatible with diffusion-based generative models, enabled by encoding asynchronous event data into a specialized three-channel representation with adaptive slicing rates and densities. High-quality and temporally coherent animations are achieved through a dual-branch architecture explicitly designed to exploit event-driven dynamics, significantly enhancing performance under challenging real-world conditions. Enhanced cross-subject generalization is further achieved using specialized augmentation strategies. To facilitate future research, we establish a new benchmarking, including simulated event data for training and validation, and a real-world event dataset capturing human actions under normal and challenging scenarios. The experiment results demonstrate that EvAnimate achieves high temporal fidelity and robust performance in scenarios where traditional video-derived cues fall short.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2503.18552"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2503.18552"
        },
        {
            "type": "project_page",
            "url": "https://potentialming.github.io/projects/EvAnimate/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "TikTok",
        "stereo": false
    },
    "connected_datasets": [
        "EvHumanMotion"
    ],
    "bibtex": {
        "url": "https://arxiv.org/abs/2503.18552",
        "primaryclass": "cs.CV",
        "archiveprefix": "arXiv",
        "eprint": "2503.18552",
        "year": 2025,
        "author": "Qiang Qu and Ming Li and Xiaoming Chen and Tongliang Liu",
        "title": "EvAnimate: Event-conditioned Image-to-Video Generation for Human Animation",
        "type": "misc",
        "key": "qu2025evanimateeventconditionedimagetovideogeneration"
    }
}
---

### Dataset Structure

- Converted from the TikTok
