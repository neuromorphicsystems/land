---
{
    "name": "MUSES",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "TRI023S-CC",
        "RS-LiDAR-M1",
        "Navtech CIR-DEV",
        "simpleRTK2B Fusion"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Autonomous Driving",
        "Pedestrian Detection",
        "Vehicle Detection"
    ],
    "description": "Autonomous Driving",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "Registration is required to download the full dataset",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://muses.vision.ee.ethz.ch/download",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 101.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "MUSES: The Multi-sensor Semantic Perception Dataset for\u00a0Driving Under Uncertainty",
        "doi": "10.1007/978-3-031-73202-7_2",
        "authors": [
            "Tim Br\u00f6dermann",
            "David Bruggemann",
            "Christos Sakaridis",
            "Kevin Ta",
            "Odysseas Liagouris",
            "Jason Corkill",
            "Luc Van Gool"
        ],
        "abstract": "Achieving level-5 driving automation in autonomous vehicles necessitates a robust semantic visual perception system capable of parsing data from different sensors across diverse conditions. However, existing semantic perception datasets often lack important non-camera modalities typically used in autonomous vehicles, or they do not exploit such modalities to aid and improve semantic annotations in challenging conditions. To address this, we introduce MUSES, the MUlti-SEnsor Semantic perception dataset for driving in adverse conditions under increased uncertainty. MUSES includes synchronized multimodal recordings with 2D panoptic annotations for 2500 images captured under diverse weather and illumination. The dataset integrates a frame camera, a lidar, a radar, an event camera, and an IMU/GNSS sensor. Our new two-stage panoptic annotation protocol captures both class-level and instance-level uncertainty in the ground truth and enables the novel task of uncertainty-aware panoptic segmentation we introduce, along with standard semantic and panoptic segmentation. MUSES proves both effective for training and challenging for evaluating models under diverse visual conditions, and it opens new avenues for research in multimodal and uncertainty-aware dense semantic perception. Our dataset and benchmark are publicly available at https://muses.vision.ee.ethz.ch.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 2,
            "updated": "2025-06-14T11:39:13.758047"
        },
        {
            "source": "scholar",
            "count": 16,
            "updated": "2025-06-14T11:39:13.432168"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2401.12761v4"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-73202-7_2"
        },
        {
            "type": "project_page",
            "url": "https://muses.vision.ee.ethz.ch/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/timbroed/MUSES"
        }
    ],
    "full_name": " MUlti-SEnsor Semantic perception dataset",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "21--38",
        "year": 2025,
        "editor": "Leonardis, Ale\u0161 and Ricci, Elisa and Roth, Stefan and Russakovsky, Olga and Sattler, Torsten and Varol, G\u00fcl",
        "author": "Br\u00f6dermann, Tim and Bruggemann, David and Sakaridis, Christos and Ta, Kevin and Liagouris, Odysseas and Corkill, Jason and Van Gool, Luc",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer {Vision} \u2013 {ECCV} 2024",
        "doi": "10.1007/978-3-031-73202-7_2",
        "isbn": "978-3-031-73202-7",
        "title": "{MUSES}: {The} {Multi}-sensor {Semantic} {Perception} {Dataset} for {Driving} {Under} {Uncertainty}",
        "address": "Cham",
        "type": "inproceedings",
        "key": "brodermann_muses_2025"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICCV51070.2023.01846",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9196884",
            "source": "crossref"
        },
        {
            "doi": "10.1007/BFb0109870",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01170",
            "source": "crossref"
        },
        {
            "doi": "10.23919/ACC50511.2021.9483203",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC57777.2023.10422432",
            "source": "crossref"
        },
        {
            "doi": "10.1177/02783649231160195",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01164",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00895",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01234-2_49",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00135",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2018.2791533",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.350",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01182-4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.02069",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV57701.2024.00295",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6248074",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2926463",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00963",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00986",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364916679498",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19818-2_4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MCS.2016.2602087",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.534",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793925",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-99762-9_1",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364920979368",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01261-8_42",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1072-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3045882",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01059",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48506.2021.9562089",
            "source": "crossref"
        },
        {
            "doi": "10.1186/s13640-018-0251-4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2023.3256926",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00252",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19830-4_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2017.2723926",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2019.00190",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341192",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00142",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC48978.2021.9565009",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CDC49753.2023.10384075",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00271",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58539-6_11",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_25",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1020-z",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.02066",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00681",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaw6661",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

##### Recordings

- Synchronized multimodal recordings from **frame camera**, **lidar**, **radar** and **event camera** with panoptic annotations.
- For each adverse-condition scene a corresponding **reference frame** of the same scene taken under normal clear weather and daytime is provided.
- All the sensors are mounted over the windshield.
- The recordings have been **acquired in Switzerland** during the period between November 2022 and July 2023.
- The dataset mostly consists of recordings which took place in **urban areas** but also on **highways** and in **rural regions**.

##### Volume

- 2500 multimodal scenes with fine pixel-level annotations.
- Split in 500 daytime and clear weather and 2000 adverse-condition scenes. Where the latter are evenly distributed between 1000 daytime (333/334/333 in fog/rain/snow) and 1000 nighttime (250/250/250/250 in clear/fog/rain/snow) scenes.
- Manually selected scenes from the recordings to maximize complexity and diversity of included scenes.
- Global geographical train/val/test split across all conditions.

##### Annotations

- High-quality annotations created by a professional team of annotators.
- Sophisticated two-step annotation protocol that allows for the incorporation of both **class level** and **instance level uncertainty**.
- Two cascaded annotation stages to distinguish between invalid and valid regions
- Two annotation outputs:
  - Panoptic segmentation annotation
  - Tertiary mask with class level and instance-level uncertainty annotations, which enables the new task of uncertainty-aware panoptic segmentation
- 19 semantic classes, fully compatible with the evaluation classes of the [Cityscapes](https://www.cityscapes-dataset.com/) dataset.

##### Sensor Specifications

- Frame-based camera: 8-bit RGB, 30 Hz, 1920×1080, HFOV: 77°, VFOV: 43°
- Lidar (MEMS): 10 Hz, avg. angular resolution: 0.2°, range: 200 m, HFOV: 120°, VFOV: 25°, 75K points/scan
- Radar (FMCW): 4 Hz, range resolution: 43.8 mm, horizontal angular, resolution: 0.9°, range: 330 m
- Event camera: 1280×720, 15M events/s, HFOV: 64°, VFOV: 39°
- IMU/GNSS: Fusion RTK accuracy: \<10cm, 30 Hz

Please refer to the [MUSES SDK](https://github.com/timbroed/MUSES) for examples on how to read and process the sensor data.

Source: https://muses.vision.ee.ethz.ch/
