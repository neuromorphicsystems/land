---
{
    "name": "SPADES",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4",
        "ICNS Event Simulator"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Satellite Pose Estimation",
        "Space Datasets"
    ],
    "description": "Satellite Pose Estimation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Download link is not yet active (https://cvi2.uni.lu/datasets/spades-dataset/)",
        "dataset_links": []
    },
    "paper": {
        "title": "SPADES: A Realistic Spacecraft Pose Estimation Dataset using Event Sensing",
        "doi": "10.1109/ICRA57147.2024.10611231",
        "authors": [
            "Arunkumar Rathinam",
            "Haytam Qadadri",
            "Djamila Aouada"
        ],
        "abstract": "In recent years, there has been a growing demand for improved autonomy for in-orbit operations such as rendezvous, docking, and proximity manoeuvres, leading to increased interest in employing Deep Learning-based Spacecraft Pose Estimation techniques. However, due to limited access to real target datasets, algorithms are often trained using synthetic data and applied in the real domain, resulting in a performance drop due to the domain gap. State-of-the-art approaches employ Domain Adaptation techniques to mitigate this issue. In the search for viable solutions, event sensing has been explored in the past and shown to reduce the domain gap between simulations and real-world scenarios. Event sensors have made significant advancements in hardware and software in recent years. Moreover, the characteristics of the event sensor offer several advantages in space applications compared to RGB sensors. To facilitate further training and evaluation of DL-based models, we introduce a new dataset, SPADES, comprising real event data acquired in a controlled laboratory environment and simulated event data using the same camera intrinsics. Furthermore, we introduce an image-based event representation that performs better than existing representations. In addition, we propose an effective data filtering method to improve the quality of training data, thus enhancing model performance. A multifaceted baseline evaluation was conducted using different event representations, event filtering strategies, and algorithmic frameworks, and the results are summarized. The dataset will be made available at http://cvi2.uni.lu/spades.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 8,
            "updated": "2025-07-02T14:54:46.798625"
        },
        {
            "source": "crossref",
            "count": 2,
            "updated": "2025-07-02T14:54:47.106234"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2311.05310"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10611231"
        },
        {
            "type": "project_page",
            "url": "http://cvi2.uni.lu/spades"
        }
    ],
    "full_name": "SPAcecraft Pose Estimation Dataset using Event Sensing (SPADES)",
    "additional_metadata": {
        "num_classes": "4",
        "num_recordings": "32"
    },
    "bibtex": {
        "pages": "11760--11766",
        "year": 2024,
        "month": "may",
        "author": "Rathinam, Arunkumar and Qadadri, Haytam and Aouada, Djamila",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE} {International} {Conference} on {Robotics} and {Automation} ({ICRA})",
        "urldate": "2024-12-14",
        "language": "en",
        "doi": "10.1109/ICRA57147.2024.10611231",
        "url": "https://ieeexplore.ieee.org/document/10611231/",
        "shorttitle": "{SPADES}",
        "isbn": "9798350384574",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{SPADES}: {A} {Realistic} {Spacecraft} {Pose} {Estimation} {Dataset} using {Event} {Sensing}",
        "address": "Yokohama, Japan",
        "type": "inproceedings",
        "key": "rathinam_spades_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/AERO53065.2022.9843439",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.actaastro.2023.08.001",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.actaastro.2023.01.002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10160531",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s40295-018-00140-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2020.3009687",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1155/2023/9944614",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/AERO.2018.8396425",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00343",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01216",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3140819",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3023597",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-49409-8_75",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2021.702765",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1177/027836499501400301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00140",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IWSSIP48289.2020.9145130",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAC.2018.2797162",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00812",
            "source": "crossref"
        },
        {
            "title": "SEENIC: dataset for Spacecraft posE Estimation with NeuromorphIC vision",
            "source": "crossref"
        },
        {
            "title": "Proba-2 mission and new technologies overview",
            "source": "crossref"
        },
        {
            "title": "Zero-g lab: A multi-purpose facility for emulating space operations",
            "source": "crossref"
        },
        {
            "title": "Spacecraft Pose Estimation Dataset (SPEED)",
            "source": "crossref"
        },
        {
            "title": "SPARK 2022 Dataset: Spacecraft Detection and Trajectory Estimation",
            "source": "crossref"
        },
        {
            "title": "SHIRT: Satellite Hardware-In-the-loop Rendezvous Trajectories Dataset",
            "source": "crossref"
        },
        {
            "title": "Autonomous visual navigation for spacecraft on-orbit operations",
            "source": "crossref"
        },
        {
            "title": "Event Camera Evaluation Kit 4 HD IMX636 Prophesee-Sony",
            "source": "crossref"
        },
        {
            "title": "How to calibrate your event camera",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Accurate and Efficient Frame-based Event Representation for AER Object Recognition",
            "source": "crossref"
        },
        {
            "title": "On-Orbit Relative Navigation Near a Known Target Using Monocular Vision and Convolutional Neural Networks for Pose Estimation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Real portion of the dataset contains 4 light levels
- Real portion of the dataset contains 32 recordings

| Property          | Synthetic              | Real             |
| ----------------- | ---------------------- | ---------------- |
| Sensor resolution | 1280x720               | 1280x720         |
| Dataset size      | 179,400 (no. of poses) | 16,930           |
| No. Trajectories  | 300                    | 32               |
| No. poses/traj    | 598                    | 529 (avg.)       |
| Interpolation     | 80% Spline + 20% Helix |                  |
| Range             | 3.5 - 12 m             | 3,5 - 9 m        |
| Range dist.       | Close, Mid, Far, Limit | Close, Mid, Far  |
| Lighting          | Easy, Hard             | L1, L2, L3, L4   |
| Rendering         | Unreal Engine (RGB)    |                  |
| Event Camera      | ICNS Emulator          | Prop. EVKAHD     |
| Background        | Earth                  |                  |
| Filtering         | Bbox/Mask              | Min. Event count |
