---
{
    "name": "Space-OPERA",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4",
        "V2E"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Space Datasets",
        "Satellite Pose Estimation"
    ],
    "task": "Satellite Pose Estimation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1NBFPczY8B5_RPXeLLID_eGEboB9xChq2/view",
                "format": "Unknown",
                "available": false
            }
        ],
        "size_gb": 2.7,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Test-Time Certifiable Self-Supervision to Bridge the Sim2Real Gap in Event-Based Satellite Pose Estimation",
        "doi": "10.48550/arXiv.2409.06240",
        "authors": [
            "Mohsi Jawaid",
            "Rajat Talak",
            "Yasir Latif",
            "Luca Carlone",
            "Tat-Jun Chin"
        ],
        "abstract": "Deep learning plays a critical role in vision-based satellite pose estimation. However, the scarcity of real data from the space environment means that deep models need to be trained using synthetic data, which raises the Sim2Real domain gap problem. A major cause of the Sim2Real gap are novel lighting conditions encountered during test time. Event sensors have been shown to provide some robustness against lighting variations in vision-based pose estimation. However, challenging lighting conditions due to strong directional light can still cause undesirable effects in the output of commercial off-the-shelf event sensors, such as noisy/spurious events and inhomogeneous event densities on the object. Such effects are non-trivial to simulate in software, thus leading to Sim2Real gap in the event domain. To close the Sim2Real gap in event-based satellite pose estimation, the paper proposes a test-time self-supervision scheme with a certifier module. Self-supervision is enabled by an optimisation routine that aligns a dense point cloud of the predicted satellite pose with the event data to attempt to rectify the inaccurately estimated pose. The certifier attempts to verify the corrected pose, and only certified test-time inputs are backpropagated via implicit differentiation to refine the predicted landmarks, thus improving the pose estimates and closing the Sim2Real gap. Results show that the our method outperforms established test-time adaptation schemes.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-12T14:21:44.103466"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2409.06240"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2409.06240"
        },
        {
            "type": "github_page",
            "url": "https://github.com/mohsij/space-opera"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "36",
        "num_real_recordings": "12",
        "num_simulated_recordings": "24"
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Robotics",
        "note": "arXiv:2409.06240 [cs]",
        "year": 2024,
        "month": "sep",
        "author": "Jawaid, Mohsi and Talak, Rajat and Latif, Yasir and Carlone, Luca and Chin, Tat-Jun",
        "publisher": "arXiv",
        "urldate": "2024-12-07",
        "language": "en",
        "doi": "10.48550/arXiv.2409.06240",
        "url": "http://arxiv.org/abs/2409.06240",
        "title": "Test-{Time} {Certifiable} {Self}-{Supervision} to {Bridge} the {Sim2Real} {Gap} in {Event}-{Based} {Satellite} {Pose} {Estimation}",
        "type": "misc",
        "key": "jawaid_test-time_2024"
    }
}
---

### Dataset Structure

- Dataset contains 36 recordings, comprising 12 real recordings and 24 simulated recordings
- Dataset contains: 43.24 seconds of real data

Real data statistics:

| Trajectory | Scene         | No.events | No. poses | Duration (s) |
| ---------- | ------------- | --------- | --------- | ------------ |
| approach   | harsh-fast    | 5842584   | 41        | 1.6          |
|            | harsh-slow    | 6463394   | 90        | 3.56         |
|            | lowlight-fast | 1399075   | 41        | 1.6          |
|            | lowlight-slow | 1578355   | 90        | 3.56         |
|            | neutral-fast  | 1475790   | 41        | 1.6          |
|            | neutral-slow  | 1814205   | 91        | 3.6          |
| orbit      | harsh-fast    | 13465922  | 68        | 2.68         |
|            | harsh-slow    | 15056827  | 165       | 6.56         |
|            | lowlight-fast | 2126339   | 68        | 2.68         |
|            | lowlight-slow | 2119757   | 165       | 6.56         |
|            | neutral-fast  | 2171772   | 89        | 2.68         |
|            | neutral-slow  | 2568447   | 165       | 6.56         |
