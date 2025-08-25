---
{
    "name": "ev-CIVIL",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Anomaly Detection"
    ],
    "description": "Detection of civil infrastructure defects",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Figshare"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Figshare",
                "url": "https://figshare.com/s/825aec2714266fa40d29",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 25.99,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-based Civil Infrastructure Visual Defect Detection: ev-CIVIL Dataset and Benchmark",
        "doi": "10.48550/arXiv.2504.05679v1",
        "authors": [
            "Udayanga G. W. K. N. Gamage",
            "Xuanni Huo",
            "Luca Zanatta",
            "T Delbruck",
            "Cesar Cadena",
            "Matteo Fumagalli",
            "Silvia Tolu"
        ],
        "abstract": "Small Unmanned Aerial Vehicle (UAV) based visual inspections are a more efficient alternative to manual methods for examining civil structural defects, offering safe access to hazardous areas and significant cost savings by reducing labor requirements. However, traditional frame-based cameras, widely used in UAV-based inspections, often struggle to capture defects under low or dynamic lighting conditions. In contrast, Dynamic Vision Sensors (DVS), or event-based cameras, excel in such scenarios by minimizing motion blur, enhancing power efficiency, and maintaining high-quality imaging across diverse lighting conditions without saturation or information loss. Despite these advantages, existing research lacks studies exploring the feasibility of using DVS for detecting civil structural defects.Moreover, there is no dedicated event-based dataset tailored for this purpose. Addressing this gap, this study introduces the first event-based civil infrastructure defect detection dataset, capturing defective surfaces as a spatio-temporal event stream using DVS.In addition to event-based data, the dataset includes grayscale intensity image frames captured simultaneously using an Active Pixel Sensor (APS). Both data types were collected using the DAVIS346 camera, which integrates DVS and APS sensors.The dataset focuses on two types of defects: cracks and spalling, and includes data from both field and laboratory environments. The field dataset comprises 318 recording sequences,documenting 458 distinct cracks and 121 distinct spalling instances.The laboratory dataset includes 362 recording sequences, covering 220 distinct cracks and 308 spalling instances.Four realtime object detection models were evaluated on it to validate the dataset effectiveness.The results demonstrate the dataset robustness in enabling accurate defect detection and classification,even under challenging lighting conditions.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2504.05679"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2504.05679v1"
        },
        {
            "type": "github_page",
            "url": "https://github.com/gwgknudayanga/evCIVIL"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "680",
        "stereo": false
    },
    "bibtex": {
        "url": "https://arxiv.org/abs/2504.05679",
        "primaryclass": "cs.CV",
        "archiveprefix": "arXiv",
        "eprint": "2504.05679",
        "year": 2025,
        "author": "Udayanga G. W. K. N. Gamage and Xuanni Huo and Luca Zanatta and T Delbruck and Cesar Cadena and Matteo Fumagalli and Silvia Tolu",
        "title": "Event-based Civil Infrastructure Visual Defect Detection: ev-CIVIL Dataset and Benchmark",
        "type": "misc",
        "key": "gamage2025eventbasedcivilinfrastructurevisual"
    }
}
---

### Dataset Structure

- Divided into a field and a laboratory dataset
- Contains comprises 680 recording sequences

The field dataset comprises 318 recording sequences which covers about 80 minutes, documenting 458 distinct cracks and 121 distinct spalling instances. The laboratory dataset includes 362 recording sequences, covering 220 distinct cracks and 308 spalling instances.

For a given sequence the captured events and grayscales images were available in seperate .h5 files. The defects are labelled as bounding boxes together with their defect categories (whether crack or spalling defect) and those information is provided in ".npy" file.

This dataset contains the following files:

- evCIVIL-field dataset : Consist of 318 sequences collected from the field.
  =evCIVIL-laboratory dataset: Consist of 316 sequences captured inside the laboratory/office premise.

In both cases each recording sequence consist of events.h5, frames.h5 file and labels.npy file.
