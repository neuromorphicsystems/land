---
{
    "name": "TUM-Vie",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "IDS Camera uEye",
        "Bosch BMI160 IMU",
        "OptiTrack"
    ],
    "category": "Visual Navigation",
    "subcategory": [
        "SLAM",
        "Visual Odometry",
        "Visual Place Recognition"
    ],
    "task": "Visual navigation dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://go.vision.in.tum.de/tumvie",
                "format": "HDF5",
                "available": false
            }
        ],
        "size_gb": 361.58,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "TUM-VIE -  The TUM Stereo Visual-Inertial Event Dataset",
        "doi": "10.1109/iros51168.2021.9636728",
        "authors": [
            "Simon Klenk",
            "Jason Chui",
            "Nikolaus Demmel",
            "Daniel Cremers"
        ],
        "abstract": "Event cameras are bio-inspired vision sensors which measure per pixel brightness changes. They offer numerous bene\ufb01ts over traditional, frame-based cameras, including low latency, high dynamic range, high temporal resolution and low power consumption. Thus, these sensors are suited for robotics and virtual reality applications. To foster the development of 3D perception and navigation algorithms with event cameras, we present the TUM-VIE dataset. It consists of a large variety of handheld and head-mounted sequences in indoor and outdoor environments, including rapid motion during sports and high dynamic range scenarios. The dataset contains stereo event data, stereo grayscale frames at 20Hz as well as IMU data at 200Hz. Timestamps between all sensors are synchronized in hardware. The event cameras contain a large sensor of 1280x720 pixels, which is signi\ufb01cantly larger than the sensors used in existing stereo event datasets (at least by a factor of ten). We provide ground truth poses from a motion capture system at 120Hz during the beginning and end of each sequence, which can be used for trajectory evaluation. TUMVIE includes challenging sequences where state-of-the art visual SLAM algorithms either fail or result in large drift. Hence, our dataset can help to push the boundary of future research on event-based visual-inertial perception algorithms.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 74,
            "updated": "2025-06-15T10:07:10.841932"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2108.07329"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9636728"
        },
        {
            "type": "project_page",
            "url": "https://cvg.cit.tum.de/data/datasets/visual-inertial-event-dataset"
        }
    ],
    "full_name": "TUM Stereo Visual-Inertial Event Dataset (TUM-VIE)",
    "additional_metadata": {
        "sensor_resolution": "1280x720",
        "total_duration": "48 minutes",
        "synchronisation_method": "hardware",
        "stereo": true
    },
    "bibtex": {
        "pages": "8601--8608",
        "year": 2021,
        "month": "sep",
        "author": "Klenk, Simon and Chui, Jason and Demmel, Nikolaus and Cremers, Daniel",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{RSJ} {International} {Conference} on {Intelligent} {Robots} and {Systems} ({IROS})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/IROS51168.2021.9636728",
        "url": "https://ieeexplore.ieee.org/document/9636728/",
        "shorttitle": "{TUM}-{VIE}",
        "isbn": "978-1-66541-714-3",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "{TUM}-{VIE}: {The} {TUM} {Stereo} {Visual}-{Inertial} {Event} {Dataset}",
        "address": "Prague, Czech Republic",
        "type": "inproceedings",
        "key": "klenk_tum-vie_2021"
    }
}
---


### Dataset Structure 
TUM-VIE is an event camera dataset for developing 3D perception and navigation algorithms. It contains handheld and head-mounted sequences in indoor and outdoor environments with rapid motion during sports and high dynamic range. TUM-VIE includes challenging sequences where state-of-the art VIO fails or results in large drift. Hence, it can help to push the boundary on event-based visual-inertial algorithms.

The dataset contains:
- Stereo event data Prophesee Gen4 HD (1280x720 pixels)
- Stereo grayscale frames at 20Hz (1024x1024 pixels)
- IMU data at 200Hz
- 6dof motion capture data at 120Hz (beginning and end of each sequence)
- Contains 48 minutes of recordings
- 
Timestamps between all sensors are synchronized in hardware.

Adapted from: https://cvg.cit.tum.de/data/datasets/visual-inertial-event-dataset

### Dataset Files

