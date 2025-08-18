---
{
    "name": "EBCD",
    "aliases": [],
    "year": 2025,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Custom Simulator"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Pedestrian Detection",
        "Vehicle Detection"
    ],
    "task": "Pedestrian and vehicle detection in dynamic outdoor environments",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "IEEE Dataport"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "IEEE Dataport",
                "url": "https://ieee-dataport.org/documents/event-based-crossing-dataset-ebcd",
                "format": "CSV",
                "available": true,
                "doi": "10.1109/IEEEDATA.2025.3561760"
            }
        ],
        "size_gb": 0.825,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Crossing Dataset (EBCD)",
        "doi": "10.48550/arXiv.2503.17499v1",
        "authors": [
            "Joey Mul\u00e9",
            "Dhandeep Challagundla",
            "Rachit Saini",
            "Riadul Islam"
        ],
        "abstract": "Event-based vision revolutionizes traditional image sensing by capturing asynchronous intensity variations rather than static frames, enabling ultrafast temporal resolution, sparse data encoding, and enhanced motion perception. While this paradigm offers significant advantages, conventional event-based datasets impose a fixed thresholding constraint to determine pixel activations, severely limiting adaptability to real-world environmental fluctuations. Lower thresholds retain finer details but introduce pervasive noise, whereas higher thresholds suppress extraneous activations at the expense of crucial object information. To mitigate these constraints, we introduce the Event-Based Crossing Dataset (EBCD), a comprehensive dataset tailored for pedestrian and vehicle detection in dynamic outdoor environments, incorporating a multi-thresholding framework to refine event representations. By capturing event-based images at ten distinct threshold levels (4, 8, 12, 16, 20, 30, 40, 50, 60, and 75), this dataset facilitates an extensive assessment of object detection performance under varying conditions of sparsity and noise suppression. We benchmark state-of-the-art detection architectures-including YOLOv4, YOLOv7, EfficientDet-b0, MobileNet-v1, and Histogram of Oriented Gradients (HOG)-to experiment upon the nuanced impact of threshold selection on detection performance. By offering a systematic approach to threshold variation, we foresee that EBCD fosters a more adaptive evaluation of event-based object detection, aligning diverse neuromorphic vision with real-world scene dynamics. We present the dataset as publicly available to propel further advancements in low-latency, high-fidelity neuromorphic imaging: https://ieee-dataport.org/documents/event-based-crossing-dataset-ebcd",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2503.17499"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2503.17499"
        },
        {
            "type": "github_page",
            "url": "https://github.com/joeduman/Thresholded_event-based-crossing-dataset"
        }
    ],
    "full_name": "Event-Based Crossing Dataset (EBCD)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "url": "https://arxiv.org/abs/2503.17499",
        "primaryclass": "cs.CV",
        "archiveprefix": "arXiv",
        "eprint": "2503.17499",
        "year": 2025,
        "author": "Joey Mul\u00e9 and Dhandeep Challagundla and Rachit Saini and Riadul Islam",
        "title": "Event-Based Crossing Dataset (EBCD)",
        "type": "misc",
        "key": "mul\u00e92025eventbasedcrossingdatasetebcd"
    }
}
---

### Dataset Structure
