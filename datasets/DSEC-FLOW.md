---
{
    "name": "DSEC-FLOW",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [
        "Velodyne Lidar",
        "FLIR Blackfly S USB3"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Optical Flow",
        "Autonomous Driving"
    ],
    "task": "Dense Optical Flow Estimation",
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
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://dsec.ifi.uzh.ch/dsec-datasets/download/",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 150.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "E-RAFT: Dense Optical Flow from Event Cameras",
        "doi": "10.1109/3DV53792.2021.00030",
        "authors": [
            "Mathias Gehrig",
            "Mario Millhausler",
            "Daniel Gehrig",
            "Davide Scaramuzza"
        ],
        "abstract": "We propose to incorporate feature correlation and sequential processing into dense optical flow estimation from event cameras. Modern frame-based optical flow methods heavily rely on matching costs computed from feature correlation. In contrast, there exists no optical flow method for event cameras that explicitly computes matching costs. Instead, learning-based approaches using events usually resort to the U-Net architecture to estimate optical flow sparsely. Our key finding is that the introduction of correlation features significantly improves results compared to previous methods that solely rely on convolution layers. Compared to the state-of-the-art, our proposed approach computes dense optical flow and reduces the end-point error by 23% on MVSEC. Furthermore, we show that all existing optical flow methods developed so far for event cameras have been evaluated on datasets with very small displacement fields with maximum flow magnitude of 10 pixels. Based on this observation, we introduce a new real-world dataset that exhibits displacement fields with magnitudes up to 210 pixels and 3 times higher camera resolution. Our proposed approach reduces the end-point error on this dataset by 66%.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 103,
            "updated": "2025-06-16T09:49:09.875736"
        },
        {
            "source": "scholar",
            "count": 187,
            "updated": "2025-06-16T09:49:09.714771"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2108.10552"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/9665931"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/ERAFT.html"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/E-RAFT"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": true
    },
    "connected_datasets": [
        "DSEC"
    ],
    "bibtex": {
        "doi": "10.1109/3DV53792.2021.00030",
        "keywords": "Training;Image motion analysis;Correlation;Costs;Three-dimensional displays;Estimation;Computer architecture;optical flow;event cameras",
        "pages": "197-206",
        "number": "",
        "volume": "",
        "year": 2021,
        "title": "E-RAFT: Dense Optical Flow from Event Cameras",
        "booktitle": "2021 International Conference on 3D Vision (3DV)",
        "author": "Gehrig, Mathias and Millh\u00e4usler, Mario and Gehrig, Daniel and Scaramuzza, Davide",
        "type": "inproceedings",
        "key": "9665931"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR42600.2020.00631",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00931",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00176",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341224",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.615",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58536-5_24",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913491297",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0004-3702(81)90024-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00936",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00590",
            "source": "crossref"
        },
        {
            "doi": "10.1561/0600000079",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.154",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3072959.3073609",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2853729",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-33783-3_44",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00137",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.316",
            "source": "crossref"
        },
        {
            "doi": "10.3115/v1/D14-1179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2986748",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00470",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2015.7139876",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298925",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00548",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of dense optical flow and depth from sparse event data",
            "source": "crossref"
        },
        {
            "title": "Models matter, so does training: An empirical study of cnns for optical flow estimation",
            "source": "crossref"
        },
        {
            "title": "Two-stream convolutional networks for action recognition in videos",
            "source": "crossref"
        },
        {
            "title": "Volumetric correspondence networks for optical flow",
            "source": "crossref"
        },
        {
            "title": "EKLT: Asynchronous photometric feature tracking using events and frames",
            "source": "crossref"
        },
        {
            "title": "Spikeflownet: event-based optical flow estimation with energy-efficient hybrid neural networks",
            "source": "crossref"
        },
        {
            "title": "Back to event basics: Self-supervised learning of image reconstruction for event cameras via photometric constancy",
            "source": "crossref"
        },
        {
            "title": "Unet: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        },
        {
            "title": "On event-based optical flow detection",
            "source": "crossref"
        },
        {
            "title": "An iterative image registration technique with an application to stereo vision",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
