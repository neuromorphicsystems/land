---
{
    "name": "SynEventHPD",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Human Pose Recognition",
        "Human Action Recognition"
    ],
    "description": "Human pose estimation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [],
        "availability_comment": "Data will be made available on publication. Sample data available via Github",
        "dataset_links": []
    },
    "paper": {
        "title": "Event-based Human Pose Tracking by Spiking Spatiotemporal Transformer",
        "doi": "10.48550/arXiv.2303.09681",
        "authors": [
            "Shihao Zou",
            "Yuxuan Mu",
            "Xinxin Zuo",
            "Sen Wang",
            "Li Cheng"
        ],
        "abstract": "Event camera, as an emerging biologically-inspired vision sensor for capturing motion dynamics, presents new potential for 3D human pose tracking, or video-based 3D human pose estimation. However, existing works in pose tracking either require the presence of additional gray-scale images to establish a solid starting pose, or ignore the temporal dependencies all together by collapsing segments of event streams to form static event frames. Meanwhile, although the effectiveness of Artificial Neural Networks (ANNs, a.k.a. dense deep learning) has been showcased in many event-based tasks, the use of ANNs tends to neglect the fact that compared to the dense frame-based image sequences, the occurrence of events from an event camera is spatiotemporally much sparser. Motivated by the above mentioned issues, we present in this paper a dedicated end-to-end sparse deep learning approach for event-based pose tracking: 1) to our knowledge this is the first time that 3D human pose tracking is obtained from events only, thus eliminating the need of accessing to any frame-based images as part of input; 2) our approach is based entirely upon the framework of Spiking Neural Networks (SNNs), which consists of Spike-Element-Wise (SEW) ResNet and a novel Spiking Spatiotemporal Transformer; 3) a large-scale synthetic dataset is constructed that features a broad and diverse set of annotated 3D human motions, as well as longer hours of event stream data, named SynEventHPD. Empirical experiments demonstrate that, with superior performance over the state-of-the-art (SOTA) ANNs counterparts, our approach also achieves a significant computation reduction of 80% in FLOPS. Furthermore, our proposed method also outperforms SOTA SNNs in the regression task of human pose tracking. Our implementation is available at https://github.com/JimmyZou/HumanPoseTracking_SNN and dataset will be released upon paper acceptance.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 21,
            "updated": "2025-06-21T13:06:13.501375"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2303.09681"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2303.09681"
        },
        {
            "type": "github_page",
            "url": "https://github.com/JimmyZou/HumanPoseTracking_SNN"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2303.09681 [cs]",
        "year": 2023,
        "month": "sep",
        "author": "Zou, Shihao and Mu, Yuxuan and Zuo, Xinxin and Wang, Sen and Cheng, Li",
        "publisher": "arXiv",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.48550/arXiv.2303.09681",
        "url": "http://arxiv.org/abs/2303.09681",
        "title": "Event-based {Human} {Pose} {Tracking} by {Spiking} {Spatiotemporal} {Transformer}",
        "type": "misc",
        "key": "zou_event-based_2023"
    }
}
---

### Dataset Structure

- Contains data converted from Human3.6M, AMASS, PHSPD, and MMHPSD-Gray datasets
