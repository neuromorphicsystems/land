---
{
    "name": "DSEC-MOT",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Object Tracking",
        "Multiple Object Tracking",
        "Annotated Dataset"
    ],
    "task": "Multiple Object Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Other"
        ],
        "availability_comment": "Annotations for selected recordings from the DSEC dataset",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1BMzf-mAq1-pwtCWc7zw3KoYYF4igZXAj?usp=sharing",
                "format": "Other",
                "available": true
            }
        ],
        "size_gb": 0.01,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "SpikeMOT: Event-based Multi-Object Tracking with Sparse Motion Features",
        "doi": "10.48550/arXiv.2309.16987",
        "authors": [
            "Song Wang",
            "Zhu Wang",
            "Can Li",
            "Xiaojuan Qi",
            "Hayden Kwok-Hay So"
        ],
        "abstract": "In comparison to conventional RGB cameras, the superior temporal resolution of event cameras allows them to capture rich information between frames, making them prime candidates for object tracking. Yet in practice, despite their theoretical advantages, the body of work on event-based multi-object tracking (MOT) remains in its infancy, especially in real-world settings where events from complex background and camera motion can easily obscure the true target motion. In this work, an event-based multi-object tracker, called SpikeMOT, is presented to address these challenges. SpikeMOT leverages spiking neural networks to extract sparse spatiotemporal features from event streams associated with objects. The resulting spike train representations are used to track the object movement at high frequency, while a simultaneous object detector provides updated spatial information of these objects at an equivalent frame rate. To evaluate the effectiveness of SpikeMOT, we introduce DSEC-MOT, the first large-scale event-based MOT benchmark incorporating fine-grained annotations for objects experiencing severe occlusions, frequent trajectory intersections, and long-term re-identification in real-world contexts. Extensive experiments employing DSEC-MOT and another event-based dataset, named FE240hz, demonstrate SpikeMOT's capability to achieve high tracking accuracy amidst challenging real-world scenarios, advancing the state-of-the-art in event-based multi-object tracking.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-07-02T08:22:47.340232"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2309.16987"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2309.16987"
        },
        {
            "type": "github_page",
            "url": "https://github.com/CASR-HKU/DSEC-MOT/blob/main/README.md"
        }
    ],
    "full_name": "DSEC Multi-Object Tracking (DSEC-MOT)",
    "additional_metadata": {
        "num_recordings": "12",
        "num_classes": "7",
        "sensor_resolution": "640\u00a0\u00d7\u00a0480"
    },
    "connected_datasets": [
        "DSEC"
    ],
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2309.16987 [cs]",
        "year": 2023,
        "month": "sep",
        "author": "Wang, Song and Wang, Zhu and Li, Can and Qi, Xiaojuan and So, Hayden Kwok-Hay",
        "publisher": "arXiv",
        "urldate": "2024-09-10",
        "language": "en",
        "doi": "10.48550/arXiv.2309.16987",
        "url": "http://arxiv.org/abs/2309.16987",
        "shorttitle": "{SpikeMOT}",
        "title": "{SpikeMOT}: {Event}-based {Multi}-{Object} {Tracking} with {Sparse} {Motion} {Features}",
        "type": "misc",
        "key": "wang_spikemot_2023"
    }
}
---

### Dataset Structure

- Built upon \[[DSEC]\]. The dataset is a set of annotations for select recordings.
- 12 annotated sequences with a total of 37,080 boxes, 502 tracks, and 769.2-second duration
- 7 object classes including cars, pedestrians, bicycles, motorcycles, buses, trucks, and trains
- Challenging scenarios including crowded urban areas and rural scenes with various lighting conditions
- Severe occlusions, making the dataset suitable for testing trackers' occlusion handling capabilities
- Event resolution 640 × 480
