---
{
    "name": "ADD",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ATIS"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Autonomous Driving",
        "Classification Datasets"
    ],
    "task": "Driving Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "Form submission required to access dataset",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://www.prophesee.ai/2020/01/24/prophesee-gen1-automotive-detection-dataset/",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 750.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "A Large Scale Event-based Detection Dataset for Automotive",
        "doi": "10.48550/arXiv.2001.08499",
        "authors": [
            "Pierre de Tournemire",
            "Davide Nitti",
            "Etienne Perot",
            "Davide Migliore",
            "Amos Sironi"
        ],
        "abstract": "We introduce the first very large detection dataset for event cameras. The dataset is composed of more than 39 hours of automotive recordings acquired with a 304x240 ATIS sensor. It contains open roads and very diverse driving scenarios, ranging from urban, highway, suburbs and countryside scenes, as well as different weather and illumination conditions. Manual bounding box annotations of cars and pedestrians contained in the recordings are also provided at a frequency between 1 and 4Hz, yielding more than 255,000 labels in total. We believe that the availability of a labeled dataset of this size will contribute to major advances in event-based vision tasks such as object detection and classification. We also expect benefits in other tasks such as optical flow, structure from motion and tracking, where for example, the large amount of data can be leveraged by self-supervised learning methods.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 115,
            "updated": "2025-01-06 16:05:34.887720"
        },
        {
            "source": "scholar",
            "count": 159,
            "updated": "2025-06-23T12:11:18.913881"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2001.08499v3"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2001.08499"
        },
        {
            "type": "project_page",
            "url": "https://www.prophesee.ai/2020/01/24/prophesee-gen1-automotive-detection-dataset/"
        }
    ],
    "full_name": "ATIS Automotive Detection Dataset (ADD)",
    "additional_metadata": {
        "recording_duration": "39 hours",
        "num_recordings": "121"
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Machine Learning, Computer Science - Robotics, Electrical Engineering and Systems Science - Image and Video Processing",
        "note": "arXiv:2001.08499 [cs]",
        "year": 2020,
        "month": "jan",
        "author": "Tournemire, Pierre de and Nitti, Davide and Perot, Etienne and Migliore, Davide and Sironi, Amos",
        "publisher": "arXiv",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.48550/arXiv.2001.08499",
        "url": "http://arxiv.org/abs/2001.08499",
        "title": "A {Large} {Scale} {Event}-based {Detection} {Dataset} for {Automotive}",
        "type": "misc",
        "key": "tournemire_large_2020"
    }
}
---

### Dataset Structure

- Contains over 39 hours of driving recordings
- Dataset contains 121 recordings
