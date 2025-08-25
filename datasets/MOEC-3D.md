---
{
    "name": "MOEC-3D",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "3D Reconstruction"
    ],
    "description": "3D reconstruction",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/u/1/folders/1frNjCATu2I2KAcvfPMHctmLVeGTP9nmg",
                "format": "HDF5",
                "available": false
            }
        ],
        "size_gb": 17.448,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "EvAC3D: From Event-Based Apparent Contours to\u00a03D Models via\u00a0Continuous Visual Hulls",
        "doi": "10.1007/978-3-031-20071-7_17",
        "authors": [
            "Ziyun Wang",
            "Kenneth Chaney",
            "Kostas Daniilidis"
        ],
        "abstract": "3D reconstruction from multiple views is a successful computer vision field with multiple deployments in applications. State of the art is based on traditional RGB frames that enable optimization of photo-consistency cross views. In this paper, we study the problem of 3D reconstruction from event-cameras, motivated by the advantages of event-based cameras in terms of low power and latency as well as by the biological evidence that eyes in nature capture the same data and still perceive well 3D shape. The foundation of our hypothesis that 3D reconstruction is feasible using events lies in the information contained in the occluding contours and in the continuous scene acquisition with events. We propose Apparent Contour Events (ACE), a novel event-based representation that defines the geometry of the apparent contour of an object. We represent ACE by a spatially and temporally continuous implicit function defined in the event x-y-t space. Furthermore, we design a novel continuous Voxel Carving algorithm enabled by the high temporal resolution of the Apparent Contour Events. To evaluate the performance of the method, we collect MOEC-3D, a 3D event dataset of a set of common real-world objects. We demonstrate the ability of EvAC3D to reconstruct high-fidelity mesh surfaces from real event sequences while allowing the refinement of the 3D reconstruction for each individual event.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 10,
            "updated": "2025-07-11T09:29:51.347750"
        },
        {
            "source": "scholar",
            "count": 21,
            "updated": "2025-07-11T09:29:51.096470"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-20071-7_17"
        },
        {
            "type": "project_page",
            "url": "https://www.cis.upenn.edu/~ziyunw/evac3d/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/daniilidis-group/EvAC3D"
        }
    ],
    "full_name": "Multi Object Event Camera Dataset in 3D (MOEC-3D)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "284--299",
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2304.05296 [cs]",
        "doi": "10.1007/978-3-031-20071-7_17",
        "year": 2022,
        "author": "Wang, Ziyun and Chaney, Kenneth and Daniilidis, Kostas",
        "urldate": "2024-04-13",
        "language": "en",
        "url": "http://arxiv.org/abs/2304.05296",
        "shorttitle": "{EvAC3D}",
        "volume": "13667",
        "title": "{EvAC3D}: {From} {Event}-based {Apparent} {Contours} to {3D} {Models} via {Continuous} {Visual} {Hulls}",
        "type": "incollection",
        "key": "wang_evac3d_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/0004-3702(81)90021-7",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2013.03.006",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS40897.2019.8968223",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46484-8_38",
            "source": "crossref"
        },
        {
            "doi": "10.1007/BF00129682",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10514-012-9321-0",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00106",
            "source": "crossref"
        },
        {
            "doi": "10.1098/rspb.1977.0080",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00459",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00025",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-24574-4_28",
            "source": "crossref"
        },
        {
            "doi": "10.1006/ciun.1993.1029",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP40778.2020.9190842",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v35i4.16390",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2001.937627",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01246-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset is organized into several directories, each containing specific types of data related to the 3D reconstruction tasks. Below is a breakdown of the directory structure:

```
MOEC-3D/
├── masks/
│   └── masks.tar (46.53 MB)
├── learning/
│   ├── camchain-recons_objects.yaml (0.0009 MB)
│   ├── poses_objects.pkl (0.18 MB)
│   ├── masks/
│   │   └── masks.tar (46.53 MB)
│   ├── gt_scans/
│   │   ├── jello_big.ply (13.86 MB)
│   │   ├── jello_small.ply (9.85 MB)
│   │   ├── vitamine.ply (29.08 MB)
│   │   ├── soda.ply (16.21 MB)
│   │   ├── tuna.ply (9.85 MB)
│   │   ├── spam.ply (16.20 MB)
│   │   ├── spam.ply (16.20 MB)
│   │   ├── coffee.ply (29.80 MB)
│   │   ├── sugar.ply (21.65 MB)
│   │   ├── mustard.ply (5.96 MB)
│   │   └── soup.ply (14.37 MB)
│   └── event_files/
│       ├── vitamine1.h5 (95.19 MB)
│       ├── vitamine2.h5 (114.10 MB)
│       ├── vitamine3.h5 (147.48 MB)
│       ├── vitamine4.h5 (138.72 MB)
│       ├── tuna1.h5 (87.73 MB)
│       ├── tuna2.h5 (101.18 MB)
│       ├── tuna3.h5 (116.08 MB)
│       ├── tuna4.h5 (111.04 MB)
│       ├── sugar1.h5 (96.08 MB)
│       ├── sugar2.h5 (126.39 MB)
│       ├── sugar3.h5 (156.73 MB)
│       ├── sugar4.h5 (144.47 MB)
│       ├── spam2.h5 (123.40 MB)
│       ├── spam3.h5 (146.99 MB)
│       ├── spam4.h5 (130.91 MB)
│       ├── soup1.h5 (85.01 MB)
│       ├── soup2.h5 (110.62 MB)
│       ├── soup3.h5 (132.29 MB)
│       ├── soup4.h5 (120.89 MB)
│       ├── soda1.h5 (90.80 MB)
│       ├── soda2.h5 (104.39 MB)
│       ├── soda3.h5 (132.54 MB)
│       ├── soda4.h5 (120.15 MB)
│       ├── mustard1.h5 (84.42 MB)
│       ├── mustard2.h5 (104.85 MB)
│       ├── mustard3.h5 (131.17 MB)
│       ├── mustard4.h5 (118.62 MB)
│       ├── jello_big1.h5 (111.78 MB)
│       ├── jello_big2.h5 (130.45 MB)
│       ├── jello_big3.h5 (152.91 MB)
│       ├── jello_big4.h5 (154.27 MB)
│       ├── jello_small1.h5 (86.74 MB)
│       ├── jello_small2.h5 (100.99 MB)
│       ├── jello_small3.h5 (118.75 MB)
│       ├── jello_small4.h5 (108.78 MB)
│       ├── coffee1.h5 (123.34 MB)
│       ├── coffee2.h5 (145.32 MB)
│       ├── coffee3.h5 (176.79 MB)
│       └── coffee4.h5 (153.88 MB)
├── optimizer/
│   └── objects/
│       ├── all_info_mustard2_voxel_results_20211115-222019.npz (10.08 MB)
│       ├── all_info_jello_small2_voxel_results_20211115-221957.npz (6.27 MB)
│       ├── all_info_vitamine2_voxel_results_20211115-222257.npz (10.23 MB)
│       ├── all_info_coffee2_voxel_results_20211115-221735.npz (7.89 MB)
│       ├── all_info_soup2_voxel_results_20211115-222108.npz (7.03 MB)
│       ├── all_info_jello_big2_voxel_results_20211115-221916.npz (10.83 MB)
│       ├── all_info_sugar2_voxel_results_20211115-222155.npz (12.56 MB)
│       ├── all_info_tuna2_voxel_results_20211115-222237.npz (4.39 MB)
│       ├── all_info_spam2_voxel_results_20211115-222132.npz (6.55 MB)
│       └── all_info_soda2_voxel_results_20211115-222048.npz (6.32 MB)
├── carving/
│   └── animals/
│       ├── elephant1/
│       │   ├── mesh_config.yaml (0.0002 MB)
│       │   ├── camchain-merged.yaml (0.0009 MB)
│       │   ├── mesh.ply (20.06 MB)
│       │   ├── events.h5 (1167.08 MB)
│       │   └── event_labels.hdf5 (3515.45 MB)
│       ├── tiger1/
│       │   ├── mesh_config.yaml (0.0002 MB)
│       │   ├── camchain-merged.yaml (0.0009 MB)
│       │   ├── mesh.ply (12.34 MB)
│       │   ├── events.h5 (1122.13 MB)
│       │   └── event_labels.hdf5 (3286.79 MB)
│       └── rhino1/
│           ├── mesh_config.yaml (0.0002 MB)
│           ├── camchain-merged.yaml (0.0009 MB)
│           ├── mesh.ply (9.88 MB)
│           ├── events.h5 (948.89 MB)
│           └── event_labels.hdf5 (2684.81 MB)
└── shapenet_subset/
    ├── 02691156/
    │   └── c88275e49bc23ee41af5817af570225e/
    │       ├── model.obj (4.46 MB)
    │       ├── model.mtl (0.0035 MB)
    │       └── images/
    │           └── texture0.jpg (0.0017 MB)
    ├── 04256520/
    │   └── a87440fc1fe87c0d6bd4dcee82f7948d/
    │       ├── model.obj (0.0145 MB)
    │       ├── model.mtl (0.0004 MB)
    │       └── images/
    │           └── texture0.jpg (0.0121 MB)
    └── 02828884/
        └── 4d1d28d15b19f9101e0e41d96d3d0a78/
            ├── model.obj (0.0149 MB)
            └── model.mtl (0.0005 MB)

```
