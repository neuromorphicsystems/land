---
{
    "name": "e-STURT",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Star Tracking",
        "Active Sensing"
    ],
    "description": "Event-based Star Tracking under Spacecraft Jitter",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "Dataset is available on Zenodo. record is publicly accessible, but files are restricted to users with access.",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/14031911",
                "format": "CSV",
                "available": false,
                "doi": "10.5281/zenodo.14031911"
            }
        ],
        "size_gb": 1.6,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-based Star Tracking under Spacecraft Jitter: the e-STURT Dataset",
        "doi": "10.48550/arXiv.2505.12588",
        "authors": [
            "Samya Bagchi",
            "Peter Anastasiou",
            "Matthew Tetlow",
            "Tat-Jun Chin",
            "Yasir Latif"
        ],
        "abstract": "Jitter degrades a spacecraft's fine-pointing ability required for optical communication, earth observation, and space domain awareness. Development of jitter estimation and compensation algorithms requires high-fidelity sensor observations representative of on-board jitter. In this work, we present the Event-based Star Tracking Under Jitter (e-STURT) dataset -- the first event camera based dataset of star observations under controlled jitter conditions. Specialized hardware employed for the dataset emulates an event-camera undergoing on-board jitter. While the event camera provides asynchronous, high temporal resolution star observations, systematic and repeatable jitter is introduced using a micrometer accurate piezoelectric actuator. Various jitter sources are simulated using distinct frequency bands and utilizing both axes of motion. Ground-truth jitter is captured in hardware from the piezoelectric actuator. The resulting dataset consists of 200 sequences and is made publicly available. This work highlights the dataset generation process, technical challenges and the resulting limitations. To serve as a baseline, we propose a high-frequency jitter estimation algorithm that operates directly on the event stream. The e-STURT dataset will enable the development of jitter aware algorithms for mission critical event-based space sensing applications.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2505.12588"
        }
    ],
    "full_name": "Event-based Star Tracking Under Jitter (e-STURT) dataset",
    "additional_metadata": {},
    "bibtex": {
        "copyright": "Creative Commons Attribution Non Commercial Share Alike 4.0 International",
        "year": 2025,
        "publisher": "arXiv",
        "title": "Event-based Star Tracking under Spacecraft Jitter: the e-STURT Dataset",
        "keywords": "Computer Vision and Pattern Recognition (cs.CV), Signal Processing (eess.SP), FOS: Computer and information sciences, FOS: Computer and information sciences, FOS: Electrical engineering, electronic engineering, information engineering, FOS: Electrical engineering, electronic engineering, information engineering",
        "author": "Bagchi, Samya and Anastasiou, Peter and Tetlow, Matthew and Chin, Tat-Jun and Latif, Yasir",
        "url": "https://arxiv.org/abs/2505.12588",
        "doi": "10.48550/ARXIV.2505.12588",
        "type": "misc",
        "key": "https://doi.org/10.48550/arxiv.2505.12588"
    }
}
---

# Dataset Structure:

Each main folder contains the following subfolders:

1. No Jitter: Baseline recordings without induced vibrations
   - camera[XXXXXXXX]_[YYMMDD]_[HHMMSS].bias 
   - camera[XXXXXXXX]_[YYMMDD]_[HHMMSS].csv 

2. Vibration Subfolders: Nine subfolders with different vibration patterns
   - Naming convention: pos[A]_vel[B]_[C]_sst[D]_[AXIS]
   - Each subfolder contains:
     - camera[XXXXXXXX]_[YYMMDD]_[HHMMSS].bias 
     - camera[XXXXXXXX]_[YYMMDD]_[HHMMSS].csv 
     - out_[YYYY]_[MM]_[DD]-[HH]-[MM]-[SS]_pos[A]_vel[B]_[C]_sst[D]_[AXIS]_shaker_log_cleaned.csv 

Vibration Patterns:

The vibration patterns are categorized as follows:

1. Frequency Ranges:
   - 0-30 Hz: pos0.1_vel1_6_sst0.05
   - 30-100 Hz: pos0.1_vel6_20_sst0.05
   - 100-200 Hz: pos0.1_vel20_40_sst0.05

2. Vibration Axes:
   - MOVMAC1S: First axis vibration only
   - MOVMAC2S: Second axis vibration only
   - MOVMACS: Both axes vibration

File Descriptions:

1. .bias files: Contains bias settings for the event-based camera (115 Bytes each)

2. .csv files (camera events):
   - Large files (223-260 MB) containing event data from the event-based camera
   - Filename format: camera[XXXXXXXX]_[YYMMDD]_[HHMMSS].csv
   - XXXXXXXX: Unique camera identifier
   - YYMMDD: Date of recording
   - HHMMSS: Time of recording

3. shaker_log_cleaned.csv files:
   - Ground truth vibration data (0.5-1.0 MB)
   - Filename format: out_[YYYY]_[MM]_[DD]-[HH]-[MM]-[SS]_pos[A]_vel[B]_[C]_sst[D]_[AXIS]_shaker_log_cleaned.csv
   - YYYY_MM_DD-HH-MM-SS: Timestamp of the recording
   - A, B, C, D: Parameters of the vibration setup
   - AXIS: Indicates which axis or axes were vibrated (MOVMAC1S, MOVMAC2S, or MOVMACS)

Dataset Size:

- Total number of main folders: 20
- Subfolders per main folder: 10 (1 no_jitter + 9 vibration patterns)

Usage Notes:

This dataset is designed for research on event-based cameras and their response to various vibration patterns. It can be used for:

1. Analyzing the effect of different vibration frequencies on event-based camera output
2. Studying single-axis vs. dual-axis vibrations in event-based vision
3. Developing algorithms for vibration compensation or analysis in event-based vision systems
4. Comparing event-based camera performance under different vibration conditions

Other notes:


Episode 2 contains incomplete data due to piezoelectric actuator stiction. Only mid-frequency jitter data along Axis 1 is available; Axis 2 and Both Axes configurations are missing. High-frequency (100–200 Hz) data is also unavailable due to actuator malfunction.

Episode 20 deviates from the standard synchronization spike protocol used in later episodes (see paper, Section 4B). It originates from an earlier experiment and lacks the updated sync logic, so alternative synchronization with ground truth may be necessary.

Additionally, zeros (0 s) in the shaker_log_cleaned.csv files should be treated as missing data (NaNs).

Sourced: https://zenodo.org/records/14031911