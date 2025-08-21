---
{
    "name": "HES-HDR",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "FLIR Chameleon 3"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Frame Reconstruction"
    ],
    "description": "Frame/Event fusion (HDR and high temporal imaging)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1rAko_TSqdBs0Hg9XLZLISfGiMtsx_PrE/view?usp=share_link",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 23.58,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Hybrid High Dynamic Range Imaging fusing Neuromorphic and Conventional Images",
        "doi": "10.1109/TPAMI.2022.3231334",
        "authors": [
            "Jin Han",
            "Yixin Yang",
            "Peiqi Duan",
            "Chu Zhou",
            "Lei Ma",
            "Chao Xu",
            "Tiejun Huang",
            "Imari Sato",
            "Boxin Shi"
        ],
        "abstract": "Reconstruction of high dynamic range image from a single low dynamic range image captured by a conventional RGB camera, which suffers from over- or under-exposure, is an ill-posed problem. In contrast, recent neuromorphic cameras like event camera and spike camera can record high dynamic range scenes in the form of intensity maps, but with much lower spatial resolution and no color information. In this article, we propose a hybrid imaging system (denoted as NeurImg) that captures and fuses the visual information from a neuromorphic camera and ordinary images from an RGB camera to reconstruct high-quality high dynamic range images and videos. The proposed NeurImg-HDR+ network consists of specially designed modules, which bridges the domain gaps on resolution, dynamic range, and color representation between two types of sensors and images to reconstruct high-resolution, high dynamic range images and videos. We capture a test dataset of hybrid signals on various HDR scenes using the hybrid camera, and analyze the advantages of the proposed fusing strategy by comparing it to state-of-the-art inverse tone mapping methods and merging two low dynamic range images approaches. Quantitative and qualitative experiments on both synthetic data and real-world scenarios demonstrate the effectiveness of the proposed hybrid high dynamic range imaging system. Code and dataset can be found at: https://github.com/hjynwa/NeurImg-HDR",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 26,
            "updated": "2025-06-25T15:20:50.010132"
        },
        {
            "source": "scholar",
            "count": 34,
            "updated": "2025-06-25T15:20:48.942652"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10036136"
        },
        {
            "type": "github_page",
            "url": "https://github.com/hjynwa/NeurImg-HDR"
        }
    ],
    "full_name": "Hybrid Event & Spike HDR dataset",
    "additional_metadata": {
        "num_recordings": "20",
        "stereo": false
    },
    "bibtex": {
        "pages": "8553--8565",
        "year": 2023,
        "month": "jul",
        "author": "Han, Jin and Yang, Yixin and Duan, Peiqi and Zhou, Chu and Ma, Lei and Xu, Chao and Huang, Tiejun and Sato, Imari and Shi, Boxin",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-10-27",
        "number": "7",
        "language": "en",
        "doi": "10.1109/TPAMI.2022.3231334",
        "url": "https://ieeexplore.ieee.org/document/10036136/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "45",
        "title": "Hybrid {High} {Dynamic} {Range} {Imaging} fusing {Neuromorphic} and {Conventional} {Images}",
        "type": "article",
        "key": "han_hybrid_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1201/9781315119526",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1174429.1174489",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v35i2.16181",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00250",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.89",
            "source": "crossref"
        },
        {
            "doi": "10.1145/258734.258884",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3113344",
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
            "doi": "10.5555/2969033.2969125",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.1603.08155",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3072959.3073609",
            "source": "crossref"
        },
        {
            "doi": "10.1111/cgf.13630",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2508363.2508402",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2006.312892",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.image.2013.08.018",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01267-0_11",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01216-8_37",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.2987133",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2016.2642790",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00172",
            "source": "crossref"
        },
        {
            "doi": "10.1109/PCS50896.2021.9477471",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1618452.1618506",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00145",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3096985",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.JEI.24.1.010501",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.image.2015.04.009",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2000.855857",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2014.2361338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2008.4541871",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58589-1_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3386569.3392403",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.207",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2010324.1964936",
            "source": "crossref"
        },
        {
            "doi": "10.2312/EGWR/EGSR07/321-326",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00050",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3123266.3123363",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2015.7168378",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01182",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.485",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00206",
            "source": "crossref"
        },
        {
            "title": "Understanding the difficulty of training deep feedforward neural networks",
            "source": "crossref"
        },
        {
            "title": "1000\u00d7 faster camera and machine vision with ordinary devices",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "On being \u2018undigital\u2019 with digital cameras: Extending dynamic range by combining differently exposed pictures",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "Attention-gated networks for improving ultrasound scan plane detection",
            "source": "crossref"
        },
        {
            "title": "Very deep convolutional networks for large-scale image recognition",
            "source": "crossref"
        },
        {
            "title": "UnModNet: Learning to unwrap a modulo image for high dynamic range imaging",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 20 sequences, 10 from the DAVIS346 sensor and 10 from the Vidar sensor.
