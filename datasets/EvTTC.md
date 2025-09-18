---
{
    "name": "EvTTC",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "FLIR Blackfly S",
        "LIvox HAP"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Vehicle Detection",
        "Stereo",
        "Collision Detection",
        "Pedestrian Detection"
    ],
    "description": " Time-to-Collision Estimation Dataset",
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
            "HDF5",
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [],
        "size_gb": 18.6,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EvTTC: An Event Camera Dataset for Time-to-Collision Estimation",
        "doi": "10.1109/LRA.2025.3565379",
        "authors": [
            "Kaizhen Sun",
            "Jinghang Li",
            "Kuan Dai",
            "Bangyan Liao",
            "Wei Xiong",
            "Yi Zhou"
        ],
        "abstract": "Time-to-Collision (TTC) estimation lies in the core of the forward collision warning (FCW) functionality, which is key to all Automatic Emergency Braking (AEB) systems. Although the success of solutions using frame-based cameras (e.g., Mobileye\u2019s solutions) has been witnessed in normal situations, some extreme cases, such as the sudden variation in the relative speed of leading vehicles and the sudden appearance of pedestrians, still pose significant risks that cannot be handled. This is due to the inherent imaging principles of frame-based cameras, where the time interval between adjacent exposures introduces considerable system latency to AEB. Event cameras, as a novel bio-inspired sensor, offer ultra-high temporal resolution and can asynchronously report brightness changes at the microsecond level. To explore the potential of event cameras in the above-mentioned challenging cases, we propose EvTTC, which is, to the best of our knowledge, the first multi-sensor dataset focusing on TTC tasks under high-relative-speed scenarios. EvTTC consists of data collected using standard cameras and event cameras, covering various potential collision scenarios in daily driving and involving multiple collision objects. Additionally, LiDAR and GNSS/INS measurements are provided for the calculation of ground-truth TTC. Considering the high cost of testing TTC algorithms on full-scale mobile platforms, we also provide a small-scale TTC testbed for experimental validation and data augmentation. All the data and the design of the testbed are open sourced, and they can serve as a benchmark that will facilitate the development of vision-based TTC techniques.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-09-18T07:19:13.963214"
        },
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-09-18T07:19:14.791828"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10979867"
        },
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2412.05053"
        },
        {
            "type": "project_page",
            "url": "https://nail-hnu.github.io/EvTTC/"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2018.2845370",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC.2019.8917218",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v33i01.3301978",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3168335",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00419",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.aap.2016.11.009",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.aap.2015.03.029",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CYBConf.2017.7985775",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ZINC52049.2021.9499281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CONECCT57959.2023.10234756",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IVS.2004.1336352",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.1992.201512",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-540-77457-0_8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477608",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2024.XX.088",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41586-024-07409-w",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2014.00009",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48506.2021.9560937",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3100153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1002/aisy.202200251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.02162",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3130049",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-72949-2_4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2024.3454410",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ieeestd.2021.9456762",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ieeestd.2024.10707145",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696514",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.simpa.2022.100393",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2022.3141876",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1275808.1276407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00569",
            "source": "crossref"
        },
        {
            "title": "TSTTC: A large-scale dataset for time-to-contact estimation in driving scenarios",
            "source": "crossref"
        },
        {
            "title": "Evaluation of rear-end collision avoidance technologies based on real world crash data",
            "source": "crossref"
        },
        {
            "title": "Injury crash reduction of low-speed autonomous emergency braking (AEB) on passenger cars",
            "source": "crossref"
        },
        {
            "title": "Autonomous emergency breaking (AEB) evaluation for indian traffic scenarios using GPS and LiDAR data",
            "source": "crossref"
        },
        {
            "title": "Euro ncap aeb C2C test protocol - v4.3.1",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "6191\u20136198",
        "month": "jun",
        "year": 2025,
        "author": "Sun, Kaizhen and Li, Jinghang and Dai, Kuan and Liao, Bangyan and Xiong, Wei and Zhou, Yi",
        "publisher": "Institute of Electrical and Electronics Engineers (IEEE)",
        "journal": "IEEE Robotics and Automation Letters",
        "number": "6",
        "doi": "10.1109/lra.2025.3565379",
        "url": "http://dx.doi.org/10.1109/LRA.2025.3565379",
        "issn": "2377-3774",
        "volume": "10",
        "title": "EvTTC: An Event Camera Dataset for Time-to-Collision Estimation",
        "type": "article",
        "key": "Sun_2025"
    }
}
---

