---
{
    "name": "VIBES",
    "aliases": [
        "S-EV"
    ],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Microsaccades"
    ],
    "description": "Induced Vibration for Persistent Event-Based Sensing",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": [],
        "size_gb": 0.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "VibES: Induced Vibration for Persistent Event-Based Sensing",
        "doi": "10.48550/arXiv.2508.19094",
        "authors": [
            "Vincenzo Polizzi",
            "Stephen Yang",
            "Quentin Clark",
            "Jonathan Kelly",
            "Igor Gilitschenski",
            "David B. Lindell"
        ],
        "abstract": "Event cameras are a bio-inspired class of sensors that asynchronously measure per-pixel intensity changes. Under fixed illumination conditions in static or low-motion scenes, rigidly mounted event cameras are unable to generate any events, becoming unsuitable for most computer vision tasks. To address this limitation, recent work has investigated motion-induced event stimulation that often requires complex hardware or additional optical components. In contrast, we introduce a lightweight approach to sustain persistent event generation by employing a simple rotating unbalanced mass to induce periodic vibrational motion. This is combined with a motion-compensation pipeline that removes the injected motion and yields clean, motion-corrected events for downstream perception tasks. We demonstrate our approach with a hardware prototype and evaluate it on real-world captured datasets. Our method reliably recovers motion parameters and improves both image reconstruction and edge detection over event-based sensing without motion induction.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2508.19094"
        }
    ],
    "full_name": "",
    "additional_metadata": {}
}
---

## Dataset Description

The experiments were performed in a scene containing the physical VIBES prototype mounted to a table, along with a Franka Emika arm. Three patterns were printed out and taped to a sheet of cardboard which was mounted in the gripper of the Franka arm.