---
{
    "name": "EventNeRF",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer",
        "V2E"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "3D Reconstruction"
    ],
    "description": "3D reconstruction",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Baidu",
            "OneDrive"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://hkustgz-my.sharepoint.com/:u:/g/personal/junhaohe_hkust-gz_edu_cn/EY__SmcUSbdFs13sb2h8svYBXYOCDd0OVnSWV-WLfvFLmA?e=GkVjhd",
                "format": "HDF5",
                "available": true
            },
            {
                "name": "OneDrive",
                "url": "https://hkustgz-my.sharepoint.com/:u:/g/personal/junhaohe_hkust-gz_edu_cn/EY__SmcUSbdFs13sb2h8svYBXYOCDd0OVnSWV-WLfvFLmA?e=GkVjhd",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 35.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Physical Priors Augmented Event-Based 3D Reconstruction",
        "doi": "10.1109/icra57147.2024.10611153",
        "authors": [
            "Jiaxu Wang",
            "Junhao He",
            "Ziyi Zhang",
            "Renjing Xu"
        ],
        "abstract": "3D neural implicit representations play a significant component in many robotic applications. However, reconstructing neural radiance fields (NeRF) from realistic event data remains a challenge due to the sparsities and the lack of information when only event streams are available. In this paper, we utilize motion, geometry, and density priors behind event data to impose strong physical constraints to augment NeRF training. The proposed novel pipeline can directly benefit from those priors to reconstruct 3D scenes without additional inputs. Moreover, we present a novel density-guided patch-based sampling strategy for robust and efficient learning, which not only accelerates training procedures but also conduces to expressions of local geometries. More importantly, we establish the first large dataset for event-based 3D reconstruction, which contains 101 objects with various materials and geometries, along with the groundtruth of images and depth maps for all camera viewpoints, which significantly facilitates other research in the related fields. The code and dataset will be publicly available at https://github.com/Mercerai/PAEv3d.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 4,
            "updated": "2025-06-09T08:33:05.064135"
        },
        {
            "source": "scholar",
            "count": 12,
            "updated": "2025-06-09T08:33:04.234691"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2401.17121"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10611153"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Mercerai/PAEv3d"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "NERF",
        "conversion_algorithm": "v2e",
        "num_classes": "101",
        "stereo": false
    },
    "bibtex": {
        "pages": "16810--16817",
        "year": 2024,
        "month": "may",
        "author": "Wang, Jiaxu and He, Junhao and Zhang, Ziyi and Xu, Renjing",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE} {International} {Conference} on {Robotics} and {Automation} ({ICRA})",
        "urldate": "2024-11-30",
        "language": "en",
        "doi": "10.1109/ICRA57147.2024.10611153",
        "url": "https://ieeexplore.ieee.org/document/10611153/",
        "isbn": "9798350384574",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Physical {Priors} {Augmented} {Event}-{Based} {3D} {Reconstruction}",
        "address": "Yokohama, Japan",
        "type": "inproceedings",
        "key": "Wang2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICRA48891.2023.10161544",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2014.00048",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10160950",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2022.3144229",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10160842",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ECMR50962.2021.9568811",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV56688.2023.00090",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-24028-7_62",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3212668",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3596711.3596759",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10161117",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10161420",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3333002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00209",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3007759",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3306346.3323020",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10160782",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3503250",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00356",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2011.2180025",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3130800.3130883",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00483",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00254",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10161012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00807",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3306346.3323035",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10161482",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01277",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01252-6_4",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_17",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19824-3_7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00502",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01717",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3197517.3201323",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01246-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3062252",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10161570",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3dv62453.2024.00096",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9811805",
            "source": "crossref"
        },
        {
            "title": "Learning representations and generative models for 3d point clouds",
            "source": "crossref"
        },
        {
            "title": "V2e: From video frames to realistic dvs event camera streams",
            "source": "crossref"
        },
        {
            "title": "Learning to infer implicit surfaces without 3d supervision",
            "source": "crossref"
        },
        {
            "title": "Pointnet: Deep learning on point sets for 3d classification and segmentation",
            "source": "crossref"
        },
        {
            "title": "Switch-nerf: Learning scene decomposition with mixture of experts for large-scale neural radiance fields",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Simulated data is a conversion of the NERF using the v2e
- Real dataset contains 101 objects