# Dataset Structure

| Sequence Name             | HDF5 Size |
|--------------------------|-----------|
| CCRs-1-low-100%          | 3.22 GB   |
| CCRs-1-medium-100%       | 3.59 GB   |
| CCRs-1-high-100%         | 3.22 GB   |
| CCRs-1-low-50%           | 4.84 GB   |
| CCRs-1-medium-50%        | 4.30 GB   |
| CCRs-1-high-50%          | 7.06 GB   |
| CCRs-1-low-0%            | 5.02 GB   |
| CCRs-1-medium-0%         | 4.31 GB   |
| CCRs-1-high-0%           | 6.98 GB   |
| CCRs-2-low-100%          | 4.86 GB   |
| CCRs-2-medium-100%       | 5.26 GB   |
| CCRs-2-high-100%         | 6.36 GB   |
| CCRs-3-low-100%          | 4.98 GB   |
| CCRs-3-medium-100%       | 5.17 GB   |
| CCRs-side-low            | 4.48 GB   |
| CCRs-side-medium         | 4.26 GB   |
| CCRs-side-high           | 5.17 GB   |
| CCRm-low-100%            | 5.85 GB   |
| CCRm-medium-100%         | 7.70 GB   |
| CCRm-low-50%             | 5.27 GB   |
| CCRm-medium-50%          | 5.44 GB   |
| CCRm-low-0%              | 6.79 GB   |
| CCRm-medium-0%           | 6.47 GB   |
| CPLA-low                 | 7.01 GB   |
| CPLA-medium              | 6.13 GB   |
| CPLA-high                | 6.52 GB   |
| CPNA-low                 | 6.99 GB   |
| CPNA-medium              | 6.42 GB   |
| CPNA-high                | 7.22 GB   |
| CPNAO-low                | 7.60 GB   |
| CPNAO-medium             | 5.97 GB   |
| CPNAO-high               | 5.86 GB   |

== hdf5
The timestamps of the hdf5 data are fully synchronized, so we recommend using this format of data.

Base Time
The base time represents the difference between the timestamps in the hdf5 data and the timestamps in the rosbag data. It is stored in the group '/base_timestamp'.

```bash  
  $ h5ls -r 2024-07-15-14-53-45.hdf5/base_timestamp
  /time                    Dataset {1/Inf}
```  
    

Event Data
Event data is stored in the groups '`/prophesee/event_cam_left'` and `'/prophesee/event_cam_right'`. We provide the distortion coefficients and models from calibration.

  ``` bash
  $ h5ls -r 2024-07-15-14-53-45.hdf5/prophesee/event_cam_left
  /calib                   Group
  /calib/T_to_left_bfs     Dataset {4, 4}
  /calib/camera_model      Dataset {SCALAR}
  /calib/distortion_coeffs Dataset {4}
  /calib/distortion_model  Dataset {SCALAR}
  /calib/intrinsics        Dataset {4}
  /calib/resolution        Dataset {2}
  /ms_map_idx              Dataset {16886}
  /p                       Dataset {44005484/Inf}
  /t                       Dataset {44005484/Inf}
  /x                       Dataset {44005484/Inf}
  /y                       Dataset {44005484/Inf}
  ```

`calib`:
	`T_to_left_bfs`: Transformation from the frame of the camera to the frame of the Prophesee left event camera.
'resolution`: (width, height) resolution.
`camera_model/instrinsics`: Camera models and coefficients used in Kalibr.
`distortion_model/distortion_coeffs`: Distortion model and coefficients used in Kalibr.
`ms_map_idx`: Precomputed index for the events for each ms of the dataset.
('x', 'y', 't', 'p'): Event array with (x, y) coordinate, timestamp, and polarity.