| **Sequence name** | **Events left**                                                                                         | **Event Right**                                                                                          | **Images, IMU and GT-Poses**                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| mocap-1d-trans    | [events-left(1.4GB)](https://tumevent-vi.vision.in.tum.de/mocap-1d-trans/mocap-1d-trans-events_left.h5) | [event-right(1.3GB)](https://tumevent-vi.vision.in.tum.de/mocap-1d-trans/mocap-1d-trans-events_right.h5) | [vi-gt-data(0.31GB)](https://tumevent-vi.vision.in.tum.de/mocap-1d-trans/mocap-1d-trans-vi_gt_data.tar.gz) |
| mocap-3d-trans    | [events-left(1.9GB)](https://tumevent-vi.vision.in.tum.de/mocap-3d-trans/mocap-3d-trans-events_left.h5) | [event-right(1.8GB)](https://tumevent-vi.vision.in.tum.de/mocap-3d-trans/mocap-3d-trans-events_right.h5) | [vi-gt-data(0.28GB)](https://tumevent-vi.vision.in.tum.de/mocap-3d-trans/mocap-3d-trans-vi_gt_data.tar.gz) |
| mocap-6dof        | [events-left(1.2GB)](https://tumevent-vi.vision.in.tum.de/mocap-6dof/mocap-6dof-events_left.h5)         | [event-right(1.2GB)](https://tumevent-vi.vision.in.tum.de/mocap-6dof/mocap-6dof-events_right.h5)         | [vi-gt-data(0.19GB)](https://tumevent-vi.vision.in.tum.de/mocap-6dof/mocap-6dof-vi_gt_data.tar.gz)         |
| mocap-desk        | [events-left(2.4GB)](https://tumevent-vi.vision.in.tum.de/mocap-desk/mocap-desk-events_left.h5)         | [event-right(2.5GB)](https://tumevent-vi.vision.in.tum.de/mocap-desk/mocap-desk-events_right.h5)         | [vi-gt-data(0.31GB)](https://tumevent-vi.vision.in.tum.de/mocap-desk/mocap-desk-vi_gt_data.tar.gz)         |
| mocap-desk2       | [events-left(1.4GB)](https://tumevent-vi.vision.in.tum.de/mocap-desk2/mocap-desk2-events_left.h5)       | [event-right(1.3GB)](https://tumevent-vi.vision.in.tum.de/mocap-desk2/mocap-desk2-events_right.h5)       | [vi-gt-data(0.17GB)](https://tumevent-vi.vision.in.tum.de/mocap-desk2/mocap-desk2-vi_gt_data.tar.gz)       |
| mocap-shake       | [events-left(1.4GB)](https://tumevent-vi.vision.in.tum.de/mocap-shake/mocap-shake-events_left.h5)       | [event-right(1.4GB)](https://tumevent-vi.vision.in.tum.de/mocap-shake/mocap-shake-events_right.h5)       | [vi-gt-data(0.2GB)](https://tumevent-vi.vision.in.tum.de/mocap-shake/mocap-shake-vi_gt_data.tar.gz)        |
| mocap-shake2      | [events-left(1.2GB)](https://tumevent-vi.vision.in.tum.de/mocap-shake2/mocap-shake2-events_left.h5)     | [event-right(1.2GB)](https://tumevent-vi.vision.in.tum.de/mocap-shake2/mocap-shake2-events_right.h5)     | [vi-gt-data(0.2GB)](https://tumevent-vi.vision.in.tum.de/mocap-shake2/mocap-shake2-vi_gt_data.tar.gz)      |
| office-maze       | [events-left(9.5GB)](https://tumevent-vi.vision.in.tum.de/office-maze/office-maze-events_left.h5)       | [event-right(9.5GB)](https://tumevent-vi.vision.in.tum.de/office-maze/office-maze-events_right.h5)       | [vi-gt-data(1.2GB)](https://tumevent-vi.vision.in.tum.de/office-maze/office-maze-vi_gt_data.tar.gz)        |
| running-easy      | [events-left(4.3GB)](https://tumevent-vi.vision.in.tum.de/running-easy/running-easy-events_left.h5)     | [event-right(4.3GB)](https://tumevent-vi.vision.in.tum.de/running-easy/running-easy-events_right.h5)     | [vi-gt-data(0.56GB)](https://tumevent-vi.vision.in.tum.de/running-easy/running-easy-vi_gt_data.tar.gz)     |
| running-hard      | [events-left(4.1GB)](https://tumevent-vi.vision.in.tum.de/running-hard/running-hard-events_left.h5)     | [event-right(4.1GB)](https://tumevent-vi.vision.in.tum.de/running-hard/running-hard-events_right.h5)     | [vi-gt-data(0.55GB)](https://tumevent-vi.vision.in.tum.de/running-hard/running-hard-vi_gt_data.tar.gz)     |
| skate-easy        | [events-left(4.5GB)](https://tumevent-vi.vision.in.tum.de/skate-easy/skate-easy-events_left.h5)         | [event-right(4.5GB)](https://tumevent-vi.vision.in.tum.de/skate-easy/skate-easy-events_right.h5)         | [vi-gt-data(0.62GB)](https://tumevent-vi.vision.in.tum.de/skate-easy/skate-easy-vi_gt_data.tar.gz)         |
| skate-hard        | [events-left(4.8GB)](https://tumevent-vi.vision.in.tum.de/skate-hard/skate-hard-events_left.h5)         | [event-right(4.8GB)](https://tumevent-vi.vision.in.tum.de/skate-hard/skate-hard-events_right.h5)         | [vi-gt-data(0.66GB)](https://tumevent-vi.vision.in.tum.de/skate-hard/skate-hard-vi_gt_data.tar.gz)         |
| loop-floor0       | [events-left(17.9GB)](https://tumevent-vi.vision.in.tum.de/loop-floor0/loop-floor0-events_left.h5)      | [event-right(17.9GB)](https://tumevent-vi.vision.in.tum.de/loop-floor0/loop-floor0-events_right.h5)      | [vi-gt-data(2.7GB)](https://tumevent-vi.vision.in.tum.de/loop-floor0/loop-floor0-vi_gt_data.tar.gz)        |
| loop-floor1       | [events-left(16.0GB)](https://tumevent-vi.vision.in.tum.de/loop-floor1/loop-floor1-events_left.h5)      | [event-right(16.1GB)](https://tumevent-vi.vision.in.tum.de/loop-floor1/loop-floor1-events_right.h5)      | [vi-gt-data(2.5GB)](https://tumevent-vi.vision.in.tum.de/loop-floor1/loop-floor1-vi_gt_data.tar.gz)        |
| loop-floor2       | [events-left(14.6GB)](https://tumevent-vi.vision.in.tum.de/loop-floor2/loop-floor2-events_left.h5)      | [event-right(14.5GB)](https://tumevent-vi.vision.in.tum.de/loop-floor2/loop-floor2-events_right.h5)      | [vi-gt-data(2.3GB)](https://tumevent-vi.vision.in.tum.de/loop-floor2/loop-floor2-vi_gt_data.tar.gz)        |
| loop-floor3       | [events-left(16.1GB)](https://tumevent-vi.vision.in.tum.de/loop-floor3/loop-floor3-events_left.h5)      | [event-right(16.1GB)](https://tumevent-vi.vision.in.tum.de/loop-floor3/loop-floor3-events_right.h5)      | [vi-gt-data(2.5GB)](https://tumevent-vi.vision.in.tum.de/loop-floor3/loop-floor3-vi_gt_data.tar.gz)        |
| floor2-dark       | [events-left(6.2GB)](https://tumevent-vi.vision.in.tum.de/floor2-dark/floor2-dark-events_left.h5)       | [event-right(6.2GB)](https://tumevent-vi.vision.in.tum.de/floor2-dark/floor2-dark-events_right.h5)       | [vi-gt-data(0.83GB)](https://tumevent-vi.vision.in.tum.de/floor2-dark/floor2-dark-vi_gt_data.tar.gz)       |
| slide             | [events-left(11.7GB)](https://tumevent-vi.vision.in.tum.de/slide/slide-events_left.h5)                  | [event-right(11.7GB)](https://tumevent-vi.vision.in.tum.de/slide/slide-events_right.h5)                  | [vi-gt-data(1.9GB)](https://tumevent-vi.vision.in.tum.de/slide/slide-vi_gt_data.tar.gz)                    |
| bike-easy         | [events-left(16.9GB)](https://tumevent-vi.vision.in.tum.de/bike-easy/bike-easy-events_left.h5)          | [event-right(16.8GB)](https://tumevent-vi.vision.in.tum.de/bike-easy/bike-easy-events_right.h5)          | [vi-gt-data(2.7GB)](https://tumevent-vi.vision.in.tum.de/bike-easy/bike-easy-vi_gt_data.tar.gz)            |
| bike-hard         | [events-left(16.6GB)](https://tumevent-vi.vision.in.tum.de/bike-hard/bike-hard-events_left.h5)          | [event-right(16.3GB)](https://tumevent-vi.vision.in.tum.de/bike-hard/bike-hard-events_right.h5)          | [vi-gt-data(2.7GB)](https://tumevent-vi.vision.in.tum.de/bike-hard/bike-hard-vi_gt_data.tar.gz)            |
| bike-dark         | [events-left(14.4GB)](https://tumevent-vi.vision.in.tum.de/bike-night/bike-night-events_left.h5)        | [event-right(14.3GB)](https://tumevent-vi.vision.in.tum.de/bike-night/bike-night-events_right.h5)        | [vi-gt-data(1.9GB)](https://tumevent-vi.vision.in.tum.de/bike-night/bike-night-vi_gt_data.tar.gz)          |