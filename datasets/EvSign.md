---
{
    "name": "EvSign",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Sign Language",
        "Hand Pose Detection",
        "Stereo"
    ],
    "description": "Sign Language Recognition Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive",
            "Baidu"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Both sharing platforms contain a single zip comprising the entire dataset.",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1VVm4od1cpWlDtyWcus5aQgo3_yPJk_Lu/view?usp=sharing",
                "format": "aedat",
                "available": true
            },
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/share/init?surl=Z6Fn11Lx3FKs8hXHKAe_rQ&pwd=3yif",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 23.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EvSign: Sign Language Recognition and\u00a0Translation with\u00a0Streaming Events",
        "doi": "10.1007/978-3-031-72652-1_20",
        "authors": [
            "Pengyu Zhang",
            "Hao Yin",
            "Zeren Wang",
            "Wenyue Chen",
            "Shengming Li",
            "Dong Wang",
            "Huchuan Lu",
            "Xu Jia"
        ],
        "abstract": "Sign language is one of the most effective communication tools for people with hearing difficulties. Most existing works focus on improving the performance of sign language tasks on RGB videos, which may suffer from degraded recording conditions, such as fast movement of hands with motion blur and textured signer\u2019s appearance. The bio-inspired event camera, which asynchronously captures brightness change with high speed, could naturally perceive dynamic hand movements, providing rich manual clues for sign language tasks. In this work, we aim at exploring the potential of event camera in continuous sign language recognition (CSLR) and sign language translation (SLT). To promote the research, we first collect an event-based benchmark EvSign for those tasks with both gloss and spoken language annotations. EvSign dataset offers a substantial amount of high-quality event streams and an extensive vocabulary of glosses and words, thereby facilitating the development of sign language tasks. In addition, we propose an efficient transformer-based framework for event-based SLR and SLT tasks, which fully leverages the advantages of streaming events. The sparse backbone is employed to extract visual features from sparse events. Then, the temporal coherence is effectively utilized through the proposed local token fusion and gloss-aware temporal aggregation modules. Extensive experimental results are reported on both simulated (PHOENIX14T) and EvSign datasets. Our method performs favorably against existing state-of-the-art approaches with only 0.34% computational cost (0.84G FLOPS per video) and 44.2% network parameters. The project is available at https://zhang-pengyu.github.io/EVSign.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-09-14T22:37:25.276366"
        },
        {
            "source": "scholar",
            "count": 9,
            "updated": "2025-09-14T22:37:26.115426"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-72652-1_20"
        },
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2407.12593"
        },
        {
            "type": "project_page",
            "url": "https://zhang-pengyu.github.io/EVSign/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_subjects": "9"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00812",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00506",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00276",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1143844.1143891",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01037",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01111",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01090",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v35i2.16247",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19833-5_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00249",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.11903",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01890",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2911077",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.412",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.364",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.136",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2016.08.132",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093512",
            "source": "crossref"
        },
        {
            "doi": "10.3115/1218955.1219032",
            "source": "crossref"
        },
        {
            "doi": "10.18653/v1/2023.acl-long.722",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00986",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01134",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58517-4_11",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2005.112",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.procs.2021.08.216",
            "source": "crossref"
        },
        {
            "doi": "10.3115/1073083.1073135",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP43922.2022.9746971",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00429",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2023.3289111",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10044-021-01011-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG47880.2020.00069",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2897735",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-86137-7_1",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00331",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01280",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICARCV.2016.7838572",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00137",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2019.00223",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00507",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "335\u2013351",
        "month": "oct",
        "year": 2024,
        "author": "Zhang, Pengyu and Yin, Hao and Wang, Zeren and Chen, Wenyue and Li, Shengming and Wang, Dong and Lu, Huchuan and Jia, Xu",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer Vision \u2013 ECCV 2024",
        "doi": "10.1007/978-3-031-72652-1_20",
        "url": "http://dx.doi.org/10.1007/978-3-031-72652-1_20",
        "issn": "1611-3349",
        "isbn": "9783031726521",
        "title": "EvSign: Sign Language Recognition and\u00a0Translation with\u00a0Streaming Events",
        "type": "book",
        "key": "Zhang_2024"
    }
}
---

# Dataset Description
The dataset was captured using  a DVXplorer-S-Duo camera from iniVation, which is a binocular camera capable of simultaneously capturing both event and RGB data. The spatial size of event stream is 640 × 480. Additional RGB data was recorded for visualization and annotation and had a resoution of 480 × 320 at 25 FPS.