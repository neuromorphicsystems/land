---
{
    "name": "EvHumanMotion",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Video Generation"
    ],
    "description": "Animation of human motion from static images",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
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
        "num_recordings": "113",
        "num_subjects": "20",
        "num_males": "10",
        "num_females": "10",
        "recording_duration": "10",
        "stereo": false
    },
    "connected_datasets": [
        "EvTikTok"
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

The dataset contains:

- **Total sequences**: 113
- **Participants**: 20 (10 male, 10 female)
- **Duration**: ~10 seconds per video
- **Frame rate**: 24 fps
- **Scenarios**: Normal, Motion Blur, Overexposure, Low Light
- **Modalities**: RGB + Event data (both `.aedat4` and frame-level)
