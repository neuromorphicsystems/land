---
{
    "name": "Gentil2024",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "ATIS"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Space Datasets",
        "Satellite Docking"
    ],
    "task": "Satellite Docking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://ses.library.usyd.edu.au/handle/2123/33938",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 144.5,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Mixing Data-driven and Geometric Models for Satellite Docking Port State Estimation using an RGB or Event Camera",
        "doi": "10.48550/arXiv.2409.15581",
        "authors": [
            "Cedric Le Gentil",
            "Jack Naylor",
            "Nuwan Munasinghe",
            "Jasprabhjit Mehami",
            "Benny Dai",
            "Mikhail Asavkin",
            "Donald G. Dansereau",
            "Teresa Vidal-Calleja"
        ],
        "abstract": "In-orbit automated servicing is a promising path towards lowering the cost of satellite operations and reducing the amount of orbital debris. For this purpose, we present a pipeline for automated satellite docking port detection and state estimation using monocular vision data from standard RGB sensing or an event camera. Rather than taking snapshots of the environment, an event camera has independent pixels that asynchronously respond to light changes, offering advantages such as high dynamic range, low power consumption and latency, etc. This work focuses on satellite-agnostic operations (only a geometric knowledge of the actual port is required) using the recently released Lockheed Martin Mission Augmentation Port (LM-MAP) as the target. By leveraging shallow data-driven techniques to preprocess the incoming data to highlight the LM-MAP's reflective navigational aids and then using basic geometric models for state estimation, we present a lightweight and data-efficient pipeline that can be used independently with either RGB or event cameras. We demonstrate the soundness of the pipeline and perform a quantitative comparison of the two modalities based on data collected with a photometrically accurate test bench that includes a robotic arm to simulate the target satellite's uncontrolled motion.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2409.15581"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2409.15581"
        },
        {
            "type": "project_page",
            "url": "https://uts-ri.github.io/rgb_event_docking_port/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/UTS-RI/rgb_event_docking_port"
        }
    ],
    "full_name": "",
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Robotics",
        "note": "arXiv:2409.15581 [cs]",
        "year": 2024,
        "month": "sep",
        "author": "Gentil, Cedric Le and Naylor, Jack and Munasinghe, Nuwan and Mehami, Jasprabhjit and Dai, Benny and Asavkin, Mikhail and Dansereau, Donald G. and Vidal-Calleja, Teresa",
        "publisher": "arXiv",
        "urldate": "2024-09-29",
        "language": "en",
        "doi": "10.48550/arXiv.2409.15581",
        "url": "http://arxiv.org/abs/2409.15581",
        "title": "Mixing {Data}-driven and {Geometric} {Models} for {Satellite} {Docking} {Port} {State} {Estimation} using an {RGB} or {Event} {Camera}",
        "type": "misc",
        "key": "gentil_mixing_2024"
    }
}
---


### Dataset Description
`The contributions of this work are the design and implementation of a satellite-agnostic docking port detection and localisation algorithm, the evaluation of the proposed framework with both  event and RGB data, and the open source release of the datasets used in the evaluation.`

### Dataset Structure

FILE NAMES:		ROS Bags are named according to the following convention -
			T[X]_RA_[Y]_ES_[Z]_[lighting conditions]
			X = Trajectory Number (1-3)
			Y = Sunlight Source %
			Z = Earthshine Source Included (1=True, 0=False)
			lighting conditions = Description of Y and Z combinations with local co-located lighting.


FOLDER STRUCTURE:	 
dataset_0307 contains the augmented parts of the main dataset from the paper. Subfolders contain calibration and training data for the no port, and two texture (data augmentation cases). This also contains the ground truth calibration as a yml file and raw calibration ROS bag in the calibration folder. Note that the calibration is provided for the DAVIS 346 Camera only, the Prophesee data is provided without extrinsics.

dataset_0307_notexture contains the unaugmented data for training and testing.

hard_cases_benchmark contains the benchmark hard cases from the paper. hard_cases_additional provides additional difficult cases not reported in the paper.

test_datasets_aditional contains additional test datasets without calibration data. These are not benchmarked in the paper.

