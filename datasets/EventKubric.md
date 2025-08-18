---
{
    "name": "EventKubric",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Object Tracking",
        "Track Any Point (TAP)"
    ],
    "task": "Tracking Any Point",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1d5Yi1q6ZFom3Q_VrELzXjrxE5aC2ezOk",
                "format": "Numpy",
                "available": true
            }
        ]
    },
    "paper": {
        "title": "ETAP: Event-based Tracking of Any Point",
        "doi": "10.48550/arXiv.2412.00133",
        "authors": [
            "Friedhelm Hamann",
            "Daniel Gehrig",
            "Filbert Febryanto",
            "Kostas Daniilidis",
            "Guillermo Gallego"
        ],
        "abstract": "Tracking any point (TAP) recently shifted the motion estimation paradigm from focusing on individual salient points with local templates to tracking arbitrary points with global image contexts. However, while research has mostly focused on driving the accuracy of models in nominal settings, addressing scenarios with difficult lighting conditions and high-speed motions remains out of reach due to the limitations of the sensor. This work addresses this challenge with the first event camera-based TAP method. It leverages the high temporal resolution and high dynamic range of event cameras for robust high-speed tracking, and the global contexts in TAP methods to handle asynchronous and sparse event measurements. We further extend the TAP framework to handle event feature variations induced by motion - thereby addressing an open challenge in purely event-based tracking - with a novel feature alignment loss which ensures the learning of motion-robust features. Our method is trained with data from a new data generation pipeline and systematically ablated across all design decisions. Our method shows strong cross-dataset generalization and performs 135% better on the average Jaccard metric than the baselines. Moreover, on an established feature tracking benchmark, it achieves a 19% improvement over the previous best event-only method and even surpasses the previous best events-and-frames method by 3.7%.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2412.00133"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2412.00133"
        },
        {
            "type": "github_page",
            "url": "https://github.com/tub-rip/ETAP"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "sensor_resolution": "512 x 512",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Machine Learning, Computer Science - Robotics",
        "note": "arXiv:2412.00133 [cs]",
        "year": 2024,
        "month": "nov",
        "author": "Hamann, Friedhelm and Gehrig, Daniel and Febryanto, Filbert and Daniilidis, Kostas and Gallego, Guillermo",
        "publisher": "arXiv",
        "urldate": "2024-12-10",
        "language": "en",
        "doi": "10.48550/arXiv.2412.00133",
        "url": "http://arxiv.org/abs/2412.00133",
        "title": "Event-based {Tracking} of {Any} {Point} with {Motion}-{Robust} {Correlation} {Features}",
        "type": "misc",
        "key": "hamann_event-based_2024"
    }
}
---


### Dataset Structure

- Dataset generated using Kubric, upsampled using FILM, and converted to events using ESIM
- Recordings have a resolution of 512 x 512 pixels

| **Dataset**            | **Source** | **Events** | **No. Samples** | **Resolution** | **fps (Hz)** | **sample duration (s)** | **IMO** | **optical flow** | **depth** | **point tracking** | **segmentations** |
| ---------------------- | ---------- | ---------- | --------------- | -------------- | ------------ | ----------------------- | ------- | ---------------- | --------- | ------------------ | ----------------- |
| TAP-Vid Kubric, MOVI-F | 3D PBR     | none       | ~ 10000         | 512 x 512      | 12           | 2                       | Y       | Y                | Y         | Y                  | Y                 |
| [[BlinkFlow]]          | 3D BR      | synthetic  | 3587            | 640 × 480      | 10           | 1                       | Y       | Y                | Y         | N                  | Y                 |
| [[MultiFlow]]          | 2D warp    | synthetic  | 12100           | 512 × 384      | 100          | 0.5                     | Y       | Y*               | N         | N                  | N                 |
| [[EventKubric ]]       | 3D PBR     | synthetic  | 10173           | 512 × 512      | 48           | 2                       | Y       | Y                | Y         | Y                  | Y                 |