---
{
    "name": "traj2e",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Simulator"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Sim-to-Real",
        "Simulator",
        "Space Datasets"
    ],
    "task": "Landing Trajectory Simulations",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Dataset contains the trajectory-to-events conversion tool",
        "dataset_links": []
    },
    "paper": {
        "title": "On the Generation of a Synthetic Event-Based Vision Dataset for Navigation and Landing",
        "doi": "10.48550/arXiv.2308.00394",
        "authors": [
            "Lo\u00efc Azzalini",
            "Emmanuel Blazquez",
            "Alexander Hadjiivanov",
            "Gabriele Meoni",
            "Dario Izzo"
        ],
        "abstract": "An event-based camera outputs an event whenever a change in scene brightness of a preset magnitude is detected at a particular pixel location in the sensor plane. The resulting sparse and asynchronous output coupled with the high dynamic range and temporal resolution of this novel camera motivate the study of event-based cameras for navigation and landing applications. However, the lack of real-world and synthetic datasets to support this line of research has limited its consideration for onboard use. This paper presents a methodology and a software pipeline for generating event-based vision datasets from optimal landing trajectories during the approach of a target body. We construct sequences of photorealistic images of the lunar surface with the Planet and Asteroid Natural Scene Generation Utility at different viewpoints along a set of optimal descent trajectories obtained by varying the boundary conditions. The generated image sequences are then converted into event streams by means of an event-based camera emulator. We demonstrate that the pipeline can generate realistic event-based representations of surface features by constructing a dataset of 500 trajectories, complete with event streams and motion field ground truth data. We anticipate that novel event-based vision datasets can be generated using this pipeline to support various spacecraft pose reconstruction problems given events as input, and we hope that the proposed methodology would attract the attention of researchers working at the intersection of neuromorphic vision and guidance navigation and control.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-06-16T09:47:30.020057"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2308.00394"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2308.00394"
        },
        {
            "type": "project_page",
            "url": "https://gitlab.com/EuropeanSpaceAgency/trajectory-to-events"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Robotics",
        "note": "arXiv:2308.00394 [cs]",
        "year": 2023,
        "month": "aug",
        "author": "Azzalini, Lo\u00efc J. and Blazquez, Emmanuel and Hadjiivanov, Alexander and Meoni, Gabriele and Izzo, Dario",
        "publisher": "arXiv",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.48550/arXiv.2308.00394",
        "url": "http://arxiv.org/abs/2308.00394",
        "title": "On the {Generation} of a {Synthetic} {Event}-{Based} {Vision} {Dataset} for {Navigation} and {Landing}",
        "type": "misc",
        "key": "azzalini_generation_2023-1"
    }
}
---



## Dataset Structure