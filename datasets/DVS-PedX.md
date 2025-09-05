---
{
    "name": "DVS-PedX",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E",
        "CARLA"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Pedestrial Detection",
        "Crossing Intention Analysis"
    ],
    "description": "Pedestrian detection and crossing-intention analysis",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "The dataset has been split into four parts to make the download easier. Instructions on how to re-assmble the full dataset are provided.",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/17030898",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 16.8,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "",
        "doi": "",
        "authors": [],
        "abstract": "",
        "open_access": false
    },
    "citation_counts": [],
    "links": [],
    "full_name": "Dynamic Vision Sensor Pedestrian eXploration Dataset",
    "additional_metadata": {}
}
---

# Dataset Description

DVS-PedX is a neuromorphic dataset designed for pedestrian detection and crossing-intention analysis in normal and adverse weather conditions across two complementary sources: (1) synthetic event streams generated in the CARLA simulator for controlled “approach–cross” scenes under varied weather and lighting; and (2)real-world JAAD dash-cam 346 videos converted to event streams using the v2e tool, preserving natural behaviors and backgrounds. Event-based Pedestrian Interaction Clips (JPG/PNG + AEDAT/AEDAT4 + AVI previews).