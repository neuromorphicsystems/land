---
{
    "name": "SynthEVox3D",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [],
    "description": "3D reconstruction",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Kaggle"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Kaggle",
                "url": "https://www.kaggle.com/datasets/hche8927/synthevox3d/data",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 32.06,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Dense Voxel 3D Reconstruction Using a Monocular Event Camera",
        "doi": "10.1109/ICVR57957.2023.10169359",
        "authors": [
            "Haodong Chen",
            "Vera Chung",
            "Li Tan",
            "Xiaoming Chen"
        ],
        "abstract": "Event cameras are sensors inspired by biological systems that specialize in capturing changes in brightness. These emerging cameras offer many advantages over conventional frame-based cameras, including high dynamic range, high frame rates, and extremely low power consumption. Due to these advantages, event cameras have increasingly been adapted in various fields, such as frame interpolation, semantic segmentation, odometry, and SLAM. However, their application in 3D reconstruction for VR applications is underexplored. Previous methods in this field mainly focused on 3D reconstruction through depth map estimation. Methods that produce dense 3D reconstruction generally require multiple cameras, while methods that utilize a single event camera can only produce a semi-dense result. Other single-camera methods that can produce dense 3D reconstruction rely on creating a pipeline that either incorporates the aforementioned methods or other existing Structure from Motion (SfM) or Multi-view Stereo (MVS) methods. In this paper, we propose a novel approach for solving dense 3D reconstruction using only a single event camera. To the best of our knowledge, our work is the first attempt in this regard. Our preliminary results demonstrate that the proposed method can produce visually distinguishable dense 3D reconstructions directly without requiring pipelines like those used by existing methods. Additionally, we have created a synthetic dataset with 39, 739 object scans using an event camera simulator. This dataset will help accelerate other relevant research in this field.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 7,
            "updated": "2025-06-15T09:31:21.415145"
        },
        {
            "source": "scholar",
            "count": 12,
            "updated": "2025-06-15T09:31:21.283779"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2309.00385"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10169359"
        },
        {
            "type": "project_page",
            "url": "https://www.kaggle.com/datasets/hche8927/synthevox3d"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "30--35",
        "year": 2023,
        "month": "may",
        "author": "Chen, Haodong and Chung, Vera and Tan, Li and Chen, Xiaoming",
        "publisher": "IEEE",
        "booktitle": "2023 9th {International} {Conference} on {Virtual} {Reality} ({ICVR})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/ICVR57957.2023.10169359",
        "url": "https://ieeexplore.ieee.org/document/10169359/",
        "isbn": "9798350345810",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Dense {Voxel} {3D} {Reconstruction} {Using} a {Monocular} {Event} {Camera}",
        "address": "Xianyang, China",
        "type": "inproceedings",
        "key": "chen_dense_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/978-3-319-63537-8_11",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2013.13",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-24028-7_62",
            "source": "crossref"
        },
        {
            "doi": "10.5772/12941",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-020-01347-6",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01217-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00567",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco.1997.9.8.1735",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.3115/v1/W14-4012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRAS55217.2022.9842068",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00442",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "title": "3d-r2n2: A unified approach for single and multi-view 3d object reconstruction",
            "source": "crossref"
        },
        {
            "title": "ShapeNet: An Information-Rich 3D Model Repository",
            "source": "crossref"
        },
        {
            "title": "Efficientnet: Rethinking model scaling for convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "U-net: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        },
        {
            "title": "Decoupled weight decay regularization",
            "source": "crossref"
        },
        {
            "title": "E3D: event-based 3d shape reconstruction",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

This dataset is a large-scale synthetic event camera voxel 3D reconstruction dataset, comprising over 39,739 simulated event camera 3D object scans from 13 different object categories. Each entry in the dataset contains a 0.5-second, 240fps high frame rate RGB video scan, simulated event camera data, the original 3D model, and a converted 32x32x32 voxel model.

The 3D models used in this dataset are from ShapeNet (Link: [https://shapenet.org/)](<https://shapenet.org/)>).

Although this dataset only provides voxel representation for ground truth, obtaining other types of representation such as point cloud as ground truth will be trivial with the provided gltf 3D model. We hope that by publishing this dataset, we can accelerate the advancement of event-based 3D reconstruction.

Note: The provided dataset is called SynthEVox3D-Tiny dataset, and is a 32 GB subset of the full dataset, which is around 1.2 TB in size. The creators are willing to make the full dataset available, if someone would be able to provide a hosting provider. Contact haodong.chen@sydney.edu.au if you are able to provide hosting for the full dataset.

Adapted from https://www.kaggle.com/datasets/hche8927/synthevox3d/data.