ROSbag Topics:
/dvs/image_raw - RGB Image from DAVIS 346 Event Camera
/dvs/events - Event Stream from DAVIS 346 Event Camera
/tf - TF Tree for UR5e Robotic Arm
/joint_states - Joint states for UR5e Robotic Arm
/prophesee/camera/cd_events_buffer - Events buffer from Prophesee EVK3+ Event Camera
/prophesee/camera/camera_info - Camera Info from Prophesee EVK3+ Event Camera
/rosout - Logging info

Sourced from: https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/README.txt?sequence=3&isAllowed=y

#### Dataset Files

| Filename                                                                                          | Size     |
|---------------------------------------------------------------------------------------------------|----------|
| [README.txt](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/README.txt)              | 1.4 KB   |
| [Manifest](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/Manifest)                  | 3.1 KB   |
| [restore_tars.sh](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/restore_tars.sh)    | 2.6 KB   |
| [calibration1_jul27.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__calibration__calibration1_jul27.bag.tar)  | 33.4 MB  |
| [calibration2_jul27.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__calibration__calibration2_jul27.bag.tar)  | 32.8 MB  |
| [calibration_dvs.yaml.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__camera-to-robot-calibration_dvs.yaml.tar)   | 688 B    |
| [calibration_t265.yaml.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__camera-to-robot-calibration_t265.yaml.tar) | 686 B    |
| [calibration_wide.yaml.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__camera-to-robot-calibration_wide.yaml.tar) | 682 B    |
| [dark__hard.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__dark__hard.bag.tar)                             | 6.6 GB   |
| [dark__test.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__dark__test.bag.tar)                             | 6.3 GB   |
| [dark__train.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__dark__train.bag.tar)                           | 7.8 GB   |
| [dvs_annotated_events_test.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__dvs_annotated_events_test.tar)        | 322 MB   |
| [dvs_annotated_events_train.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__dvs_annotated_events_train.tar)      | 1.1 GB   |
| [light__hard.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__light__hard.bag.tar)                           | 6.3 GB   |
| [light__test.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__light__test.bag.tar)                           | 6.3 GB   |
| [light__train.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__light__train.bag.tar)                         | 7.5 GB   |
| [mixed__hard.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__mixed__hard.bag.tar)                           | 6.2 GB   |
| [mixed__test.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__mixed__test.bag.tar)                           | 6.6 GB   |
| [mixed__train.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__mixed__train.bag.tar)                         | 7.6 GB   |
| [normal__hard.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__normal__hard.bag.tar)                         | 6.2 GB   |
| [normal__test.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__normal__test.bag.tar)                         | 6.6 GB   |
| [normal__train.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0307__normal__train.bag.tar)                       | 7.6 GB   |
| [0407_mixed__hard.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0407__mixed__hard.bag.tar)                      | 6.5 GB   |
| [0407_mixed__test.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0407__mixed__test.bag.tar)                      | 6.3 GB   |
| [0407_mixed__train.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0407__mixed__train.bag.tar)                    | 7.3 GB   |
| [0407_normal__hard.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0407__normal__hard.bag.tar)                    | 6.2 GB   |
| [0407_normal__test.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0407__normal__test.bag.tar)                    | 6.3 GB   |
| [0407_normal__train.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_0407__normal__train.bag.tar)                  | 7.4 GB   |
| [calibration_dvs.yaml.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_calibration__camera-to-robot-calibration_dvs.yaml.tar)     | 688 B    |
| [calibration_t265.yaml.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_calibration__camera-to-robot-calibration_t265.yaml.tar)   | 686 B    |
| [calibration_wide.yaml.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_calibration__camera-to-robot-calibration_wide.yaml.tar)   | 682 B    |
| [camera-calibration-left.yaml.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_calibration__camera-calibration-left.yaml.tar)     | 1.2 KB   |
| [camera-calibration-right.yaml.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_calibration__camera-calibration-right.yaml.tar)   | 1.2 KB   |
| [stereo_calibration.bag.tar](https://ses.library.usyd.edu.au/bitstream/handle/2123/33938/dataset_calibration__stereo_calibration.bag.tar)                | 4.5 MB   |