---
{
    "name": "DDD17",
    "aliases": [],
    "year": 2017,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Autonomous Driving"
    ],
    "task": "Steering Prediction",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Other"
        ],
        "file_formats": [],
        "availability_comment": "Original dataset is no longer available. Superseded by DDD20",
        "dataset_links": [],
        "size_gb": 432.2,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "DDD17: End-to-end DAVIS driving dataset",
        "doi": "10.48550/arXiv.1711.01458",
        "authors": [
            "Jonathan Binas",
            "Daniel Neil",
            "Shih-Chii Liu",
            "Tobi Delbruck"
        ],
        "abstract": "Event cameras, such as dynamic vision sensors (DVS), and dynamic and active pixel vision sensors (DAVIS) can supplement other autonomous driving sensors by providing a concurrent  stream of standard active pixel sensor (APS) images and DVS temporal contrast events. The APS stream is a sequence of standard grayscale global-shutter image sensor frames. The DVS events represent brightness changes occurring at a particular moment, with a jitter of about a millisecond under most lighting conditions. They have a dynamic range of >120 dB and effective frame rates >1 kHz at data rates comparable to 30 fps (frames/second) image sensors. To overcome some of the limitations of current image acquisition technology, we investigate in this work the use of the combined DVS and APS streams in end-to-end driving applications. The dataset DDD17 accompanying this paper is the first open dataset of annotated DAVIS driving recordings. DDD17 has over 12 h of a 346x260 pixel DAVIS sensor recording highway and city driving in daytime, evening, night, dry and wet weather conditions, along with vehicle speed, GPS position, driver steering, throttle, and brake captured from the car\u2019s on-board diagnostics interface. As an example application, we performed a preliminary end-to-end learning study of using a convolutional neural network that is trained to predict the instantaneous steering angle from DVS and APS visual data.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 240,
            "updated": "2025-01-06 16:08:34.202369"
        },
        {
            "source": "scholar",
            "count": 261,
            "updated": "2025-07-03T08:41:28.232294"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1711.01458"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/1711.01458"
        },
        {
            "type": "project_page",
            "url": "https://docs.google.com/document/d/1HM0CSmjO8nOpUeTvmPjopcBcVCk7KXvLUuiZFS6TWSg/pub"
        }
    ],
    "full_name": "DAVIS Driving Dataset 2017 (DDD17)",
    "additional_metadata": {
        "total_duration": "12 hours",
        "num_days": "6",
        "total_distance": "1000 km",
        "location": "Switzerland and Germany",
        "file_format": "HDF5",
        "num_categories": "5"
    },
    "connected_datasets": [
        "DDD20"
    ],
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:1711.01458 [cs]",
        "year": 2017,
        "month": "nov",
        "author": "Binas, Jonathan and Neil, Daniel and Liu, Shih-Chii and Delbruck, Tobi",
        "publisher": "arXiv",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.48550/arXiv.1711.01458",
        "url": "http://arxiv.org/abs/1711.01458",
        "shorttitle": "{DDD17}",
        "title": "{DDD17}: {End}-{To}-{End} {DAVIS} {Driving} {Dataset}",
        "type": "misc",
        "key": "binas_ddd17_2017"
    }
}
---

### Dataset Structure

- Contains over 12 hours of driving data over 6 days.
- Recorded 1000 km in Switzerland and Germany
- Files are stored as HDF5 files.
- Recordings include 5 different environmental conditions
