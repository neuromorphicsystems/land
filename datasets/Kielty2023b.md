---
{
    "name": "Kielty2023b",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E",
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Seatbelt Detection"
    ],
    "description": "Seatbelt detection dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "No download links could be found in the paper.",
        "dataset_links": [],
        "size_gb": 0.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Neuromorphic Seatbelt State Detection for In-Cabin Monitoring with Event Cameras",
        "doi": "10.48550/arXiv.2308.07802",
        "authors": [
            "Paul Kielty",
            "Cian Ryan",
            "Mehdi Sefidgar Dilmaghani",
            "Waseem Shariff",
            "Joe Lemley",
            "Peter Corcoran"
        ],
        "abstract": "Neuromorphic vision sensors, or event cameras, differ from conventional cameras in that they do not capture images at a specified rate. Instead, they asynchronously log local brightness changes at each pixel. As a result, event cameras only record changes in a given scene, and do so with very high temporal resolution, high dynamic range, and low power requirements. Recent research has demonstrated how these characteristics make event cameras extremely practical sensors in driver monitoring systems (DMS), enabling the tracking of high-speed eye motion and blinks. This research provides a proof of concept to expand event-based DMS techniques to include seatbelt state detection. Using an event simulator, a dataset of 108,691 synthetic neuromorphic frames of car occupants was generated from a near-infrared (NIR) dataset, and split into training, validation, and test sets for a seatbelt state detection algorithm based on a recurrent convolutional neural network (CNN). In addition, a smaller set of real event data was collected and reserved for testing. In a binary classification task, the fastened/unfastened frames were identified with an F1 score of 0.989 and 0.944 on the simulated and real test sets respectively. When the problem extended to also classify the action of fastening/unfastening the seatbelt, respective F1 scores of 0.964 and 0.846 were achieved.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-09-19T07:09:17.856553"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2308.07802"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "4",
        "num_subjects": "6"
    },
    "bibtex": {
        "copyright": "Creative Commons Attribution 4.0 International",
        "year": 2023,
        "publisher": "arXiv",
        "title": "Neuromorphic Seatbelt State Detection for In-Cabin Monitoring with Event Cameras",
        "keywords": "Computer Vision and Pattern Recognition (cs.CV), FOS: Computer and information sciences, FOS: Computer and information sciences",
        "author": "Kielty, Paul and Ryan, Cian and Dilmaghani, Mehdi Sefidgar and Shariff, Waseem and Lemley, Joe and Corcoran, Peter",
        "url": "https://arxiv.org/abs/2308.07802",
        "doi": "10.48550/ARXIV.2308.07802",
        "type": "article",
        "key": "https://doi.org/10.48550/arxiv.2308.07802"
    }
}
---

# Dataset Description

The final dataset contained 108,691 synthetic event frames and 8,317 real event frames.