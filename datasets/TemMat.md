---
{
    "name": "TemMAt",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Frame Reconstruction"
    ],
    "task": "Image Reconstruction from events",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1BVNOG_lgtLfnyypZ72T6cTRAgM-mpp2M/view?usp=sharing",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 1.05,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Temporal-Mapping Photography for\u00a0Event Cameras",
        "doi": "10.1007/978-3-031-73001-6_4",
        "authors": [
            "Yuhan Bao",
            "Lei Sun",
            "Yuqin Ma",
            "Kaiwei Wang"
        ],
        "abstract": "Event cameras, or Dynamic Vision Sensors (DVS) are novel neuromorphic sensors that capture brightness changes as a continuous stream of ``events'' rather than traditional intensity frames. Converting sparse events to dense intensity frames faithfully has long been an ill-posed problem. Previous methods have primarily focused on converting events to video in dynamic scenes or with a moving camera. In this paper, for the first time, we realize events to dense intensity image conversion using a stationary event camera in static scenes. Different from traditional methods that mainly rely on event integration, the proposed Event-Based Temporal Mapping Photography (EvTemMap) measures the time of event emitting for each pixel. Then, the resulting Temporal Matrix is converted to an intensity frame with a temporal mapping neural network. At the hardware level, the proposed EvTemMap is implemented by combining a transmittance adjustment device with a DVS, named Adjustable Transmittance Dynamic Vision Sensor. Additionally, we collected TemMat dataset under various conditions including low-light and high dynamic range scenes. The experimental results showcase the high dynamic range, fine-grained details, and high-grayscale-resolution of the proposed EvTemMap, as well as the enhanced performance on downstream computer vision tasks compared to other methods. The code and TemMat dataset will be made publicly available.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-13T11:51:12.211098"
        },
        {
            "source": "scholar",
            "count": 8,
            "updated": "2025-06-13T11:51:10.335527"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2403.06443"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-73001-6_4"
        },
        {
            "type": "github_page",
            "url": "https://github.com/YuHanBaozju/EvTemMap"
        }
    ],
    "full_name": "",
    "bibtex": {
        "pages": "55--72",
        "note": "Series Title: Lecture Notes in Computer Science",
        "doi": "10.1007/978-3-031-73001-6_4",
        "year": 2025,
        "editor": "Leonardis, Ale\u0161 and Ricci, Elisa and Roth, Stefan and Russakovsky, Olga and Sattler, Torsten and Varol, G\u00fcl",
        "author": "Bao, Yuhan and Sun, Lei and Ma, Yuqin and Wang, Kaiwei",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer {Vision} \u2013 {ECCV} 2024",
        "urldate": "2024-12-15",
        "language": "en",
        "url": "https://link.springer.com/10.1007/978-3-031-73001-6_4",
        "isbn": "978-3-031-73000-9 978-3-031-73001-6",
        "volume": "15113",
        "title": "Temporal-{Mapping} {Photography} for {Event} {Cameras}",
        "address": "Cham",
        "type": "incollection",
        "key": "leonardis_temporal-mapping_2025"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPRW.2017.150",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSP.2006.881199",
            "source": "crossref"
        },
        {
            "doi": "10.1364/OE.489717",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3052070",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-92659-5_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP40776.2020.9053765",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.316",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3130800.3130816",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3130800.3130834",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.632",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46475-6_43",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3072959.3073609",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11831-021-09540-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2019.8803582",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2020.3005022",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW54120.2021.00210",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2017.151",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00057",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2016.2631888",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW56347.2022.00070",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3064433",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01730",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3123686",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW54120.2021.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01216-8_8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00185",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2019.00012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00475",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58523-5_39",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
