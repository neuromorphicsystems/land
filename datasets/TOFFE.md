---
{
    "name": "TOFFE",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Gazebo Simulator"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Optical Flow"
    ],
    "description": "Object Flow",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "TOFFE -- Temporally-binned Object Flow from Events for High-speed and Energy-Efficient Object Detection and Tracking",
        "doi": "10.48550/arXiv.2501.12482",
        "authors": [
            "Adarsh Kumar Kosta",
            "Amogh Joshi",
            "Arjun Roy",
            "Rohan Kumar Manna",
            "Manish Nagaraj",
            "Kaushik Roy"
        ],
        "abstract": "Object detection and tracking is an essential perception task for enabling fully autonomous navigation in robotic systems. Edge robot systems such as small drones need to execute complex maneuvers at high-speeds with limited resources, which places strict constraints on the underlying algorithms and hardware. Traditionally, frame-based cameras are used for vision-based perception due to their rich spatial information and simplified synchronous sensing capabilities. However, obtaining detailed information across frames incurs high energy consumption and may not even be required. In addition, their low temporal resolution renders them ineffective in high-speed motion scenarios. Event-based cameras offer a biologically-inspired solution to this by capturing only changes in intensity levels at exceptionally high temporal resolution and low power consumption, making them ideal for high-speed motion scenarios. However, their asynchronous and sparse outputs are not natively suitable with conventional deep learning methods. In this work, we propose TOFFE, a lightweight hybrid framework for performing event-based object motion estimation (including pose, direction, and speed estimation), referred to as Object Flow. TOFFE integrates bio-inspired Spiking Neural Networks (SNNs) and conventional Analog Neural Networks (ANNs), to efficiently process events at high temporal resolutions while being simple to train. Additionally, we present a novel event-based synthetic dataset involving high-speed object motion to train TOFFE. Our experimental results show that TOFFE achieves 5.7x/8.3x reduction in energy consumption and 4.6x/5.8x reduction in latency on edge GPU(Jetson TX2)/hybrid hardware(Loihi-2 and Jetson TX2), compared to previous event-based object detection baselines.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2501.12482"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2501.12482"
        }
    ],
    "full_name": "Temporally-binned Object Flow from Events (TOFFE)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "url": "https://arxiv.org/abs/2501.12482",
        "primaryclass": "cs.CV",
        "archiveprefix": "arXiv",
        "eprint": "2501.12482",
        "year": 2025,
        "author": "Adarsh Kumar Kosta and Amogh Joshi and Arjun Roy and Rohan Kumar Manna and Manish Nagaraj and Kaushik Roy",
        "title": "TOFFE -- Temporally-binned Object Flow from Events for High-speed and Energy-Efficient Object Detection and Tracking",
        "type": "misc",
        "key": "kosta2025toffetemporallybinnedobject"
    }
}
---

### Dataset Structure
