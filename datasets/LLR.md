---
{
    "name": "LLR",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Custom Simulator"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Low Light Reconstruction"
    ],
    "task": "Low light reconstruction",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1SMWIWEk3_PGrIymtCLupKQ?pwd=95gi",
                "format": "Unknown",
                "available": true
            }
        ],
        "size_gb": 48.36,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Learning to\u00a0Robustly Reconstruct Dynamic Scenes from\u00a0Low-Light Spike Streams",
        "doi": "10.1007/978-3-031-72643-9_6",
        "authors": [
            "Liwen Hu",
            "Ziluo Ding",
            "Mianzhi Liu",
            "Lei Ma",
            "Tiejun Huang"
        ],
        "abstract": "Spike camera with high temporal resolution can fire continuous binary spike streams to record per-pixel light intensity. By using reconstruction methods, the scene details in high-speed scenes can be restored from spike streams. However, existing methods struggle to perform well in low-light environments due to insufficient information in spike streams. To this end, we propose a bidirectional recurrent-based reconstruction framework to better handle such extreme conditions. In more detail, a light-robust representation (LR-Rep) is designed to aggregate temporal information in spike streams. Moreover, a fusion module is used to extract temporal features. Besides, we synthesize a reconstruction dataset for high-speed low-light scenes where light sources are carefully designed to be consistent with reality. The experiment shows the superiority of our method. Importantly, our method also generalizes well to real spike streams. Our project is: https://github.com/Acnext/Learning-to-Robustly-Reconstruct-Dynamic-Scenes-from-Low-light-Spike-Streams/.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-13T13:47:49.327945"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2401.10461"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-72643-9_6"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Acnext/Learning-to-Robustly-Reconstruct-Dynamic-Scenes-from-Low-light-Spike-Streams/"
        }
    ],
    "full_name": "Low Light Reconstruction (LLR)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "88--105",
        "year": 2025,
        "editor": "Leonardis, Ale\u0161 and Ricci, Elisa and Roth, Stefan and Russakovsky, Olga and Sattler, Torsten and Varol, G\u00fcl",
        "author": "Hu, Liwen and Ding, Ziluo and Liu, Mianzhi and Ma, Lei and Huang, Tiejun",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer {Vision} \u2013 {ECCV} 2024",
        "doi": "10.1007/978-3-031-72643-9_6",
        "isbn": "978-3-031-72643-9",
        "title": "Learning to {Robustly} {Reconstruct} {Dynamic} {Scenes} from {Low}-{Light} {Spike} {Streams}",
        "address": "Cham",
        "type": "inproceedings",
        "key": "hu_learning_2025"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01149",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2022/396",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5537149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.02349",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v38i2.27924",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2024.3403050",
            "source": "crossref"
        },
        {
            "doi": "10.1109/VCIP56404.2022.10008850",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.02131",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00185",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME57554.2024.10688014",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01732",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eng.2022.01.012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3051462",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3474085.3479237",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3126387",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v38i1.27817",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i1.25079",
            "source": "crossref"
        },
        {
            "doi": "10.3390/electronics12143089",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i3.25364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00247",
            "source": "crossref"
        },
        {
            "doi": "10.1108/eb026702",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00166",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00954",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP49357.2023.10094700",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i1.25085",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS45731.2020.9181055",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01182",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS48785.2022.9937811",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00629",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2019.00248",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3146140",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00240",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3581783.3611829",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure