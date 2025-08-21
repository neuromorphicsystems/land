---
{
    "name": "MouseSIS",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "Basler acA1300-200um"
    ],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Beamsplitters",
        "Object Segmentation"
    ],
    "description": "Space-Time Instance Segmentation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1amY4kuaZFWdpgHg4RfTrw9Qb-tKrM-8h",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 38.92,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "MouseSIS: A Frames-and-Events Dataset for Space-Time Instance Segmentation of Mice",
        "doi": "10.48550/arXiv.2409.03358v1",
        "authors": [
            "Friedhelm Hamann",
            "Hanxiong Li",
            "Paul Mieske",
            "Lars Lewejohann",
            "Guillermo Gallego"
        ],
        "abstract": "Enabled by large annotated datasets, tracking and segmentation of objects in videos has made remarkable progress in recent years. Despite these advancements, algorithms still struggle under degraded conditions and during fast movements. Event cameras are novel sensors with high temporal resolution and high dynamic range that offer promising advantages to address these challenges. However, annotated data for developing learning-based mask-level tracking algorithms with events is not available. To this end, we introduce: ($i$) a new task termed \\emph{space-time instance segmentation}, similar to video instance segmentation, whose goal is to segment instances throughout the entire duration of the sensor input (here, the input are quasi-continuous events and optionally aligned frames); and ($ii$) \\emph{\\dname}, a dataset for the new task, containing aligned grayscale frames and events. It includes annotated ground-truth labels (pixel-level instance segmentation masks) of a group of up to seven freely moving and interacting mice. We also provide two reference methods, which show that leveraging event data can consistently improve tracking performance, especially when used in combination with conventional cameras. The results highlight the potential of event-aided tracking in difficult scenarios. We hope our dataset opens the field of event-based video instance segmentation and enables the development of robust tracking algorithms for challenging conditions.\\url{https://github.com/tub-rip/MouseSIS}",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-16T11:59:30.549267"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/2409.03358"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2409.03358v1"
        },
        {
            "type": "github_page",
            "url": "https://github.com/tub-rip/MouseSIS?tab=readme-ov-file"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "33",
        "recording_duration": "20",
        "stereo": false
    },
    "bibtex": {
        "pages": "156\u2013173",
        "year": 2025,
        "author": "Hamann, Friedhelm and Li, Hanxiong and Mieske, Paul and Lewejohann, Lars and Gallego, Guillermo",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer Vision \u2013 ECCV 2024 Workshops",
        "doi": "10.1007/978-3-031-92460-6_10",
        "url": "http://dx.doi.org/10.1007/978-3-031-92460-6_10",
        "issn": "1611-3349",
        "isbn": "9783031924606",
        "title": "MouseSIS: A Frames-and-Events Dataset for\u00a0Space-Time Instance Segmentation of\u00a0Mice",
        "type": "book",
        "key": "Hamann_2025"
    }
}
---

### Dataset Structure

- Space-time instance segmentation dataset focused on mice tracking
- Combined frames and event data from neuromorphic vision sensor
- 33 sequences (~20 seconds each, ~600 frames per sequence)
- YouTubeVIS-style annotations
- Baseline implementation and evaluation metrics included

### Comparison Datasets

| **Name**       | **Resolution** | **Frames** | **Aligned** | **Pixel-level Masks** | **Multiple Objects** |
| -------------- | -------------- | ---------- | ----------- | --------------------- | -------------------- |
| Ulster         | 240 × 180      | Y          | Y           | N                     | N                    |
| EED            | 240 × 180      | Y          | Y           | N                     | N                    |
| FE10           | 346 × 260      | Y          | Y           | N                     | N                    |
| VisEvent       | 346 × 260      | Y          | Y           | N                     | N                    |
| COESOT         | 346 × 260      | Y          | Y           | N                     | N                    |
| Event VOT      | 1280 × 720     | N          | -           | N                     | N                    |
| CRSOT          | 1280 × 800     | Y          | N           | N                     | N                    |
| DSEC-Detection | 640 × 480      | Y          | N           | N                     | Y                    |
| MouseSIS       | 1280 × 720     | Y          | Y           | Y                     | Y                    |
